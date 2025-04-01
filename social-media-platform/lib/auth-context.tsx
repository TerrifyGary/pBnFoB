"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type User = {
  id: string
  name: string
  email: string
  avatar?: string
}

type AuthContextType = {
  user: User | null
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (name: string, email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const signIn = async (email: string, password: string) => {
    // This is a mock implementation
    // In a real app, you would call your authentication API
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        // Mock validation
        if (email === "user@example.com" && password === "password") {
          const user = {
            id: "1",
            name: "John Doe",
            email: "user@example.com",
            avatar: "/placeholder.svg?height=40&width=40",
          }
          setUser(user)
          localStorage.setItem("user", JSON.stringify(user))
          resolve()
        } else {
          reject(new Error("Invalid credentials"))
        }
      }, 1000)
    })
  }

  const signUp = async (name: string, email: string, password: string) => {
    // This is a mock implementation
    // In a real app, you would call your registration API
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const user = {
          id: "1",
          name,
          email,
          avatar: "/placeholder.svg?height=40&width=40",
        }
        setUser(user)
        localStorage.setItem("user", JSON.stringify(user))
        resolve()
      }, 1000)
    })
  }

  const signOut = async () => {
    // This is a mock implementation
    // In a real app, you would call your logout API
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setUser(null)
        localStorage.removeItem("user")
        resolve()
      }, 500)
    })
  }

  return <AuthContext.Provider value={{ user, isLoading, signIn, signUp, signOut }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

