let weatherToday = "";

// we are randomizing to a number from 0 to 20 (20 not included) and printing either the corresponding case or the default case. Like a weather app! - From Brian

switch (Math.floor(Math.random() * 20)) {
	case 0:
		weatherToday = "Sunny Today";
		break;
	case 1:
		weatherToday = "Cloudy Today";
		break;
	case 2:
		weatherToday = "Rainy Today";
		break;
	case 3:
		weatherToday = "Thunderstorms Today";
		break;
	case 4:
		weatherToday = "Windy Today";
		break;
	case 5:
		weatherToday = "Partly Cloudy Today";
		break;
	default:
		weatherToday = "Clear Today";
}

console.log(weatherToday);