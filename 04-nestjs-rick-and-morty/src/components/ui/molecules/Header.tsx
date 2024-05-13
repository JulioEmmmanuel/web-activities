import Link from "next/link"

interface HeaderProps {
    title: string
    url: string
}

export function Header({
    title,
    url
}: HeaderProps){
    return (
        <header className="h-36 w-full flex items-center justify-end bg-teal-600">
            <Link className="mr-16 text-white font-bold" href={url}>
                {title}
            </Link>
        </header>
    )
}