import { cn } from "libs/utils";

export function CardBtncategory({ isActive, icon, text, ...rest } ) {
  return (
    <button
      className={cn(
        "text-sm outline-none min-w-max border-b-2 border-b-transparent text-gray-600 hover:border-gray-300 flex flex-col space-y-1.5 pb-2 text-[15px] text-center items-center duration-300 hover:text-gray-700",
        isActive?"!text-gray-700 !border-b-gray-700":""
      )}
      {...rest}
    >
      <span>{icon}</span>
      <span>{text}</span>
    </button>
  );
}
