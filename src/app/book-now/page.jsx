import BookingForm from "../Module/BookingForm";
import SectionBanner from "../Module/SectionBanner";
import bnc from "@/assets/book_now_cover.jpg"
const BookNow = () => {
    return (
        <div>
            <SectionBanner title={"Book Now"} img={bnc} />
            <div className="max-w-7xl mx-auto px-4 py-16">
                <h3 className="text-[30px] text-headingColor font-semibold capitalize">
                    book now
                </h3>
                <BookingForm/>
            </div>
        </div>
    )
}

export default BookNow;