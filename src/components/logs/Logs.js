import React, { useEffect, useState } from "react";
import PreLoader from "../layout/PreLoader";
import LogItem from "./LogItem";

const Logs = () => {
	const [logs, setLogs] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		getLogs();
	}, []);
	const getLogs = async () => {
		try {
			setLoading(true);
			const res = await fetch("http://localhost:5000/logs");
			const data = await res.json();
			setLogs(data);
			setLoading(false);
			console.log(data);
		} catch (err) {
			console.log(err);
		}
	};
	if (loading) {
		return <PreLoader />;
	}
	return (
		<ul className="collection with-header">
			<li className="collection-header">
				<h4 className="center">System Logs</h4>
			</li>
			{!loading && logs.length === 0 ? (
				<p className="center">No Logs to show</p>
			) : (
				logs.map((log) => <LogItem log={log} key={log.id} />)
			)}
		</ul>
	);
};

export default Logs;
