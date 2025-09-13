
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "./utils";
type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary"|"secondary"|"ghost"; size?: "sm"|"md"; };
export const Button = forwardRef<HTMLButtonElement, Props>(function B({className, variant="primary", size="md", ...props}, ref){
  const sizes = size === "sm" ? "h-9 px-3 text-sm" : "h-10 px-5 text-sm";
  const variants = {
    primary: "bg-[#2ECC71] text-white hover:opacity-90",
    secondary: "bg-white text-[#0F91A9] border border-white hover:bg-white/90",
    ghost: "bg-transparent text-white hover:bg-white/10",
  } as const;
  return <button ref={ref} className={cn("inline-flex items-center justify-center rounded-full font-semibold shadow", sizes, variants[variant], className)} {...props} />;
});
export default Button;
