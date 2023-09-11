import {
  ChevronLeft,
  Hand,
  Heart,
  Lock,
  Menu,
  PenSquare,
  ShoppingCart,
  User2,
} from "lucide-react";
import Image from "next/image";
import background from "./background.png";
import logo from "./logo.svg";
import human from "./human.svg";
import skull from "./skull.svg";

export default function Home() {
  return (
    <div className="w-[400px] border px-4 py-8 relative">
      <Image
        src={background}
        alt=""
        className="absolute top-0 left-0 right-0 -z-10"
      />

      {/* Should be changed to links */}
      <nav className="flex items-center justify-between">
        <button>
          <Menu size={25} className="text-[#172B4D]" />
        </button>
        <div className="flex items-center justify-end gap-4">
          <button>
            <Heart className="text-black" size={30} />
          </button>
          <button>
            <ShoppingCart className="text-black" size={30} />
          </button>
          <button>
            <User2 className="text-black" size={30} />
          </button>
        </div>
      </nav>

      <main className="flex flex-col gap-4 justify-center">
        <Image src={logo} alt="" className="mx-auto my-4" />

        <h2 className="text-[#141414] text-center text-[1.3125rem]">
          Generate your ART by typing in field below any words that comes to
          your mind!
        </h2>

        <div className="grid grid-cols-3">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="bg-[#CE2B28] px-2 w-[30px] rounded-[0.5rem] flex items-center justify-center relative text-white h-[30px]">
              1
              <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[90px] bg-[#CE2B28] rounded-[0.5rem] h-[3px] -z-10" />
              <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[75px] bg-[#CE2B28] rounded-[0.5rem] h-[3px] -z-10" />
            </div>
            <p className="text-[#CE2B28] text-[0.70rem] font-semibold text-center">
              Generate image
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="bg-[#9C9C9C] px-2 w-[30px] rounded-[0.5rem] flex items-center justify-center relative text-white h-[30px]">
              2
              <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[90px] bg-[#E5E5E7] rounded-[0.5rem] h-[3px] -z-10" />
              <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[90px] bg-[#E5E5E7] rounded-[0.5rem] h-[3px] -z-10" />
            </div>
            <p className="text-[#E5E5E7] text-[0.70rem] font-semibold text-center">
              Choose your product
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="bg-[#9C9C9C] px-2 w-[30px] rounded-[0.5rem] flex items-center justify-center relative text-white h-[30px]">
              3
              <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[75px] bg-[#E5E5E7] rounded-[0.5rem] h-[3px] -z-10" />
              <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[90px] bg-[#E5E5E7] rounded-[0.5rem] h-[3px] -z-10" />
            </div>
            <p className="text-[#E5E5E7] text-[0.70rem] font-semibold text-center">
              Order
            </p>
          </div>
        </div>

        <div className="flex justify-between">
          <input
            className="w-[80%] rounded-[0.5625rem] bg-[#F5F5F6] px-2 shadow-md placeholder:text-[#C0C1C9] text-[1.0625rem]"
            placeholder="What do you want to create?"
          />
          <button className="w-[20%] bg-[#CB2B28] p-2 flex items-center justify-center rounded-[0.4375rem]">
            <PenSquare className="text-white" size={30} />
          </button>
        </div>

        <div className="flex gap-4 items-center justify-center">
          <button className="rounded-[0.4375rem] bg-[#F5F5F6] px-4 py-2 text-black text-[0.875rem] font-semibold">
            High Quality
          </button>
          <button className="rounded-[0.4375rem] bg-[#F5F5F6] px-4 py-2 text-black text-[0.875rem] font-semibold">
            Pop Art
          </button>
          <button className="rounded-[0.4375rem] bg-[#F5F5F6] px-4 py-2 text-black text-[0.875rem] font-semibold">
            Realistic Look
          </button>
        </div>

        <div className="p-4 rounded-[0.5625rem] flex bg-[#E3E4E7] bg-opacity-[22%]">
          <div className="flex flex-col w-1/2">
            <div className="flex gap-2 items-center">
              <button>
                <ChevronLeft className="text-black" size={30} />
              </button>
              <p> Style preview </p>
            </div>
            <Image alt="Generated image" src={human} />
          </div>

          <div className="flex gap-2">
            <div className="flex items-center justify-center">
              <Hand size={30} className="text-black" />
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="uppercase text-black text-[0.875rem]">
                minimalistic
              </p>
              <button className="text-[#F5F5F6] px-5 py-3 uppercase bg-[#CB2B28] rounded-[0.4375rem]">
                cartoon
              </button>
              <p className="flex gap-2 items-center uppercase text-black font-semibold">
                <Lock size={20} className="text-gray-300" />
                artistic
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#E3E4E7] bg-opacity-[26%] p-4 rounded-[0.5625rem] flex flex-col items-center gap-3">
          <p className="uppercase text-[#CB2B28] text-[1.25rem] font-bold">
            get inspired!
          </p>
          <p className="uppercase text-black text-[1.25rem] font-medium">
            best users designs
          </p>
          <Image alt="Demon skull in a shape of a heart" src={skull} />
          <div className="flex justify-between mx-8">
            <input
              className="rounded-[0.5625rem] bg-[#F5F5F6] px-2 shadow-md placeholder:text-[#C0C1C9]"
              value="punk heart, gothic"
            />
            <button className="bg-[#CFCFD0] p-2 rounded-[0.4375rem] uppercase">
              artistic
            </button>
          </div>
          <button className="text-[#F5F5F6] px-14 py-2 uppercase bg-[#CB2B28] rounded-[0.4375rem]">
            buy
          </button>
        </div>
      </main>
    </div>
  );
}
