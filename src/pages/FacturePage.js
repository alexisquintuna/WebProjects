import { Link } from "react-router-dom"
import Facture from "../components/sections/Facture/facture"
const FacturePage = () => {
    return(
        <>
        <Link to="/">Back</Link>
        <Facture />
        </>
    )
}

export default FacturePage