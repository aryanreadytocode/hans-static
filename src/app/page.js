import Image from "next/image.js";
import labels from "./labels.js";
import homecleaning from "./public/homecleaning.png";
import bathcleaning from "./public/bathroomcleaning.png";
import handwash from "./public/handwash.png";
import bleaching from "./public/bleaching.png";
import slider1 from "./public/slider1.png";
import slider2 from "./public/slider2.png";
import slider3 from "./public/slider3.png";
import slider4 from "./public/slider4.png";
import ImageSlider from "./components/ImageSlider.jsx";

const images = [slider1, slider2, slider3, slider4];
export default function Dashboard() {
  return (
    <div>
      <div className="py-10">
        <ImageSlider images={images} />
      </div>
      <div className="container mx-auto p-4 flex items-start">
        <div className="flex-5">
          <h1 className="text-xl font-bold mb-4">
            {labels.dashboard.homeHeading}
          </h1>
          <div className="mb-6">
            <p>{labels.dashboard.homeDescription}</p>
          </div>
        </div>
        <div className="flex-2 pl-10">
          <Image className="rounded-xl shadow-lg"
            src={homecleaning}
            alt="Home Cleaning"
            style={{ width: "100%", height: "auto" }}
            sizes="(max-width: 600px) 100vw, 200px"
          />
        </div>
      </div>
      <div className="container mx-auto p-4 flex items-start">
        <div className="flex-2 pr-10">
          <Image className="rounded-xl shadow-lg"
            src={bathcleaning}
            alt="Bathroom Clean"
            style={{ width: "100%", height: "auto" }}
            sizes="(max-width: 600px) 100vw, 200px"
          />
        </div>
        <div className="flex-5">
          <h1 className="text-xl font-bold mb-4">
            {labels.dashboard.toiletHeading}
          </h1>
          <div className="mb-6">
            <p className="text-lg">{labels.dashboard.toiletDescription}</p>
          </div>
        </div>
      </div>
       <div className="container mx-auto p-4 flex items-start">
        <div className="flex-5">
          <h1 className="text-xl font-bold mb-4">
            {labels.dashboard.handwashHeading}
          </h1>
          <div className="mb-6">
            <p>{labels.dashboard.handwashDescriptin}</p>
          </div>
        </div>
        <div className="flex-2 pl-10">
          <Image className="rounded-xl shadow-lg"
            src={handwash}
            alt="Handwash"
            style={{ width: "100%", height: "auto" }}
            sizes="(max-width: 600px) 100vw, 200px"
          />
        </div>
      </div>
      <div className="container mx-auto p-4 flex items-start">
        <div className="flex-2 pr-10">
          <Image className="rounded-xl shadow-lg"
            src={bleaching}
            alt="Environment Clean"
            style={{ width: "100%", height: "auto" }}
            sizes="(max-width: 600px) 100vw, 200px"
          />
        </div>
        <div className="flex-5">
          <h1 className="text-xl font-bold mb-4">
            {labels.dashboard.bleachTitle}
          </h1>
          <div className="mb-6">
            <p className="text-lg">{labels.dashboard.bleachDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
