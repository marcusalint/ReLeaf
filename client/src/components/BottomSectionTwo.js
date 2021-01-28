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
  return (
    <div className="news-panel">
      <div className="Side--Container">
        <div className="news-article">
          <img className="News--Image"src="https://i.cbc.ca/1.5449982.1580749198!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/flooding-in-cowichan.jpg"></img>
          <div className="news-print">
            <h5>6 days ago CBC.ca State of emergency continues in Vancouver Island communities</h5>
            <p className="News--Text">A state of emergency remains in place in some Vancouver Island communities after flooding forced residents from their homes and shut down roads in the Cowichan Valley Regional District (CVRD) over the weekend.</p>
          </div>
        </div>
        <div className="news-article">
        <img className="News--Image" src="http://blog.belairdirect.com/wp-content/uploads/2016/11/thumbs-catastrophes-feux-foret-440x230.jpg"></img>
        <div className="news-print">
          <h5>Salvation Army wants more staff, volunteers trained to give emotional support to disaster victims</h5>
          <p className="News--Text">Salvation Army officials say they’re hoping to get more local staff and volunteers trained to provide that kind of emotional support — whether religious or not — when they’re in the field, because they had too few of them to draw on during their 10-day disaster response to the two Ottawa tornadoes.</p>
        </div>
        </div>
      </div>
    </div>
    )
}

export default BottomSectionTwo


