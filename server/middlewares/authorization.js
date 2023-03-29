const { decodeToken } = require("../helpers/jwt");
const { User } = require("../models");

const authorization = async (req, res, next) => {
	try {
		const { access_token } = req.headers;
		if (!access_token) {
			throw { name: "invalid_token" };
		}
		const payload = decodeToken(access_token);
		if (!payload) {
			throw { name: "invalid_token" };
		}
		const user = await User.findByPk(payload.id);
		if (!user) {
			throw { name: "invalid_token" };
		}
		req.user = {
			id: user.id,
			email: user.email,
		};
		next();
	} catch (err) {
		next(err);
	}
};

module.exports = { authorization };
