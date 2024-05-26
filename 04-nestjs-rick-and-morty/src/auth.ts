import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { getUserByNameAndPass } from './data/users'
import { signupSchema } from './schemas/signupschema'

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  providers: [
    CredentialsProvider({
      credentials: {
        username: {},
        password: {},
      },
      authorize: async (credentials) => {
        if (!credentials) return null

        const { username, password } =
          await signupSchema.parseAsync(credentials)

        const user = await getUserByNameAndPass({
          username,
          password,
        })

        return user
      },
    }),
  ],
})
