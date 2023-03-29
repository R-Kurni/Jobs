export const register = (formRegister) => {
	return async () => {
		try {
			//POST Register
		} catch (error) {
			console.log(error);
		}
	};
};

export const login = (formLogin) => {
	return async () => {
		try {
			//POST Login
		} catch (error) {
			console.log(error);
		}
	};
};

export const fetchJobsSuccess = (data) => {
	return {
		type: "jobs/fetchSuccess",
		payload: data,
	};
};

export const fetchJobs = () => {
	return async (dispatch) => {
		try {
			//GET Jobs
			dispatch(fetchJobsSuccess(data));
		} catch (error) {
			console.log(error);
		}
	};
};

export const fetchJobSuccess = (data) => {
	return {
		type: "jobs/fetchOneSuccess",
		payload: data,
	};
};

export const fetchJob = () => {
	return async (dispatch) => {
		try {
			//GET Job
			dispatch(fetchJobSuccess(data));
		} catch (error) {
			console.log(error);
		}
	};
};
