import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Showtimes from './Showtimes/Showtimes'
import MovieInfo from './MovieInfo/MovieInfo'
import Loading from '../../components/Loading/Loading'
import styles from './movie.module.scss';
import {
  apiGetMovieDetails
} from '../../apis/movieAPI';

function MovieDetails() {
  const { movieId } = useParams()

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    ( async () => {
      try {
        const data = await apiGetMovieDetails(movieId);
      } catch (error) {
        console.log(error)
      }
    })();
  },[movieId]);

  if(!movie){
    return <Loading />
  }

  return (
    <div className={styles.wrapMovie}>
      <MovieInfo movie={movie} />

      <Showtimes movieID={movieId}  />
    </div>
  );
}

export default MovieDetails