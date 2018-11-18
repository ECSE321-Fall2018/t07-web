import axios from 'axios'
var config = require('../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

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
    }
  },
  created: function () {
		AXIOS.get(`/trips`)
		.then(response => {
			// JSON responses are automatically parsed.
			this.trips = response.data
		})
		.catch(e => {
			this.errorParticipant = e;
		});
	}, 
	methods: {

	}
}



