import { useState, useEffect } from "react";
import Seo from "../components/Seo";
import css from "styled-jsx/css";

const API_KEY = "5f38ee54623bb78f51af4cffe1583cb1";

const style = css`
  .movieContainer {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 20px;
  }
  .movieCard {
    width: 100%;
    overflow: hidden;
  }
  .movieImgWrapper {
    width: 100%;
    border-radius: 20px;
  }
  .movieImg {
    width: 100%;
  }

  @media screen and (max-width: 1200px) {
    .movieContainer {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default function Home() {
  const [movies, setMovies] = useState();
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })();
  }, []);
  return (
    <>
      <Seo title='Home' />
      {!movies && <h2>Loading....</h2>}
      <div className='movieContainer'>
        {movies?.map((movie) => (
          <div className='movieCard' key={movie.id}>
            <div className='movieImgWrapper'>
              <img
                className='movieImg'
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
            </div>
            <h2>{movie.original_title}</h2>
          </div>
        ))}
      </div>
      <style jsx>{style}</style>
    </>
  );
}
