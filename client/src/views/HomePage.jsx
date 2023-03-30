import { Container, Col, Row, Form, Card, Pagination } from "react-bootstrap";
import JobRowData from "../components/JobRowData";
// import PaginationJobs from "../components/PaginationJobs";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchJobs } from "../store/actions/actionCreator";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPage, setTotalPage] = useState(1);
	const { jobs } = useSelector((state) => {
		return state.jobs;
	});
	const jobLists = jobs.jobs;
	const [userInput, setUserInput] = useState({
		description: "",
		location: "",
		full_time: false,
	});

	const changeInputHandler = (e) => {
		const { value, name } = e.target;
		setUserInput({
			...userInput,
			[name]: value,
		});
	};

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(fetchJobs(userInput, currentPage)).then(() => {
			setCurrentPage(jobs.currentPage);
			setTotalPage(jobs.totalPage);
			navigate("/");
		});
	};
	const pageNumbers = [];
	for (let number = 1; number <= totalPage; number++) {
		pageNumbers.push(
			<Pagination.Item
				key={number}
				active={number === currentPage}
				onClick={() => setCurrentPage(number)}
			>
				{number}
			</Pagination.Item>
		);
	}
	const firstPage = () => {
		setCurrentPage(1);
	};
	const prevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};
	const nextPage = () => {
		if (currentPage < totalPage) {
			setCurrentPage(currentPage + 1);
		}
	};
	const lastPage = () => {
		setCurrentPage(totalPage);
	};
	useEffect(() => {
		dispatch(fetchJobs(userInput, currentPage));
		setCurrentPage(jobs.currentPage);
		setTotalPage(jobs.totalPage);
	}, []);
	useEffect(() => {
		dispatch(fetchJobs(userInput, currentPage));
	}, [currentPage]);
	return (
		<>
			<Container>
				<Row className="search">
					<Card className="mb-3">
						<Card.Body>
							<Form onSubmit={submitHandler}>
								<Row>
									<Col>
										<Card.Title>Job Description</Card.Title>
									</Col>
									<Col>
										<Card.Title>Location</Card.Title>
									</Col>
									<Col sm={2}></Col>
									<Col sm={2}></Col>
								</Row>
								<Row>
									<Col>
										<Form.Control
											value={userInput.description}
											onChange={changeInputHandler}
											name="description"
											placeholder="Filter by title, benefits, companies, expertise"
											type="text"
											size="sm"
										/>
									</Col>
									<Col>
										<Form.Control
											value={userInput.location}
											onChange={changeInputHandler}
											name="location"
											placeholder="Filter by city, state, zip code or country"
											type="text"
											size="sm"
										/>
									</Col>
									<Col sm={2} className="center">
										<Form.Check
											inline
											label="Full Time Only"
											value={userInput.full_time}
											onChange={changeInputHandler}
											name="full_time"
											type="checkbox"
										/>
									</Col>
									<Col sm={2} className="center">
										<button className="BTN-Search" type="submit">
											Search
										</button>
									</Col>
								</Row>
							</Form>
						</Card.Body>
					</Card>
				</Row>
				<Row>
					<h1 className="Title">Job List</h1>
					<hr></hr>
				</Row>
				{jobLists?.map((jobList, idx) => {
					return <JobRowData job={jobList} key={idx} />;
				})}
				<Row>
					<div className="pagination">
						{/* <PaginationJobs
							currentPage={currentPage}
							totalPage={totalPage}
							setCurrentPage={setCurrentPage}
						/> */}
						<Pagination>
							<Pagination.First onClick={firstPage} />
							<Pagination.Prev onClick={prevPage} />
							{pageNumbers}
							<Pagination.Next onClick={nextPage} />
							<Pagination.Last onClick={lastPage} />
						</Pagination>
					</div>
				</Row>
			</Container>
		</>
	);
}
