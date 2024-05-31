import Link from "next/link";
import { Home, ShoppingBasket, CopyPlus, Layers2 } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ResponsiveNavLink from "./responsive-nav-link";

export default function Navbar() {
  return (
    <>
      <div className="hidden md:flex w-full h-full max-h-full flex-col">
        <div className="flex items-center border-b p-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center font-semibold">
            <Layers2 className="h-8 w-8" />
            <span className="text-2xl font-bold ml-3">MenuQ</span>
            <span className="font-light p-1 text-sm">.io</span>
          </Link>
        </div>
        <div className="flex flex-col w-full h-full justify-between">
          <nav className="flex flex-col items-center px-2 text-sm font-medium lg:px-4">
            <ResponsiveNavLink
              icon={<Home className="h-7 w-7" />}
              text="Overview"
              link="/"
            />

            <div className="w-full h-[1px] border-b rounded-lg"></div>

            <ResponsiveNavLink
              icon={<ShoppingBasket className="h-7 w-7" />}
              text="Menu items"
              link="/menu-items"
            />

            <div className="w-full h-[1px] border-b rounded-lg"></div>

            <ResponsiveNavLink
              icon={<CopyPlus className="h-7 w-7" />}
              text="Update menu"
              link="/update-menu"
            />
            <div className="w-full h-[1px] border-b rounded-lg"></div>
          </nav>

          {/* Subscription card drawer */}
          <div className="w-full p-1 mb-8">
            <Card
              x-chunk="dashboard-02-chunk-0"
              className="p-2 w-full flex flex-row justify-around items-center rounded-none"
            >
              <CardHeader className="p-2">
                <CardDescription className="text-center font-bold text-lg">
                  Basic
                </CardDescription>
                <CardDescription className="text-xs">
                  *free / no-cost
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full font-light shadow-md shadow-gray-300 active:scale-[0.90] active:shadow-sm ease transition-all duration-300"
                >
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
