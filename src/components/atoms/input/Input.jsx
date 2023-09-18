import { cn } from "libs/utils";

export function Input(props) {
  const { className, icon, ...rest } = props;
  return (
    <>
      <input
        className={cn("outline-none focus:border-primary text-gray-600", className)}
        {...rest}
      />
    </>
  );
}