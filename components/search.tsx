import { Search as SearchIcon, X } from "lucide-react";

import { SearchBar } from "@/components/searchbar";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function Search() {
  return (
    <>
      <div className="mx-auto hidden max-w-lg items-center space-x-2 rounded-lg border px-3 py-1 sm:flex md:w-80 lg:min-w-65 xl:w-7xl">
        <SearchBar />
      </div>
      <div className="flex sm:hidden">
        <Drawer direction="top">
          <DrawerTrigger>
            <SearchIcon />
          </DrawerTrigger>
          <DrawerContent className="mt-6 flex min-h-screen items-center">
            <div className="flex items-center space-x-4">
              <div className="flex w-64 items-center space-x-2 rounded-lg border px-3 py-1">
                <SearchBar />
              </div>
              <DrawerClose>
                <X />
              </DrawerClose>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}
