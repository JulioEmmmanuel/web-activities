interface CardTextProps {
    text: string
}

export function CardText({
    text
}: CardTextProps){
    return <p className="text-md">{text}</p>
}