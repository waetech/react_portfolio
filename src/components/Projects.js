import React, {useState, useEffect } from 'react';
import axios from 'axios';



const Projects = () => {

const KEY = 'f983c7f8-1fea-409f-8e58-2d086e50e28d';

const [videos, setVideos] = useState([]);
const [search, setSearch] = useState("");
const [query, setQuery] = useState('dogs');


    useEffect(() => {
        getVideos();
    },[]);

    const getVideos = async () => {
        const data = await fetch(``
            
        );
        const data = await Response.json();
        setVideos(data.hits);
        console.log(data.hits);
    };

    const updateSearch = e => {
        setSearch(e.target.value);
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
    };


  return (
    <div className="Projects">
   <h1>Projects page</h1>
      
    </div>
  );
}

export default Projects;
