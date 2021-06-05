import "./rightbar.css"
import {Computer,FlightTakeoff,Storage,Security} from "@material-ui/icons"

export default function Rightbar() {
    return (
        <div className="Container">
                <div className="aboutmeText"><h1>ABOUT ME</h1></div>
                <div className="aboutme2Text"><h3> 25 years  /  passion  /  freelance</h3></div>
                <div className="aboutcontainText"><h4>Self-motivated and cheerful customer service professional with 2+ years of experience helping customers navigate websites and resolving product and service issues. Eager to support BookMe in building an impeccable online reputation by providing top-class customer support. Received 98.9% positive ratings at GHI Inc. where customer retention for my regular call-ins was 25% above the company average.</h4></div>

                <span className="myserivesContainerText"><h1>MY SERVICES</h1></span>
         <ul className="rightbarList">
             <li className="rightbarListItem">
                 <Computer className="rightbarIcon"/>
                 <span className="rightbarListItemText"><h3>COMPUTER</h3></span>
                 <span className="rightbarListcontainText"><h4>technical specifications.</h4></span>
                
             </li>
             <li className="rightbarListItem">
                 <FlightTakeoff className="rightbarIcon"/>
                 <span className="rightbarListItemText"><h3>AIRPLANE</h3></span>
                 <span className="rightbarListcontainText"><h4>technical specifications.</h4></span>
                
            </li>
             <li className="rightbarListItem">
                 <Storage className="rightbarIcon"/>
                 <span className="rightbarListItemText"><h3>DATABASE</h3></span>
                 <span className="rightbarListcontainText"><h4>technical specifications.</h4></span>
                
             </li>
             <li className="rightbarListItem">
                 <Security className="rightbarIcon"/>
                 <span className="rightbarListItemText"><h3>SECURITY</h3></span>
                 <span className="rightbarListcontainText"><h4>technical specifications.</h4></span>
                
             </li>
         </ul>
  
     
                 
        
</div>        
            
        
    

            
        
        )
}
