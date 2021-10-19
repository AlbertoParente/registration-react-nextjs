import Layout from '../components/Layout'
import Table from '../components/Table'
import Client from '../core/Client'
import Button from '../components/Button'
import Formulary from '../components/Formulary'
import { useEffect, useState } from 'react'
import ClientRepository from '../core/ClientRepository'
import CollectionClient from '../firebase/db/CollectionClient'

export default function Home() {

  const repository: ClientRepository = new CollectionClient()
  const [client, setClient] = useState<Client>(Client.empty())
  const [clients, setClients] = useState<Client[]>([])
  const [visible, setVisible] = useState<'table' | 'form'>('table')

  useEffect(getAll, [])
  
  function getAll() {
    repository.getAll().then(clients => {
      setClients(clients)
      setVisible('table')
    })
  }

  function clientSelected(client: Client) {
    setClient(client)
    setVisible('form')
  }

  async function clientDeleted(client: Client) {
    await repository.delete(client)
    getAll()
  }

  function newClient() {
    setClient(Client.empty())
    setVisible('form')
  }
  
  async function saveClient(client: Client) {
    await repository.save(client)
    getAll()
  }

  return (
    <div className={`
    flex h-screen justify-center items-center
    bg-gradient-to-r from-purple-500 to-blue-600
    text-white
    `}>
      <Layout title="Simple Registration">
        {visible === 'table' ? (
          <>
            <div className="flex justify-end">
              <Button color="green" className="mb-4"
                onClick={newClient}>
                New Client
              </Button>
            </div>
            <Table clients={clients}
              clientSelected={clientSelected}
              clientDeleted={clientDeleted} />
          </>
        ) : (
          <Formulary client={client}
          clientChanged={saveClient}
            cancel={() => setVisible('table')}
          />
        )}
      </Layout>
    </div>
  )
}
