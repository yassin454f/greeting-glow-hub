import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-95 touch-manipulation",
  {
    variants: {
      variant: {
        default: "gradient-mystic text-primary-foreground shadow-mystic hover:shadow-glow transform hover:-translate-y-1",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-lg",
        outline:
          "border-2 border-primary bg-background/10 backdrop-blur text-primary hover:gradient-mystic hover:text-primary-foreground hover:border-transparent hover:shadow-mystic",
        secondary:
          "gradient-card text-secondary-foreground hover:shadow-card border border-border/30 backdrop-blur",
        ghost: "text-foreground hover:bg-secondary/20 hover:text-foreground backdrop-blur",
        link: "text-primary underline-offset-4 hover:underline",
        mystic: "gradient-mystic text-primary-foreground shadow-mystic hover:shadow-[0_0_40px_hsl(280_100%_70%/0.4)] transform hover:-translate-y-2 hover:scale-105",
      },
      size: {
        default: "h-12 px-6 py-3 min-h-[44px]",
        sm: "h-10 rounded-lg px-4 min-h-[40px]",
        lg: "h-14 rounded-xl px-8 text-base min-h-[56px]",
        icon: "h-12 w-12 min-h-[44px]",
        mobile: "h-14 px-8 py-4 text-lg rounded-xl min-h-[56px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
