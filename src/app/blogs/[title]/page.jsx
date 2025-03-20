"use client";
import SectionBanner from "@/app/Module/SectionBanner";
import useDetailsBlog from "@/hooks/useDetailsBlog";
import { useParams } from "next/navigation";
import topview from "@/assets/topview.jpg";
import Image from "next/image";
import useMetadata from "@/hooks/useMetadata";
import RecentBlogs from "@/app/Module/RecentBlogs";

const BlogDetails = () => {
  const { title } = useParams();
  const { blogDetails, isLoading } = useDetailsBlog(title);

  // Default values for metadata (this is safe because we'll use empty strings or defaults)
  const metadata = useMetadata(
    blogDetails?.title || "",
    "A resort by nature"
  );

  console.log(blogDetails);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  const imageUrl = blogDetails
    ? `https://api.turagwaterfrontresort.com${blogDetails?.image}`
    : topview; // Fallback image if blogDetails.image is not available

  // Fallback alt text if blogDetails?.alt_text is not available
  const altText = blogDetails?.alt_text || "Blog Image";

  return (
    <div>
      {/* Banner Section */}
      {metadata}
      <SectionBanner title={blogDetails?.title} img={topview} />

      {/* Blog Content Section */}
      <div className="max-w-7xl mx-auto md:flex gap-10 py-10 md:py-10 px-4">
        <div className="md:w-[65%]">
          {/* Blog Title */}
          <h1 className="text-4xl font-bold mb-10">{blogDetails?.title}</h1>

          {/* Blog Image */}
          <Image
            src={imageUrl}
            width={1000}
            height={1000}
            alt={altText} // Use fallback alt text
            className="w-full h-auto rounded-lg mb-6"
          />

          {/* Blog Description (HTML Content) */}
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: blogDetails?.description }}
          />
        </div>
        <div className="md:w-[35%] mt-6 pt-6 border-t">
          <h3 className="text-[18px] font-semibold text-headingColor mb-4">
            Recent Blog posts
          </h3>
          <RecentBlogs />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
