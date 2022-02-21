import { useState, useEffect } from "react";
import Seo from "../components/Seo";
import css from "styled-jsx/css";

const style = css`
  .movieContainer {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 30px;
  }
  .movieCard {
    width: 100%;
    cursor: pointer;
  }
  .movieImgWrapper {
    width: 100%;
  }
  .movieImgWrapper:hover {
    width: 104%;
    margin-top: -6%;
    margin-left: -2%;
  }
  .movieImg {
    width: 100%;
    border-radius: 10px;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
  }
  .movieTitle {
    font-size: 20px;
    font-weight: 700;
    margin-top: 5px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 1200px) {
    .movieContainer {
      grid-template-columns: repeat(4, 1fr);
      column-gap: 20px;
    }
    .movieTitle {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 800px) {
    .movieContainer {
      grid-template-columns: repeat(3, 1fr);
      column-gap: 15px;
    }
  }
  @media screen and (max-width: 550px) {
    .movieContainer {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 15px;
    }
  }
  @media screen and (max-width: 400px) {
    .movieContainer {
      grid-template-columns: repeat(1, 1fr);
      column-gap: 15px;
    }
  }
`;


export default function Home() {
  const [movies, setMovies] = useState();
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch("/api/movies")).json();
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
            <h2 className='movieTitle'>{movie.original_title}</h2>
          </div>
        ))}
      </div>
      <style jsx>{style}</style>
    </>
  );
}
