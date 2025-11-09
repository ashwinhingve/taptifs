import * as React from "react"
import { cn } from "@/lib/utils"

export interface FormFieldProps {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
  className?: string;
  htmlFor?: string;
}

const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({ label, required, error, children, className, htmlFor }, ref) => {
    return (
      <div ref={ref} className={cn("w-full", className)}>
        <label htmlFor={htmlFor} className="block mb-2">
          <span className="text-sm font-semibold text-gray-700">
            {label}
            {required && <span className="text-red-600 ml-1">*</span>}
          </span>
        </label>
        {children}
      </div>
    )
  }
)
FormField.displayName = "FormField"

export { FormField }
