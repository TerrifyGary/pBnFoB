"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { Home, User, LogOut } from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SiteLogo } from "@/components/site-logo"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function FeedLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { user, isLoading, signOut } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/signin")
    }
  }, [user, isLoading, router])

  if (isLoading || !user) {
    return <div className="flex h-screen items-center justify-center">Loading...</div>
  }

  const handleSignOut = async () => {
    await signOut()
    router.push("/")
  }

  // Generate breadcrumb items based on the current path
  const generateBreadcrumbItems = () => {
    const paths = pathname.split("/").filter(Boolean)
    return paths.map((path, index) => {
      const href = `/${paths.slice(0, index + 1).join("/")}`
      return {
        href,
        label: path.charAt(0).toUpperCase() + path.slice(1),
      }
    })
  }

  const breadcrumbItems = generateBreadcrumbItems()

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <Link href="/feed" className="flex items-center space-x-2">
            <SiteLogo />
            <span className="text-xl font-bold">SocialConnect</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/feed/profile">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Button variant="ghost" size="icon" onClick={handleSignOut}>
              <LogOut className="h-5 w-5" />
            </Button>
            <Link href="/feed/profile">
              <Avatar>
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </Link>
          </div>
        </div>
        <div className="container py-2">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/feed">
                  <Home className="mr-1 h-4 w-4" />
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              {breadcrumbItems.map((item, index) => (
                <>
                  <BreadcrumbSeparator key={`sep-${index}`} />
                  <BreadcrumbItem key={`item-${index}`}>
                    <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                  </BreadcrumbItem>
                </>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-6">{children}</div>
      </main>
    </div>
  )
}

