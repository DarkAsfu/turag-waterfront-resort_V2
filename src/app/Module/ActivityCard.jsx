import Image from "next/image";
import Link from "next/link";
import { SlLocationPin } from "react-icons/sl";

const ActivityCard = ({activity, idx}) => {
  return (
    <div
      className="bg-[#F7F7F7] xl:py-10 mt-6 md:mt-10 px-4 py-6 mx-4 rounded-md"
    >
      <div
        className={`grid md:grid-cols-2 gap-4 lg:gap-10 items-center rounded-lg`}
      >
        <div
          className={`lg:py-16  ${
            idx % 2 === 0 ? "lg:order-1 lg:pl-16" : "lg:order-2 lg:pr-16"
          }`}
        >
          <Image
            className="rounded-md"
            src={`https://api.turagwaterfrontresort.com${activity?.images[0]?.image}`}
            width={700}
            height={500}
            alt="restaurants"
          />
        </div>

        <div
          className={`md:mt-0 lg:px-20 ${
            idx % 2 === 0 ? "lg:order-2 " : "lg:order-1 "
          }`}
        >
          <div className="flex items-center gap-3">
            <p className="flex items-center gap-2 text-primary font-semibold">
              <SlLocationPin className="text-primary text-[16px] lg:text-[18px]" />
              <span className="text-primary text-[14px] lg:text-[16px]">
                {activity.venue}
              </span>
            </p>
            -
            <p className="text-primary font-semibold text-[14px] lg:text-[16px]">
              {activity.slogan}
            </p>
          </div>
          <h1 className="text-[24px] lg:text-[36px] xl:text-[45px] font-semibold mb-2">
            {activity.type}
          </h1>
          <div
            className="max-w-none mb-6"
            dangerouslySetInnerHTML={{
              __html: `${activity?.description.slice(0, 150)}...`,
            }}
          />
          <Link
            href={`activities/${activity.slug}`}
            className="border p-3 border-primary text-primary hover:bg-primary hover:text-white transition-all rounded-md"
          >
            {activity.type}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
