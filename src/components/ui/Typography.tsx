import React, { forwardRef, JSX } from "react";

/**
 * Typography
 * A highly-customizable, production-ready React + Tailwind typography component.
 * - Polymorphic `as` prop (p, span, h1, h2, etc.)
 * - Built-in variants (display, h1..h3, lead, body, caption, overline)
 * - Accepts raw hex color or Tailwind color classes
 * - Gradient text support
 * - Weight, alignment, transform, line-height, letter-spacing control
 * - Single-line and multi-line truncation
 * - Adds `className` / `style` passthrough for final tweaks
 *
 * Usage (examples inside canvas file):
 * <Typography as="h1" variant="display" gradient from="indigo-500" to="cyan-400">Big title</Typography>
 */

type Variant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "lead"
  | "body"
  | "caption"
  | "overline";

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  as?: React.ElementType;
  variant?: Variant;
  /** override default tailwind size classes with any tailwind text-* string (responsive allowed) */
  sizeClass?: string;
  /** color: either tailwind text color class (e.g. 'text-slate-700') OR give hexColor */
  colorClass?: string;
  hexColor?: string;
  /** enable gradient text (uses bg-clip/text-transparent) and provide tailwind gradient stops via from/to */
  gradient?: boolean;
  from?: string; // e.g. 'indigo-500'
  to?: string; // e.g. 'cyan-400'
  weight?: "thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | string;
  align?: "left" | "center" | "right" | "justify";
  transform?: "none" | "uppercase" | "lowercase" | "capitalize" | "normal-case";
  lineHeightClass?: string;
  letterSpacingClass?: string;
  truncate?: boolean | number; // true => single line truncate, number => multi-line clamp
  uppercase?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const variantToClass: Record<Variant, string> = {
  display: "text-4xl md:text-6xl leading-tight font-extrabold",
  h1: "text-3xl md:text-4xl leading-tight font-bold",
  h2: "text-2xl md:text-3xl leading-snug font-semibold",
  h3: "text-xl md:text-2xl leading-snug font-medium",
  lead: "text-lg md:text-xl leading-relaxed",
  body: "text-base md:text-base leading-relaxed",
  caption: "text-sm leading-snug",
  overline: "text-xs tracking-widest uppercase",
};

function classNames(...items: Array<string | false | null | undefined>) {
  return items.filter(Boolean).join(" ");
}

const Typography = forwardRef<HTMLElement, TypographyProps>(
  (
    {
      children,
      as: Component = "p",
      variant = "body",
      sizeClass,
      colorClass,
      hexColor,
      gradient = false,
      from = "indigo-500",
      to = "cyan-400",
      weight,
      align,
      transform,
      lineHeightClass,
      letterSpacingClass,
      truncate,
      uppercase,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const baseVariant = variantToClass[variant] || variantToClass.body;

    // weight class
    const weightClass = weight
      ? (weight === "normal"
          ? "font-normal"
          : weight === "thin"
          ? "font-thin"
          : weight === "extralight"
          ? "font-extralight"
          : weight === "light"
          ? "font-light"
          : weight === "medium"
          ? "font-medium"
          : weight === "semibold"
          ? "font-semibold"
          : weight === "bold"
          ? "font-bold"
          : weight === "extrabold"
          ? "font-extrabold"
          : String(weight))
      : "";

    // alignment - use full class names so Tailwind can detect them
    const alignClass = align 
      ? (align === "left" ? "text-left" 
        : align === "center" ? "text-center" 
        : align === "right" ? "text-right" 
        : "text-justify")
      : "";

    // transform
    const transformClass = transform ? transform : "";

    // color handling. Prefer gradient > hexColor > colorClass > default text color
    // Note: For gradients, pass full Tailwind classes like "from-indigo-500" directly
    const gradientClass = gradient
      ? `bg-clip-text text-transparent bg-gradient-to-r from-${from} to-${to}`
      : "";

    const colorClassFinal = !gradient ? colorClass || "text-slate-800" : "";

    // truncate handling
    const truncateClass = truncate === true ? "truncate" : "";
    const clampStyle: React.CSSProperties = typeof truncate === "number" && truncate > 1
      ? {
          display: "-webkit-box",
          WebkitLineClamp: String(truncate) as unknown as number,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }
      : {};

    // letter spacing / line height override
    const lhClass = lineHeightClass || "";
    const lsClass = letterSpacingClass || "";

    // size override
    const sizeClassFinal = sizeClass || baseVariant;

    const combinedClass = classNames(
      sizeClassFinal,
      weightClass,
      alignClass,
      transformClass,
      lhClass,
      lsClass,
      gradientClass,
      colorClassFinal,
      truncateClass,
      className
    );

    const combinedStyle: React.CSSProperties = {
      ...(hexColor ? { color: hexColor } : {}),
      ...style,
      ...clampStyle,
    };

    // Render polymorphic element
    // using `as` prop (Component) and forwarding ref
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Component ref={ref as any} className={combinedClass || undefined} style={combinedStyle} {...rest}>
        {children}
      </Component>
    );
  }
);

Typography.displayName = "Typography";

export default Typography;

/*
  Quick tips (no code duplication):
  - For gradient text: <Typography gradient from="rose-500" to="orange-400">Gradient</Typography>
  - For hex colors: <Typography hexColor="#1f2937">Custom hex</Typography>
  - Multi-line clamp: <Typography truncate={3}>Long text...</Typography>
  - Responsive override: <Typography sizeClass="text-base md:text-xl lg:text-3xl">Responsive</Typography>
  - Polymorphic header: <Typography as="h1" variant="h1">Heading</Typography>
*/
