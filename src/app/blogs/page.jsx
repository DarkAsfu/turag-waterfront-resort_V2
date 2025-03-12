import topview from "@/assets/topview.jpg";
import SectionBanner from "../Module/SectionBanner";
import BlogsCards from "../Module/BlogsCards";
import RecentBlogs from "../Module/RecentBlogs";
import Meta from "../Module/Meta";
const Blogs = () => {
  return (
    <div>
      <Meta title={"Blogs"} />
      <SectionBanner title={"Blogs"} img={topview} />
      <div className="max-w-7xl mx-auto md:flex gap-10 py-10 md:py-24 px-4">
        <div className="md:w-[60%]">
          <BlogsCards />
        </div>
        <div className="md:w-[40%]">
          <h3 className="text-[18px] font-semibold text-headingColor mb-4">
            Recent Blog posts
          </h3>
          <hr className="mb-4 border-primary" />
          <RecentBlogs />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
