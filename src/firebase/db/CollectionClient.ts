import firebase from '../config'
import Client from "../../core/Client";
import ClientRepository from "../../core/ClientRepository";

export default class CollectionClient implements ClientRepository {
    
    #conversor = {
        toFirestore(client: Client) {
            return {
                name: client.name,
                age: client.age
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Client {
            const dados = snapshot.data(options)
            return new Client(dados.name, dados.age, snapshot.id)
        }
    }
    
    async save(client: Client): Promise<Client> {
        return null
    }

    async delete(client: Client): Promise<void> {
        return null
    }

    async getAll(): Promise<Client[]> {
        return null
    }
}
