import * as React from "react"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  error?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative flex items-center justify-center">
            <input
              type="checkbox"
              className="peer sr-only"
              ref={ref}
              {...props}
            />
            <div
              className={cn(
                "w-5 h-5 rounded border-2 transition-all duration-200 flex items-center justify-center",
                "peer-focus:ring-2 peer-focus:ring-amber-200 peer-focus:ring-offset-0",
                "peer-checked:bg-gradient-to-r peer-checked:from-amber-600 peer-checked:to-red-700 peer-checked:border-transparent",
                error
                  ? "border-red-500"
                  : "border-gray-300 group-hover:border-amber-600",
                className
              )}
            >
              <Check className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
            </div>
          </div>
          {label && (
            <span className="text-sm text-gray-700 leading-tight select-none">
              {label}
            </span>
          )}
        </label>
        {error && (
          <p className="mt-1.5 text-sm text-red-600 font-medium">{error}</p>
        )}
      </div>
    )
  }
)
Checkbox.displayName = "Checkbox"

export { Checkbox }
