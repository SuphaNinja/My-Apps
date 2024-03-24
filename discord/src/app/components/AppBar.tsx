import { Button, Navbar, NavbarContent, NavbarItem } from "@nextui-org/react"
import AppBarButtons from "./AppBarButtons";
import Link from "next/link";


export const AppBar = () => {
  
    return (
        <Navbar isBordered maxWidth="full">
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link className="hover:underline hover:text-sky-600 transition-colors text-xl" color="foreground" href="/">
              Home
            </Link>
          </NavbarItem> 
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <AppBarButtons />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    )
}