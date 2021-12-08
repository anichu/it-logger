import {
	ADD_LOG,
	CLEAR_CURRENT,
	DELETE_LOG,
	GET_LOGS,
	LOGS_ERROR,
	SET_CURRENT,
	SET_LOADING,
	UPDATE_LOG,
	SEARCH_LOGS,
} from "../actions/types";

/* eslint-disable import/no-anonymous-default-export */
const initialState = {
	logs: null,
	current: null,
	loading: false,
	error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_LOGS:
			return {
				...state,
				logs: action.payload,
				loading: false,
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		case ADD_LOG:
			return {
				...state,
				logs: [...state.logs, action.payload],
				loading: false,
			};
		case DELETE_LOG:
			return {
				...state,
				logs: state.logs.filter((log) => log.id !== action.payload),
				loading: false,
			};
		case UPDATE_LOG:
			return {
				...state,
				logs: state.logs.map((log) =>
					log.id === action.payload.id ? action.payload : log
				),
			};
		case SET_CURRENT:
			return {
				...state,
				current: action.payload,
			};
		case SEARCH_LOGS:
			return {
				...state,
				logs: action.payload,
			};
		case CLEAR_CURRENT:
			return {
				...state,
				current: null,
			};

		case LOGS_ERROR:
			console.log(action.payload);
			return {
				...state,
				error: action.payload,
			};

		default:
			return state;
	}
};
