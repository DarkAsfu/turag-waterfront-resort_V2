"use client";
import useBlogs from "@/hooks/useBlogs";
import Image from "next/image";
import Link from "next/link";

const RecentBlogs = () => {
  const { blogs } = useBlogs();
  return (
    <div>
      {blogs.map((blog, index) => {
        return (
          <Link href={`/blogs/${blog.slug}`} key={index} className="flex md:block lg:flex gap-3 border-b pb-4">
            <div className="w-[40%] lg:w-[25%]">
              <Image
                src={`https://api.turagwaterfrontresort.com/${blog.image}`}
                width={1000}
                height={1000}
                alt={blog.alt_text}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div className="w-[60%] md:w-full lg:w-[75%]">
              <h1 className="text-[15px] font-semibold text-headingColor">{blog.title}</h1>
              <div
                className="prose max-w-none py-2 text-[13px] text-[#666]"
                dangerouslySetInnerHTML={{
                  __html: `${blog?.description.slice(0, 100)}...`,
                }}
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default RecentBlogs;
