import React, { useEffect, useState } from "react";

//create your first component
const TrafficLight = () => {

	const [color, setColor] = useState('red');
	const [automatic, setAutomatic] = useState(false);

	const changeColor = (color) => {
		setColor(color);
	}

	useEffect(() => {
		if (automatic) {
			if (color == 'red') {
				setTimeout(() => {
					setColor('yellow');
				}, 2000)
			} else if (color == 'yellow') {
				setTimeout(() => {
					setColor('green');
				}, 500)
			} else if (color == 'green') {
				setTimeout(() => {
					setColor('red');
				}, 2000)
			}
		}
	}, [automatic, color]);

	return (
		<>
			<div className="container">
				<div className="top-box"></div>

				<div className="lights-container">
					<div onClick={() => changeColor('red')} className={`red ${color == 'red' ? "light-on" : ''}`}></div>
					<div onClick={() => changeColor('yellow')} className={`yellow ${color == 'yellow' ? "light-on" : ''}`}></div>
					<div onClick={() => changeColor('green')} className={`green ${color == 'green' ? "light-on" : ''}`}></div>
				</div>

				<div className="boton">
					<button onClick={() => { setAutomatic(!automatic) }} className="btn btn-success">Change Manual/Automatic</button>
				</div>
			</div >

		</>
	);
};

export default TrafficLight;
