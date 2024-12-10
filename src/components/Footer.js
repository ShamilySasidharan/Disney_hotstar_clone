import { TiTick } from "react-icons/ti";
const Footer = () => {
  return (
    <div className="flex px-3 mx-3 justify-between text-white pt-10 ">
      <div className="flex flex-col ">
        <h1 className="font-semibold text-lg py-3"> company </h1>
        <p className="py-1">About us </p>
        <p>Careers</p>
      </div>
      <div className="flex flex-col  ">
        <h1 className="font-semibold text-lg py-3  "> View in Website </h1>
        <span className="flex flex-row"><TiTick size={24} />  English </span>
      
      </div>
      <div className="flex flex-col">
        <h1 className="font-semibold text-lg py-3"> Need Help? </h1>
        <p className="py-1">Visit Help Center</p>
        <p>Share Feedback</p>
      </div>
      <div className="flex flex-col">
        <h1 className="font-semibold text-lg py-3"> Connect With Us</h1>
        <p className="py-1">f </p>
        <p>x</p>
      </div>
    </div>
  );
};
export default Footer;
