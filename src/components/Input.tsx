interface InputToProps {
    type?: 'text' | 'number'
    text: string
    value: any
    readToOnly?: boolean
    className?: string
    newValue?: (value: any) => void
}

export default function Input(props: InputToProps) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2">
                {props.text}
            </label>
            <input type={props.type ?? 'text'} 
                value={props.value}
                readOnly={props.readToOnly}
                onChange={e => props.newValue?.(e.target.value)}
                className={`
                    border border-purple-500 rounded-lg
                    focus:outline-none bg-gray-100 px-4 py-2 
                    ${props.readToOnly ? '' : 'focus:bg-white'}
                `} />
        </div>
    )
}
