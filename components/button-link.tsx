import Link from "next/link";

import { Button } from "@/components/ui/button";

export function ButtonLink(
  variant:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined,
  href: string,
  message: string,
) {
  return (
    <Button asChild variant={variant}>
      <Link href={href}>{message}</Link>
    </Button>
  );
}
