import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Movies.module.scss";
import ReactPlayer from "react-player";
import { apiGetMovies } from "../../../apis/movieAPI";
import { Modal } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Pagination, Grid } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css/grid";

SwiperCore.use([Pagination, Grid]);

function Movies() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const [trailer, setTrailer] = useState("");

  const getMovies = async () => {
    try {
      const data = await apiGetMovies();
      setMovies(data.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const handleOpenModal = (trailer) => {
    setOpen(true);
    setTrailer(trailer);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      grid={{
        rows: 2,
        fill: "row",
      }}
      pagination={{
        clickable: true,
      }}
      className={styles.mySwiper}
    >
      {movies.map((item) => (
        <SwiperSlide key={item.maPhim} className={styles.movieDetails}>
          <div>
            <div className={styles.bannerImg}>
              <img src={item.hinhAnh} />
            </div>
            <div>{item.tenPhim}</div>
            <div>{item.moTa}</div>
            <div style={{ display: "flex" }}>
              <button onClick={() => navigate(`/movies/${item.maPhim}`)}>
                Mua vé
              </button>
              <button onClick={() => handleOpenModal(item.trailer)}>
                Xem trailer
              </button>
            </div>
          </div>

          <Modal show={isOpen} onHide={handleCloseModal}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <ReactPlayer
                url={trailer}
                width="100%"
                height="100%"
                controls={true}
                playing={isOpen}
                onPause={handleCloseModal}
              />
            </Modal.Body>
          </Modal>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Movies;
