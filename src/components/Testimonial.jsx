import T1 from "../assets/t1.jpg";
import T2 from "../assets/t2.jpg";
import T3 from "../assets/t3.jpg";
import T4 from "../assets/t4.jpg";

const Testimonial = () => {
  return (
    <>
      <div className="flex  bg-indigo-800 m-20 xs:flex-col md:flex-row">
        <div className="flex justify-center items-center m-10">
          <h1 className="text-3xl text-white">Testimonials</h1>
        </div>

        <div className="relative rounded-xl overflow-auto p-8 hover:animate-pulse">
          <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
            <img src={T1} alt={T1} className="absolute -left-6 w-28 h-28 rounded-full shadow-lg " />
            <div className="min-w-0 py-5 pl-28 pr-5">
              <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200">Name Goes Here</div>
              <div className="text-slate-900 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400">Assistant Manager</div>
            </div>
          </div>
        </div>
        <div className="relative rounded-xl overflow-auto p-8 hover:animate-pulse">
          <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
            <img src={T2} alt={T2} className="absolute -left-6 w-28 h-28 rounded-full shadow-lg " />
            <div className="min-w-0 py-5 pl-28 pr-5">
              <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200">Name Goes Here</div>
              <div className="text-slate-900 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400">Assistant Manager</div>
            </div>
          </div>
        </div>
        <div className="relative rounded-xl overflow-auto p-8 hover:animate-pulse">
          <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
            <img src={T3} alt={T3} className="absolute -left-6 w-28 h-28 rounded-full shadow-lg " />
            <div className="min-w-0 py-5 pl-28 pr-5">
              <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200">Name Goes Here</div>
              <div className="text-slate-900 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400">Assistant Manager</div>
            </div>
          </div>
        </div>
        <div className="relative rounded-xl overflow-auto p-8 hover:animate-pulse">
          <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
            <img src={T4} alt={T4} className="absolute -left-6 w-28 h-28 rounded-full shadow-lg " />
            <div className="min-w-0 py-5 pl-28 pr-5">
              <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200">Name Goes Here</div>
              <div className="text-slate-900 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400">Assistant Manager</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
