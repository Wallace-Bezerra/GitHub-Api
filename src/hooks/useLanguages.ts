import { useState, useContext, useEffect, useRef } from "react";
import { UserContext } from "../context/UserContext";

export const useLanguages = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [languages, setLanguages] = useState<any>([]);
  // const [page, setPage] = useState(1);
  const lastPage = useRef<number>(1);
  const page = useRef<number>(1);
  const { UserData } = useContext(UserContext);
  let languagesTest: any[] = [];

  useEffect(() => {
    console.log("Renderizou");
    FetchDataRepositories();
  }, []);

  const FetchDataRepositories = async () => {
    do {
      try {
        const result = await fetch(
          `https://api.github.com/users/${UserData.login}/repos?&page=${page.current}&sort=pushed&direction=asc}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_SOME_KEY} `,
            },
          }
        );
        result.headers
          .get("link")
          ?.split(",")
          .forEach((i) => {
            if (i.includes("last")) {
              const urlPage = i.split(";")[0].replace("<", "").replace(">", "");
              lastPage.current = Number(
                new URL(urlPage).searchParams.get("page")
              );
            }
          });
        const dataResponse = await result.json();
        const urlLanguagesData = dataResponse.map((repo: any) => {
          const getFetch = async () => {
            const languages = await fetch(
              `https://api.github.com/repos/${UserData.login}/${repo.name}/languages`,
              {
                method: "GET",
                headers: {
                  Authorization: `Bearer ${import.meta.env.VITE_SOME_KEY} `,
                },
              }
            );
            const result = await languages.json();
            return result;
          };
          return getFetch();
        });

        const responseLanguages = await Promise.all(urlLanguagesData);
        const responseLanguagesFilter = responseLanguages.filter(
          (item: any) => {
            return Object.keys(item).length;
          }
        );
        languagesTest.push(...responseLanguagesFilter);
      } catch (error) {
        console.log(error);
      }
      page.current++;
    } while (page.current <= lastPage.current);

    let languageObject: any = {};
    languagesTest.forEach((item) => {
      Object.entries(item).forEach((languageItem) => {
        console.log(languageItem[0]);
        if (!languageObject[languageItem[0]]) {
          languageObject[languageItem[0]] = languageItem[1];
        } else {
          languageObject[languageItem[0]] += languageItem[1];
        }
      });
    });
    let languageArray = Object.entries(languageObject)
      .map((item) => {
        return {
          language: item[0],
          value: Number(item[1]),
        };
      })
      .sort((a, b) => {
        return b.value - a.value;
      })
      .filter((filter, index) => {
        return index < 5;
      });
    const totalLanguage = languageArray.reduce((acc, curr) => {
      return (acc += curr.value);
    }, 0);
    setLanguages([languageArray, totalLanguage]);
  };
  const GetStatics = () => {};

  return languages;
};
