function commentstrip(code){
	return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}