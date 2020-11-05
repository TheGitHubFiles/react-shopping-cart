import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { ProductContext } from './contexts/ProductContext'
import { CartContext } from './contexts/CartContext.js'

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item])
	};

	return (
		<ProductContext.Provider value={{ products, addItem }}>
			<div className="App">
				<CartContext.Provider value={{ cart }}>
					<Navigation />
				</CartContext.Provider>
				{/* Routes */}
				<Route exact path="/">
					<Products products={products} addItem={addItem} />
				</Route>
				<CartContext.Provider value={{ cart }}>
				<Route path="/cart">
						<ShoppingCart />
				</Route>
				</CartContext.Provider>
			</div>
		</ProductContext.Provider>
	);
}

export default App;
