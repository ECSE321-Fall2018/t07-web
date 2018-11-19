import axios from 'axios'
var config = require('../../config')

var frontendUrl = 'https://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'https://' + config.dev.backendHost

var AXIOS = axios.create({
  baseURL: backendUrl,
  headers: { 'Access-Control-Allow-Origin': frontendUrl }
})

function tripdetails (name, date, time, dep, dest) {
	this.name = name;
	this.date = date;
	this.time = time;
	this.dep = dep;
	this.dest = dest;
}

export default {
  name: 'Fleet',
  data () {
    return {
      trips: [],
      drivers: [],
      passengers: [],
      type: 'A',
      title: 'Overview',
    }
  },
  created: function () {
  		this.type = 'A';
  		this.title = 'Overview';
  		this.Overview();
	}, 
	methods: {
		Overview: function() {
			this.title = 'All trips in the system';
			this.type = 'A';
			AXIOS.get(`/trips`)
			.then(response => {
				// JSON responses are automatically parsed.
				this.trips = response.data
			})
			.catch(e => {
				this.errorParticipant = e;
			});
		},
		ActiveRoutes: function() {
			this.title = 'Active Routes';
			this.type = 'B';
			
			var date=new Date(); 
			var today = date.getFullYear() + "-"+(date.getMonth()+1)+"-"+date.getDate();
						
			AXIOS.post(`/trips/search?date=` + today)
			.then(response => {
				// JSON responses are automatically parsed.
				this.trips = response.data
			})
			.catch(e => {
				this.errorParticipant = e;
			});
		},
		ActiveDrivers: function() {
			this.title = 'Active Drivers';
			this.type = 'C';
						
			AXIOS.post('/users/search/partialDriver?status=enroute')
			.then(response => {
				// JSON responses are automatically parsed.
				this.drivers = response.data
			})
			.catch(e => {
				this.errorParticipant = e;
			});
		},
		ActivePassengers: function() {
			this.title = 'Active Passengers';
			this.type = 'D';
						
			AXIOS.post('/users/search/partialPassenger?status=enroute')
			.then(response => {
				// JSON responses are automatically parsed.
				this.passengers = response.data
			})
			.catch(e => {
				this.errorParticipant = e;
			});
		}
	}
}



