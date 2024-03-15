// Home.js
import React, { useEffect, useState } from "react";
import './Home.css'
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import CandidateList from "./CandidateList";
import axios from "axios";

const Home = () => {

  const [list, setList] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');

    if(!user){
      alert("First You have to login")
      navigate('/')
    }

    const fetchData = async () => {
        try {
            const response = await axios.get('https://60d5a2c2943aa60017768b01.mockapi.io/candidate');
            setList(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();

    if (location.state && location.state.updateList) {
      fetchData();
  }
}, [location.state]);


  return (
    <div style={{ display: "flex" }}>
      <div className="left-container">
        <CandidateList list={list}/>
      </div>
      <div className="right-container">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
