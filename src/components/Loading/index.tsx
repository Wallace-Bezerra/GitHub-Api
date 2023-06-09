import loading from "../../assets/loading.svg";
import { Loader } from "./styles";
interface LoadingProps {
  width: number;
}
export const Loading = ({ width }: LoadingProps) => {
  return (
    <Loader>
      <img src={loading} width={width} />
    </Loader>
  );
};
