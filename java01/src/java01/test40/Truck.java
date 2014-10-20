/* 상속
 - 기존의 코드 재사용.
 - 기능을 추가하거나 변경할 때 기존의 코드를 손대지 않고 하는 방법
 - 굳이 소스가 없어도 된다.
 - class 새로만들클래스 extends 기존클래스 {
      추가할 인스턴스 변수;
      추가할 메서드(연산자)
    }
 - 상속을 해주는 클래스: super(parent) class
 - 상속을 받는 클래스: sub(child) class   
 - 상속 원리: 
   super 클래스의 모든 변수와 메서드를 가져오는 것이 아니다!
   단지, super 클래스의 대한 정보를 갖고 있을 뿐이다.
   => 따라서 서브 클래스를 사용하려면 반드시 수퍼 클래스가 있어야 한다.
 */
package java01.test40;

public class Truck extends Car {
  float weight; // kg
  
  // 개발자가 클래스에 대해 생성자를 만들지 않으면,
  // 컴파일러가 자동으로 기본 생성자를 만들어 준다.
  //public Truck() {}
  
}









