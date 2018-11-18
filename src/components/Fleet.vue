<template>
	<div id="contents">
		<div class="container-fluid">
	      <div class="row">
	        <nav class="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
	          <ul class="nav nav-pills flex-column">
	            <li class="nav-item">
	              <a class="nav-link" v-bind:class="{ active: type === 'A' }" v-on:click="Overview" href="#">Overview</a>
	            </li>
	            <li class="nav-item">
	              <a class="nav-link" v-bind:class="{ active: type === 'B' }" v-on:click="ActiveRoutes" href="#">By Routes</a>
	            </li>
	            <li class="nav-item">
	              <a class="nav-link" href="#">By Drivers</a>
	            </li>
	            <li class="nav-item">
	              <a class="nav-link" href="#">By Passengers</a>
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
	                  <td>{{ trip.destinations }}</td>
	                </tr>
	              </tbody>
	            </table>
	          </div>
	          
	          <!-- For Active Routes -->
	          <div class="table-responsive" v-else-if="type=='B'">
	            <p>
	            	For now, it's showing all active routes for TODAY. <br />
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
	                  <td>{{ trip.destinations }}</td>
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
