interface TextAreaProps {
    name: string
    placeholder: string
}

export function TextArea({
    name,
    placeholder
}: TextAreaProps){
    return (
        <textarea
            className="px-3 py-2 w-full border border-gray-300" 
            name={name}
            id={name}
            placeholder={placeholder}
        />
    )
}