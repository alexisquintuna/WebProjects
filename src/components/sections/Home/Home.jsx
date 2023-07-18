import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
        <div className="bg-slate-500"> 
            <nav>
                <Link to="/SciencePage">Science Page</Link>
            </nav>
        </div>
        </>
    )
}

export default Home;