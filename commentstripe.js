function commentstrip(code){
	return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}

commentstrip("y = 10 + 4; //basic addtion");