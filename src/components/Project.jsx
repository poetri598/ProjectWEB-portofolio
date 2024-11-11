import Project1 from "../assets/project1.jpg";
import Project2 from "../assets/project2.jpg";
import Project3 from "../assets/project3.jpg";
import Project4 from "../assets/project4.jpg";

export default function Project() {
  return (
    <>
      <div className="bg-indigo-800 m-20 max-w-full">
        <div className="grid justify-items-center m-10">
          <h1 className="text-3xl text-white mt-10">Projects</h1>
        </div>

        <div>
          <div className="grid xs:md:grid-cols-1 md:grid-cols-2 gap-4 p-5">
            <div className="max-w-md mx-auto bg-white shadow-md overflow-hidden rounded-xl md:max-w-2xl hover:animate-pulse">
              <div className=" md:flex">
                <div className="p-8">
                  <div className="uppercase tracking-wider text-sm text-indigo-500 font-semibold">Hospital Management System</div>
                  <a href="#">Subheading</a>
                  <p className="mt-2 text-slate-500 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatum molestiae blanditiis?</p>
                </div>
                <div className="md:shrink-0 p-5">
                  <img src={Project1} alt={Project1} width={150} height={150} className="rounded-full" />
                </div>
              </div>
            </div>
            <div className="max-w-md mx-auto bg-white shadow-md overflow-hidden rounded-xl md:max-w-2xl hover:animate-pulse">
              <div className=" md:flex">
                <div className="md:shrink-0 p-5">
                  <img src={Project2} alt={Project2} width={150} height={150} className="rounded-full" />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wider text-sm text-indigo-500 font-semibold">Hospital Management System</div>
                  <a href="#">Subheading</a>
                  <p className="mt-2 text-slate-500 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatum molestiae blanditiis?</p>
                </div>
              </div>
            </div>
            <div className="max-w-md mx-auto bg-white shadow-md overflow-hidden rounded-xl md:max-w-2xl hover:animate-pulse">
              <div className=" md:flex">
                <div className="p-8">
                  <div className="uppercase tracking-wider text-sm text-indigo-500 font-semibold">Hospital Management System</div>
                  <a href="#">Subheading</a>
                  <p className="mt-2 text-slate-500 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatum molestiae blanditiis?</p>
                </div>
                <div className="md:shrink-0 p-5">
                  <img src={Project3} alt={Project3} width={150} height={150} className="rounded-full" />
                </div>
              </div>
            </div>
            <div className="max-w-md mx-auto bg-white shadow-md overflow-hidden rounded-xl md:max-w-2xl hover:animate-pulse">
              <div className=" md:flex">
                <div className="md:shrink-0 p-5">
                  <img src={Project4} alt={Project4} width={150} height={150} className="rounded-full" />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wider text-sm text-indigo-500 font-semibold">Hospital Management System</div>
                  <a href="#">Subheading</a>
                  <p className="mt-2 text-slate-500 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatum molestiae blanditiis?</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div></div>
        </div>
      </div>
    </>
  );
}
