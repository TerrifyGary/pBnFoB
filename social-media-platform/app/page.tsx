"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SiteLogo } from "@/components/site-logo"
import { useEffect, useState } from "react"

export default function WelcomePage() {
  // Use client-side rendering for animations
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between padding-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <SiteLogo />
            <span className="text-xl font-bold">SocialConnect</span>
          </Link>
          <div className="flex items-center space-x-2">
            <Link href="/signin">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex flex-1 w-full items-center justify-center overflow-hidden">
        <section className="w-full flex flex-col items-center justify-center gap-6">
          <div className="flex max-w-[980px] flex-col items-center gap-2 px-4 text-center">
            <h1 className="text-center text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl lg:text-5xl lg:leading-[1.1]">
              Connect, Share, Engage
            </h1>
            <p className="text-center text-lg text-muted-foreground md:text-xl">
              Join our community and start sharing your thoughts with the world.
            </p>
          </div>

          {/* Only render animations on the client side */}
          {isMounted && (
            <div className="relative h-[250px] w-[90%] max-w-[700px]">
              {/* Original circles with updated positions */}
              <motion.div
                className="absolute left-[10%] top-[30%] h-12 w-12 rounded-full bg-primary"
                animate={{
                  x: [0, 80, 160, 80, 0],
                  y: [0, 20, 0, -20, 0],
                  scale: [1, 1.2, 1, 0.8, 1],
                  rotate: [0, 90, 180, 270, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute right-[10%] top-[40%] h-14 w-14 rounded-full bg-secondary"
                animate={{
                  x: [0, -80, -160, -80, 0],
                  y: [0, -15, 0, 15, 0],
                  scale: [1, 0.8, 1, 1.2, 1],
                  rotate: [0, -90, -180, -270, -360],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
                animate={{
                  scale: [1, 1.5, 1, 0.5, 1],
                  opacity: [0.5, 0.8, 0.5, 0.2, 0.5],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              {/* Additional circles - reduced in size and adjusted positions */}
              <motion.div
                className="absolute left-[25%] top-[20%] h-8 w-8 rounded-full bg-blue-400/70"
                animate={{
                  x: [0, 30, 0, -30, 0],
                  y: [0, -30, -60, -30, 0],
                  scale: [0.8, 1, 1.2, 1, 0.8],
                }}
                transition={{
                  duration: 12,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute right-[25%] bottom-[20%] h-10 w-10 rounded-full bg-green-400/70"
                animate={{
                  x: [0, -40, -20, 20, 0],
                  y: [0, 20, 40, 20, 0],
                  scale: [1, 0.7, 1.1, 0.9, 1],
                }}
                transition={{
                  duration: 15,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              {/* Squares - reduced in size and adjusted positions */}
              <motion.div
                className="absolute left-[15%] bottom-[25%] h-10 w-10 bg-amber-400/70"
                animate={{
                  x: [0, 40, 0, -40, 0],
                  y: [0, -20, -40, -20, 0],
                  rotate: [0, 180, 360, 180, 0],
                  scale: [1, 1.2, 0.8, 1.1, 1],
                }}
                transition={{
                  duration: 14,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute right-[30%] top-[60%] h-8 w-8 bg-rose-400/70"
                animate={{
                  x: [0, -30, -60, -30, 0],
                  y: [0, -30, 0, 30, 0],
                  rotate: [0, -90, -180, -270, -360],
                  scale: [0.9, 1.1, 0.8, 1, 0.9],
                }}
                transition={{
                  duration: 11,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              {/* Triangles - reduced in size and adjusted positions */}
              <motion.div
                className="absolute left-[70%] bottom-[30%] h-10 w-10 bg-indigo-400/70"
                style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                animate={{
                  x: [0, -30, 0, 30, 0],
                  y: [0, 20, 40, 20, 0],
                  rotate: [0, 120, 240, 360, 0],
                  scale: [1, 0.8, 1.2, 0.9, 1],
                }}
                transition={{
                  duration: 16,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute right-[60%] top-[70%] h-9 w-9 bg-orange-400/70"
                style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                animate={{
                  x: [0, 30, 60, 30, 0],
                  y: [0, -20, 0, 20, 0],
                  rotate: [0, -60, -120, -180, -360],
                  scale: [0.7, 1, 0.8, 1.1, 0.7],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </div>
          )}

          <div className="flex justify-center gap-4 mt-2">
            <Link href="/signup">
              <Button size="lg" className="h-11 px-6">
                Get Started
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="h-11 px-6">
                Learn More
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}

