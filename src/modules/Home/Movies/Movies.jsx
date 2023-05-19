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
    <div className={styles.wrapper} id="phim">
      <Swiper
        slidesPerView={4}
        // spaceBetween={25}
        grid={{
          rows: 2,
          fill: "row",
        }}
        pagination={{
          clickable: true,
        }}
        className={styles.mySwiper}
      >
        {movies?.map((item) => (
          <SwiperSlide key={item.maPhim} className={styles.movieDetails}>
            <div>
              <img
                src={item.hinhAnh}
                className={styles.bannerImg}
                width="60%%"
                height="auto"
              />

              <div className={styles.tenPhim}>{item.tenPhim}</div>
              <div>
                <p className={styles.fontSize}>
                  {item.moTa.substring(0, 10)}...
                </p>
              </div>
              <div className={styles.button}>
                <button
                  onClick={() => navigate(`/movies/${item.maPhim}`)}
                  className={styles.buyTicket}
                >
                  Mua vé
                </button>
                <button onClick={() => handleOpenModal(item.trailer)}>
                  Xem trailer
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div style={{ position: "relative" }}>
        <Modal
          show={isOpen}
          onHide={handleCloseModal}
          backdropOpacity={0.7}
          style={{
            position: "absolute",
            top: "100%",
            width: "50%",
            height: "650px",
            zIndex: "10",
            marginLeft: "25%",
            marginRight: "25%",
            marginTop: "180px",
          }}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body
            style={{
              height: "500px",
            }}
          >
            <ReactPlayer
              className={styles.reactPlayer}
              url={trailer}
              width="100%"
              height="100%"
              controls={true}
              playing={isOpen}
              // onPause={handleCloseModal}
            />
          </Modal.Body>
        </Modal>
        <div
          className={`${isOpen ? styles.backgroundBlur : styles.nonBlur}`}
        ></div>
      </div>
    </div>
  );
}

export default Movies;
