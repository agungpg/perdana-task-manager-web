"use client";

import { cn } from "@/utils/cn";
import React, { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "success";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      fullWidth = false,
      loading = false,
      leftIcon,
      rightIcon,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={cn(
          // Base styles
          "inline-flex items-center justify-center font-medium transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
          
          // Variant styles
          variant === "primary" && "bg-[#17A2B8] text-white hover:bg-[#138496] focus:ring-[#17A2B8]",
          variant === "secondary" && "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
          variant === "outline" && "border-2 border-[#17A2B8] text-[#17A2B8] bg-transparent hover:bg-[#17A2B8] hover:text-white focus:ring-[#17A2B8]",
          variant === "ghost" && "text-[#17A2B8] bg-transparent hover:bg-[#17A2B8]/10 focus:ring-[#17A2B8]",
          variant === "danger" && "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
          variant === "success" && "bg-green-500 text-white hover:bg-green-600 focus:ring-green-500",
          
          // Size styles
          size === "sm" && "px-3 py-1.5 text-sm",
          size === "md" && "px-4 py-2 text-base",
          size === "lg" && "px-6 py-3 text-lg",
          
          // Width
          fullWidth && "w-full",
          
          className
        )}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        
        {!loading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        
        {children}
        
        {!loading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;