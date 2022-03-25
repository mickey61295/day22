import React from 'react'
import { Badge, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from './Contexts/CartContext'

export default function Header() {
	const navigate = useNavigate()
	const { cart, setCart } = useContext(CartContext)
	return (
		<>
			<Navbar bg="dark" variant="dark" expand="lg">
				<Container>
					<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
							<Nav.Link onClick={() => navigate('/about')}>About</Nav.Link>
							<NavDropdown title="Shop" id="basic-nav-dropdown">
								<NavDropdown.Item>All Products</NavDropdown.Item>
								<NavDropdown.Divider />
								<hr width="90%" />
								<NavDropdown.Item className="my-2">
									Popular Items
								</NavDropdown.Item>
								<NavDropdown.Item className="my-2">
									New Arrivals
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Nav className="ml-auto">
							<Nav.Link onClick={() => navigate('/cart')}>
								Cart<Badge>{cart.length}</Badge>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	)
}
