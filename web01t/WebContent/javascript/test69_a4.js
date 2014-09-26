"use strict"; 

//목표: 라이브러리화3? 
//return this의 활용

changeState('create');

var toYYYYMMDD = new Date();

function changeState(state) {
	var stateMap = {
			create: 'none',
			detail: 'none'
	};

	stateMap[state] = '';

	var detailClass = document.querySelectorAll('.detail');
	var createClass = document.querySelectorAll('.create');

	for (var i = 0; i < detailClass.length; i++) {
		detailClass[i].style.display = stateMap.detail;
	}

	for (var i = 0; i < createClass.length; i++) {
		createClass[i].style.display = stateMap.create;
	}
}

//게시글을 저장하는 객체 생성자 함수
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
	$('#btnCancel').dispatchEvent(event);
}

var boardList = [];

$('#btnCancel').onclick = function(event) {
	changeState('create');
}

$('#btnAdd').onclick = function(event) {
	var board = new Board(
			$('#title').value,
			$('#content').value,
			$('#writer').value,
			$('#password').value);

	boardList.push(board);

	resetForm();

	refreshBoardList();
};

function refreshBoardList() {
	var boardTable = $('#boardTable');
	//var tbody = boardTable.children[0]; // <tbody>
	var tbody = boardTable.firstElementChild; // <tbody>
	for (var i = tbody.children.length -1 ; i > 0; i--) {
		//console.log(tbody.children[i]);
		tbody.removeChild(tbody.children[i]);
	}

	for (var i in boardList) {
		$('<tr>')
			.appendTo(tbody)
			.append($('<td>').html(i))
			.append($('<td>')
					.append($('<a>')
							.attr('bno', new String(i))
							.attr('href', '#')
							.click(loadBoardDetail)
							.html(boardList[i].title)))
			.append($('<td>').html(boardList[i].writer))
			.append($('<td>').html($.toYYYYMMDD(boardList[i].date)))
			.append($('<td>').html(boardList[i].count));
			
	}
}

function loadBoardDetail(event) {
	event.preventDefault();

	changeState('detail');

	var board = boardList[this.getAttribute('bno')];
	$('#no').value = this.getAttribute('bno');
	$('#title').value = board.title;
	$('#content').value = board.content;
	$('#writer').value = board.writer;
	$('#date').value = $.toYYYYMMDD(board.date);
}















