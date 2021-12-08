import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import TechItem from "./TechItem";
import PropTypes from "prop-types";
import { getTechs } from "../../actions/techAction";

const TechListModal = ({ getTechs, techs, loading }) => {
	// const [techs, setTechs] = useState([]);
	// const [loading, setLoading] = useState(false);
	useEffect(() => {
		getTechs();
	}, []);
	// const getTechs = async () => {
	// 	try {
	// 		setLoading(true);
	// 		const res = await fetch("http://localhost:5000/techs");
	// 		const data = await res.json();
	// 		setTechs(data);
	// 		setLoading(false);
	// 		console.log(data);
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// };
	return (
		<div id="tech-list-modal" className="modal">
			<div className="modal-content">
				<h4>Technician List</h4>
				<ul className="collection">
					{!loading &&
						techs !== null &&
						techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
				</ul>
			</div>
		</div>
	);
};

TechListModal.propTypes = {
	techs: PropTypes.object.isRequired,
	loading: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => ({
	techs: state.tech.techs,
	loading: state.tech.loading,
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
