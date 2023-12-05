import { IoExitOutline } from "react-icons/io5";
import { FaUsers, FaUser, FaBoxes   } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

export default function NavIcons() {

  const links = [
    { to: "/home", icon: <MdDashboard className="text-2xl" />},
    { to: "/clients", icon: <FaUser className="text-2xl" />},
    { to: "/provider", icon: <FaBoxes className="text-2xl" />},
    { to: "/products", icon: <BsCartFill className="text-2xl" /> },
    { to: "/users", icon: <FaUsers className="text-2xl" /> },
  ];

  return (
    <aside className="h-[90vh] w-16  flex max-lg:h-auto">
      <nav className="bg-[#CFE0E5] h-full flex flex-col justify-between">
          <div className=" gap-[1px] flex flex-col">
            {links.map((link, index)=>(
              <>
                <Link key={index} className={`${window.location.pathname == link.to ?" text-zinc-950 bg-[#47667e] border-[#CFE0E5]" :""} transition-all duration-300 h-16 text-sm cursor-pointer hover:brightness-150 px-4 text-[#344D64] font-bold border-2 border-[#344D64] flex items-center justify-left gap-2`} to={link.to}>
                  {link.icon}
                </Link>
              </>
            ))
            }
          </div>
          <Link to={"/"} className="h-16 text-sm cursor-pointer hover:brightness-150 px-4 text-[#344D64] font-bold border-2 border-[#344D64] flex items-center justify-left gap-2"><IoExitOutline className=" rotate-180 text-2xl"/></Link>
      </nav>
    </aside>
  )
}