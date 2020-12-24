import { Component } from 'react';
import './App.css';

class App extends Component {
	state = {
		weather: {},
		name: '',
		main: {}
	};

	componentDidMount = async () => {
		await this.getWeather();
	};

	getWeather = async () => {
		const city = 'brooklyn';
		const key = process.env.REACT_APP_WEATHER_API_KEY;
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`
		);
		const data = await response.json();
		const { main, name, weather } = data;
		this.setState({ main, name, weather: weather[0] });
	};

	render() {
		return (
			<div className="App">
				<div>
					<img
						src={`http://openweathermap.org/img/wn/${this.state.weather.icon}@2x.png`}
						alt={this.state.weather.main}
					/>
				</div>
				<div>{this.state.name}</div>
				<div>{this.state.main.temp}&deg; F</div>
			</div>
		);
	}
}

export default App;
