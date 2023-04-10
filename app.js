// console.log('rakib hosen');

// const rand =  Math.round(Math.random()*10);
// console.log(rand);

const election = {
	rajjak:1,
	sabana:1,
	kajihayat:2,
	maruf:3,
}

const db = {};

// id dynamic array 

const addToDb = item => {
	// object three item data stor
	// db.name = 1
	// db['manna'] = 1;
	// db[item] = 1;

	if(item in election){
		election[item] = election[item] + 1;
	}
	else{
		election[item] =  1;
		
	}
	console.log(election);
}
