import { BoxReveal } from "@/components/magicui/box-reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="px-4 mx-auto size-full max-w-lg flex flex-col items-center justify-center align-middle overflow-hidden min-h-[80vh]">
      <BoxReveal boxColor={"#B89146"} duration={0.5}>
        <p className="text-[2.5rem] md:text-[3.5rem] font-semibold">
          404 Not Found<span className="text-primary">.</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#B89146"} duration={0.5}>
        <p className="text-[0.8rem] md:text-[1rem] mt-[1rem] text-center">
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
      </BoxReveal>
      <BoxReveal boxColor={"#B89146"} duration={0.5}>
        <Link href="/"><Button className="mt-[1.6rem] bg-primary">Go To Home</Button></Link>
      </BoxReveal>
    </div>
  );
}
