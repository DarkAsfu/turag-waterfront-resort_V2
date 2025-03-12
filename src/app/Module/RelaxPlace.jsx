import couple from "../../assets/icon/couple.svg";
import cottage from "../../assets/icon/cottage.svg";
import food from "../../assets/icon/food.svg";
import meeting from "../../assets/icon/meeting.svg";
const RelaxPlace = () => {
  const relaxPlace = [
    {
      title: "Pleasant for couples and families",
      icon: couple,
    },
    {
      title: "Corporate meeting & workshop",
      icon: meeting,
    },
    {
      title: "Cottages and suites to accommodate",
      icon: cottage,
    },
    {
      title: "Modern restaurant serving delicious foods",
      icon: food,
    },
  ];
  return (
    <section className="bg-[] pb-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-[28px] lg:text-[36px] xl:text-[45px] font-semibold mb-6 text-center mt-10">
          A Place to Relax and Enjoy Nature
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {relaxPlace.map((item, index) => (
            <div key={index} className="relative border border-[#fae3b5] py-10 px-6 group hover:border-primary transition-all">
              <span className="text-[80px] font-bold text-transparent opacity-0 group-hover:opacity-10 transition-all text-stroke-1 absolute top-[25px] right-[35px] leading-[90px]">
                {index + 1}
              </span>
              <div>
                <img
                  src={item.icon.src}
                  alt="icon"
                  className="max-w-[60px] mb-[25px]"
                />
              </div>
              <div>
                <h3 className="text-[24px] text-primary font-medium">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelaxPlace;
