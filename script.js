//your JS code here. If required.
function nonRepeat(str) {
	for(let i = 0; i<str.length-1; i++){
		let c = str[i];
		if(str.indexOf(c)===i){
			if(str.indexOf(c, i+1)===-1){
				return c;
			}
		}
	}
	return ''
}
let str = prompt("Enter a string");
let res = nonRepeat(str);
// console.log(res);
alert(res)
