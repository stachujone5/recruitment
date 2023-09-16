"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const generateFormSchema = z.object({
	generate: z.string().min(1, "Minimum 1 character").max(20, "Maximum 20 characters"),
});

const fetchColorsResponseSchema = z.object({
	result: z.tuple([
		z.tuple([z.number(), z.number(), z.number()]),
		z.tuple([z.number(), z.number(), z.number()]),
		z.tuple([z.number(), z.number(), z.number()]),
		z.tuple([z.number(), z.number(), z.number()]),
		z.tuple([z.number(), z.number(), z.number()]),
	]),
});

const fetchColors = async () => {
	const res = await fetch("http://colormind.io/api/", {
		method: "POST",
		body: JSON.stringify({
			model: "default",
		}),
	});

	if (!res.ok) {
		throw new Error(`Failed to fetch colors! Status code: ${res.status}`);
	}

	const json = (await res.json()) as unknown;

	return fetchColorsResponseSchema.parse(json);
};

export const Generate = () => {
	const queryClient = useQueryClient();
	const {
		formState: { errors },
		register,
		handleSubmit,
	} = useForm<z.infer<typeof generateFormSchema>>({
		resolver: zodResolver(generateFormSchema),
	});

	const { data, refetch } = useQuery({
		queryKey: ["colors"],
		queryFn: fetchColors,
		enabled: false,
	});

	const onSubmit = () => {
		refetch();

		setTimeout(() => {
			void queryClient.resetQueries(["colors"]);
		}, 3000);
	};

	// Loading and error states should be handled here in a real scenario :)

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{data && (
				<div className="absolute inset-0 flex flex-col justify-between gap-8">
					{data.result.map((entry, index) => (
						<div
							className="flex-grow animate-pulse"
							key={index}
							style={{
								backgroundColor: `rgb(${entry[0]}, ${entry[1]}, ${entry[2]})`,
							}}
						/>
					))}
				</div>
			)}
			<div className="mx-8 flex justify-between">
				<label className="sr-only" htmlFor="generate">
					generate
				</label>
				<input
					className="rounded-[0.5625rem] bg-[#F5F5F6] px-2 shadow-md placeholder:text-[#C0C1C9]"
					placeholder="punk heart, gothic"
					id="generate"
					{...register("generate")}
				/>
				<button className="rounded-[0.4375rem] bg-[#CFCFD0] p-2 uppercase" type="button">
					artistic
				</button>
			</div>
			{errors.generate?.message && (
				<p className="mt-2 text-center text-xs text-red-500">{errors.generate.message}</p>
			)}
			<button
				className="mx-auto mt-4 block rounded-[0.4375rem] bg-[#CB2B28] px-14 py-2 uppercase text-[#F5F5F6]"
				type="submit"
			>
				generate
			</button>
		</form>
	);
};
