import React, { useState, useEffect } from "react";
import styles from "./Footer.module.scss";
import { apiGetHeThongRap } from "../../apis/cinemaAPI";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

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
    <div style={{ background: "black", color: "white" }}>
      <div className={styles.container}>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div style={{ justifyItems: "left" }}>
            <a href="#">
              <img
                src="https://yt3.googleusercontent.com/ytc/AGIKgqPAhQMpB5UqCVLmLwgYaeSVFHYDtlCKLSfWp4Hu=s900-c-k-c0x00ffffff-no-rj"
                alt=""
                width={70}
              />
            </a>
          </div>
          <div>
            <p>Partner</p>
            {heThongRap.map((heThong, index) => {
              return (
                <Box sx={{ flexGrow: 1 }}>
                  <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                  >
                    {Array.from(Array(1)).map((_, index) => (
                      <Grid item xs={2} sm={4} md={4} key={index}>
                        {
                          <img
                            src={heThong.logo}
                            alt=""
                            width={50}
                            height={50}
                          />
                        }
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              );
            })}
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
        <div>
          <div>
            <span>2023 All right</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
