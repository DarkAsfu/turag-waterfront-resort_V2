import GalleryComponent from "../Module/GalleryComponent";
import Meta from "../Module/Meta";
import SectionBanner from "../Module/SectionBanner";
import cimg from "@/assets/book_now_cover.jpg"
const Gallery = () => {
  return (
    <div>
      <Meta title={"Gallery"}/>
      <SectionBanner img={cimg} title={"Gallery"} />
      <GalleryComponent/>
    </div>
  );
};

export default Gallery;
