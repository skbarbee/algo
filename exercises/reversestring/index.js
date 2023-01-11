// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	// reduce takes all the different values withing array and condense them all done to one singular value
	return str.split('').reduce((rev, char)=>{
		return char+rev
	}	  
	,'')

}

module.exports = reverse;

// USING A FOR LOOP
// function reverse(str) {
// 	let reversed = ''

// 	for (let character of str){
// 		reversed = character + reversed
// 	}
// 	return reversed
// }

// SIMPLE SOLUTION USING REVERSE
// function reverse(str) {
// 	return str.split('').reverse().join('')

// }