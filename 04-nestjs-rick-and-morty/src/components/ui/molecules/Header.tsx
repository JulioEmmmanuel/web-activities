import Link from "next/link"

interface HeaderProps {
    titles: string[]
    urls: string[]
}

export function Header({
    titles,
    urls
}: HeaderProps){
    return (
        <header className="h-36 w-full flex items-center justify-end bg-teal-600">
            {titles.map((title, index) => (
                <Link 
                    key={title}
                    className="mr-16 text-white font-bold" 
                    href={urls[index]}
                >
                    {title}
                </Link>
            ))}
        </header>
    )
}