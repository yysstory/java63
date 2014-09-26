"use strict"; 

//window.bit = function(value) {
function bit(value) {
	var element = null;
	if (value.charAt(0) == '#') { // 아이디일 경우,
	  element = document.getElementById(value.substring(1));
	} else if (value.charAt(0) == '<') { // 태그일 경우,
	  element = document.createElement(value.replace(/<|>/g, ''));	
	}
	
	element.text = function(value) {
		this.textContent = value;
		return this;
	};
	
	element.html = function(value) {
		this.innerHTML = value;
		return this;
	};
	
	element.append = function(child) {
		this.appendChild(child);
		return this;
	};
	
	element.appendTo = function(parent) {
		parent.appendChild(this);
		return this;
	};
	
	element.attr = function(name, value) {
		this.setAttribute(name, value);
		return this;
	};
	
	element.click = function(listener) {
		this.onclick = listener;
		return this;
	}
	
	return element;
}

var $ = bit;

// 함수도 객체다! 저장소로 사용될 수 있다.
bit.toYYYYMMDD = function(date) {
	return date.getFullYear() + '-' +
	  (date.getMonth() + 1) + '-' +
	  date.getDate();
};















