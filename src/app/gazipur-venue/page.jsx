import GazipurVenueActivities from "../Module/GazipurVenueActivities";
import GazipurVenueRooms from "../Module/GazipurVenueRooms";
import Meta from "../Module/Meta";
import SectionBanner from "../Module/SectionBanner";
import topviewImg from "@/assets/topview.jpg"
import VenueWiseGallery from "../Module/VenueWiseGallery";
const GazipurVenue = () =>{
    return(
        <div>
            <Meta title={"Gazipur Venue"}/>
            <SectionBanner title={"Gazipur Venue"} img={topviewImg} />
            <GazipurVenueRooms/>
            <GazipurVenueActivities/>
            <VenueWiseGallery venue={"Gazipur"} />
        </div>
    )
}

export default GazipurVenue;