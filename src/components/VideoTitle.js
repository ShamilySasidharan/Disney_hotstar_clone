import { FaPlay } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const VideoTitle = ({ title, lang, description, year }) => {
  return (
    <div className="p-10 absolute text-white pt-60 aspect-video bg-gradient-to-r from-slate-900 ">
    {/* TITLE */}
      <h1 className="text-6xl font-bold">{title}</h1>

    {/* YEAR AND LANGUAGUE */}
      <span className="flex text-xl font-bold py-4">
        <p>{year}</p>・<p className="">{lang}</p>
      </span>

    {/* DESCRIPTION */}
      <p className="text-lg w-1/4 py-4">{description}</p>

    {/* BUTTONS */}
      <div className="flex items-center space-x-5">
        <button className="flex items-center bg-gray-700 hover:bg-slate-600 text-white  px-5 py-3 rounded-md">
          <FaPlay size={18} />
          <span className="ml-4 font-bold text-lg">Subscribe to watch</span>
        </button>
        <button className=" bg-gray-700 hover:bg-slate-600  text-white  p-3 rounded-md">
          <FaPlus size={22} />
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
