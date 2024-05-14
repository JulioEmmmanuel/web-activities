import { TextArea } from "../atoms/TextArea"

interface TextAreaBlockProps {
    title: string
    name: string
    placeholder: string
}

export function TextAreaBlock({
    title,
    name,
    placeholder
}: TextAreaBlockProps){
    return (
        <div className="flex flex-col gap-y-2 mt-3 w-full">
            <label className="text-left" htmlFor={name}>{title}</label>
            <TextArea
                name={name}
                placeholder={placeholder}
            />
        </div>
    )
}