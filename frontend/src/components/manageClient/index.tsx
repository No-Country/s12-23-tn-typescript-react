import { TbSearch } from 'react-icons/tb'
function ManageClient() {
  return (
    <div className='flex flex-col gap-4 bg-black bg-opacity-80 px-4 py-4 md:px-12'>
      <h3 className='font-bold text-3xl text-[#F5F1EA]'>Gestion de clientes</h3>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col gap-2 w-52 md:flex-row md:w-auto'>
          <div className='flex items-center border bg-white border-gray-300 rounded p-1 w-full md:w-52'>
            <input
              className='outline-none py-1'
              type="text"
              placeholder='Buscar cliente'
            />
            <div className=''>
              <TbSearch className='text-gray-800 text-xl' />
            </div>
          </div>
          <button 
            className='bg-[#354762] text-[#FFFDFD] w-full py-2 rounded-lg md:w-52'>
              Buscar
          </button>
        </div>
        <div>
          <button className='bg-[#354762] text-[#FFFDFD] w-52 py-2 rounded-lg'>Agregar Cliente</button>
        </div>
      </div>
    </div>
  )
}

export default ManageClient