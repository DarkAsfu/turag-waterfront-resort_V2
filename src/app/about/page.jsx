import SectionBanner from "../Module/SectionBanner";
import aboutImg from "../../assets/about1.jpg";
import about from "../../assets/about2.jpg";
import Image from "next/image";
import Accommodations from "../Module/Accommodations";
import RelaxPlace from "../Module/RelaxPlace";
import Meta from "../Module/Meta";
const About = () => {
  return (
    <div>
      <Meta title={"About"} />
      <SectionBanner title={"About Us"} img={aboutImg} />
      <div className="py-24 max-w-7xl mx-auto">
        <h1 className="text-[28px] lg:text-[36px] xl:text-[45px] font-semibold mb-4 text-center">
          Turag Waterfront Resort, Gazipur
        </h1>
        <p className="text-[15px] text-[#333334] mb-6 max-w-4xl mx-auto text-center leading-7">
          Turag Waterfront Resort in Gazipur Dhaka, located 18KM from Gazipur Bypass, Dhaka,
          offers a peaceful retreat by the Turag River on 36 bighas of land,
          near Bhawal National Park. Surrounded by lush greenery and serene
          river views, it’s the perfect escape from city life. The resort
          features cozy wooden cottages, an open-air dining area, a large
          swimming pool, indoor games, and a kids' play zone. Guests can enjoy
          boating, fishing, and a relaxing atmosphere. Founded by Md. Humayun
          Kabir and Shahin Alambir, the resort preserves the traditional
          riverside lifestyle while providing an eco-friendly and tranquil
          environment for families, corporate retreats, and romantic getaways.
        </p>
        <Image src={about} alt="about-img" width="" height="" />
        <h1 className="text-[28px] lg:text-[36px] xl:text-[45px] font-semibold mb-4 text-center mt-10">
          Eco-Friendly Boutique Resort
        </h1>
        <p className="text-[15px] text-primary font-semibold text-center">
          Eco-Resort
        </p>
        <p className="text-[15px] text-[#333334] mb-6 max-w-4xl mx-auto text-center leading-7 mt-4">
          Turag Waterfront Resort lodges facility that takes steps to reduce its carbon footprint
          while giving back to its local community. Some of the best ways that
          we practice to make our resort more eco -friendly and sustainable like
          maintain energy saving, limit water waste, have guests reuse linens,
          equip staff with eco-friendly cleaning staff, serve local and organic
          food, consider composting etc.
        </p>
        <p className="text-[15px] text-primary font-semibold text-center mt-14">
          Boutique Resort
        </p>
        <p className="text-[15px] text-[#333334] mb-6 max-w-4xl mx-auto text-center leading-7 mt-4">
          This 50 room’s unique boutique resort with a relaxing and quiet lawn
          of Turag Waterfront Resort have relaxing atmosphere that would absolutely amaze the
          guests with its vibrant landscaping and modern amenities. From the
          very moment of arrival guest will feel embraced with nature.
        </p>
      </div>
      <RelaxPlace />
      <Accommodations />
    </div>
  );
};

export default About;
