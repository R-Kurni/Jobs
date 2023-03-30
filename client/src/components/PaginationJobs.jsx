import { Pagination } from "react-bootstrap";

function PaginationJobs({ currentPage, totalPage, setCurrentPage }) {
	const pageNumber = [];
	for (let i = 1; i <= totalPage; i++) {
		pageNumber.push(i);
	}
	const nextPage = () => {
		if (currentPage < totalPage) {
			setCurrentPage(currentPage + 1);
		}
	};
	const prevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};
	const lastPage = () => {
		setCurrentPage(totalPage);
	};
	const firstPage = () => {
		setCurrentPage(1);
	};
	return (
		<div>
			<Pagination>
				<Pagination.First onClick={firstPage} />
				<Pagination.Prev onClick={prevPage} />
				{pageNumber?.map((number) => {
					return (
						<Pagination.Item
							key={number}
							active={number === currentPage}
							onClick={() => setCurrentPage(number)}
						>
							{number}
						</Pagination.Item>
					);
				})}
				<Pagination.Next onClick={() => nextPage()} />
				<Pagination.Last onClick={() => lastPage()} />
			</Pagination>
		</div>
	);
}

export default PaginationJobs;
