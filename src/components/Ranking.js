import axios from 'axios'
var config = require('../../config')

var frontendUrl = 'https://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'https://' + config.dev.backendHost

var AXIOS = axios.create({
  baseURL: backendUrl,
  headers: { 'Access-Control-Allow-Origin': frontendUrl }
})

export default {
  name: 'Ranking',
  data () {
    return {
      drivers: [],	// each list for each ranking
      passengers: [],
      trips: [],
      type: 'A', 		// this enables 'active' style for tab
      title: 'Top Performing Drivers'		// page title h1
    }
  },
  created: function () {
		this.TopDrivers();
	}, 
	methods: {
		TopDrivers: function() {
			this.title = 'Top Performing Drivers';
			this.type = 'A';
			AXIOS.post(`/drivers/ranking`)
			.then(response => {
				// JSON responses are automatically parsed.
				this.drivers = response.data
			})
			.catch(e => {
				this.errorParticipant = e;
			});
		}, 
		TopPassengers: function () {
			this.title = 'Top Performing Passengers';
			this.type = 'B';
			AXIOS.post(`/passengers/ranking`)
			.then(response => {
				// JSON responses are automatically parsed.
				this.passengers = response.data
			})
			.catch(e => {
				this.errorParticipant = e;
			});
		}, 
		TopRoutes: function () {
			this.title = 'Top Popular Routes';
			this.type = 'C';
			AXIOS.post(`/trips/ranking`)
			.then(response => {
				// JSON responses are automatically parsed.
				this.trips = response.data
			})
			.catch(e => {
				this.errorParticipant = e;
			});
		}
	}
}


