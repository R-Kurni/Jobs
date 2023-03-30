import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
	const navigate = useNavigate();
	return (
		<>
			<Container>
				<div className="not-found-content">
					<Row>
						<img
							src="https://myajo.net/wp/wp-content/uploads/2022/07/209b4fc22990335b657275bedf36806e.png"
							style={{ cursor: "pointer" }}
							onClick={() => {
								navigate("/");
							}}
						/>
					</Row>
				</div>
			</Container>
		</>
	);
}
