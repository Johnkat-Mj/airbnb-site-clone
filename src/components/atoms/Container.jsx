import { cn } from "libs/utils";

export function Container({className, children}) {
  return (
    <div className={cn("mx-auto w-full px-4 sm:px-6 md:px-8 max-w-6xl lg:max-w-[85rem]", className)}>
        {children}
    </div>
  )
}