import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          type={type}
          className={cn(
            "flex h-12 w-full rounded-md border-2 bg-white px-4 py-3 text-base transition-all duration-200",
            "placeholder:text-gray-400",
            "focus:outline-none focus:ring-2 focus:ring-offset-0",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-200"
              : "border-gray-300 focus:border-amber-600 focus:ring-amber-200",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-sm text-red-600 font-medium">{error}</p>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
