import Layout from '../components/Layout'
import Table from '../components/Table'
import Client from '../core/Client'
import Button from '../components/Button'
import Formulary from '../components/Formulary'

export default function Home() {
  const clients = [
    new Client('Alberto', 29, '1'),
    new Client('Juliana', 25, '2'),
    new Client('Julia', 1, '3'),
    new Client('Alice', 2, '4'), 
  ]

  function clientSelected(client : Client) {
    
  }

  function clientDeleted(client : Client) {

  }
  
  return (
    <div className={`
    flex h-screen justify-center items-center
    bg-gradient-to-r from-purple-500 to-blue-600
    text-white
    `}>
      <Layout title="Simple Registration">
        <div className="flex justify-end">
          <Button color="blue" className="mb-4">New Client</Button>
        </div>
        <Table clients={clients} 
          clientSelected={clientSelected}
          clientDeleted={clientDeleted} />
      </Layout>
      <Formulary client={clients[1]}></Formulary>
    </div>
  )
}
