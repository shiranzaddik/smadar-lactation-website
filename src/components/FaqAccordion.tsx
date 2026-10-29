"use client";

import { useState } from "react";
import { Icon } from "./Icon";

interface Item {
  q: string;
  a: string;
}

export function FaqAccordion({ items }: { items: ReadonlyArray<Item> }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className="overflow-hidden rounded-2xl border border-beige-200/70 bg-white/80 shadow-card"
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-start"
              >
                <span className="font-heading text-base font-bold text-ink sm:text-lg">
                  {item.q}
                </span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-600 transition-transform duration-300 ${
                    isOpen ? "rotate-90" : "-rotate-90"
                  }`}
                >
                  <Icon name="arrow" className="h-4 w-4" />
                </span>
              </button>
            </h3>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 leading-relaxed text-ink-light">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
