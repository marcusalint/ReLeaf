import { useState, useEffect, useRef } from "react";
import "./BottomSectionTwo.scss";
import axios from 'axios'


const BottomSectionTwo = ({
  products, updateProduct, users, profile, goal
}) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get(`https://api.reliefweb.int/v1/reports?appname=apidoc&query[value]=earthquake`)
    .then((res) => {
      console.log(res, "this is res")
      setNews(res.data)
    })
  },[]);

  
  
  console.log(news.data, 'this is the news')
  
  // const [recentContributions, setRecentContributions] = useState([]);

  // useEffect(() => {
  //   axios.get(`https://newsapi.org/v2/top-headlines?q=naturaldisasters&apiKey=5cc79aff8a924e5f91f73e2334ea3b5f`)
  //   .then((res) => {
  //     setNews(res.data)
  //   })
  // },[]);
  
  // console.log(news)
  
  


  return (
    <section>
      {news &&
    <div className="Bottom--Right--Container">
      <div className="Card">
        <h1>{news.data[0].fields.title}</h1>
        <p>{news.data[0].fields.href}</p>
        
     </div>
     <div className="Card">
        <h1>{news.data[1].fields.title}</h1>
        <p>{news.data[1].fields.href}</p>
        
     </div>
     <div className="Card">
        <h1>{news.data[2].fields.title}</h1>
        <p>{news.data[2].fields.href}</p>
        
     </div>
      <h1></h1>
      </div> }
      </section>
    )

    
  
  
}

export default BottomSectionTwo
