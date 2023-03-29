import axios from "axios";

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

export const fetchJobs = (userInput, page) => {
	return async (dispatch) => {
		try {
			const options = {
				method: "GET",
				url: `http://localhost:3000/jobs/`,
				headers: {
					access_token: localStorage.access_token,
				},
			};
			if (typeof userInput !== "undefined") {
				options.params = {
					...options.params,
					description: userInput.description,
					location: userInput.location,
					full_time: userInput.full_time,
				};
			}
			if (typeof page !== "undefined") {
				options.params = {
					...options.params,
					page,
				};
			}
			const { data } = await axios(options);
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

export const fetchJob = (id) => {
	return async (dispatch) => {
		try {
			const { data } = await axios({
				method: "GET",
				url: `http://localhost:3000/jobs/${id}`,
				headers: {
					access_token: localStorage.access_token,
				},
			});
			dispatch(fetchJobSuccess(data));
		} catch (error) {
			console.log(error);
		}
	};
};
