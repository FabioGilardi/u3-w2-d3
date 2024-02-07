import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import CustomNavbar from "./components/CustomNavbar";
import TitleGrid from "./components/TitleGrid";
import FilmsRow from "./components/FilmsRow";
import CustomFooter from "./components/CustomFooter";
import UserMain from "./components/UserMain";
import MainSettings from "./components/MainSettings";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import TvShows from "./components/TvShows";
import NotFound from "./components/NotFound";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div className="h-100 d-flex flex-column">
      <BrowserRouter>
        {/* ----------------------------------- Inizio Homepage --------------------------------------------------------- */}
        <header>
          <CustomNavbar />
        </header>
        <main className="bg-css flex-grow-1">
          <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<TvShows />} path="/tv-shows" />
            <Route element={<MovieDetails />} path="movie-details/:movieId" />
            <Route element={<NotFound />} path="*" />
          </Routes>
        </main>
        <CustomFooter />
        {/* ----------------------------------- Fine Homepage --------------------------------------------------------- */}

        {/* ----------------------------------- Inizio AccounPage --------------------------------------------------------- */}
        {/* <header>
        <CustomNavbar />
      </header>
      <main className="bg-css">
        <UserMain />
      </main>
      <CustomFooter /> */}
        {/* ----------------------------------- Fine AccounPage --------------------------------------------------------- */}
        {/* ----------------------------------- Inizio Settings Page --------------------------------------------------------- */}
        {/* <header>
        <CustomNavbar />
      </header>
      <main>
        <MainSettings />
      </main>
      <CustomFooter /> */}
        {/* ----------------------------------- Fine Settings Page --------------------------------------------------------- */}
      </BrowserRouter>
    </div>
  );
}

export default App;
