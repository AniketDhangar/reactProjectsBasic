import doctor from "../assets/doctor.jpg";

import "../css/about.css";
function About() {
  return (
    <div className="about-main-container">
      <div id="header">
        <h1> About Us</h1>
      </div>
      <div className="body-container">
        <div className="img-container">
          <img src={doctor} id="doctor" />
        </div>
        <div className="text-container">
          <div id="name-of">
            <h2>Dr. James Thompson, MD</h2>
          </div>
          <p>
            Welcome to our practice! Dr. James Thompson is a highly skilled and
            compassionate physician dedicated to providing exceptional
            healthcare to his patients. With over 15 years of experience in
            internal medicine, Dr. Thompson combines his extensive medical
            knowledge with a personalized approach to ensure each patient
            receives the highest quality care
            <h3>Education and Training:</h3>
            Dr. Thompson earned his Medical Degree from Harvard Medical School,
            followed by a residency in Internal Medicine at Johns Hopkins
            Hospital. He is board-certified in Internal Medicine and continues
            to stay updated with the latest advancements in medical science
            through ongoing education and training.
          </p>
        </div>
      </div>
      <div className="text-container-one">
        <p>
          <h3> Specializations:</h3>
          Dr. Thompson specializes in managing chronic conditions such as
          diabetes, hypertension, and heart disease. He is also experienced in
          preventive care, helping patients maintain optimal health through
          regular check-ups and screenings.
          <h3>Philosophy of Care:</h3> Dr. Thompson believes in a holistic
          approach to medicine, treating each patient as a whole person rather
          than just addressing symptoms. He takes the time to listen to his
          patients, understand their concerns, and develop individualized
          treatment plans that best meet their needs.
        </p>
        <h3>Professional Affiliations:</h3>
        <ul>
          <li>American Medical Association</li>
          <li>American College of Physicians</li>
          <li>Society of General Internal Medicine</li>
        </ul>
        <h3 id="interests">Personal Interests:</h3>
        <p>
          When he's not caring for patients, Dr. Thompson enjoys spending time
          with his family, hiking, and participating in community health
          initiatives. He is passionate about promoting healthy lifestyles and
          frequently volunteers at local health fairs and educational events.
        </p>
      </div>
    </div>
  );
}
export default About;
