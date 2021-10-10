import Layout from '../components/Layout'
import Table from '../components/Table'

export default function Home() {
  const clients = [
    new ('Alberto', '29', '1'),
    new ('Juliana', '25', '2'),
    new ('Julia', '1', '3'),
    new ('Alice', '2', '4'), 
  ]
  
  return (
    <div className={`
    flex h-screen justify-center items-center
    bg-gradient-to-r from-purple-500 to-blue-600
    text-white
    `}>
      <Layout title="Simple Registration">
        <Table clients={clients} />
      </Layout>
    </div>
  )
}
