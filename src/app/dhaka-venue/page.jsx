import DhakaVenueActivities from "../Module/DhakaVenueActivites";
import DhakaVenueRooms from "../Module/DhakaVenueRooms";
import Meta from "../Module/Meta";
import SectionBanner from "../Module/SectionBanner";
import dv from "@/assets/do.jpg"
import VenueWiseGallery from "../Module/VenueWiseGallery";
const DhakaVenue = () =>{
    return(
        <div>
            <Meta title={"Dhaka Venue"}/>
            <SectionBanner title={"Dhaka Venue"} img={dv}/>
            <DhakaVenueRooms/>
            <DhakaVenueActivities/>
            <VenueWiseGallery venue={"Dhaka"} />
        </div>
    )
}

export default DhakaVenue;