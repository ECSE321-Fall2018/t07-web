<template>
	<div id="contents">
		<div class="container-fluid">
	      <div class="row">
	        <nav class="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
	          <ul class="nav nav-pills flex-column">
	            <li class="nav-item">
	              <a class="nav-link active" href="#">Overview <span class="sr-only">(current)</span></a>
	            </li>
	            <li class="nav-item">
	              <a class="nav-link" href="/FleetRoutes">By Routes</a>
	            </li>
	            <li class="nav-item">
	              <a class="nav-link" href="/FleetDrivers">By Drivers</a>
	            </li>
	            <li class="nav-item">
	              <a class="nav-link" href="/FleetPassengers">By Passengers</a>
	            </li>
	          </ul>
	        </nav>
	      </div>
	    </div>
	    <main class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
	    	<h1>Overview</h1>
	          <div class="table-responsive">
	            <table class="table table-striped">
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
	    </main>
	</div>
</template>

<style>
</style>

<script src="./Ranking.js"></script>
