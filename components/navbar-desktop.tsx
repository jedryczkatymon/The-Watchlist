import { Bookmark } from "lucide-react";
import * as React from "react";

import { LoginButton } from "@/components/login-button";
import { SignupButton } from "@/components/signup-button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function NavbarDesktop() {
  return (
    <div className="hidden lg:flex">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/watchlists"
              className="flex flex-row items-center px-4 font-semibold"
            >
              <Bookmark className="text-foreground mr-1 size-4" /> Watchlists
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="mt-1 ml-4 flex gap-4">
        <SignupButton />
        <LoginButton />
      </div>
    </div>
  );
}
