import {
  Film,
  MenuIcon,
  Monitor,
  TrendingUp,
  UsersRound,
  X,
} from "lucide-react";
import Link from "next/link";

import { LoginButton } from "@/components/login-button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function HamburgerMenu() {
  return (
    <div className="flex items-center gap-5">
      <div className="flex lg:hidden">
        <LoginButton />
      </div>
      <Drawer direction="right">
        <DrawerTrigger>
          <MenuIcon className="size-7 cursor-pointer" />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerClose className="flex justify-end">
            <X className="m-5 size-5 cursor-pointer" />
          </DrawerClose>
          <Accordion type="single" collapsible className="mx-auto w-4/5">
            <AccordionSection
              triggerText="Movies"
              triggerIcon={<Film className="mr-10 size-4" />}
            >
              <ListElement href="#" text="Movies" />
              <ListElement href="#" text="TV Shows" />
              <ListElement href="#" text="Actors" />
            </AccordionSection>
            <AccordionSection
              triggerText="TV Series"
              triggerIcon={<Monitor className="mr-10 size-4" />}
            >
              <ListElement href="#" text="Movies" />
              <ListElement href="#" text="TV Shows" />
              <ListElement href="#" text="Actors" />
            </AccordionSection>

            <AccordionSection
              triggerText="People"
              triggerIcon={<UsersRound className="mr-10 size-4" />}
            >
              <ListElement href="#" text="Movies" />
              <ListElement href="#" text="TV Shows" />
              <ListElement href="#" text="Actors" />
            </AccordionSection>

            <AccordionSection
              triggerText="Trending"
              triggerIcon={<TrendingUp className="mr-10 size-4" />}
            >
              <ListElement href="#" text="Movies" />
              <ListElement href="#" text="TV Shows" />
              <ListElement href="#" text="Actors" />
            </AccordionSection>
          </Accordion>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export function ListElement({ text, href }: { text: string; href: string }) {
  return (
    <li>
      <Link href={href} className="z-10 block hover:underline">
        {text}
      </Link>
    </li>
  );
}

export function AccordionSection({
  triggerText,
  triggerIcon,
  children,
}: {
  triggerText: string;
  triggerIcon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <AccordionItem value={triggerText.toLowerCase()}>
      <AccordionTrigger className="flex items-center px-4 py-5 font-medium">
        <span className="flex items-center">
          {triggerIcon}
          {triggerText}
        </span>
      </AccordionTrigger>
      <AccordionContent>
        <ul className="z-10 space-y-2 px-4 py-2">{children}</ul>
      </AccordionContent>
    </AccordionItem>
  );
}
