"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  //   SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SearchIcon, SlidersHorizontalIcon } from "lucide-react";

export default function MovieSelectors() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex w-full items-center space-x-2 md:w-1/2">
        <SearchIcon className=" h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search movies.." className="h-9" />
      </div>
      <div className="flex items-center gap-2">
        <Select>
          <SelectTrigger className="h-9 w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button variant="outline" size="sm" className="h-9">
          <SlidersHorizontalIcon className=" mr-2 h-4 w-4" /> Filters
        </Button>
      </div>
    </div>
  );
}
