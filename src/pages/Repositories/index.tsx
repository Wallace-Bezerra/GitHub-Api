import { useContext, useEffect, memo, useState, useRef } from "react";
import { Filter } from "../../components/Filter";
import { CardRepository } from "./components/CardRepository";
import { RepositoriesContainer, Wrapper } from "./styles";
import { UserContext } from "../../context/UserContext";
import { NotFind } from "../../components/NotFind";
import { useFetchData } from "../../hooks/useFetchData";

const Repositories = () => {
  const elementLast = useRef<HTMLDivElement | null>(null);
  const [isNotFind, setIsNotFind] = useState(false);
  const { UserData, setRepositories } = useContext(UserContext);
  const { FetchData, isLoading, lastPage, page, setPage } = useFetchData();

  let observer: IntersectionObserver;
  useEffect(() => {
    // console.log(lastPage.current, "lastPage");
    // console.log("page", page);
    if (page <= lastPage.current) {
      FetchData();
    } else {
      console.log("Não há mais repositórios");
      setIsNotFind(() => true);
    }
    return () => {
      if (page >= 1 && window.location.pathname === "/user/repositories") {
        return;
      }
      setRepositories([]);
    };
  }, [UserData, page]);

  const callback: IntersectionObserverCallback = (entries) => {
    console.log(entries);
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("To vendooo");

        console.log(page, lastPage.current);
        // if (page <= lastPage.current!) {
        //   setPage((prev) => prev + 1);
        // }

        if (page < lastPage.current) {
          setPage((prev) => prev + 1);
        }
      }
    });
  };
  
  useEffect(() => {
    let options = {
      rootMargin: "-20px",
      threshold: 1.0,
    };

    observer = new IntersectionObserver(callback, options);
    console.log("element", elementLast.current);
    // observer.observe(document.querySelector<HTMLDivElement>(".last")!);
    elementLast.current = document.querySelector<HTMLDivElement>(".last");
    observer.observe(elementLast.current!);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* <div
        style={{
          color: "white",
          position: "absolute",
          top: "50px",
          left: "500px",
        }}
      >
        <div>Pagina atua{page}</div>
        <div>ultima pagina{lastPage.current}</div>
      </div> */}
      <Filter />
      <button
        style={{
          color: "black",
          position: "absolute",
          top: "50px",
          left: "200px",
        }}
        onClick={() => {
          if (page !== lastPage.current) {
            setPage((prev) => prev + 1);
          }
        }}
      >
        carregar mais
      </button>
      <Wrapper>
        <RepositoriesContainer>
          <CardRepository isLoading={isLoading} />
          {isNotFind && <NotFind />}
          <div className="last"></div>
        </RepositoriesContainer>
      </Wrapper>
    </>
  );
};

export default memo(Repositories);
