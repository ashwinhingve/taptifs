import * as React from "react"
import { cn } from "@/lib/utils"
import { Phone } from "lucide-react"

export interface PhoneInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <Phone className="w-5 h-5" />
          </div>
          <input
            type="tel"
            className={cn(
              "flex h-12 w-full rounded-md border-2 bg-white pl-12 pr-4 py-3 text-base transition-all duration-200",
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
        </div>
        {error && (
          <p className="mt-1.5 text-sm text-red-600 font-medium">{error}</p>
        )}
      </div>
    )
  }
)
PhoneInput.displayName = "PhoneInput"

export { PhoneInput }
