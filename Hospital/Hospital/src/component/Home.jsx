import "../css/home.css"
import hosp from "../assets/hosp-main.jpg"

function Home(){
    return(
<div className="home-main-container">
  <div className="header">
  <h1>Phoebe Hospital</h1>
  </div>
   <div className="body-container">
    <div className="img-container">
    <img src={hosp} id="hosp-main" />
    </div>
    <div className="text-container">
         <h2>Stay healthy, Stay safe!!</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eum voluptate quia qui enim. Quam minus delectus ab fugiat aliquam, cupiditate in itaque, porro nam fuga nemo iure quae officiis!
         Lorem ipsum dolor sit amet consectetur . Voluptates eum voluptate quia qui enim. Quam minus delectus ab fugiat aliquam, cupiditate in itaque, porro nam fuga nemo iure quae officiis!</p>   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eum voluptate quia qui enim. Quam minus delectus ab fugiat aliquam, cupiditate in itaque, porro nam fuga nemo iure quae officiis!</p>
    </div>
   </div>
</div>
    )
}
export default Home