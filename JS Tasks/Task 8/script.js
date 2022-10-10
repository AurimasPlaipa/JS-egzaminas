/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
// 
function calculate(a, b, operator) {
	switch(operator){
	  case 'sum':
		return a + b;
	  case 'sub':
		return a - b;
	  case 'div':
		return a / b;
	  case 'multi':
		return a * b;
	}
  }
  console.log(calculate(1, 2, 'sub'));