import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva } from "class-variance-authority";
import {
  ChevronsLeft,
  Layers2,
  Home,
  ShoppingBasket,
  CopyPlus,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "./button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./card";

import { cn } from "@/lib/utils";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 dark:bg-slate-950",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
);

const SheetContent = React.forwardRef(
  ({ side = "right", className, ...props }, ref) => (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        ref={ref}
        className={cn(sheetVariants({ side }), className)}
        {...props}
      >
        {/* Drawer close button */}
        <SheetPrimitive.Close className="absolute right-4 top-2 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:rotate-180 dark:data-[state=open]:bg-slate-800">
          <motion.div
            className="w-full h-full data-[state=open]:rotate-180 transition-all ease duration-300"
            initial={{ rotate: 180 }}
            animate={{ rotate: 0 }}
            exit={{ rotate: 0 }}
          >
            <ChevronsLeft className="h-7 w-7 transition duration-300" />
            <span className="sr-only">Close</span>
          </motion.div>
        </SheetPrimitive.Close>

        <nav className="md:hidden w-full flex flex-col justify-center items-center text-lg font-medium">
          <SheetPrimitive.Close
            asChild
            className="w-full mb-2 z-10 flex items-center"
          >
            <Link href="/" className="text-lg font-semibold">
              <Layers2 className="h-6 w-6 m-2" />
              <span className="text-2xl">MenuQ</span>
              <span className="font-light text-sm">.io</span>
            </Link>
          </SheetPrimitive.Close>

          <SheetPrimitive.Close
            asChild
            className="mx-[-0.65rem] my-2 z-10 w-full flex items-center gap-4 px-3 py-2"
          >
            <Link
              href="/"
              className="w-full font-medium flex items-center text-muted-foreground"
            >
              <Home className="h-6 w-6 mr-2" />
              Overview
            </Link>
          </SheetPrimitive.Close>

          <div className="w-full h-[1px] border-b rounded-lg"></div>

          <SheetPrimitive.Close
            asChild
            className="mx-[-0.65rem] my-2 z-10 w-full flex items-center gap-4 px-3 py-2"
          >
            <Link
              href="/menu-items"
              className="w-full font-medium flex items-center text-muted-foreground"
            >
              <ShoppingBasket className="h-6 w-6 mr-2" />
              Menu items
            </Link>
          </SheetPrimitive.Close>

          <div className="w-full h-[1px] border-b rounded-lg"></div>

          <SheetPrimitive.Close
            asChild
            className="mx-[-0.65rem] my-2 z-10 w-full flex items-center gap-4 px-3 py-2"
          >
            <Link
              href="/update-menu"
              className="w-full font-medium flex items-center text-muted-foreground"
            >
              <CopyPlus className="h-6 w-6 mr-2" />
              Update menu
            </Link>
          </SheetPrimitive.Close>

          <div className="w-full h-[1px] border-b rounded-lg"></div>
        </nav>

        {/* Subscription card drawer */}
        <div className="w-full">
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
      </SheetPrimitive.Content>
    </SheetPortal>
  )
);
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({ className, ...props }) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({ className, ...props }) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold text-slate-950 dark:text-slate-50",
      className
    )}
    {...props}
  />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-slate-500 dark:text-slate-400", className)}
    {...props}
  />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
