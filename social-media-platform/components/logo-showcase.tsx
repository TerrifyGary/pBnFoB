import { SiteLogo } from "./site-logo"

export function LogoShowcase() {
  return (
    <div className="grid grid-cols-3 gap-8 p-6 bg-card rounded-lg">
      <div className="flex flex-col items-center gap-2">
        <div className="h-16 w-16">
          <SiteLogo className="h-full w-full" variant="default" />
        </div>
        <p className="text-sm font-medium">Network Nodes</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="h-16 w-16">
          <SiteLogo className="h-full w-full" variant="alt1" />
        </div>
        <p className="text-sm font-medium">Chat Bubble</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="h-16 w-16">
          <SiteLogo className="h-full w-full" variant="alt2" />
        </div>
        <p className="text-sm font-medium">Community Circles</p>
      </div>
    </div>
  )
}

