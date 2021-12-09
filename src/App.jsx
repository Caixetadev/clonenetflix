import { useEffect, useState } from "react";
import "./App.css";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";

function App() {
  const [moveList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    };

    loadAll();
  }, []);

  return (
    <div className="page">
      <section className="lists">
        {moveList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.item} />
        ))}
      </section>
    </div>
  );
}

export default App;
