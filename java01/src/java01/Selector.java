package java01;

public class Selector {

  public static void main(String[] args) {
    String[] students = new String[]{
        "권영근", "배연정", "송민준", "지용근", "정해창", "장대혁",
        "조민석", "김지영", "박기남", "이용호", "염정우", "김종소",
        "김해경", "한진수", "양기욱", "이주형", "허정아", "김광철",
        "반기백", "윤용식", "김원기", "나정담", "현나래", "김기현",
        "조현권", "강다현", "김다은", "신경민", "윤종익", "정세라"
    };
    
    int no = (int)(Math.random() * 30);
    System.out.println(students[no]);

  }

}











