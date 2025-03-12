"use client";
import useBlogs from "@/hooks/useBlogs";
import React, { useState } from "react";
import Image from "next/image";
import { format } from "date-fns";
import {
  ChevronRight,
  ChevronsRight,
} from "lucide-react";
import Link from "next/link";

const BlogsCards = () => {
  const { blogs, loading } = useBlogs();
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="">
      <div className="">
        {blogs.map((blog, index) => {
          const formattedDate = format(
            new Date(blog.updated_at),
            "d MMMM yyyy"
          );
          return (
            <Link
              href={`blogs/${blog.slug}`}
              key={index}
              className="block relative group mx-auto dark:bg-black bg-white dark:border-0 border overflow-hidden rounded-md dark:text-white text-black"
            >
              <figure className="w-full h-62 rounded-md overflow-hidden">
                <Image
                  src={`https://api.turagwaterfrontresort.com${blog.image}`}
                  alt="shoes"
                  width={600}
                  height={800}
                  className="h-full w-full scale-105 group-hover:scale-100 rounded-lg object-cover transition-all duration-300"
                />
              </figure>
              <div className="p-4 space-y-1 transition-all duration-300">
                <span className="text-sm">{formattedDate}</span>
                <h1 className="text-lg font-medium capitalize">{blog.title}</h1>
                <div
                  className="prose max-w-none py-6"
                  dangerouslySetInnerHTML={{ __html: `${blog?.description.slice(0, 250)}...` }}
                />
                <div
                  className="bg-primary w-fit text-base dark:text-white rounded-md text-white font-normal py-1 px-4 flex justify-center items-center gap-3"
                >
                  Read Now
                  <span className="relative">
                    <ChevronRight
                      size={20}
                      className="group-hover:opacity-0 opacity-100 translate-y-0 group-hover:translate-y-2 transition-all duration-300"
                    />
                    <ChevronsRight
                      size={20}
                      className="absolute top-0 group-hover:opacity-100 opacity-0 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                    />
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogsCards;
