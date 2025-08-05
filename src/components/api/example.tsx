// Inside a React component in your Next.js project

import React from "react";

const Example = () => {
	const [data, setData] = React.useState(null);

	React.useEffect(() => {
		const fetchData = async () => {
			const response = await fetch("https://api.example.com/data");
			const result = await response.json();
			setData(result);
		};

		fetchData();
	}, []);

	return (
		<div>
			<h1>Data from API:</h1>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	);
};

export default Example;
