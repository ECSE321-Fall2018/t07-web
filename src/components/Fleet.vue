<template>
	<div id="contents">
	  <nav class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
      <button class="navbar-toggler navbar-toggler-right hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Rideshare Dashboard</a>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Fleet Status <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/ranking" class="nav-link">Ranking</router-link>
          </li>
        </ul>
        <!--
        <form class="form-inline mt-2 mt-md-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        -->
      </div>
    </nav>
		<div class="container-fluid">
	      <div class="row">
	        <nav class="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
	          <ul class="nav nav-pills flex-column">
	            <li class="nav-item">
	              <a class="nav-link" v-bind:class="{ active: type === 'A' }" v-on:click="Overview" href="#">All Trips</a>
	            </li>
	            <li class="nav-item">
	              <a class="nav-link" v-bind:class="{ active: type === 'B' }" v-on:click="ActiveRoutes" href="#">Active Routes</a>
	            </li>
	            <li class="nav-item">
	              <a class="nav-link" v-bind:class="{ active: type === 'C' }" v-on:click="ActiveDrivers" href="#">Active Drivers</a>
	            </li>
	            <li class="nav-item">
	              <a class="nav-link" v-bind:class="{ active: type === 'D' }" v-on:click="ActivePassengers" href="#">Active Passengers</a>
	            </li>
	          </ul>
	        </nav>
	      </div>
	    </div>
	    <main class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
	    	<h1>{{ title }}</h1>
	    	
	    	<!-- For Overview -->
	          <div class="table-responsive" v-if="type=='A'">
	            <table class="table table-striped" >
	              <thead>
	                <tr>
	                  <th>Completed</th>
	                  <th>Driver</th>
	                  <th>Date</th>
	                  <th>Time</th>
	                  <th>Departure</th>
	                  <th>Destination</th>
	                </tr>
	              </thead>
	              <tbody>
	                <tr v-for="trip in trips">
	                  <td>{{ trip.isCompleted }}</td>
	                  <td>{{ trip.firstname }} {{ trip.lastname }}</td>
	                  <td>{{ trip.departure_date }}</td>
	                  <td>{{ trip.departure_time }}</td>
	                  <td>{{ trip.departure_location }}</td>
	                  <td>
	                  	<span v-for="destination in trip.destinations">{{ destination }}</span>

	                  </td>
	                </tr>
	              </tbody>
	            </table>
	          </div>
	          
	          <!-- For Active Routes -->
	          <div class="table-responsive" v-else-if="type=='B'">
	            <p>
	            	For now, it's just showing all trip list for TODAY. <br />
					We might have to discuss the presentation of each specific options. <br />
					Could have: Date picker (so provide option to see the data from past). 
				</p>
	            <table class="table table-striped" >
	              <thead>
	                <tr>
	                  <th>Active</th>
	                  <th>Driver</th>
	                  <th>Date</th>
	                  <th>Time</th>
	                  <th>Departure</th>
	                  <th>Destination</th>
	                </tr>
	              </thead>
	              <tbody>
	                <tr v-for="trip in trips">
	                  <td>{{ !trip.isCompleted }}</td>
	                  <td>{{ trip.firstname }} {{ trip.lastname }}</td>
	                  <td>{{ trip.departure_date }}</td>
	                  <td>{{ trip.departure_time }}</td>
	                  <td>{{ trip.departure_location }}</td>
	                  <td>
	                  	<span v-for="destination in trip.destinations">{{ destination }}</span>

	                  </td>
	                </tr>
	              </tbody>
	            </table>
	          </div>


	    	<!-- For Drivers -->
	          <div class="table-responsive" v-if="type=='C'">
	            <p>
	            	For now, it's just showing all ENROUTE drivers. 
				</p>
	            <table class="table table-striped" >
	              <thead>
	                <tr>
	                  <th>Driver Name</th>
	                  <th>Email</th>
	                  <th>Phone</th>
	                </tr>
	              </thead>
	              <tbody>
	                <tr v-for="driver in drivers">
	                  <td>{{ driver.firstname }} {{ driver.lastname }}</td>
	                  <td>{{ driver.email }}</td>
	                  <td>{{ driver.phone }}</td>
	                </tr>
	              </tbody>
	            </table>
	          </div>	          

	    	<!-- For Passengers -->
	          <div class="table-responsive" v-if="type=='D'">
	            <p>
	            	For now, it's just showing all ENROUTE passengers. 
				</p>
	            <table class="table table-striped" >
	              <thead>
	                <tr>
	                  <th>Passenger Name</th>
	                  <th>Email</th>
	                  <th>Phone</th>
	                </tr>
	              </thead>
	              <tbody>
	                <tr v-for="passenger in passengers">
	                  <td>{{ passenger.firstname }} {{ passenger.lastname }}</td>
	                  <td>{{ passenger.email }}</td>
	                  <td>{{ passenger.phone }}</td>
	                </tr>
	              </tbody>
	            </table>
	          </div>
  
	    </main>
	</div>
</template>

<style>
</style>

<script src="./Fleet.js"></script>
