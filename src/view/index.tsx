import { type FC } from "react";
import CardsGrid from "./layout/mian/widgets/CardsGrid";
import Header from "./layout/header";

interface MainViewProps {}

const MainView: FC<MainViewProps> = () => {
  return (
    <>
      <Header />
      <CardsGrid />
    </>
  );
};

export default MainView;
