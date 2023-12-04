import { TbSearch } from 'react-icons/tb'
function ManageClient() {
  return (
    <div>
      <h3>Gestion de clientes</h3>
      <div className='flex items-center justify-between'>
        <div className='flex-col gap-2 md:flex md:flex-row'>
          <div className='flex items-center border border-gray-300 rounded p-2'>
            <input
              className='outline-none px-2 py-1 flex-grow'
              type="text"
              placeholder='Buscar cliente'
            />
            <div className='ml-2'>
              <TbSearch className='text-gray-800 text-xl' />
            </div>
          </div>
          <button className='bg-[#354762] text-[#FFFDFD] px-2 py-1 rounded-md'>Buscar</button>
        </div>
        <div>
          <button className='bg-[#354762] text-[#FFFDFD] px-2 py-1 rounded-md'>Agregar Cliente</button>
        </div>
      </div>
    </div>
  )
}

export default ManageClient