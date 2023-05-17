import React, { useState, useEffect } from "react";
import styles from "./Sowtimes.module.scss";
import {
  apiGetHeThongRap,
  apiGetCumRap,
  apiGetLichChieuRap,
} from "../../../apis/cinemaAPI";
import { Tabs, Tab } from "react-bootstrap";

function Showtimes() {
  const [heThongRap, setHeThongRap] = useState([]);
  const [cumRap, setCumRap] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tabPosition, setTabPosition] = useState("left");

  const getHeThongRap = async () => {
    try {
      const data = await apiGetHeThongRap();
      console.log(data);
      setHeThongRap(data.content);
    } catch (error) {
      console.log(error);
    }
  };

  const getCumRap = async () => {
    try {
      const data = await apiGetCumRap();
      console.log(data);
      setCumRap(data.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHeThongRap();
  }, []);

  useEffect(() => {
    getCumRap();
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isModalOpen]);

  const handleChangeTabPosition = (value, e) => {
    setTabPosition(value);
  };

  return (
    <div id="showtime">
      <Tabs
        defaultActiveKey="1"
        id="tabs-with-dropdown"
        position={tabPosition}
        onSelect={(value, e) => handleChangeTabPosition(value, e)}
      >
        {heThongRap.map((heThong, index) => {
          return (
            <Tab
              key={index}
              eventKey={(index + 1).toString()}
              title={<img src={heThong.logo} alt="" width={50} height={50} />}
            >
              <Tabs>
                {cumRap.map((cum, subIndex) => {
                  return (
                    <Tab
                      key={subIndex}
                      eventKey={(index + 1).toString() + subIndex}
                      title={
                        <img src={cum.hinhAnh} alt="" width={50} height={50} />
                      }
                    >
                      {cum.tenCumRap}
                    </Tab>
                  );
                })}
              </Tabs>
            </Tab>
          );
        })}
      </Tabs>
    </div>
  );
}

export default Showtimes;
