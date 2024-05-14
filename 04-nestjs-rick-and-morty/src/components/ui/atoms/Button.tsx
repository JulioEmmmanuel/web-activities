interface ButtonProps {
    text: string
}

export function Button({
    text
}: ButtonProps){
    return (
        <button 
            className="bg-emerald-700 text-white w-2/3 mx-auto px-10 py-2 rounded-xl mt-3"
            type='submit'
        >
            {text}
        </button>
    )
}