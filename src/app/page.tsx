import { ChevronLeft, Hand, Heart, Lock, Menu, PenSquare, ShoppingCart, User2 } from "lucide-react";
import Image from "next/image";
import background from "./background.png";
import logo from "./logo.svg";
import human from "./human.svg";
import skull from "./skull.svg";
import { Generate } from "@/app/generate";

export default function Home() {
	return (
		<div className="relative w-[400px] border px-4 py-8">
			<Image src={background} alt="" className="absolute left-0 right-0 top-0 -z-10" />

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

			<main className="flex flex-col justify-center gap-4">
				<Image src={logo} alt="" className="mx-auto my-4" />

				<h2 className="text-center text-[1.3125rem] text-[#141414]">
					Generate your ART by typing in field below any words that comes to your mind!
				</h2>

				<div className="grid grid-cols-3">
					<div className="flex flex-col items-center justify-center gap-2">
						<div className="relative flex h-[30px] w-[30px] items-center justify-center rounded-[0.5rem] bg-[#CE2B28] px-2 text-white">
							1
							<div className="absolute left-0 top-1/2 -z-10 h-[3px] w-[90px] -translate-y-1/2 rounded-[0.5rem] bg-[#CE2B28]" />
							<div className="absolute right-0 top-1/2 -z-10 h-[3px] w-[75px] -translate-y-1/2 rounded-[0.5rem] bg-[#CE2B28]" />
						</div>
						<p className="text-center text-[0.70rem] font-semibold text-[#CE2B28]">
							Generate image
						</p>
					</div>
					<div className="flex flex-col items-center justify-center gap-2">
						<div className="relative flex h-[30px] w-[30px] items-center justify-center rounded-[0.5rem] bg-[#9C9C9C] px-2 text-white">
							2
							<div className="absolute left-0 top-1/2 -z-10 h-[3px] w-[90px] -translate-y-1/2 rounded-[0.5rem] bg-[#E5E5E7]" />
							<div className="absolute right-0 top-1/2 -z-10 h-[3px] w-[90px] -translate-y-1/2 rounded-[0.5rem] bg-[#E5E5E7]" />
						</div>
						<p className="text-center text-[0.70rem] font-semibold text-[#E5E5E7]">
							Choose your product
						</p>
					</div>
					<div className="flex flex-col items-center justify-center gap-2">
						<div className="relative flex h-[30px] w-[30px] items-center justify-center rounded-[0.5rem] bg-[#9C9C9C] px-2 text-white">
							3
							<div className="absolute left-0 top-1/2 -z-10 h-[3px] w-[75px] -translate-y-1/2 rounded-[0.5rem] bg-[#E5E5E7]" />
							<div className="absolute right-0 top-1/2 -z-10 h-[3px] w-[90px] -translate-y-1/2 rounded-[0.5rem] bg-[#E5E5E7]" />
						</div>
						<p className="text-center text-[0.70rem] font-semibold text-[#E5E5E7]">Order</p>
					</div>
				</div>

				<div className="flex justify-between">
					<label className="sr-only" htmlFor="createInput"></label>
					<input
						className="w-[80%] rounded-[0.5625rem] bg-[#F5F5F6] px-2 text-[1.0625rem] shadow-md placeholder:text-[#C0C1C9]"
						placeholder="What do you want to create?"
						id="createInput"
					/>
					<button className="flex w-[20%] items-center justify-center rounded-[0.4375rem] bg-[#CB2B28] p-2">
						<PenSquare className="text-white" size={30} />
					</button>
				</div>

				<div className="flex items-center justify-center gap-4">
					<button className="rounded-[0.4375rem] bg-[#F5F5F6] px-4 py-2 text-[0.875rem] font-semibold text-black">
						High Quality
					</button>
					<button className="rounded-[0.4375rem] bg-[#F5F5F6] px-4 py-2 text-[0.875rem] font-semibold text-black">
						Pop Art
					</button>
					<button className="rounded-[0.4375rem] bg-[#F5F5F6] px-4 py-2 text-[0.875rem] font-semibold text-black">
						Realistic Look
					</button>
				</div>

				<div className="flex rounded-[0.5625rem] bg-[#E3E4E7] bg-opacity-[22%] p-4">
					<div className="flex w-1/2 flex-col">
						<div className="flex items-center gap-2">
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
							<p className="text-[0.875rem] uppercase text-black">minimalistic</p>
							<button className="rounded-[0.4375rem] bg-[#CB2B28] px-5 py-3 uppercase text-[#F5F5F6]">
								cartoon
							</button>
							<p className="flex items-center gap-2 font-semibold uppercase text-black">
								<Lock size={20} className="text-gray-300" />
								artistic
							</p>
						</div>
					</div>
				</div>

				<div className="flex flex-col items-center gap-3 rounded-[0.5625rem] bg-[#E3E4E7] bg-opacity-[26%] p-4">
					<p className="text-[1.25rem] font-bold uppercase text-[#CB2B28]">get inspired!</p>
					<p className="text-[1.25rem] font-medium uppercase text-black">best users designs</p>
					<Image alt="Demon skull in a shape of a heart" src={skull} />
					<Generate />
				</div>
			</main>
		</div>
	);
}
