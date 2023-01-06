import logo from './logo.svg';
import './App.css';
import {React,useState,useEffect} from 'react';
import axios from 'axios';
function App() {
  // let componentMounted = true;
  // const getData = () => {
  //   const getProducts = async () => {
  //     //setLoading(true);
  //     const response = await fetch("http://localhost:5000/users");
  //     if (componentMounted) {
  //       const searchData = await response.clone().json();
  //       console.log(searchData[1]);
  //     }

  //     return () => {
  //       componentMounted = false;
  //     };
  //   };
  //   getProducts();
  // }
  // getData();
   const [posts, setPosts] = useState([]);

   useEffect(() => {
     axios
       .get("http://localhost:5000/users")
       .then((response) => {
         console.log(response);
         setPosts(response.data);
       })
       .catch((err) => {
         console.log(err);
       });
   }, []);
  return (
    <>
    </>
  );
}

export default App;
