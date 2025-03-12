import DhakaVenueRooms from "../Module/DhakaVenueRooms";
import Meta from "../Module/Meta";
import SectionBanner from "../Module/SectionBanner";
import dv from "@/assets/do.jpg"
const DhakaVenue = () =>{
    return(
        <div>
            <Meta title={"Dhaka Venue"}/>
            <SectionBanner title={"Dhaka Venue"} img={dv}/>
            <DhakaVenueRooms/>
        </div>
    )
}

export default DhakaVenue;