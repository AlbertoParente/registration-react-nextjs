interface InputToProps {
    type?: 'text' | 'number'
    text: string
    value: any
    readToOnly?: boolean
}

export default function Input(props: InputToProps) {
    return (
        <div className="flex flex-col">
            <label className="mb-4">
                {props.text}
            </label>
            <input type={props.type ?? 'text'} 
                value={props.value}
                readOnly={props.readToOnly} 
                className={`
                    border border-purple-500 rounded-lg
                    focus:outline-none bg-gray-100
                    px-4 py-2 ${props.readToOnly ? '' : 'focus:bg-white'}
                `} />
        </div>
    )
}
