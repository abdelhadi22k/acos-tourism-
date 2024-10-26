import Container from "react-bootstrap/esm/Container";
import "../styles/HomePage.css";
import Tourist from "./Tourist";
import AboutUs from "./AboutUs";
import Programmes from "./Programmes";
import Offer from "./Offer";
import Footer from "../components/Footer";
import MyComponent from "../components/UP";

const HomePage = () => {
  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "60vh",
  };

  const backgroundStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: "url(assets/mainPage.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    zIndex: -1,
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 1,
    color: "white",
    padding: "20px",
    textAlign: "center",
  };

  return (
    <section>
      <div className="Home_Page" style={containerStyle} id="homePage">
        <div style={backgroundStyle}></div>
        <div style={overlayStyle} className="overlayStyle"></div>
        <div style={contentStyle} className="home_page_content">
          <h1 className="home_page_title">
            Your Next Trip Starts Here <br />
            Book Now
          </h1>
        </div>
      </div>
      <Container className="Home_Page_container">
        <div className="Home_Page_info">
          <h1 className="main_title"> 20% off your first booking!</h1>

          <p className="main_p">
            {" "}
            Enjoy a unique travel experience with our tour agency! We offer you
            a special offer for new customers: 20% discount on your first trip.{" "}
          </p>

          <div className="btn_box">
            <button className="main_btn_1">Book now</button>
            <button className="main_btn_2">Learn more</button>
          </div>
        </div>

        <div className="Home_Page_img">
          <div className="img_box">
            <img src="assets/Luxenburg.jpg" />
            <div>
              <h1>Luxenburg</h1>
              <p>
                {" "}
                Distinctive trips: We offer tourism packages to suit all tastes.
              </p>
            </div>
          </div>

          <div className="img_box">
            <img src="assets/Tokyo.jpg" />
            <div>
              <h1>Tokyo</h1>
              <p>
                {" "}
                Distinctive trips: We offer tourism packages to suit all tastes.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <Tourist />
      <AboutUs />
      <Programmes />
      <Offer />
      <Footer />
      <MyComponent />
    </section>
  );
};

export default HomePage;
