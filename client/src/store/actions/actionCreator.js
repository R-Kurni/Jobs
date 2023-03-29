export const register = (formRegister) => {
	return async () => {
		try {
			const res = await fetch("http://localhost:3000/users/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formRegister),
			});
			const data = await res.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	};
};

export const login = (formLogin) => {
	return async () => {
		try {
			const res = await fetch("http://localhost:3000/users/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formLogin),
			});
			const data = await res.json();
			if (data.access_token) {
				localStorage.setItem("access_token", data.access_token);
			}
			return data;
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
			// dispatch(fetchJobsSuccess(data));
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
			// dispatch(fetchJobSuccess(data));
		} catch (error) {
			console.log(error);
		}
	};
};
