import ActivitiesCard from "../Module/ActivitiesCard";
import Meta from "../Module/Meta";
import SectionBanner from "../Module/SectionBanner";
import activities from "@/assets/activities.jpg"

const Activities = () =>{
    return(
        <div>
            <Meta title={"Activities"} />
            <SectionBanner img={activities} title={"Activites"} />
            <ActivitiesCard/>
        </div>
    )
}

export default Activities;