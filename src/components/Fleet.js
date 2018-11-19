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
      trips: [],	// for trip-record-based list (ALL)
      drivers: [],	// user-based list (Driver)
      passengers: [],	// also user-based list (Passenger)
      type: 'A',		// this enables 'active' style for tab
      title: 'Overview',		// page title h1
      keyword: '',
      enroute: ''
    }
  },
  created: function () {
  		this.type = 'A';
  		this.title = 'Overview';
  		this.Overview();
	}, 
	methods: {
		filterByKeyword: function () {
			if (this.type == 'A') {
				this.Overview();
			}
			else if (this.type == 'B') {
				this.ActiveRoutes();
			}
			else if (this.type == 'C') {
				this.ActiveDrivers();
			}
			else if (this.type == 'D') {
				this.ActivePassengers();
			}
		},
		Overview: function() {
			this.title = 'All trips in the system';
			this.type = 'A';
			AXIOS.get(`/trips`)
			.then(response => {
				// JSON responses are automatically parsed.
				this.trips = response.data
				for (var i=0; i<this.trips.length; i++) {
					this.trips[i].departure_location = this.trips[i].departure_location.charAt(0).toUpperCase() + this.trips[i].departure_location.slice(1);
					this.trips[i].firstname = this.trips[i].firstname.charAt(0).toUpperCase() + this.trips[i].firstname.slice(1);
					this.trips[i].lastname = this.trips[i].lastname.charAt(0).toUpperCase() + this.trips[i].lastname.slice(1);
					
					for (var j=0; j<this.trips[i].destinations.length; j++) {
						this.trips[i].destinations[j] = this.trips[i].destinations[j].charAt(0).toUpperCase() + this.trips[i].destinations[j].slice(1);

						if (j != this.trips[i].destinations.length-1) {
							this.trips[i].destinations[j] += ", ";
						}
					}
				}
			})
			.catch(e => {
				this.errorParticipant = e;
			});
		},
		ActiveRoutes: function() {
			this.title = 'Active Routes';
			this.type = 'B';
			
			var myenroute = "all";
			
			if (this.enroute) {
				myenroute = "enroute";
			}
			
			AXIOS.post("/trips/search/partial?keyword=" + this.keyword + "&status=" + myenroute)
			.then(response => {
				// JSON responses are automatically parsed.
				this.trips = response.data
				for (var i=0; i<this.trips.length; i++) {
					this.trips[i].departure_location = this.trips[i].departure_location.charAt(0).toUpperCase() + this.trips[i].departure_location.slice(1);
					this.trips[i].firstname = this.trips[i].firstname.charAt(0).toUpperCase() + this.trips[i].firstname.slice(1);
					this.trips[i].lastname = this.trips[i].lastname.charAt(0).toUpperCase() + this.trips[i].lastname.slice(1);
					
					for (var j=0; j<this.trips[i].destinations.length; j++) {
						this.trips[i].destinations[j] = this.trips[i].destinations[j].charAt(0).toUpperCase() + this.trips[i].destinations[j].slice(1);

						if (j != this.trips[i].destinations.length-1) {
							this.trips[i].destinations[j] += ", ";
						}
					}
				}
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
				for (var i=0; i<this.drivers.length; i++) {
					this.drivers[i].firstname = this.drivers[i].firstname.charAt(0).toUpperCase() + this.drivers[i].firstname.slice(1);
					this.drivers[i].lastname = this.drivers[i].lastname.charAt(0).toUpperCase() + this.drivers[i].lastname.slice(1);
				}
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
				for (var i=0; i<this.passengers.length; i++) {
					this.passengers[i].firstname = this.passengers[i].firstname.charAt(0).toUpperCase() + this.passengers[i].firstname.slice(1);
					this.passengers[i].lastname = this.passengers[i].lastname.charAt(0).toUpperCase() + this.passengers[i].lastname.slice(1);
				}
			})
			.catch(e => {
				this.errorParticipant = e;
			});
		}
	}
}



