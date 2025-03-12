import GazipurVenueRooms from "../Module/GazipurVenueRooms";
import Meta from "../Module/Meta";
import SectionBanner from "../Module/SectionBanner";
import topviewImg from "@/assets/topview.jpg"
const GazipurVenue = () =>{
    return(
        <div>
            <Meta title={"Gazipur Venue"}/>
            <SectionBanner title={"Gazipur Venue"} img={topviewImg} />
            <GazipurVenueRooms/>
        </div>
    )
}

export default GazipurVenue;