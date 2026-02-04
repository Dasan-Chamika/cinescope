"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useRef, useDeferredValue } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SearchIcon, SlidersHorizontalIcon } from "lucide-react";

export default function MovieSelectors() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const isFirstRender = useRef(true);

  const initialQuery = searchParams.get("q") || "";
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const deferredSearchTerm = useDeferredValue(searchTerm);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const params = new URLSearchParams(searchParams.toString());

    if (deferredSearchTerm) {
      params.set("q", deferredSearchTerm);
    } else {
      params.delete("q");
    }

    router.push(`${pathname}?${params.toString()}`);
  }, [deferredSearchTerm, searchParams, pathname, router]);

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex w-full items-center space-x-2 md:w-1/2">
        <SearchIcon className="h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search movies..."
          className="h-9"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex items-center gap-2">
        <Select>
          <SelectTrigger className="h-9 w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent align="start">
            <SelectGroup>
              {/* <SelectLabel>Status</SelectLabel> */}
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button variant="outline" size="sm" className="h-9">
          <SlidersHorizontalIcon className="mr-2 h-4 w-4" /> Filters
        </Button>
      </div>
    </div>
  );
}
