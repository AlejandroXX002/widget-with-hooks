import React from "react";
import Link from "./Links";

const Header = () => {
	return (
		<div className="ui secondary poiting menu">
			<Link href="/" className="item">
				Accordion
			</Link>
			<Link href="/dropdown" className="item">
				Dropdown
			</Link>
			<Link href="/translate" className="item">
				Translate
			</Link>
			<Link href="/list" className="item">
				Search
			</Link>
		</div>
	);
};

export default Header;
