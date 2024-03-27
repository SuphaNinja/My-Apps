import { SectionProps } from "@/lib/types";
import { Fragment } from "react";
export default function MiddleSection({ children, className }: SectionProps) {
  return (
    <div
      className={
        className ? className : "col-span-6 border-x-1 h-full border-slate-500"
      }
    >
      {children}
    </div>
  );
}
