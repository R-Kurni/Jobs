import { Container, Col, Row, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchJob } from "../store/actions/actionCreator";

export default function JobDetailPage() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { Jobid } = useParams();
	const { job } = useSelector((state) => {
		return state.jobs;
	});
	console.log(job);
	useEffect(() => {
		dispatch(fetchJob(Jobid));
	}, []);
	return (
		<>
			<Container className="detail-card">
				<Row className="detail-back-btn">
					<Col sm={2}>
						<button
							className="BTN-Search"
							onClick={() => {
								navigate("/");
							}}
						>
							Back
						</button>
					</Col>
				</Row>
				<Row>
					<Card>
						<Card.Body>
							<Row>
								<div className="job-company">
									{job.type} / {job.location}
								</div>
							</Row>
							<Row>
								<h3 className="Title">{job.title}</h3>
							</Row>
							<hr></hr>
							<Row>
								<Col sm={8}>
									<Row
										dangerouslySetInnerHTML={{
											__html: job.description,
										}}
									></Row>
								</Col>
								<Col sm={4}>
									<Card>
										<Card.Body>
											<Row>
												<div className="Title">{job.company}</div>
											</Row>
											<hr></hr>
											<Row>
												<img src={job.company_logo} alt="Company Logo"></img>
											</Row>
											<Row>
												<a href={job.company_url}>{job.company_url}</a>
											</Row>
										</Card.Body>
									</Card>
									<br></br>
									<Card>
										<Card.Body>
											<Row>
												<div className="Title">How to apply</div>
											</Row>
											<hr></hr>
											<Row
												dangerouslySetInnerHTML={{
													__html: job.how_to_apply,
												}}
											></Row>
										</Card.Body>
									</Card>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Row>
			</Container>
		</>
	);
}
