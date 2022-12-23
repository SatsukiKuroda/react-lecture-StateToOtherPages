import { useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  // const location = useLocation();
  // console.log(location); // state: Array(100)

  const { state } = useLocation();
  // console.log(state);

  return (
    <div>
      <h1>Page1DetailAページです。</h1>
      <p>{state}</p>
    </div>
  );
};
