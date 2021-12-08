import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { searchLogs } from "../../actions/logActions";
import PropTypes from "prop-types";

const SearchBar = ({ searchLogs }) => {
	const [search, setSearch] = useState("");
	useEffect(() => {
		if (search) {
			searchLogs(search);
		}
	}, [search, searchLogs]);

	return (
		<nav className="blue" style={{ marginBottom: "30px" }}>
			<div className="nav-wrapper">
				<form>
					<div className="input-field">
						<input
							id="search"
							type="search"
							required
							onChange={(e) => setSearch(e.target.value)}
							placeholder="search logs......"
						/>
						<label className="label-icon" htmlFor="search">
							<i className="material-icons">search</i>
						</label>
						<i className="material-icons">close</i>
					</div>
				</form>
			</div>
		</nav>
	);
};

SearchBar.propTypes = {
	searchLogs: PropTypes.func.isRequired,
};

export default connect(null, { searchLogs })(SearchBar);
