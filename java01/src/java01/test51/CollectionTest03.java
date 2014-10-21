package java01.test51;

class MyArray2 {
  Object[] list = new Object[10];
  int cursor;

  public int add(Object instance) {
    if (cursor < list.length) {
      list[cursor++] = instance;
      return 0;
    } else {
      return -1;
    }
  }

  public int size() {
    return cursor;
  }

  public Object get(int pos) {
    return list[pos];
  }

  public int remove(int pos) {
    if (pos >= 0 && pos < this.cursor) {
      for (int i = pos; i < this.cursor; i++) {
        if (i == (this.cursor - 1)) {
          list[i] = null;
          this.cursor--;
        } else {
          list[i] = list[i + 1];
        } // if
      } // for
      return 0;
    } else {
      return -1;
    } // if 
  }
  
  public int insert(int pos, String value) {
    return -1;
  }
}

public class CollectionTest03 {

  public static void main(String[] args) {
    MyArray2 arr = new MyArray2();
    System.out.println(arr.add("00000"));
    System.out.println(arr.add("11111"));
    System.out.println(arr.add("22222"));
    System.out.println(arr.add("33333"));
    System.out.println(arr.add("44444"));
    System.out.println(arr.add("55555"));
    System.out.println(arr.add("66666"));
    System.out.println(arr.add("77777"));

    System.out.println("-----------------");
    for (int i = 0; i < arr.size(); i++) {
      System.out.println(arr.get(i));
    }// for
    
    arr.remove(3);
    
    System.out.println("-----------------");
    for (int i = 0; i < arr.size(); i++) {
      System.out.println(arr.get(i));
    }// for

    arr.insert(3, "xxxxx");
    System.out.println("-----------------");
    for (int i = 0; i < arr.size(); i++) {
      System.out.println(arr.get(i));
    }// for
  }

}












