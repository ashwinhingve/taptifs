import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
  options: { value: string; label: string }[];
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, options, ...props }, ref) => {
    return (
      <div className="w-full">
        <div className="relative">
          <select
            className={cn(
              "flex h-12 w-full appearance-none rounded-md border-2 bg-white px-4 py-3 pr-10 text-base transition-all duration-200",
              "focus:outline-none focus:ring-2 focus:ring-offset-0",
              "disabled:cursor-not-allowed disabled:opacity-50",
              error
                ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                : "border-gray-300 focus:border-amber-600 focus:ring-amber-200",
              className
            )}
            ref={ref}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
        </div>
        {error && (
          <p className="mt-1.5 text-sm text-red-600 font-medium">{error}</p>
        )}
      </div>
    )
  }
)
Select.displayName = "Select"

export { Select }
