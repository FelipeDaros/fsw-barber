import { MenuIcon } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import Image from "next/image"

export const Header = () => {
  return(
    <Card>
      <CardContent className="p5- flex flex-row items-center justify-between">
        <Image alt="FSW Barber" src="/logo.png" height={18} width={120}/>
        <Button size="icon" variant="outline">
            <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  )
}