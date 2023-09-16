import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
//(...classes: ClassValue[]) => twMerge(clsx(...classes))

export const cn = (...classes) => twMerge(clsx(...classes))

