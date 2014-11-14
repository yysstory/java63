package java02.test21.spring.exam01;

/* Spring Bean Container 사용하기
 * 1) ClassPathXmlApplicationContext => 클래스 경로에서 설정 파일을 찾는다.
 * 2) FileSystemXmlApplicationContext => 설정 파일이 있는 경로 지정
 * 
 * 
 */

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test01 {

  public static void main(String[] args) {
    //Car c = new Car();
    ApplicationContext ctx =
        new ClassPathXmlApplicationContext(
            new String[]{"java02/test21/spring/exam01/application-context.xml"});
    
    
  }

}









