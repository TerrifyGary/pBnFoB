"use client"

import { useTheme } from "next-themes"
import Image from "next/image"

type LogoVariant = "default" | "alt1" | "alt2"

export function SiteLogo({
  className = "",
  variant = "default",
}: {
  className?: string
  variant?: LogoVariant
}) {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  // Choose the logo file based on variant
  const logoFile = variant === "default" ? "/favicon-16x16.png" : variant === "alt1" ? "/logo-alt1.svg" : "/logo-alt2.svg"

  return (
    <div className={`relative h-6 w-6 ${className}`}>
      <div className={`h-full w-full ${isDark ? "text-white" : "text-black"}`}>
        <Image
          src={logoFile || "/placeholder.svg"}
          alt="SocialConnect Logo"
          width={24}
          height={24}
          className="object-contain"
          priority
        />
      </div>
    </div>
  )
}

