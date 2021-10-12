import Layout from '../components/Layout'
import Table from '../components/Table'
import Client from '../core/Client'

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
        <Table clients={clients} 
          clientSelected={clientSelected}
          clientDeleted={clientDeleted} />
      </Layout>
    </div>
  )
}
