for (var i = 1; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0){
		console.log('FizzBuzz');
	} else if (i % 3 === 0) {
		console.log('Fizz');
	} else if (i % 5 === 0) {
		console.log('Buzz');
	}	else {
		console.log(i);
	}
}

function drawTree(numRows) {
	for (var i = 0; i < numRows; i++) {
		var numStars = i * 2 + 1;
		console.log('*'.repeat(numStars));
	}
}

function drawTree(numRows) {
	for (var i = 0; i < numRows; i++) {
		var numStars = 1 * 2 +1;
		var numSpaces = numRows - 1 - i;
		console.log(' '.repeat(numSpaces)*'.repeat(numStars));
	}
}