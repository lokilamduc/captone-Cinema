import axiosClient from "./axiosClient";

export const apiGetHeThongRap = async () => {
  const { data } = await axiosClient.get("/QuanLyRap/LayThongTinHeThongRap");
  return data;
};

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
