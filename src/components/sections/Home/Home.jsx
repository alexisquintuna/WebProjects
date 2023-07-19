import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
        <div className="bg-slate-500"> 
            <nav class="w-full flex justify-around">
                <Link class="bg-red-100" to="/SciencePage">Science Page</Link>
                <Link class="bg-red-200" to="/SolutionPage">Solution Page</Link>
                <Link class="bg-red-200" to="/FacturePage">Facture Page</Link>
            </nav>
        </div>
        </>
    )
}

export default Home;