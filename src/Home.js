
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="containers animation"> {/* Add the container and animation classes */}
            <h1 className="title">Welcome to My Website</h1>
            <p className="subtitle">Explore and discover amazing things</p>
            <Link className="link" to='/form' >Form</Link>
        </div>
    );
}

export default Home;