import React from 'react'
import Header from './Header'
import './bootstrap.min.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import { Container } from 'react-bootstrap'
import Cart from './Cart'
import { useState } from 'react'
import { CartContext } from './Contexts/CartContext'

export default function App() {
	const [cart, setCart] = useState([])
	return (
		<CartContext.Provider value={{ cart, setCart }}>
			<div className="App">
				<Header />
				<div class="jumbotron jumbotron-fluid">
					<Container>
						<h1>Cart Assignment !</h1>
						<p>Try to add and remove items to and from cart</p>
					</Container>
				</div>
				<main className="py-3">
					<Container>
						<Routes>
							<Route path="/" element={<Home />}></Route>
							<Route path="/about" element={<About />}></Route>
							<Route path="/cart" element={<Cart />}></Route>
						</Routes>
					</Container>
				</main>
			</div>
		</CartContext.Provider>
	)
}
