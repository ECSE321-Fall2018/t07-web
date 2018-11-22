<template>
	<div id="contents">
	  <nav class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
      <button class="navbar-toggler navbar-toggler-right hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Rideshare Dashboard</a>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Fleet Status</router-link>
          </li>
          <li class="nav-item active">
            <router-link to="/ranking" class="nav-link">Ranking <span class="sr-only">(current)</span></router-link>
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
	              <a class="nav-link" v-bind:class="{ active: type === 'A' }" v-on:click="TopDrivers" href="#">Top Drivers <span class="sr-only">(current)</span></a>
	            </li>
	            <li class="nav-item">
	              <a class="nav-link" v-bind:class="{ active: type === 'B' }" v-on:click="TopPassengers" href="#">Top Passengers</a>
	            </li>
	            <li class="nav-item">
	              <a class="nav-link" v-bind:class="{ active: type === 'C' }" v-on:click="TopRoutes" href="#">Top Routes</a>
	            </li>
	          </ul>
	        </nav>
	      </div>
	    </div>
	    <main class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
	    	<h1>{{ title }}</h1>
	    	
	    	<!-- For TopDrivers -->
	          <div class="table-responsive"  v-if="type=='A'"> 
	          From: <input type="date" v-model="startDate" placeholder="YYYY-MM-DD">
	          <span>&nbsp; &nbsp;</span>
						To: <input type="date" v-model="endDate" placeholder="YYYY-MM-DD">
	          <span>&nbsp; &nbsp;</span>
						<button type="button" class="btn btn-success" @click="filterByDate()">Update</button>
	          
	            <table class="table table-striped">
	              <thead>
	                <tr>
	                  <th># of Trips</th>
	                  <th>Driver Name</th>
	                  <th>E-mail</th>
	                </tr>
	              </thead>
	              <tbody>
	                <tr v-for="driver in drivers">
	                  <td>{{ driver.count }}</td>
	                  <td>{{ driver.firstname }} {{ driver.lastname }}</td>
	                  <td>{{ driver.email }}</td>
	                </tr>
	              </tbody>
	            </table>
	          </div>

	    	<!-- For TopPassengers -->
	          <div class="table-responsive"  v-if="type=='B'"> 
	          From: <input type="date" v-model="startDate" placeholder="YYYY-MM-DD">
	          <span>&nbsp; &nbsp;</span>
						To: <input type="date" v-model="endDate" placeholder="YYYY-MM-DD">
	          <span>&nbsp; &nbsp;</span>
						<button type="button" class="btn btn-success" @click="filterByDate()">Update</button>
	          
	            <table class="table table-striped">
	              <thead>
	                <tr>
	                  <th># of Trips</th>
	                  <th>Passenger Name</th>
	                  <th>E-mail</th>
	                </tr>
	              </thead>
	              <tbody>
	                <tr v-for="passenger in passengers">
	                  <td>{{ passenger.count }}</td>
	                  <td>{{ passenger.firstname }} {{ passenger.lastname }}</td>
	                  <td>{{ passenger.email }}</td>
	                </tr>
	              </tbody>
	            </table>
	          </div>	          

	    	<!-- For TopRoutes -->
	          <div class="table-responsive"  v-if="type=='C'"> 
	          From: <input type="date" v-model="startDate" placeholder="YYYY-MM-DD">
	          <span>&nbsp; &nbsp;</span>
						To: <input type="date" v-model="endDate" placeholder="YYYY-MM-DD">
	          <span>&nbsp; &nbsp;</span>
						<button type="button" class="btn btn-success" @click="filterByDate()">Update</button>
	          
	            <table class="table table-striped">
	              <thead>
	                <tr>
	                  <th>Frequency</th>
	                  <th>Departure Location</th>
	                  <th>Destination(s)</th>
	                </tr>
	              </thead>
	              <tbody>
	                <tr v-for="trip in trips">
	                  <td>{{ trip.count }}</td>
	                  <td>{{ trip.departure_location }}</td>
	                  <td>
	                  	<span v-for="destination in trip.destinations">{{ destination }}</span>

	                  </td>
	                </tr>
	              </tbody>
	            </table>
	          </div>	   
	          
	    </main>
	</div>
</template>

<style>
</style>

<script src="./Ranking.js"></script>
