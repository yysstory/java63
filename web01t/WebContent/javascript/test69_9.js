"use strict"; 

var elements = document.querySelectorAll('.detail');
for (var i = 0; i < elements.length; i++) {
	elements[i].style.display = 'none';
}

// 게시글을 저장하는 객체 생성자 함수
function Board(title, content, writer, password) {
	this.title = title;
	this.content = content;
	this.writer = writer;
	this.password = password;
	this.date = new Date();
	this.count = 0;
}

function resetForm() {
	// reset 버튼에게 click 이벤트를 전달 
	//1) MouseEvent 객체 생성
	var event = new MouseEvent('click', {
    'view': window,
    'bubbles': true,
    'cancelable': true
  });
	
	//2) reset  버튼에게 이벤트 전달
	document.getElementById('btnCancel').dispatchEvent(event);
}

var boardList = [];

document.getElementById('btnCancel').onclick = function(event) {
	var detailClass = document.querySelectorAll('.detail');
  var createClass = document.querySelectorAll('.create');
  
  for (var i = 0; i < detailClass.length; i++) {
    detailClass[i].style.display = 'none';
  }
  
  for (var i = 0; i < createClass.length; i++) {
    createClass[i].style.display = '';
  }
}

document.getElementById('btnAdd').onclick = function(event) {
	var board = new Board(
			document.getElementById('title').value,
			document.getElementById('content').value,
			document.getElementById('writer').value,
			document.getElementById('password').value);
	
	boardList.push(board);
	
	resetForm();
	
	refreshBoardList();
};

function refreshBoardList() {
	var boardTable = document.getElementById('boardTable');
	//var tbody = boardTable.children[0]; // <tbody>
	var tbody = boardTable.firstElementChild; // <tbody>
	for (var i = tbody.children.length -1 ; i > 0; i--) {
		//console.log(tbody.children[i]);
		tbody.removeChild(tbody.children[i]);
	}
	  
	var tr = null;
	var td = null;
	var a = null;
	var text = null;
	for (var i in boardList) {
		tr = document.createElement('tr');
		
		td = document.createElement('td');
		text = document.createTextNode(i);
		td.appendChild(text);
		tr.appendChild(td);
    
		td = document.createElement('td');//td 생성   
		a = document.createElement('a');//a 생성
		// 일반 객체가 아니라 엘리먼트에 없던 속성을 추가할 때는
		// setAttribute()를 사용한다.
		a.setAttribute('bno', new String(i));
		a.href = '#';
		a.onclick = loadBoardDetail;
		text = document.createTextNode(boardList[i].title); //제목 생성
		a.appendChild(text);//a에 붙인다.
	  td.appendChild(a);//a를 td에 붙인다.
	  tr.appendChild(td);
		
	  td = document.createElement('td');
    text = document.createTextNode(boardList[i].writer);
    td.appendChild(text);
	  tr.appendChild(td);
	  
	  td = document.createElement('td');
	  text = document.createTextNode(toYYYYMMDD(boardList[i].date));
	  td.appendChild(text);
	  tr.appendChild(td);
	  
	  td = document.createElement('td');
	  text = document.createTextNode(boardList[i].count);
	  td.appendChild(text);
	  tr.appendChild(td);
	  
	  tbody.appendChild(tr);
	}
}

function loadBoardDetail(event) {
	event.preventDefault();
	
	var detailClass = document.querySelectorAll('.detail');
	var createClass = document.querySelectorAll('.create');
	
	for (var i = 0; i < detailClass.length; i++) {
		detailClass[i].style.display = '';
	}
	
	for (var i = 0; i < createClass.length; i++) {
		createClass[i].style.display = 'none';
	}
	
	var board = boardList[this.getAttribute('bno')];
	document.getElementById('no').value = this.getAttribute('bno');
	document.getElementById('title').value = board.title;
	document.getElementById('content').value = board.content;
	document.getElementById('writer').value = board.writer;
	document.getElementById('date').value = toYYYYMMDD(board.date);
}

function toYYYYMMDD(date) {
	return date.getFullYear() + '-' +
	  (date.getMonth() + 1) + '-' +
	  date.getDate();
}