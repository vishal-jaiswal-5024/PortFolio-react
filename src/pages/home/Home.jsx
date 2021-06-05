import "./home.css"
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";


export default function Home() {
    return (
        <>
        <div className="homeContainer">
            <Leftbar/> 
            <Rightbar/>

        </div>
        </>

        )
}
