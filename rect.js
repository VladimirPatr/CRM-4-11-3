
const rectangle = {
	
	width: 5,
	hight: 5,


	get perimeter(){
		return 'Перимитр' + ' ' + 2*(this.width + this.hight) + ' '+ 'см'
		},
	get square(){
			return 'Площадь' + ' ' + this.width * this.hight + ' '+ 'см'
		},
	set setWidth(val){
		if (isNaN(val)) {
			this.width = 5;
		  } else {
			this.width = val;
		  }
		},
	set setHight(val){
		if (isNaN(val)) {
			this.width = 5;
		  } else {
			this.hight = val;
		  }	
		},	
}

console.log(rectangle.perimeter)
console.log(rectangle.square)

rectangle.setWidth = 100;
rectangle.setHight = 30;

console.log(rectangle.perimeter)
console.log(rectangle.square)







