import data from '../data.json'
const URL = 'https://api.tvmaze.com/schedule?country=US&date=2017-03-13'


export function getAll() {
	return data
}

export default () => {
	return 	fetch(URL)
				.then(response => Promise.all([response, response.json()]))	
}