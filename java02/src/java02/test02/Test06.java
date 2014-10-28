/* File을 사용하여 디렉토리 안의 파일 목록을 출력한다.
 * 
 */
package java02.test02;

import java.io.File;

public class Test06 {
  public static void main(String[] args) throws Exception {
    File f = new File("."); 
    String[] files = f.list();
    for (String filename : files) {
      System.out.println(filename);
    }
  }
}
























