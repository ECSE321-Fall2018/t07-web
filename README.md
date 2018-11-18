# t07-web

### Changelog
Nov. 18, 2018: (Backend)
- Additional changes were made to the backend repository (linked below)
- REST endpoints were added to support the ranking feature (for drivers, passengers and trips)
- Ranking is done by counting number of trips a driver or passenger was on, or the number of occurrences of a certain route for trip ranking
- All 3 of the added endpoints support parameters for startDate and endDate that bound the search
- See the other repository for full details

Nov. 17, 2018
(Backend)
- Changes were made to the backend repository (https://github.com/ECSE321-Fall2018/t07)
- REST endpoints were added to support the partial matching search functions for passengers, drivers and trips
- These search endpoints also support status modifiers so you can search for every result, only those that have been on trips or those that are on in progress trips
- See the other repository for full details
(Frontend)
- Bootstrap template installed
- Router setup for /
- Still not sure why Heroku doesn't recognize this code: procfile? 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
