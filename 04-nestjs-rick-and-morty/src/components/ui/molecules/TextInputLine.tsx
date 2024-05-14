import { TextInput } from "../atoms/TextInput"

interface TextInputLineProps {
    title: string
    name: string
    placeholder: string
}

export function TextInputLine({
    title,
    name,
    placeholder
}: TextInputLineProps){
    return (
        <div className="flex justify-between w-full mt-3 gap-x-5">
            <label htmlFor={title}>{title}</label>
            <TextInput
                name={name}
                placeholder={placeholder}
            />
        </div>
    )
}