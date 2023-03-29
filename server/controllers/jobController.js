const axios = require("axios");

class jobController {
	static async getJobs(req, res, next) {
		try {
			// const { id } = req.user;
			const { description, location, full_time, page } = req.query;
			let start = (page - 1) * 5;
			let end = 5 * page;
			const options = {
				method: "GET",
				url: "http://dev3.dansmultipro.co.id/api/recruitment/positions.json",
			};
			if (description) {
				options.params = {
					...options.params,
					description,
				};
			}
			if (location) {
				options.params = {
					...options.params,
					location,
				};
			}
			if (full_time) {
				options.params = {
					...options.params,
					full_time,
				};
			}
			const { data } = await axios(options);
			const jobs = data.slice(start, end);
			const currentPage = parseInt(page);
			const totalPage = Math.ceil(data.length / 5);
			res.status(200).json({ currentPage, totalPage, jobs });
		} catch (error) {
			next(error);
		}
	}
}

module.exports = jobController;
