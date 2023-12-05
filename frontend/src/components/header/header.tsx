import { GiHamburgerMenu } from "react-icons/gi";

export default function Header({stateNav}:any) {
  return (
    <>
      <header className='flex text-[#fff] bg-[#344D64] h-[10vh] items-center justify-between p-4'>
      <button onClick={stateNav}>
        <GiHamburgerMenu className="text-3xl cursor-pointer"/>
      </button>
      <h1 className='text-3xl'>DrinkVentry</h1>
      <div className="flex items-center justify-center">
        <p className='text-xl font-semibold'>Mi Perfil
          <span className='ml-2 text-xl w-6 bg-[#65727C] font-bold h-6 border-2 rounded-full p-2'>
            Os
          </span>
        </p>
      </div>
    </header>
    </>

  )
}
