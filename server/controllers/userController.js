const { User } = require("../models");
const { comparePassword } = require("../helpers/bcrypt");
const { encodeToken } = require("../helpers/jwt");

class userController {
	static async register(req, res, next) {
		try {
			const { email, password } = req.body;
			const newUser = await User.create({
				email,
				password,
			});
			res
				.status(201)
				.json({ message: `Email ${newUser.email} successfully created.` });
		} catch (error) {
			next(error);
		}
	}

	static async login(req, res, next) {
		try {
			const { email, password } = req.body;
			if (!email) {
				throw { name: "emailLogin" };
			}
			if (!password) {
				throw { name: "passwordLogin" };
			}
			const user = await User.findOne({
				where: { email },
			});
			if (!user) {
				throw { name: "invalidLogin" };
			}
			if (!comparePassword(password, user.password)) {
				throw { name: "invalidLogin" };
			}
			const payload = {
				id: user.id,
			};
			const access_token = encodeToken(payload);
			res.status(200).json({ access_token });
		} catch (error) {
			next(error);
		}
	}
}

module.exports = userController;
