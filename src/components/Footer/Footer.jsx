import React, { useState, useEffect } from "react";
import styles from "./Footer.module.scss";
import { apiGetHeThongRap } from "../../apis/cinemaAPI";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  const [heThongRap, setHeThongRap] = useState([]);

  const getHeThongRap = async () => {
    try {
      const data = await apiGetHeThongRap();
      console.log(data);
      setHeThongRap(data.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHeThongRap();
  }, []);
  return (
    <div id="footer" style={{ background: "black", color: "white" }}>
      <div className={styles.container}>
        <div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ justifyItems: "left" }}>
              <a href="#">
                <img
                  src="https://yt3.googleusercontent.com/ytc/AGIKgqPAhQMpB5UqCVLmLwgYaeSVFHYDtlCKLSfWp4Hu=s900-c-k-c0x00ffffff-no-rj"
                  alt=""
                  width={70}
                  style={{ marginTop: "80%" }}
                />
              </a>
            </div>
            <div className={styles.footer}>
              <p style={{ textAlign: "center" }}>Partner</p>
              <Container>
                <Row style={{ textAlign: "center", marginBottom: "10px" }}>
                  {heThongRap.map((heThong, index) => {
                    return (
                      <Col md="4" style={{ marginBottom: "10px" }}>
                        {
                          <img
                            src={heThong.logo}
                            alt=""
                            width={50}
                            height={50}
                          />
                        }
                      </Col>
                    );
                  })}
                </Row>
              </Container>
            </div>
            <div>
              <p>Moible App</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "20px",
                }}
              >
                <div>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/1200px-Apple_logo_grey.svg.png"
                    alt=""
                    width={25}
                  />
                </div>
                <div>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/872px-Android_robot.svg.png"
                    alt=""
                    width={25}
                  />
                </div>
              </div>
            </div>
            <div>
              <p>Social Media</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "20px",
                }}
              >
                <div>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/2048px-Facebook_icon.svg.png"
                    alt=""
                    width={25}
                  />
                </div>
                <div>
                  <img
                    src="https://classic.vn/wp-content/uploads/2022/07/zalo-icon.png"
                    alt=""
                    width={25}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0 100px 0 100px",
          }}
        >
          <div style={{ marginTop: "5%" }}>
            <span>2023 All right</span>
          </div>
          <div style={{ width: "70%" }}>
            <p>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</p>
            <p>
              Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
              Chí Minh, Việt Nam
            </p>
            <p>
              Giấy chứng nhận đăng ký kinh doanh số: 0101659783, đăng ký thay
              đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư
              Thành phố Hồ Chí Minh cấp
            </p>
            <p>Số Điện Thoại (Hotline): 1900 545 436</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
