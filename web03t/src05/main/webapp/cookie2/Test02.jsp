<%@page import="java.net.URLDecoder"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<h1>쿠키 꺼내기</h1>
<%
Cookie[] cookies = request.getCookies();
if (cookies != null) {
  for (Cookie cookie : cookies) { %>
<p><%=cookie.getName()%> : <%=URLDecoder.decode(cookie.getValue())%></p>      
<%}
}
%>
</body>
</html>











