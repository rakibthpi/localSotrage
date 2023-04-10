const inputFunction = () => {
	const inpurValue = document.getElementById('name').value
	if(inpurValue){
		setData(inpurValue);
	}
	else{
		setData('rakib');
	}
}

let addItemSet = {};
// const quentityItem = localStorage.getItem('rakib-stor');

const setData = id => {
	const quentity = addItemSet[id];
	addItemSet[id] = 1;

	localStorage.setItem('rakib-stor', JSON.stringify(addItemSet));
}