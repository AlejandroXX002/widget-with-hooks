import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
	{
		title: "what is React?",
		content: "it is a front-end library",
	},
	{
		title: "why use React?",
		content: "because the immense popularit and range of implementing it",
	},
	{
		title: "How do you use React?",
		content: "with functional or class components and js",
	},
];

const options = [
	{
		label: "the red",
		value: "red",
	},
	{
		label: "the green",
		value: "green",
	},
	{
		label: "the blue",
		value: "blue",
	},
];

export default () => {
	const [selected, setSelected] = useState(options[0]);

	return (
		<div>
			<Header />
			<Route path={"/"}>
				<Accordion items={items} />
			</Route>

			<Route path={"/list"}>
				<Search />
			</Route>

			<Route path="/dropdown">
				<Dropdown
					label="select color"
					options={options}
					selected={selected}
					onSelectedChange={setSelected}
				/>
			</Route>

			<Route path={"/translate"}>
				<Translate />
			</Route>
		</div>
	);
};
