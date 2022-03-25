import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'
import { useContext } from 'react'
import { CartContext } from './Contexts/CartContext'

export default function Product({ product }) {
	const { cart, setCart } = useContext(CartContext)
	return (
		<Card className="my-3 p-3 rounded">
			<Link to={`/product/${product._id}`}>
				<Card.Img src={product.image} alt={product.name} variant="top" />
			</Link>
			<Card.Body>
				<Link to={`/product/${product._id}`}>
					<Card.Title as="div">
						<strong>{product.name}</strong>
					</Card.Title>
				</Link>
				<Card.Text as="div">
					<Rating
						value={product.rating}
						text={`${product.numReviews} reviews`}
					/>
				</Card.Text>
				<Card.Text as="h3">${product.price}</Card.Text>
				<Button
					disabled={cart.includes(product._id) ? true : false}
					onClick={() => {
						setCart([...cart, product._id])
					}}
				>
					Add to Cart
				</Button>
			</Card.Body>
		</Card>
	)
}
