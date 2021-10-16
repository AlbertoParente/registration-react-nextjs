import Layout from '../components/Layout'
import Table from '../components/Table'
import Client from '../core/Client'
import Button from '../components/Button'
import Formulary from '../components/Formulary'
import { useState } from 'react'

export default function Home() {
  const [client, setClient] = useState<Client>(Client.empty())
  const [visible, setVisible] = useState<'table' | 'form'>('table')

  const clients = [
    new Client('Alberto', 29, '1'),
    new Client('Juliana', 25, '2'),
    new Client('Julia', 1, '3'),
    new Client('Alice', 2, '4'),
  ]

  function clientSelected(client: Client) {
    setClient(client)
    setVisible('form')
  }

  function clientDeleted(client: Client) {

  }

  function saveClient(client: Client) {
    setVisible('table')
  }

  function newClient() {
    setClient(Client.empty())
    setVisible('form')
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
