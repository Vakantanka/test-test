function preSchoolSum(n1, n2) {
	let result = n1 + n2;
	if (result < 0) return 0; 
	if (result > 10) return "sok";
	return(Math.floor(result));
}

module.exports = preSchoolSum;