import Container from "react-bootstrap/esm/Container";
import "../styles/Programmes.css";
import { Image } from "react-bootstrap";


const Programmes = () => {
  return (
    <Container className="Programme" id='Activities'>
      <div className="Programme_info">
        <h1>Tourism and tourism programmes</h1>
        <p>
          It provides you with a range of tourism programs. Whether you are
          looking for adventure, relaxation, or cultural exploration,
        </p>
      </div>

      <div className="Programme_holder">
        <div className="Programme_img">
          <div className="Programme_img_box">
            <Image fluid src="assets/p3.jpg" />
            <div className="Programme_img_box_title">
              <h2>Attractive places</h2>
            </div>
          </div>
        </div>

        <div className="Programme_img">
          <div className="Programme_img_box">
            <Image fluid src="assets/p4.jpg" />
            <div className="Programme_img_box_title">
              <h2>Cruises </h2>
            </div>
          </div>
        </div>

        <div className="Programme_img">
          <div className="Programme_img_box">
            <Image fluid src="assets/p2.jpg" />
            <div className="Programme_img_box_title">
              <h2>Hajj and Umrah</h2>
            </div>
          </div>
        </div>

        <div className="Programme_img">
          <div className="Programme_img_box">
            <Image fluid src="assets/p5.jpg" />
            <div className="Programme_img_box_title">
              <h2>Landscapes</h2>
            </div>
          </div>
        </div>

        <div className="Programme_img">
          <div className="Programme_img_box">
            <Image fluid src="assets/p1.jpg" />
            <div className="Programme_img_box_title">
              <h2>Unique hotels</h2>
            </div>
          </div>
        </div>

        <div className="Programme_img">
          <div className="Programme_img_box">
            <Image fluid src="assets/p6.jpg" />
            <div className="Programme_img_box_title">
              <h2>Great beaches</h2>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Programmes;
