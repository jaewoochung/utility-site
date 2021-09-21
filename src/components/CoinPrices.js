import React, { useState, useEffect } from 'react'
import axios from 'axios'

function CoinPrices() {
	const [coinPrice, setCoinPrice] = useState([])
	const [cardano, setCardano] = useState([])
	
	useEffect(() => {
		axios
			.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=10')
			.then(response => {
				setCoinPrice(response.data.coins[3].price)
				setCardano(response.data.coins[3].name)
			})
	}, [])
	
	return (
		<div>
			<h3>Coinbases: Coin Price</h3>
			{cardano}: ${ JSON.stringify(coinPrice) }
		</div>
	)
}

export default CoinPrices
