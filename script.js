//your JS code here. If required.
function nonRepeat(str){
	for(let i = 0; i<str.length-1; i++){
		let c = str[i];
		if(str.indexOf(c)===i && str.indexOf(c, i+1)===-1){
			return c;
		}
	}
	return null;
}

let str = prompt("Enter a string"); 
let res = nonRepeat(str);
alert(res);
