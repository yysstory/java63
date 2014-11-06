"use strict"; 

function people(){
	var names = ['정세라', '배연정', '송민준', '지용근', '정해창', '장대혁',
	             '조민석', '김지영', '박기남', '이용호', '염정우', '김종서',
	             '김해경', '한진수', '양기욱', '이주형', '허정아', '김광철',
	             '반기백', '윤용식', '김원기', '나정담', '현나래', '김기현',
	             '조현권', '강다현', '김다은', '신경민', '윤종익', '권영근'];
	return names;
}



function random(){
		
	var names = people();
	//var captains = captain(); 
	
/* 	for(var i=0; i < names.length; i++){
		
		for(var j=0; j<captains.length; j++){
			
			if(names[i] == captains[j]){
				names.pop(captains);
				
			}
		}
	} */
	
	var i = 0;
	var no = 0;
	var result = [];
	var timer = setInterval(function(){
		if (i >= 30) {
			clearInterval(timer);
			return;
		}
		while (true) {
		  no = Math.floor(Math.random() * 30); // 0 <= x < 1
		  if (document.form1.num[no].value == "") {
			document.form1.num[no].value = names.splice(0, 1);
			break;
		  }
		}
		i++;
	}, 2000);
	
	/*
	for (var i = 0; i < 30; i++) {
	  no = Math.floor(Math.random() * names.length); // 0 <= x < 1
	  result[i] = names.splice(no, 1);
	  document.form1.num[i].value = result[i];
		 
	}
	*/	
}



function captain(){
	var result2 = [];
	
	for(var i=0;i<8;i++ ){
	
		result2[i]= document.form2.name[i].value;
			}
	
	for(var i=0; i<result2.length; i++){
		document.getElementsByClassName('captainLine')[i].value = result2[i];
		}
	return result2;
	
}