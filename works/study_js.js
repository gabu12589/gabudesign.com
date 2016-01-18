// クロージャー使わない
var count = 0;
function counter(){
	count++;
	console.log(count);
}

counter();
counter();

/* ------------ */

function createCounter(){
	var count = 0;
	return function(){
		count++;
		console.log(count);
	}
}

var counter1 = createCounter();
counter1();
counter1();
counter1();

var counter2 = createCounter();
counter2();
counter2();

count = 100;

counter1();

element.addEventListener("foo");
element.addEventListener("clicj");
