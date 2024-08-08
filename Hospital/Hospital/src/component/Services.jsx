import "../css/services.css";
import GeneralMedicine from "../assets/GeneralMedicine.jpg";
import Pediatrics from "../assets/Pediatrics.jpg";
import Cardiology from "../assets/Cardiology.jpg";
import Orthopedics from "../assets/Orthopedics.jpg";
import Dermatology from "../assets/Dermatology.jpg";
import Radiology from "../assets/Radiology.jpg";
function Services() {
  return (
    <div id="service-main-container">
      <div id="header">
        <h2>Our Services</h2>
      </div>

      <div className="body-container">
        <div className="service">
          <img src={GeneralMedicine} alt="General Medicine" />
          <h2>General Medicine</h2>
          <p>Comprehensive healthcare services for all age groups.</p>
          <a>Learn More</a>
        </div>
        <div className="service">
          <img src={Pediatrics} alt="Pediatrics" />
          <h2>Pediatrics</h2>
          <p>Specialized care for infants, children, and adolescents.</p>
          <a>Learn More</a>
        </div>
        <div className="service">
          <img src={Cardiology} alt="Cardiology" />
          <h2>Cardiology</h2>
          <p>Advanced cardiovascular treatments and preventive care.</p>
          <a>Learn More</a>
        </div>
        <div className="service">
          <img src={Orthopedics} alt="Orthopedics" />
          <h2>Orthopedics</h2>
          <p>Expert treatment for musculoskeletal conditions.</p>
          <a>Learn More</a>
        </div>
        <div className="service">
          <img src={Dermatology} alt="Dermatology" />
          <h2>Dermatology</h2>
          <p>Comprehensive skin care for all types of conditions.</p>
          <a>Learn More</a>
        </div>
        <div className="service">
          <img src={Radiology} alt="Radiology" />
          <h2>Radiology</h2>
          <p>State-of-the-art imaging services for accurate diagnosis.</p>
          <a>Learn More</a>
        </div>
      </div>
    </div>
  );
}
export default Services;
