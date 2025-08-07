import React from 'react';
import './MyWork.css';
import Pic1 from '../../assets/pic (1).png';
import Pic2 from '../../assets/pic (2).png';
import Pic3 from '../../assets/pic (3).png';
import Pic4 from '../../assets/pic (4).png';
import Pic5 from '../../assets/pic (5).png';
import Pic6 from '../../assets/pic (6).png';

function MyWork() {
  const Work_Data = [
    { w_no: "01", w_img: Pic1 },
    { w_no: "02", w_img: Pic2 },
    { w_no: "03", w_img: Pic3 },
    { w_no: "04", w_img: Pic4 },
    { w_no: "05", w_img: Pic5 },
    { w_no: "06", w_img: Pic6 },
  ];

  return (
    <div id='work' className='mywork'>
      <h1>My Latest Work</h1>
      <div className="mywork-container">
        {Work_Data.map((work, index) => (
          <div key={index} className="mywork-card">
            <img src={work.w_img} alt={`Work ${work.w_no}`} />
          </div>
          
        ))}
        
        
      </div>
       <button className="mywork-showmore">
        Show More...
      </button>
     
    </div>
  );
}

export default MyWork;
