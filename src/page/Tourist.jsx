import "../styles/Tourist.css";


import reservations from "../data/reservations";
import TouristBox from "../components/TouristBox";
import { useState } from "react";
import Categore from "../components/Categore";

const Tourist = () => {



    const allCat = ['All', ...new Set(reservations.map((el) =>  el.category))]
 
        console.log(allCat)
      
        const [data , sitdata] = useState(reservations);
        
        const catgry = (cat) =>{
      
          if (cat === `All`) {
            sitdata(reservations);
      
          }else
          {
          const newAerre=reservations.filter((elment) => elment.category === cat)
          sitdata(newAerre);
          }
        }
     


  return (
    <div id='Reservations'>
      <div></div>

      <div className="book_box_holder">
      <Categore lowcatgry={catgry} lowallCat={allCat} className="book_box_category" />
       


         <TouristBox data={data} />
        
      </div>
    </div>
  );
};

export default Tourist;
