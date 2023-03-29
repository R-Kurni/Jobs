import { Container, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
	const navigate = useNavigate();
	const handleLogout = () => {
		localStorage.clear();
		navigate("/login");
	};
	return (
		<>
			<Navbar className="NavBar-BG" sticky="top">
				<Container className="NavBar">
					<Link to="/" className="nav-link">
						<b className="nav-text">JOBS</b>
					</Link>
					<Link to="/login" className="nav-link" onClick={handleLogout}>
						<div className="nav-text">LOGOUT</div>
					</Link>
				</Container>
			</Navbar>
		</>
	);
}
