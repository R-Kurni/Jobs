const initialState = {
	jobs: [],
	job: {},
};

function jobReducer(state = initialState, action) {
	switch (action.type) {
		case "jobs/fetchSuccess":
			return {
				...state,
				jobs: action.payload,
			};
		case "jobs/fetchOneSuccess":
			return {
				...state,
				job: action.payload,
			};
		default:
			return state;
	}
}

export default jobReducer;
