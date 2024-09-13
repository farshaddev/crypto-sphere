import React, { ReactNode } from "react";
import "./Floater.scss";

interface FloaterProps {
	children: ReactNode;
}

const Floater: React.FC<FloaterProps> = ({ children }) => {
	return <div className="floater">{children}</div>;
};

export default Floater;
