package java02;

public class Selector3 {

  public static void main(String[] args) {
    String[] loc = {"인천", "강남", "영등포", "안양",
        "수원", "성남", "신림", "노원"};
    System.out.println(
        loc[(int)(Math.random() * 8)]
        );
  }

}
