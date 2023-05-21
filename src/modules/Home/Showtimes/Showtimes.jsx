import React, { useState, useEffect } from "react";
import styles from "./Showtimes.module.scss";
import {
  apiGetMovies,
} from "../../../apis/movieAPI";
import { Tabs } from "antd";
import moment from "moment";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MovieItem from "./MovieItem/MovieItem";

function Showtimes() {
  const [movies, setMovies] = useState([]);

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = movies.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(movies.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % movies.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    (async () => {
      try {
        const data = await apiGetMovies()
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className={styles.wrapShowing} id="Showing">
      <div className="container">
        <div className={styles.showing}>
        <MovieItem currentItems={currentItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName={styles.pagination}
          pageLinkClassName={styles.page__num}
          previousLinkClassName={styles.page__num}
          nextLinkClassName={styles.page__num}
          activeLinkClassName={styles.paginate__active}
        />
        </div>
      </div>
    </div>
  );
};


export default Showtimes;
