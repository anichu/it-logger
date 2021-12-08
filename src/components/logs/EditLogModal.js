import React, { useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { updateLog } from "../../actions/logActions";
import PropTypes from "prop-types";
import TechSelectOption from "../techs/TechSelectOption";

const EditLogModal = ({ current, updateLog }) => {
	const [message, setMessage] = useState("");
	const [attention, setAttention] = useState("");
	const [tech, setTech] = useState("");
	const onsubmit = () => {
		if (message === "" || tech === "") {
			M.toast({ html: "Please enter a message and tech" });
		} else {
			const updatelog = {
				id: current.id,
				message,
				attention,
				tech,
				date: new Date(),
			};
			updateLog(updatelog);
			M.toast({ html: `Log Updated by ${tech}` });
			// Clear fields
			setMessage("");
			setAttention("false");
			setTech("");
		}
	};

	useEffect(() => {
		console.log(current);
		if (current) {
			setAttention(current.attention);
			setMessage(current.message);
			setTech(current.tech);
		}
	}, [current]);
	return (
		<div id="edit-log-modal" className="modal" style={modalStyle}>
			<div className="modal-content">
				<h4>Enter System Log</h4>
				<div className="row">
					<div className="input-field">
						<input
							type="text"
							name="message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
						<label htmlFor="message" className="active">
							Log Message
						</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field">
						<select
							name="tech"
							value={tech}
							className="browser-default"
							onChange={(e) => setTech(e.target.value)}
						>
							<option value="" disabled>
								Select Technician
							</option>
							<TechSelectOption />
						</select>
					</div>
				</div>
				<div className="row">
					<div className="input-field">
						<p>
							<label>
								<input
									type="checkbox"
									className="filled-in"
									checked={attention}
									value={attention}
									onChange={(e) => setAttention(!attention)}
								/>
								<span>Needs Atttention </span>
							</label>
						</p>
					</div>
				</div>
				<div className="modal-footer">
					<a
						href="#!"
						onClick={onsubmit}
						className="modal-close waves-effect waves-green btn"
					>
						Enter
					</a>
				</div>
			</div>
		</div>
	);
};

const modalStyle = {
	width: "75%",
	height: "75%",
};

EditLogModal.propTypes = {
	current: PropTypes.object.isRequired,
	updateLog: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	current: state.log.current,
});
export default connect(mapStateToProps, { updateLog })(EditLogModal);
