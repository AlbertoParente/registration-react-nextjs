import { useEffect, useState } from "react"
import Client from "../core/Client"
import ClientRepository from "../core/ClientRepository"
import CollectionClient from "../firebase/db/CollectionClient"
import UseTableOrForm from "./useTableOrForm"

export default function useClients() {
    const repository: ClientRepository = new CollectionClient()
    const { showTable, showForm } = UseTableOrForm()
    const [client, setClient] = useState<Client>(Client.empty())
    const [clients, setClients] = useState<Client[]>([])

    useEffect(getAll, [])

    function getAll() {
        repository.getAll().then(clients => {
            setClients(clients)
            showTable()
        })
    }

    function selectedClient(client: Client) {
        setClient(client)
        showTable()
    }

    async function deletedClient(client: Client) {
        await repository.delete(client)
        getAll()
    }

    function newClient() {
        setClient(Client.empty())
        showForm()
    }

    async function saveClient(client: Client) {
        await repository.save(client)
        getAll()
    }

    return {
        client,
        clients,
        newClient,
        saveClient,
        deletedClient,
        selectedClient,
        getAll,
        showTable,
        showForm
    }
}
