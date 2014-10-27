/* Quiz
 - 예외 처리 강화
 파일을 읽을 때,
 1) 파일이 존재하지 않으면, 다음 문장 출력
    xxxx.xxx 파일이 존재하지 않습니다.
 2) 디렉토리라면 
    xxxx.xxx 는 파일이 아니라 디렉토리입니다.
 
 파일을 쓸 때,
 1) 파일이 이미 존재한다면,
    xxxx.xxx  파일이 이미 존재합니다. 덮어 쓰시겠습니까?(y/n)y
    xxxx.xxx 파일을 출력하였습니다.
    
 2) 파일이 존재하지 않는다면,
    xxxx.xxx 파일을 출력하였습니다.
 */
package java02.test02;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

public class Test03 {

  public static void main(String[] args)  {
    FileInputStream in = null;
    FileOutputStream out = null;
    try{
      in = new FileInputStream(args[0]); 
      
      // args[0]가 img1.jpg 라면, => img1-01.jpg
      // 확장자 앞의 문자열을 자른다. => x
      // x + "-01" + 확장자 뒤의 문자열을 붙인다.
      /*
      String arr[]= args[0].split("\\."); // aaa.bbb.ttt.jpg
      
      String newFileName = arr[arr.length-2] + "-01." 
                + arr[arr.length-1];
      */
      int index = args[0].lastIndexOf('.');
      String newFileName = args[0].substring(0, index)
          + "-01" + args[0].substring(index);
      
      out = new FileOutputStream(newFileName);
      
      int b = 1;
      
      while ((b = in.read()) != -1 ) {
        out.write(b);
      } 
    } catch (FileNotFoundException ex) {
      System.out.println("img1.jpg 파일을 찾을 수 없습니다.");
    } catch (IOException ex) {   
      System.out.println("읽기 오류!");
          
    } finally {
      try {in.close();} catch (IOException ex) {}
      try {out.close();} catch (IOException ex) {}
    }
  }

}






