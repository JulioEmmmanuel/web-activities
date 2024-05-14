"use client";

import { useFormState } from "react-dom";
import { Button } from "../atoms/Button"
import { TextAreaBlock } from "./TextAreaBlock"
import { TextInputLine } from "./TextInputLine"
import sendComment from "@/actions/sendComment";
import { FormMessage } from "../atoms/FormMessage";

export function Form(){

    const [formState, action] = useFormState(sendComment, {
        message: "",
        error: false
    })

    return (
        <form action={action} name='comments' className='*:mb-3 flex flex-col w-fit mx-auto items-baseline border border-gray-300 shadow-md p-10 my-5'>
            
            <span className='text-xl font-bold text-center w-full my-5'>Comentarios</span>

            <TextInputLine
                title="Nombre"
                name="name"
                placeholder="Nombre"
            />

            <TextInputLine
                title="Tema"
                name="topic"
                placeholder="Tema"
            />

            <TextAreaBlock
                title="Comentarios"
                name="comment"
                placeholder="Ingresa un comentario"
            />

            <Button
                text="Enviar"
            />

            <FormMessage 
                error={formState.error} 
                message={formState.message}
            />
           
        </form>
    )
}