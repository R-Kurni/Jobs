import { Col, Row } from "react-bootstrap";

export default function JobRowData(job) {
	const time = (date) => {
		const oldDate = new Date(date);
		const newDate = new Date() - oldDate;
		const hour = Math.floor(newDate / 3600000);
		const day = Math.floor(newDate / 86400000);
		const week = Math.floor(newDate / 604800000);
		const month = Math.floor(newDate / 2592000000);
		const year = Math.floor(newDate / 31536000000);
		if (year) {
			return `${year} year`;
		} else if (month) {
			return `${month} month`;
		} else if (week) {
			return `${week} week`;
		} else if (day) {
			return `${day} day`;
		} else if (hour) {
			return `${hour} hour`;
		}
	};
	return (
		<>
			<Row>
				<Row className="mb-3">
					<Col>
						<Row className="job-title">
							<div>{job.job.title}</div>
						</Row>
						<Row>
							<div className="job-row">
								<div className="job-company">
									{job.job.company} -{" "}
									<span className="job-full-time">{job.job.type}</span>
								</div>
							</div>
						</Row>
					</Col>
					<Col className="job-end">
						<Row>
							<Col>
								<Row className="job-end">{job.job.location}</Row>
								<Row className="job-end job-company">
									{time(job.job.created_at)} ago
								</Row>
							</Col>
						</Row>
					</Col>
				</Row>
				<hr></hr>
			</Row>
		</>
	);
}
