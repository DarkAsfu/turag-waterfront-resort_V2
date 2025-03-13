import PaymentDetails from "../Module/Payment/PaymentDetails";
import PaymentForm from "../Module/Payment/PaymentForm";
import SectionBanner from "../Module/SectionBanner";
import paymentImg from "@/assets/02.jpg"
const MakePayment = () =>{
    return(
        <div>
            <SectionBanner title={"Payment Form"} img={paymentImg}/>
            <div className="max-w-7xl mx-auto md:flex py-10 md:py-24 gap-6 px-4">
                <div className="w-full md:w-[35%] mb-6 md:mb-0">
                    <PaymentDetails/>
                </div>
                <div className="w-full md:w-[65%]">
                    <PaymentForm/>
                </div>
            </div>
        </div>
    )
}

export default MakePayment;