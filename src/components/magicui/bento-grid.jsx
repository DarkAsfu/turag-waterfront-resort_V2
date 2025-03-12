import { ArrowRightIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const BentoGrid = ({
  children,
  className,
  ...props
}) => {
  return (
    (<div
      className={cn("grid w-full auto-rows-[22rem] grid-cols-3 gap-4", className)}
      {...props}>
      {children}
    </div>)
  );
};

const BentoCard = ({
  name,
  className,
  background,
  description,
  href,
  cta,
  ...props
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl bg-cover bg-center",
      "bg-background shadow-sm dark:bg-background",
      className
    )}
    style={{ backgroundImage: `url(${background})` }} // Set background image dynamically
    {...props}
  >
    <div className="relative z-10 flex flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
        {name}
      </h3>
      <p className="max-w-lg text-neutral-400">{description}</p>
    </div>

    <div
      className="absolute bottom-0 flex w-full transform-gpu translate-y-10 items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
    >
      <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
        </a>
      </Button>
    </div>

    <div className="absolute inset-0 bg-black/10 transition-all duration-300 group-hover:bg-black/[.15]" />
  </div>
);


export { BentoCard, BentoGrid };
