"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { toast } from "sonner";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Button variant="default" onClick={() => toast.success("Hi Piku!")}>Click Me</Button>
    </div>
  );
}