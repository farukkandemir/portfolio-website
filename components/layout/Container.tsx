import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "small" | "large";
}

const Container = ({
  children,
  className,
  size = "default",
}: ContainerProps) => {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 md:px-6",
        {
          "max-w-screen-xl": size === "default",
          "max-w-screen-lg": size === "small",
          "max-w-screen-2xl": size === "large",
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
