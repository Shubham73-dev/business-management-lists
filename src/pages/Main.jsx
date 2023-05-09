import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import axios from 'axios';
import { api_URL } from '../settings/client-config'
import SearchIcon from '@mui/icons-material/Search';
import BottomCard from '../components/BottomCard';

const Main = () => {
  const [lists, setLists] = useState([]);
  const URL = api_URL;

  const getData = async () => {
    try {
      const response = await axios.get(URL);
      const data = response.data.pageProps.studySubjects;
      setLists(data[0].child_subject);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(lists);
  }, [lists]);


  return (
    <>
      <section id="subject-lists">
        <div className="wrapper">
          <span>Study/ Subjects/ Business Management</span>
          <div className="topHeader">
            <div className="">
              <h1>Business Management</h1>
              <p>Get the best quality business management homework help and boost your academics grades and secure your bright shining future toward success.</p>
            </div>
            <div className="searchBox">
              <div className="search">
                <input type="search" name="" id="search" placeholder='Search for assignment samples & resources' />
                <SearchIcon />
              </div>
            </div>
          </div>

          <div className="cardsContainer">
            {lists.map((item, index) => (
              <Card key={index} data={item} />
            ))}
          </div>
          <section id="secondSection">
            <section className="second-section-wrapper">
              <BottomCard />
              <BottomCard />
              <BottomCard />
              <BottomCard />
              <BottomCard />
              <BottomCard />
              <BottomCard />
              <BottomCard />
              <BottomCard />
            </section>
          </section>
        </div>
      </section>
    </>
  );
};

export default Main;
