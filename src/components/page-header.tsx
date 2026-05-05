import { cn } from "@/lib/utils";
import { SidebarTrigger } from "./ui/sidebar";
import { Button } from "./ui/button";
import Link from "next/link";
import { HeadphonesIcon, ThumbsUp } from "lucide-react";

export function PageHeader({ title, classname }: { title: string; classname?: string }) {
  return (
    <div className={cn("flex items-center justify-between border-b px-4 py-4", classname)}>
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <h1 className="text-lg font-semibold tracking-tight">{title}</h1>
      </div>

      <div className="flex items-center gap-7">
        <Button variant="outline" size="sm" asChild>
          <Link href="mailto:kumbhakarsagnik@gmail.com">
            <ThumbsUp />
            <span className="hidden lg:block">Feedback</span>
          </Link>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <Link href="mailto:kumbhakarsagnik@gmail.com">
            <HeadphonesIcon />
            <span className="hidden lg:block">Need Help?</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
