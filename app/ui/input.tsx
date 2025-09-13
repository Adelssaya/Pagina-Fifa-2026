
import { cn } from "./utils";
import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from "react";
export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(function I({className, ...props}, ref){
  return <input ref={ref} className={cn("w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none", className)} {...props} />;
});
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(function T({className, ...props}, ref){
  return <textarea ref={ref} className={cn("w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none", className)} {...props} />;
});
