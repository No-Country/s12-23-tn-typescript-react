import { TbSearch } from 'react-icons/tb'

interface ManageClientProps {
  title: string;
  placeholder: string;
  button : string;
  onSearchButtonClick?: () => void; 
  onButtonClick?: () => void; 
  createProduct?: () => void
}

function ManageClient({title, placeholder, button, onButtonClick, onSearchButtonClick }: ManageClientProps) {

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };

  const handleSearchButtonClick = () => {
    if (onSearchButtonClick) {
      onSearchButtonClick();
    }
  };


  return (
    <section className='w-full flex flex-col gap-4 bg-black bg-opacity-80 px-4 py-4 md:px-12 lg:rounded-lg'>
      <h3 className='font-bold text-3xl text-[#F5F1EA] max-md:text-center'>{title}</h3>
      <div className='flex items-center justify-between max-md:flex-col'>
        <form  className='flex flex-col gap-2 w-60 lg:flex-row lg:w-auto'>
          <div className='flex items-center rounded-lg justify-around border bg-white border-gray-300 p-1 w-full md:w-60'>
            <input
              className='outline-none py-1 '
              type="text"
              placeholder={placeholder}
            />
            <div className=''>
              <TbSearch className='text-gray-800 text-xl' />
            </div>
          </div>
          <button 
            className='bg-[#354762] text-[#FFFDFD] w-full py-2 rounded-lg md:w-52'
            onClick={handleSearchButtonClick}
            >
              Buscar
          </button>
        </form>
        <div>
          <button className='bg-[#354762] text-[#FFFDFD] w-52 py-2 rounded-lg'
          onClick={handleButtonClick}
          >{button}</button>
        </div>
      </div>
    </section>
  )
}

export default ManageClient