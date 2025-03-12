import SectionBanner from "../Module/SectionBanner";
import contact from "../../assets/turagC.jpg"
import ContactDetails from "../Module/Contact/ContactDetails";
import ContactForm from "../Module/Contact/ContactForm";
const Contact = () => {
    return (
        <div>
            <SectionBanner title={"Contact Us"} img={contact} />
            <div className="max-w-7xl mx-auto px-4 md:flex justify-between py-10 md:py-24  gap-16">
                <div className="md:w-[40%]">
                    <ContactDetails />
                </div>
                <div className="md:w-[60%]">
                    <ContactForm />
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 pb-10">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3641.886013909099!2d90.3244731760587!3d24.1055036750498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755dfb0e3b3d0c3%3A0xdfeeececfa102351!2sTurag%20Waterfront%20Resort%20%7C%20Best%20Resort%20in%20Gazipur%20Dhaka!5e0!3m2!1sen!2sbd!4v1740654008282!5m2!1sen!2sbd" width="100%" height="500" style={{ 'border': '0', 'borderRadius': "10px" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Contact;