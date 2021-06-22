import React,{useState,useEffect} from 'react';
import CardList from '../components/CardList';
import './App.css';
import db from './firebase.config.js';
import axios from 'axios';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const fetchRatings=async()=>{ //fetch ratings data from Firebase with hook
    const response=db.collection('ratings');
    const data=await response.get();
    data.docs.forEach(item=>{
     setRatings(ratings=> [...ratings,item.data()]);
    });
  }

  useEffect(() => { //fetch mock data with hook
    const fetchData = async () => {
      const result = await axios(
        'https://jsonplaceholder.typicode.com/users',
      ); 
      setData(result.data);
      setSearchResults(result.data)
    };
 
    fetchData();
  }, []);

  useEffect(() => { //search functionality
    fetchRatings();
    const results = data.filter(robot =>
      robot.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [data, searchTerm]);
  
  const postRating = (index,newValue) => { //POST to firebase, passed down to each product card
    const key = "rating-"+index;
    var obj = {};
    obj[key]=newValue;
    db.collection("ratings")
      .doc("oEQub6pDG6nK27mizA66")
      .update(obj)
      .then(function () {
        console.log("Value successfully written!",);
        //To do: clearly indicate a changes to user by adding alert|banner for when a product rating is successfully updated
      })
      .catch(function (error) {
        console.error("Error writing Value: ", error);
      });
  }

  return ( (!data.length && !ratings.length) ?
    <h1>Loading</h1> :
    <div>
      <div className='tc'>
        <h1 className='f1'>Product Ratings: Robots</h1>
        <div className='pa2'>
          <input
            className='pa3 ba b--green bg-lightest-blue'
            type='text'
            placeholder='search robots'
            value={searchTerm}
            onChange={handleChange}
          />
      </div>
          <CardList robots={searchResults} ratings={ratings} postRating={postRating}/>
      </div>
    </div>
  );

}

export default App;