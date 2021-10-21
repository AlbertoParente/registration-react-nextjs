import { useState } from 'react'
import Client from "../core/Client"
import Button from './Button'
import Input from './Input'

interface FormularyToProps {
    client: Client
    clientChanged?: (client: Client) => void
    cancel?: () => void
}


export default function Formulary(props: FormularyToProps) {
    const id = props.client?.id
    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? 0)

    return (
        <div>
            {id ? (
                <Input readToOnly text="Code" value={id} className="mb-5" />
            ) : false}
            <Input text="name" value={name} newValue={setName} className="mb-5" />
            <Input text="Age" type="number" value={age} newValue={setAge} />
            <div className="flex justify-end mt-7">
                <Button color="blue" className="mr-2" onClick={() => props.clientChanged?.(new Client(name, +age, id))} >
                    {id ? 'Alter' : 'Save'}
                </Button>
                <Button onClick={props.cancel}>
                    Cancel
                </Button>
            </div>
        </div>
    )
}
