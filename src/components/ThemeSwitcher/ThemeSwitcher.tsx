import { MdOutlineDarkMode } from "react-icons/md";
// import { MdOutlineLightMode } from "react-icons/md";
import "./ThemeSwitcher.scss";

const ThemeSwitcher: React.FC = () => {
	return (
		<div className="theme-switcher">
			<button type="button" className="theme-switcher__button">
				<MdOutlineDarkMode />
			</button>
			{/* <MdOutlineLightMode /> */}
		</div>
	);
};

export default ThemeSwitcher;
