import doc1 from "../assets/doc1.jpg"
import doc2 from "../assets/doc2.jpg"
import doc3 from "../assets/doc3.jpg"
import doc4 from "../assets/doc4.jpg"
import "../css/team.css"


function Team(){
    return (
<div id="team-main-container" >
<div id="header">
        <h1>Our Team</h1>
      </div>
<div class="team">

    <div class="team-member">
      <img src={doc1 }alt="Dr. James Thompson"/>
      <h2>Dr. James Thompson</h2>
      <p><strong>Specialization:</strong> Internal Medicine</p>
      <p><strong>Education:</strong> Harvard Medical School</p>
      <p><strong>Experience:</strong> 15 years</p>
    </div>
    <div class="team-member">
      <img src={doc2 } alt="Dr.  Clark kent"/>
      <h2>Dr. Clark kent</h2>
      <p><strong>Specialization:</strong> Pediatrics</p>
      <p><strong>Education:</strong> Stanford University</p>
      <p><strong>Experience:</strong> 10 years</p>
      
    </div>
    <div class="team-member">
      <img src={doc3 } alt="Dr. Michael Smith"/>
      <h2>Dr. Michael Smith</h2>
      <p><strong>Specialization:</strong> Cardiology</p>
      <p><strong>Education:</strong> Johns Hopkins University</p>
      <p><strong>Experience:</strong> 12 years</p>
    </div>
    <div class="team-member">
      <img src={doc4} alt="Dr. Sarah Johnson"/>
      <h2>Dr. Sarah Johnson</h2>
      <p><strong>Specialization:</strong> Orthopedics</p>
      <p><strong>Education:</strong> University of California</p>
      <p><strong>Experience:</strong> 8 years</p>
    </div>
  </div>

</div>
    )
}
export default Team