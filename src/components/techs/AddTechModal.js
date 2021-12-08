import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { addTech } from "../../actions/techAction";
import PropTypes from "prop-types";

const AddTechModal = ({ addTech }) => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const onsubmit = () => {
		if (firstName === "" || lastName === "") {
			M.toast({ html: "Please enter the FirstName and LastName" });
		} else {
			addTech({
				firstName,
				lastName,
			});
			M.toast({ html: "added the technician" });
			setFirstName("");
			setLastName("");
			console.log(firstName, lastName);
		}
	};
	return (
		<div id="add-tech-modal" className="modal">
			<div className="modal-content">
				<h4>New Technician</h4>
				<div className="row">
					<div className="input-field">
						<input
							type="text"
							name="firstName"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>

						<label htmlFor="firstName" className="active">
							First Name
						</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field">
						<input
							type="text"
							name="lastName"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>

						<label htmlFor="lastName" className="active">
							Last Name
						</label>
					</div>
				</div>
				<div className="modal-footer">
					<a
						href="#add-tech-modal"
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

AddTechModal.propTypes = {
	addTech: PropTypes.object.isRequired,
};
export default connect(null, { addTech })(AddTechModal);
