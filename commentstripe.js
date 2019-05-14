function comments(code){
	return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}

comments("y = 10 + 4; //basic addtion");