import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Header({stateNav}:any) {
  return (
    <>
      <header className='flex text-[#fff] bg-[#344D64] h-[10vh] items-center justify-between p-4'>
      <div className="flex gap-4">
        <button onClick={stateNav}>
          <GiHamburgerMenu className="text-3xl cursor-pointer"/>
        </button>
        <Link to={"/home"}>
          <h1 className='text-3xl'>DrinkVentory</h1>
        </Link>
      </div>
    </header>
    </>

  )
}
