import Table from '../../components/table/table'
import ManageClient from '../../components/manageClient'
import MenuContent from '../../components/header/menuContent'

export default function Clients() {

  return (
    <>
      <MenuContent>
        <section className="w-full p-0 lg:pt-4 lg:px-12 flex flex-col gap-8 ">
          <ManageClient/>
            <Table />
        </section>
      </MenuContent>
    </>
  )
}
