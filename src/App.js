import React, {useState} from 'react';
import './App.css';

function App() {
	const [timerStart, setTimerStart] = useState(0)
	const [timerId, setTimerId] = useState(null)

	const timerUp = () => {
		setTimerStart(timerStart => timerStart + 1)
	}

	const startTimer = () => {
		const id = setInterval(timerUp, 500)
		setTimerId(id)
	}

	function timerStop() {
		clearInterval(timerId)
	}

	const startReset = () => {
		setTimerStart(timerStart => timerStart = 0)
		clearInterval(timerId)
	}

	return (
		<div className="App">
			<header className="App-header">
				<p>{timerStart}</p>

				<div className='App-menu'>
					<button onClick={startTimer}>start</button>
					<button onClick={timerStop}>pause</button>
					<button onClick={startReset}>reset</button>
				</div>
			</header>
		</div>
	);
}

export default App;
