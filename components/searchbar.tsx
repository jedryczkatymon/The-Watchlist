import { Search as SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";

export function SearchBar() {
  return (
    <>
      <SearchIcon />
      <Input
        placeholder="Search a movie or an actor"
        className="h-8 w-full border-none font-semibold focus-visible:ring-0"
      />
    </>
  );
}
