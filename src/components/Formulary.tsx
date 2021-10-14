import Input from './Input'

interface FormularyToProps {

}

export default function Formulary(props: FormularyToProps) {
    return (
        <div>
            <Input text="name" value="test"  />
        </div>
    )
}
