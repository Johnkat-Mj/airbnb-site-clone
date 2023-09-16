import { useBreakpoint } from "@/hooks/breakpoint";

function BottomTabar() {
  const screen = useBreakpoint();
  return (
    <>
      {screen !== "lg" && screen !== "md" ? (
        <div className="fixed w-full bottom-0 inset-x-0 lg:hidden">
          
        </div>
      ) : null}
    </>
  );
}

export { BottomTabar };
