import { TbuttonProps } from "@/types";

export default function Button({ onClick, className, title }: TbuttonProps) {
	return (
		<button
			onClick={onClick}
			className={`text-[18px] leading-tight rounded-[8px] font-normal ${className}`}>
			{title}
		</button>
	);
}
