import { CgNametag } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";
const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  function openMenu() {
    setToggle(!toggle);
  }

  function closeMenu() {
    setToggle(!toggle);
  }
  return (
    <>
      <div className="flex justify-between items-center p-10 lg:flex-row">
        <div>
          <a href="$" className="text-white font-mono text-3xl flex items-center tracking-wider">
            <CgNametag /> AUCODE
          </a>
        </div>
        <div className="flex items-center gap-4">
          <div className="xs:hidden md:block gap-2">
            <a href="#" className="text-nav">
              Skills
            </a>
            <a href="#" className="text-nav">
              Projects
            </a>
            <a href="#" className="text-nav">
              Testimonials
            </a>
          </div>
          <div className="xs:block md:hidden">{toggle ? <AiOutlineClose size={30} className="text-white" onClick={closeMenu} /> : <HiMenuAlt1 size={30} className="text-white" onClick={openMenu} />}</div>
        </div>
      </div>

      <div className="xs:block md:hidden">
        {toggle && (
          <div className="flex justify-between ml-10">
            <ul>
              <li className="text-nav">Skills</li>
              <li className="text-nav">Projects</li>
              <li className="text-nav">Testmonials</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navigation;
