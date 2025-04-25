"use client";

import { Popcorn } from "lucide-react";
import Avatars from "./ui/Avatars";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="header mb-5">
      <div className="flex items-center gap-10">
        <div>
          <Avatars text="F" color="bg-black" />
        </div>
        <div className="buttons-header flex items-center gap-2">
          <Button
            variant="default"
            className=""
          >
            <Popcorn className="size-4" />
            <p>Lorem</p>
          </Button>

          <Button
            variant="outline"
            className="bg-neutral-50 hover:bg-neutral-200"
          >
            <Popcorn className="size-4" />
            <p>Lorem</p>
          </Button>

          <Button
            variant="outline"
            className="bg-neutral-50 hover:bg-neutral-200"
          >
            <Popcorn className="size-4" />
            <p>Lorem</p>
          </Button>

          <Button
            variant="outline"
            className="bg-neutral-50 hover:bg-neutral-200"
          >
            <Popcorn className="size-4" />
            <p>Lorem</p>
          </Button>

          <Button
            variant="outline"
            className="bg-neutral-50 hover:bg-neutral-200"
          >
            <Popcorn className="size-4" />
            <p>Lorem</p>
          </Button>

          <Button
            variant="outline"
            className="bg-neutral-50 hover:bg-neutral-200"
          >
            <Popcorn className="size-4" />
            <p>Lorem</p>
          </Button>
        </div>
      </div>
    </div>
  );
}
