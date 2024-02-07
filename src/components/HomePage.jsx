import FilmsRow from "./FilmsRow";
import TitleGrid from "./TitleGrid";

const HomePage = () => (
  <>
    <TitleGrid />;
    <FilmsRow saga="Transformers" />
    <FilmsRow saga="Harry Potter" />
    <FilmsRow saga="Fast and Furious" />
  </>
);

export default HomePage;
