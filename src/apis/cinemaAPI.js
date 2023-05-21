import axiosClient from "./axiosClient";

const theaterAPI = {
  getTheaterSystem: () => {
    return axiosClient.get("QuanLyRap/LayThongTinHeThongRap");
  },

  getDetailTheater: (maHeThongRap) => {
    return axiosClient.get("QuanLyRap/LayThongTinCumRapTheoHeThong", {
      params: {
        maHeThongRap: maHeThongRap,
      },
    });
  },

  getTheaterSchedule: () => {
    return axiosClient.get("QuanLyRap/LayThongTinLichChieuHeThongRap", {
      params: {
        maNhom: "GP14",
      },
    });
  },

  getMovieSchedule: (maPhim) => {
    return axiosClient.get("QuanLyRap/LayThongTinLichChieuPhim", {
      params: {
        MaPhim: maPhim,
      },
    });
  },
};

export default theaterAPI;
