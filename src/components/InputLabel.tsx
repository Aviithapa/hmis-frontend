import { cn } from "@/utils/classNames";
import * as React from "react";

export interface InputProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  labelName: React.ReactNode;
  fieldRequired?: boolean;
}

const InputLabel = React.forwardRef<HTMLLabelElement, InputProps>(
  ({ className, labelName, fieldRequired = false, ...props }, ref) => {
    return (
      <label
        className={cn(
          "text-[#ACB1C6] capitalize font-normal text-sm",
          className
        )}
        ref={ref}
        {...props}
      >
        <span>{labelName}</span>
        {fieldRequired ? <span className="text-red-500">{"*"}</span> : null}
      </label>
    );
  }
);

InputLabel.displayName = "LabelField";

export { InputLabel };
