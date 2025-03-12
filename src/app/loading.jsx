"use client";
import { ThreeDots } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#B89146"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
