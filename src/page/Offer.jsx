import { Image } from "react-bootstrap";
import "../styles/Offer.css";
import Container from "react-bootstrap/esm/Container";

import LocalTaxiOutlinedIcon from '@mui/icons-material/LocalTaxiOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined';
import RouteOutlinedIcon from '@mui/icons-material/RouteOutlined';

const Offer = () => {
  return (
    <Container className="Offer" id='Privileges'>
      <div className="Offer_info">
        <div className="">
          <h1 className="main_title"> What we offer on our tourist trips </h1>

          <p className="main_p">
            {" "}
            acos agency is a travel agency specializing in providing
            unforgettable travel experiences.
          </p>
        </div>

        <div className="Offer_info_holder">
          <div className="Offer_info_box">
            <div>
              <LocalTaxiOutlinedIcon sx={{ fontSize: 24, color: "#EDFCFF" }} />
            </div>

            <h5>Convenient transportation</h5>

            <p>
              {" "}
              Distinctive trips: We offer tourism packages to suit all tastes
              Distinctive trips
            </p>
          </div>

          <div className="Offer_info_box">
            <div>
              <KingBedOutlinedIcon sx={{ fontSize: 24, color: "#EDFCFF" }} />
            </div>

            <h5>Luxury accommodation</h5>

            <p>
              {" "}
              Distinctive trips: We offer tourism packages to suit all tastes
              Distinctive trips
            </p>
          </div>

          <div className="Offer_info_box">
            <div>
              <InventoryOutlinedIcon sx={{ fontSize: 24, color: "#EDFCFF" }} />
            </div>

            <h5>Integrated packages </h5>

            <p>
              {" "}
              Distinctive trips: We offer tourism packages to suit all tastes
              Distinctive trips
            </p>
          </div>

          <div className="Offer_info_box">
            <div>
              <RouteOutlinedIcon sx={{ fontSize: 24, color: "#EDFCFF" }} />
            </div>

            <h5>Professional guides</h5>

            <p>
              {" "}
              Distinctive trips: We offer tourism packages to suit all tastes
              Distinctive trips
            </p>
          </div>
        </div>
      </div>

      <div className="Offer_img">
        <Image fluid src="assets/info.jpg" />
      </div>
    </Container>
  );
};

export default Offer;
