<%@ page language="java" 
    contentType="text/plain; charset=UTF-8"
    pageEncoding="UTF-8"
    trimDirectiveWhitespaces="true"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>       
{
  "userId": "${loginUser.userId}",
  "userName": "${loginUser.userName}",
  "email": "${loginUser.email}"
  <c:if test="${!empty loginUser.photo}">
    , "photo": "/web03t/fileupload/${loginUser.photo}"
  </c:if>
}
















