package groovy01;

import java.util.ArrayList;

public class Test09_ex {
  interface Closure {
    void m(int index, Object value); 
  }
  
  public static void each(ArrayList list, Closure closure) {
    for (int i = 0; i < list.size(); i++) {
      closure.m(i, list.get(i));
    }
  }
  
  public static void main(String[] args) {
    ArrayList list = new ArrayList();
    list.add("홍길동0");
    list.add("홍길동1");
    list.add("홍길동2");
    list.add("홍길동3");
    list.add("홍길동4");
    
    each(list, new Closure(){
      public void m(int index, Object value) {
        System.out.println(index + ":" + value);
      }
    });
    System.out.println("----------------");
    each(list, 
        (index, value) -> System.out.println(index + "*" + value));
    
  }

}







