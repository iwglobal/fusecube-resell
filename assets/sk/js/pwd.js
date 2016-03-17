// JavaScript Document

function TheLogin() {    
var password = '111';
if (this.document.login.password.value == password) {
		top.location.href="404.html";
	}
	else {
		window.alert("비밀번호를 잘못 입력하셨습니다.\r\n비밀번호 문의 : 010-6337-1983 (김현태 - 美DFI 한국대표)\r\nwww.diamonfusion.co.kr");
	}
} 

