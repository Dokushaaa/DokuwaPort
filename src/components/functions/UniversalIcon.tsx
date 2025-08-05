import * as DiIcons from "react-icons/di";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import * as SiIcons from "react-icons/si";
import * as TbIcons from "react-icons/tb";
import * as PiIcons from "react-icons/pi";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
// Import other icon packs as needed
import { IconType } from "react-icons";

export type IconPack = "fa" | "ri" | "tb" | "di" | "si" | "pi" | "bs" | "bi";
type Props = {};
interface UniversalIconProps {
	icon: [IconPack, string];
	size?: number | string;
	color?: string;
	impClassName?: string;
}

const iconPacks: Record<IconPack, Record<string, IconType>> = {
	fa: FaIcons,
	ri: RiIcons,
	tb: TbIcons,
	di: DiIcons,
	si: SiIcons,
	pi: PiIcons,
	bs: BsIcons,
	bi: BiIcons,
};

// Function to convert icon name into PascalCase
const formatIconName = (prefix: string, name: string): string => {
	const camelCased = name
		.split("-")
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join("");
	return `${prefix}${camelCased}`;
};

const UniversalIcon: React.FC<UniversalIconProps> = ({
	icon,

	impClassName,
}) => {
	const [packPrefix, iconName] = icon;
	const pack = iconPacks[packPrefix];

	if (!pack) {
		console.warn(`Icon pack "${packPrefix}" not found.`);
		return null;
	}

	const componentName = formatIconName(
		packPrefix.charAt(0).toUpperCase() + packPrefix.slice(1),
		iconName
	);
	const IconComponent = pack[componentName];

	if (!IconComponent) {
		console.warn(`Icon "${componentName}" not found in "${packPrefix}".`);
		return null;
	}

	return <IconComponent className={impClassName} />;
};

// examples:

export const UniversalIconExample2 = (props: Props) => {
	type titleArrayProps = {
		id: number;
		iconOrigin: string;
		iconName: string;
		title: string;
	};
	const titleArray: titleArrayProps[] = [
		{ id: 1, iconOrigin: "fa", iconName: "react", title: "react" },
		{ id: 2, iconOrigin: "ri", iconName: "nextjs-fill", title: "nextjs" },
	];
	const titleArrayRender = titleArray.map((item) => {
		return (
			<div
				key={item.id}
				className='proglang-item'>
				<UniversalIcon
					// change
					// static
					impClassName='lg:size-[150px] size-[50px] text-content'
					icon={[item.iconOrigin as IconPack, item.iconName]}
				/>
				<p>{item.title}</p>
			</div>
		);
	});
	return (
		<>
			<div> {titleArrayRender}</div>
		</>
	);
};

export default UniversalIcon;
