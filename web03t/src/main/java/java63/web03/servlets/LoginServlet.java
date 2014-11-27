package java63.web03.servlets;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/auth/login.do")
public class LoginServlet extends HttpServlet {
  private static final long serialVersionUID = 1L;

  @Override
  protected void doGet(
      HttpServletRequest request, 
      HttpServletResponse response)
          throws ServletException, IOException {

    Cookie[] cookies = request.getCookies();
    if (cookies != null) {
      for (Cookie cookie : cookies) {
        if (cookie.getName().equals("uid")) {
          request.setAttribute("uid", cookie.getValue());
        }
      }
    }
    
    RequestDispatcher rd = 
        request.getRequestDispatcher("/auth/LoginForm.jsp");
    rd.forward(request, response);
  }

  @Override
  public void doPost(
      HttpServletRequest request, 
      HttpServletResponse response)
          throws ServletException, IOException {
    try {
      String uid = request.getParameter("uid");
      String pwd = request.getParameter("pwd");
      String save = request.getParameter("save");

      if (save != null) { // 쿠키로 아이디 저장
        Cookie cookie = new Cookie("uid", uid);
        cookie.setMaxAge(60 * 60 * 24 * 15);
        response.addCookie(cookie);
      } else {
        Cookie cookie = new Cookie("uid", "");
        cookie.setMaxAge(0); // 무효화시킴
        response.addCookie(cookie);
      }
      /*
      ApplicationContext appCtx =
          WebApplicationContextUtils.getWebApplicationContext(
              this.getServletContext());
      */
      

    } catch (Exception e) {
      RequestDispatcher rd = 
          request.getRequestDispatcher("/common/Error.jsp");
      request.setAttribute("error", e);
      rd.forward(request, response);
    }
  }

}












