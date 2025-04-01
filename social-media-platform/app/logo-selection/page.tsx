"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteLogo } from "@/components/site-logo"
import { LogoShowcase } from "@/components/logo-showcase"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

export default function LogoSelectionPage() {
  const { toast } = useToast()
  const [selectedLogo, setSelectedLogo] = useState<string>("default")

  const handleLogoSelect = (variant: string) => {
    setSelectedLogo(variant)
    toast({
      title: "Logo Selected",
      description: `You've selected the ${variant} logo design.`,
    })
  }

  return (
    <div className="container flex min-h-screen items-center justify-center py-8">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle className="text-2xl">Choose Your Logo</CardTitle>
          <CardDescription>Select a logo design for your SocialConnect platform</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <LogoShowcase />

          <div className="grid grid-cols-3 gap-4">
            <Button
              variant={selectedLogo === "default" ? "default" : "outline"}
              className="flex items-center justify-center gap-2"
              onClick={() => handleLogoSelect("default")}
            >
              <SiteLogo variant="default" />
              <span>Select</span>
            </Button>
            <Button
              variant={selectedLogo === "alt1" ? "default" : "outline"}
              className="flex items-center justify-center gap-2"
              onClick={() => handleLogoSelect("alt1")}
            >
              <SiteLogo variant="alt1" />
              <span>Select</span>
            </Button>
            <Button
              variant={selectedLogo === "alt2" ? "default" : "outline"}
              className="flex items-center justify-center gap-2"
              onClick={() => handleLogoSelect("alt2")}
            >
              <SiteLogo variant="alt2" />
              <span>Select</span>
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" asChild>
            <Link href="/">Back to Home</Link>
          </Button>
          <Button asChild>
            <Link href="/feed">Continue with Selected Logo</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

