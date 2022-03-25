import React from 'react'
import { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import Cartproducts from './Cartproducts'
import { CartContext } from './Contexts/CartContext'
import products from './products'

export default function Cart() {
	const { cart, setCart } = useContext(CartContext)
	return (
		<>
			<div className="main">
				<h1>Cart</h1>
				<Row>
					{products.map((product) =>
						cart.includes(product._id) ? (
							<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
								<Cartproducts product={product} />
							</Col>
						) : (
							''
						)
					)}
				</Row>
			</div>
		</>
	)
}
