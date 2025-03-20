import BookingForm from "../Module/BookingForm";
import SectionBanner from "../Module/SectionBanner";
import bnc from "@/assets/book_now_cover.jpg"
const BookNow = () => {
    return (
        <div>
            <SectionBanner title={"Book Now"} img={bnc} />
            <div className="max-w-7xl mx-auto px-4 py-16">
                <BookingForm/>
            </div>
        </div>
    )
}

export default BookNow;