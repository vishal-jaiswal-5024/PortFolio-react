import "./leftbar.css"
import {Facebook,Instagram,Twitter,WhatsApp}  from "@material-ui/icons"

export default function Leftbar() {
    return (
        <div className="leftbar">
            <div class="container">
                <img className="leftbarImg" src="lode-lagrainge-0QhpGWoaZF8-unsplash.jpg" alt=""/>
                <div class="text-block">  
                    <h2>VISHAL JAISWAL</h2>  
                             
                    <Facebook className="leftbarIcon"/>
                    <Instagram className="leftbarIcon"/>
                    <Twitter className="leftbarIcon"/>
                    <WhatsApp className="leftbarIcon"/>
 
                </div>
            </div>  
        </div>
             
    )
}
