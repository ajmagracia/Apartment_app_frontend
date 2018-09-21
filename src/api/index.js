
// the address of our rails backend, saved as a constant value, because we never want to accidently change it
const BASE = 'http://localhost:3001'
// var apartmentUrl = BASE + '/apartments/:id'

let getApartments = function() {
    // the function name getApartments is intended to remind you of the restful rails route --> GET '/apartments'.
    return fetch(BASE + '/apartments') // this would be equivalent to going to localhost:3000/apartments in your browser. Do that - - what do you see?
        .then((resp) => {
            // resp will be whatever you saw on the page localhost:3000/apartments, it is the result of our fetch call
            let json = resp.json() // we want to make sure what we have is just the json part of the response
            console.log(json);
            return json
        })
}

let getApartment = function(id) {
	return fetch(BASE + '/apartments/' + id)
		.then((resp) => {
			let json = resp.json()
			// console.log(json);
			return json
		})
}

let createApartment = function(apartment) {
    return fetch(BASE + '/apartments', {
        body: JSON.stringify(apartment),  // <- we need to stringify the json for fetch
        headers: {  // <- We specify that we're sending JSON, and expect JSON back
            'Content-Type': 'appliapartmention/json'
        },
        method: "POST"  // <- Here's our verb, so the correct endpoint is invoked on the server
    })
        .then((resp) => {
            let json = resp.json()
            console.log(json);
            return json
        })
}

export  {
    getApartments,
	getApartment,
    createApartment
}
