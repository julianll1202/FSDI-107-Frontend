import "./home.css";
import {Link} from "react-router-dom";

const Home = () => {
    return( 
        <div className="home-page">
            <div className="welcome-section">
                <img src="/images/home-bg2.jpg" />
                <h2>Welcome to Gamify!</h2>
            </div>
            <div>
                <h3>Visit our extensive catalog of videogames</h3>
                <Link className="btn btn-dark" to="/catalog">Check our catalog</Link>
            </div>
            
        </div>
    );
}

export default Home;