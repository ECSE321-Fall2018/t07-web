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
      title: 'Top Performing Drivers'	,	// page title h1
      startDate: '2018-10-01',
      endDate: ''
    }
  },
  created: function () {
  		var date=new Date(); 
		var today = date.getFullYear() + "-"+(date.getMonth()+1)+"-"+date.getDate();
  	    this.endDate = today;
		this.TopDrivers();
	}, 
	methods: {
		filterByDate: function() {
			if (this.type == 'A') {
				this.TopDrivers();
			}
			else if (this.type == 'B') {
				this.TopPassengers();
			}
			else if (this.type == 'C') {
				this.TopRoutes();
			}
		},
		TopDrivers: function() {
			this.title = 'Top Performing Drivers';
			this.type = 'A';
			
			AXIOS.post("/drivers/ranking?startDate=" + this.startDate + "&endDate=" + this.endDate)
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
		TopPassengers: function () {
			this.title = 'Top Performing Passengers';
			this.type = 'B';
			AXIOS.post("/passengers/ranking?startDate=" + this.startDate + "&endDate=" + this.endDate)
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
		}, 
		TopRoutes: function () {
			this.title = 'Most Frequent Routes';
			this.type = 'C';
			AXIOS.post("/trips/ranking?startDate=" + this.startDate + "&endDate=" + this.endDate)
			.then(response => {
				// JSON responses are automatically parsed.
				this.trips = response.data
				for (var i=0; i<this.trips.length; i++) {
					this.trips[i].departure_location = this.trips[i].departure_location.charAt(0).toUpperCase() + this.trips[i].departure_location.slice(1);
					
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
		}
	}
}


