import { BsFacebook, BsTwitter, BsInstagram, BsPinterest } from "react-icons/bs";
import HeroPic from "../assets/hero.jpg";
const Hero = () => {
  return (
    <section className="flex justify-around items-center p-10 gap-10 lg:flex-row xs:flex-col xs:gap-y-10 text-white">
      <div className="lg:w-1/3 xs:w-fit flex flex-col gap-3">
        <p className="text-4xl mb-5 text-slate-300 ">I{"'"}m</p>
        <h1 className="text-6xl">Abdullahi Umar</h1>
        <hr />
        <p className="mt-10 text-xl text-slate-300 font-sans">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, labore. Beatae tenetur inventore dolorem, id voluptatem nulla quae ratione soluta sapiente assumenda quia quod in ad dolores vel minima qui?
        </p>
      </div>
      <div className="w-1/3 items-center xs:w-fit">
        <img src={HeroPic} alt={HeroPic} width={250} height={250} className="rounded-full border-8 border-white" />
      </div>
      <div className="w-1/3 xs:w-fit">
        <p className="text-4xl mb-4">About Me</p>
        <p className="text-slate-300">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, eligendi?</p>
        <button className="bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white">Show More..</button>

        <div className="flex gap-4 mt-5 cursor-pointer">
          <BsFacebook className="border-4 hover:border-indigo-800 rounded-full" />
          <BsTwitter className="border-4 hover:border-indigo-800 rounded-full" />
          <BsInstagram className="border-4 hover:border-indigo-800 rounded-full" />
          <BsPinterest className="border-4 hover:border-indigo-800 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
