import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { prisma } from "@/lib/prisma";
import NextAuth, { AuthOptions } from "next-auth";
import { DefaultSession } from "next-auth";
import { JWT} from "next-auth/jwt"
import next from "next";

declare module "next-auth" {
  interface Session {
    onboarded: boolean;
    user: {
      id: string;
      role: string;
    } & DefaultSession["user"];
  }
  interface User {}
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: string;
    onboarded: boolean;
  }
}

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        //@ts-ignore
        token.role = user.role;
        //@ts-ignore
        token.onboarded = user.onboarded;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.onboarded = token.onboarded;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const {auth} = NextAuth(authOptions);