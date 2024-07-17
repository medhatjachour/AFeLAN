import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import logo from '../assets/imgs/default-small.svg'
import DataThresholdingOutlinedIcon from "@mui/icons-material/DataThresholdingOutlined";
import TableViewOutlinedIcon from "@mui/icons-material/TableViewOutlined";
import CompassCalibrationOutlinedIcon from "@mui/icons-material/CompassCalibrationOutlined";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Menu = () => {
  const [opened, setOpened] = useState(false);
  const openMenu = () => {
    setOpened(!opened);
    document.getElementById("menu-title").classList.toggle("closedMenu");
    document.getElementById("title").classList.toggle("none");
    document.getElementById("menu_item1").classList.toggle("none");
    document.getElementById("menu_item2").classList.toggle("none");
    document.getElementById("menu_item3").classList.toggle("none");
    document
      .getElementById("toggleMenuButton")
      .classList.toggle("closedButton");
    
    };
  return (
    <div className="menu-title openedMenu" id="menu-title">
      <button
        onClick={openMenu}
        className="toggleMenuButton openedButton"
        id="toggleMenuButton"
      >
        {opened ? (
          <KeyboardDoubleArrowRightIcon />
        ) : (
          <KeyboardDoubleArrowLeftIcon />
        )}
      </button>
       <h3><img src={logo} alt="logo" className="logo_img"/> <span id="title"> AFeLAN </span></h3>
      <div className="menu_routes">
        <ul>
          <li>
            <Link to="/">
              <TableViewOutlinedIcon />
              <span id="menu_item1">جداول البيانات</span>
            </Link>
          </li>
          <li>
            <Link to="/charts">
              <CompassCalibrationOutlinedIcon />
              <span id="menu_item2">الرسوم البيانية</span>
            </Link>
          </li>
          <li>
            <Link to="/Calibration">
              <DataThresholdingOutlinedIcon />
              <span id="menu_item3">Calibration</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
