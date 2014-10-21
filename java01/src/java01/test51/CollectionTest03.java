package java01.test51;

class MyArray2 {
  Object[] list = new Object[10];
  int index;

  public int add(Object instance) {
    if (index < list.length) {
      list[index++] = instance;
      return 0;
    } else {
      return -1;
    }
  }

  public int size() {
    return index;
  }

  public Object get(int index) {
    return list[index];
  }

  public int remove(int index) {
    if (index >= 0 && index < this.index) {
      for (int i = index; i < this.index; i++) {
        if (i == (this.index - 1)) {
          list[i] = null;
          this.index--;
        } else {
          list[i] = list[i + 1];
        } // if
      } // for
      return 0;
    } else {
      return -1;
    } // if 
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

  }

}












