import {
	GET_LOGS,
	SET_LOADING,
	LOGS_ERROR,
	ADD_LOG,
	DELETE_LOG,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_LOG,
	SEARCH_LOGS,
} from "./types";

// Get log

export const getLogs = () => {
	return async (dispatch) => {
		try {
			setLoading();
			const res = await fetch("http://localhost:5000/logs");
			const data = await res.json();
			dispatch({
				type: GET_LOGS,
				payload: data,
			});
		} catch (err) {
			dispatch({
				type: LOGS_ERROR,
				payload: err.response.statusText,
			});
		}
	};
};

// Add new log

export const addLog = (log) => {
	return async (dispatch) => {
		try {
			setLoading();
			const res = await fetch("http://localhost:5000/logs", {
				method: "POST",
				body: JSON.stringify(log),
				headers: {
					"Content-Type": "application/json",
				},
			});
			const data = await res.json();
			dispatch({
				type: ADD_LOG,
				payload: data,
			});
		} catch (err) {
			dispatch({
				type: LOGS_ERROR,
				payload: err.response.statusText,
			});
		}
	};
};

// Delete log

export const deleteLog = (id) => {
	return async (dispatch) => {
		try {
			setLoading();
			await fetch(`http://localhost:5000/logs/${id}`, {
				method: "DELETE",
			});
			dispatch({
				type: DELETE_LOG,
				payload: id,
			});
		} catch (err) {
			dispatch({
				type: LOGS_ERROR,
				payload: err.response.statusText,
			});
		}
	};
};

// Update log on server

export const updateLog = (log) => {
	console.log("log", log);
	return async (dispatch) => {
		try {
			setLoading();
			const res = await fetch(`http://localhost:5000/logs/${log.id}`, {
				method: "PUT",
				body: JSON.stringify(log),
				headers: {
					"Content-Type": "application/json",
				},
			});
			const data = await res.json();
			console.log("data", data);
			dispatch({
				type: UPDATE_LOG,
				payload: data,
			});
		} catch (err) {
			dispatch({
				type: LOGS_ERROR,
				payload: err.response.statusText,
			});
		}
	};
};

// Search server logs
export const searchLogs = (text) => {
	return async (dispatch) => {
		try {
			setLoading();
			const res = await fetch(`http://localhost:5000/logs?q=${text}`);
			const data = await res.json();
			dispatch({
				type: SEARCH_LOGS,
				payload: data,
			});
		} catch (err) {
			dispatch({
				type: LOGS_ERROR,
				payload: err.response.statusText,
			});
		}
	};
};

// set current log
export const setCurrent = (log) => {
	return {
		type: SET_CURRENT,
		payload: log,
	};
};
// Clear current log
export const clearCurrent = () => {
	return {
		type: CLEAR_CURRENT,
	};
};

export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};
