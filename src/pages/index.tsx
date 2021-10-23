import Layout from '../components/Layout'
import Table from '../components/Table'
import Button from '../components/Button'
import Formulary from '../components/Formulary'
import useClients from '../hooks/useClients'

export default function Home() {
  const {
    client,
    clients,
    newClient,
    saveClient,
    deletedClient,
    selectedClient,
    showTable,
    showForm } = useClients()

  return (
    <div className={`flex h-screen justify-center 
      items-center bg-gradient-to-r from-purple-500 
      to-blue-600 text-white
    `}>
      <Layout title="Simple Registration">
        {showTable ? (
          <>
            <div className="flex justify-end">
              <Button color="green" className="mb-4"
                onClick={newClient}>
                New Client
              </Button>
            </div>
            <Table clients={clients}
              clientSelected={selectedClient}
              clientDeleted={deletedClient} />
          </>
        ) : (
          <Formulary client={client}
            clientChanged={saveClient}
            cancel={showForm}
          />
        )}
      </Layout>
    </div>
  )
}
