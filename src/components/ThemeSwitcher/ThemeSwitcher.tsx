import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import "./ThemeSwitcher.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setTheme } from "../../redux/slices/themeSlice";

const ThemeSwitcher: React.FC = () => {
	const dispatch = useAppDispatch();
	const { theme } = useAppSelector((state) => state.theme);

	const toggleTheme = () => {
		dispatch(setTheme(theme === "light" ? "dark" : "light"));
	};

	return (
		<div className="theme-switcher">
			<button
				type="button"
				className="theme-switcher__button"
				onClick={toggleTheme}
			>
				{theme === "light" ? (
					<MdOutlineDarkMode />
				) : (
					<MdOutlineLightMode />
				)}
			</button>
		</div>
	);
};

export default ThemeSwitcher;
