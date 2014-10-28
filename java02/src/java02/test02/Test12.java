/* 인스턴스 변수 값을 출력하기
 * 
 * 
 */
package java02.test02;

import java.io.DataOutputStream;
import java.io.FileOutputStream;

public class Test12 {
  
  static class Score {
    String name;
    int kor;
    int eng;
    int math;
    int sum;
    float average;
    
    public Score(String n, int k, int e, int m) {
      name = n; kor = k; eng = e; math = m;
      sum = k + e + m;
      average = sum / 3.0f;
    }
  }
  
  public static void main(String[] args) throws Exception {
    FileOutputStream out = new FileOutputStream("test11_2.dat");
    DataOutputStream out2 = new DataOutputStream(out);
    
    Score obj = new Score("홍길동", 100, 90, 80);
    
    // 연습: obj 인스턴스 값 출력
    
    
    // 닫을 때 꺼꾸로 닫는다.
    out2.close();
    out.close();
  }
  
 

}























