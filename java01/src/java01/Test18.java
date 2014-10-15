/* 조건문 퀴즈
- 다음과 같이 동작하도록 프로그램을 작성하시오!
- java java01.Test18
   당신의 나이가 어떻게 되는지 다음 보기에서 고르시오!
   1) 10대
   2) 20대
   3) 30대
   4) 40대
   5) 50대
   6) 기타
   번호? 3
   당신은 30대 입니다.
   
- 힌트: 사용자로부터 키보드 입력 값을 받는 방법!
  Scanner scanner = new Scanner(System.in);
  String input = scanner.nextLine();
- 조건: 반드시 switch 문을 사용하라!     
 */
package java01;

public class Test18 {
  
  public static void main(String[] args) {
    System.out.println("\n\n---------------------------------");
    System.out.println("당신의 나이대를 아래 보기에서 선택하시오");
    System.out.println("\n 1) 10대 \n 2) 20대 \n 3) 30대 \n 4) 40대 \n 5) 50대 \n 6) 기타 ");
    System.out.println("\n\n---------------------------------");
    System.out.print("번호를 입력하세요 : ");
    
    java.util.Scanner scanner = new java.util.Scanner(System.in);
    int input = Integer.parseInt(scanner.nextLine());
     
    switch(input){
    case 1 : System.out.println("10대 입니다."); break;
    case 2 : System.out.println("20대 입니다."); break;
    case 3 : System.out.println("30대 입니다."); break;
    case 4 : System.out.println("40대 입니다."); break;
    case 5 : System.out.println("50대 입니다."); break;
    case 6 : System.out.println("기타."); break;
    default : System.out.println("유효하지 않은 번호"); 
    }
     
  }

}














