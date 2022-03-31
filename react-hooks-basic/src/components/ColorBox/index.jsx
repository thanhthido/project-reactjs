import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './ColorBox.scss'

ColorBox.propTypes = {}

function getRandomColor() {
	const COLOR_LIST = [
		'#55efc4',
		'#81ecec',
		'#74b9ff',
		'#a29bfe',
		'#dfe6e9',
		'#ffeaa7',
		'#fab1a0',
		'#ff7675',
		'#fd79a8',
		'#636e72',
	]
	const randomIndex = Math.trunc(Math.random() * 5)
	return COLOR_LIST[randomIndex]
}

function ColorBox() {
	const [color, setColor] = useState(() => {
		const initColor = localStorage.getItem('box_color') || '#55efc4'
		console.log(initColor)
		return initColor
	})

	function handleBoxClick() {
		// get random color --> set color
		const newColor = getRandomColor()
		setColor(newColor)
		localStorage.setItem('box_color', newColor)
	}

	return (
		<div className='color-box' style={{ backgroundColor: color }} onClick={handleBoxClick}>
			COLOR BOX
		</div>
	)
}

export default ColorBox
