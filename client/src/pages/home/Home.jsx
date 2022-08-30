import Navbar from "../../components/navbar/Navbar";
import AdminNavbar from "../../components/adminNavbar/AdminNavbar"
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { useState } from "react";

const Home = ({ type }) => {

  const slides = document.querySelectorAll('.slide')

  const clearActives = () => {
    slides.forEach(slide => slide.classList.remove('active'))
  }

  const setActive = (e) => {
    clearActives()
    e.target.classList.add('active')
  }

  slides.forEach(slide => {
    slide.addEventListener('click', setActive)
  })

  return (

    <div className="home">
      {/* {type === "Admin" && <Sidebar />} */}
      {/* {type === "Admin" && <NavSidebar />} */}
      <div className="AdminHomeContainer">
        {(type === "Admin") ? (<AdminNavbar />) : (<Navbar />)}
        {/* <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div> */}
        {/* <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div> */}

        {/* <div className="AdminListContainer">
          <div className="listTitle">Upcoming Events</div>
          <Table type="updates" />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
