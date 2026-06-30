import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

const AddRepo = () => {
  return (
    <div
      className="group px-6 py-6 flex flex-row justify-between items-center border rounded-lg bg-muted cursor-pointer
      transition-all duration-300 ease-in-out
      hover:bg-background hover:border-[#FBBF24] hover:scale-[1.02]
      shadow-[0_2px_10px_rgba(0,0,0,0.08)]
      hover:shadow-[0_10px_30px_rgba(233,63,63,0.15)]"
    >
      <div className="flex flex-row justify-center items-start gap-4">
        <Button
          variant={"outline"}
          className="flex justify-center items-center bg-white group-hover:bg-[#fff8f8] group-hover:border-[#FBBF24] group-hover:text-[#FBBF24] transition-colors duration-300"
          size={"icon"}
        >
          <ArrowDown
            size={30}
            className="transition-transform duration-300 group-hover:translate-y-1"
          />
        </Button>
        <div className="flex flex-col">
          <h1 className="text-xl font-bold text-[#FBBF24]">
            Open Github Repository
          </h1>
          <p className="text-sm text-muted-foreground max-w-[220px]">
            Work with your repositories in our editor
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <Image
          src={"/add-repo.svg"}
          alt="Open GitHub repository"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default AddRepo;
