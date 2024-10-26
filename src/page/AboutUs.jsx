import "../styles/AboutUs.css";
import GroupsIcon from "@mui/icons-material/Groups";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Image } from 'react-bootstrap';



const AboutUs = () => {
  return (
    <div className="AboutUs" id='AboutUs'>
      <div className="About_us_info">
      
        <div className="">
          <h1 className="main_title"> About us</h1>

          <p className="main_p">
            {" "}
            acos agency is a travel agency specializing in providing
            unforgettable travel experiences.
          </p>

          <div className="btn_box">
            <button className="main_btn_1">Book now</button>
            <button className="main_btn_2">Learn more</button>
          </div>
        </div>

        <div className="About_us_box_holder">

          <div>
            <h3>Our Team</h3>
            <GroupsIcon sx={{ fontSize: 60, color: "#0D92F4" }} />
            <p>
              We are here to help you every step of the way, from planning your
              trip to returning with unforgettable memories.
            </p>
          </div>


          <div>
            <h3>Our Vision</h3>
            <RemoveRedEyeIcon sx={{ fontSize: 60, color: "#0D92F4" }} />
            <p>
              We aim to enable everyone to explore the world with competitive
              prices and high-quality services
            </p>
          </div>
        </div>
      </div>
      <div className="About_us_Experience">


        <div>
          <div>
            <RemoveRedEyeIcon sx={{ fontSize: 24, color: "#EDFCFF" }} />
          </div>

          <span>
            <h1>+15.1K</h1>
            <h5>Happy customer</h5>
          </span>

        </div>


        <div>
          <div>
            <RemoveRedEyeIcon sx={{ fontSize: 24, color: "#EDFCFF" }} />
          </div>

          <span>
            <h1>+23</h1>
            <h5>23 years Experience</h5>
          </span>

        </div>
        <div>
          <div>
            <RemoveRedEyeIcon sx={{ fontSize: 24, color: "#EDFCFF" }} />
          </div>

          <span>
            <h1>+132</h1>
            <h5>Tourist destination  </h5>
          </span>

        </div>
        <div>
          <div>
            <RemoveRedEyeIcon sx={{ fontSize: 24, color: "#EDFCFF" }} />
          </div>

          <span>
            <h1>+2.5k</h1>
            <h5>Fun trip</h5>
          </span>

        </div>

      </div>

      <div className="About_us_img">
        <Image fluid  src="assets/AboutUs.jpg" />
      </div>
    </div>
  );
};

export default AboutUs;
