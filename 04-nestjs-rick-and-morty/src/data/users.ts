"use server";

import { db } from "@/db"
import { UserInsert, UserSelect, user } from "@/db/schema"
import { eq } from "drizzle-orm";
import { User } from "next-auth";
import { compare, genSalt, hash } from "bcrypt-ts";

type Username = Pick<UserSelect, "username">

export const getUserByUsername = async (username: string):Promise<Username | null>  => {
    try {
        const res = await db.select({
            username: user.username
        })
        .from(user)
        .where(eq(user.username, username))

        return res[0];    
    } catch(error){
        console.log(error)
        return null;
    }
}

export const getUserByNameAndPass = async ({
    username,
    password
}: UserInsert): Promise<User | null> => {
    try {

        const userData = await db.select()
        .from(user)
        .where(eq(user.username, username))   
        
        const correctPassword = await compare(password, userData[0].password)

        if(!correctPassword){
            throw new Error("incorrect password")
        }

        return {
            id: userData[0].userId.toString(),
            name: userData[0].username
        };    
    } catch(error){
        console.log(error)
        return null;
    }
}

export const createUser = async ({
    username,
    password
}: UserInsert):Promise<Username | null> =>  {
    try {
        const salt = await genSalt(10)
        const hashedPassword = await hash(password, salt);

        const res = await db.insert(user)
        .values({
            username,
            password: hashedPassword
        })
        .returning({username: user.username})

        return res[0];
    
    } catch(error){
        console.log(error)
        return null;
    }
}