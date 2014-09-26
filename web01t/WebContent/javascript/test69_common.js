"use strict"; 

function bit(value) {
	if (value.charAt(0) == '#') { // 아이디일 경우,
	  return document.getElementById(value.substring(1));
	} else if (value.charAt(0) == '<') { // 태그일 경우,
	  return document.createElement(value.replace(/<|>/g, ''));	
	}
}

var $ = bit;

// 함수도 객체다! 저장소로 사용될 수 있다.
bit.toYYYYMMDD = function(date) {
	return date.getFullYear() + '-' +
	  (date.getMonth() + 1) + '-' +
	  date.getDate();
};















