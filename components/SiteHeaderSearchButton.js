"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import SiteSearchModal from "./SiteSearchModal";

export default function SiteHeaderSearchButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="rounded p-2 text-white transition hover:bg-white/10"
        aria-label="Search the site"
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
      >
        <Search className="h-5 w-5" strokeWidth={1.75} />
      </button>
      <SiteSearchModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
