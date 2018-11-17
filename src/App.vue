<template>    
	<div id="content_view">
		  <div class="container-fluid">
	      <div class="row">
	        <nav class="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
	          <ul class="nav nav-pills flex-column">
	            <li class="nav-item">
	              <a class="nav-link active" href="#">Overview <span class="sr-only">(current)</span></a>
	            </li>
	            <li class="nav-item">
	              <a class="nav-link" href="#">By Routes</a>
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
	    <router-view></router-view>
	</div>
</template>


<style>

</style>
