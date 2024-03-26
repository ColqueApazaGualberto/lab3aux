function sortFruits(fruits) {
	return fruits.sort();
} 

function getElementInTheMiddle(list) {
	return list[list.length / 2];
}

function adminLogin(user) {
	if(user == "ADMIN") return true;
	if(user == "DEV") return true;
	return false;
}


//1 sortFruits:
const sortFruits = fruits => fruits.sort();

//2 getElementInTheMiddle
const getElementInTheMiddle = list => list[Math.floor(list.length / 2)];

//3 adminLogin
const adminLogin = user => user === "ADMIN" || user === "DEV";
