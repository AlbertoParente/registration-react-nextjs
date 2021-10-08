export default class Client {
    #id: string
    #name: string
    #age: number
    #address: string
    #numberAddress: number

    constructor(numberAddress: number, address: string, name: string, age: number, id: string = null) {
        this.#name = name
        this.#age = age
        this.#id = id
        this.#address = address
        this.#numberAddress = numberAddress

    }

    static empty() {
        return new Client('', 0)
    }

    get id() {
        return this.#id
    }

    get name() {
        return this.#name
    }

    get age() {
        return this.#age
    }

    get address() {
        return this.#address
    }

    get numberAddress() {
        return this.#numberAddress
    }
}
