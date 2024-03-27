import { SectionProps } from "@/lib/types";
import { Fragment } from "react";

export default function RightSection({ children, className }: SectionProps) {
  return (
    <Fragment>
      {children && (
        <div className={className ? className : "h-full col-span-3"}>
          {children}
        </div>
      )}
    </Fragment>
  );
}
