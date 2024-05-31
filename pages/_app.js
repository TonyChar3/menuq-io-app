import "@/styles/globals.css";
import { ChevronRight, CircleUser, Layers2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Navbar from "./components/navbar";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [page_name, setPageName] = useState("");

  useEffect(() => {
    switch (router.asPath) {
      case "/":
        setPageName("Overview")
        break;
      case "/menu-items":
        setPageName("Menu Items")
        break;
      case "/update-menu":
        setPageName("Update menu")
        break;
      default:
        break;
    }
  }, [router.asPath])

  return (
    <> 
      <div className="grid min-h-full w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <Navbar />
      </div>
      <div className="w-full flex flex-col">
        <header className="flex w-full h-14 justify-between items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 shadow-md shadow-gray-300">
          <Sheet>
            <SheetTrigger asChild>
                <div
                  className="md:hidden mx-2 flex items-center data-[state=open]:translate-x-[80px] transition-all ease duration-300"
                >
                  <Layers2 className="h-8 w-8" />
                  <ChevronRight className="h-7 w-7" />
                  <span className="sr-only">Toggle navigation menu</span>
                </div>
            </SheetTrigger>

            {/* Mobile nav drawer */}
            <SheetContent side="left" className="flex flex-col items-center justify-between p-2" />
          </Sheet>
          
          <div 
            className="hidden md:flex flex-row items-center transition-all ease duration-300"
          >
            <div className="w-[4px] h-8 mr-2 bg-black"></div>
            <h1 className="font-bold text-3xl">
              {page_name}
            </h1>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full bg-white">
                <CircleUser className="h-7 w-7" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
            <DropdownMenuItem>My profile</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        {/* Main content of the dashboard */}
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <Component {...pageProps} />
        </main>
      </div>
    </div>
    </>
  )
}
