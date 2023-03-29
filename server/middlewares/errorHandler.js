const errorHandler = (err, req, res, next) => {
	let code = 500;
	let message = "Internal Server Error";
	if (err.name === "SequelizeValidationError") {
		let errMsg = err.errors.map((el) => el.message);
		code = 400;
		message = errMsg[0];
	} else if (err.name == "SequelizeUniqueConstraintError") {
		code = 400;
		message = "Email has already been used";
	} else if (err.name == "emailLogin") {
		code = 400;
		message = "Email is required";
	} else if (err.name == "passwordLogin") {
		code = 400;
		message = "Password is required";
	} else if (err.name == "invalidLogin") {
		code = 401;
		message = "Invalid Email or Password";
	} else if (err.name === "invalid_token" || err.name === "JsonWebTokenError") {
		code = 401;
		message = "Invalid token";
	}
	res.status(code).json({ message });
};

module.exports = errorHandler;
