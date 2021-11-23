// 問題①
const array = [2, 4, 7, 5, 4, 3, 8];
console.log(array);
const  result = array.filter(function (x, i, self) {
        return self.indexOf(x) === i;
    });
console.log(result);

// 問題②
const LeapYear = year => {
	if (year % 4 == 0) {
		if (year % 100 == 0) {
			if (year % 400 == 0) {
				return true;
			}else{
				return false;
			}
		}else{
			return true;
		}
	}else{
		return false;
	}
}
console.log(LeapYear(2020));
console.log(LeapYear(2021));
