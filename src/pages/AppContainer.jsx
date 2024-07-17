import React from "react";
import { Routes, Route } from "react-router-dom";
import Tables from "../components/Tables.tsx";
import Charts from "../components/Charts";
import Calibration from "../components/Calibration";

import Menu from "../components/menu";
import MainHeader from "./../components/MainHeader";

import { useState, useEffect } from "react";
import { db } from "../firebase";
import { onValue, ref } from "firebase/database";
import uuid from "react-uuid";
const AppContainer = () => {
  const [theData, setTheData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const query = ref(db, "measures");

      onValue(query, (snapshot) => {
        const data = snapshot.val();

        if (snapshot.exists()) {
          // Object.values(data).map((project) => {
          //   // setProjects((projects) => [...projects, project])
          //   // console.log(project);
          // });
          var time = new Date();
          console.log("data");

          // setTheData(theData => [...theData,
          //   {id : uuid(), time: time, data:data } ,
          // ])
          data.id = uuid();
          data.date = time;
          setTheData((theData) => [...theData, data]);

        }
      });
      console.log(
        "This will run every 6 seconds and wanna get it to 15 minute !"
      );
    }, 60000);
    const resetData = setInterval(() => {
      console.log("resetData");
    }, 1000);
    return () => clearInterval(interval, resetData);
  }, []);

  return (
    <>
      <Menu />
      <div className="full-width">
        <MainHeader />
        <div className="appContainer">
          <Routes>
            <Route path="/" index element={<Tables data={theData} />} />
            <Route path="/charts" element={<Charts data={theData} />} />
            <Route path="/Calibration" element={<Calibration />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default AppContainer;
