package java01.test53;

import java01.test53.step05.Iterator;

public class OtherIterator extends Iterator {
  int cursor;
  
  public OtherIterator() {}
  
  public boolean hasNext() {
    if (cursor < list.length)
      return true;
    else 
      return false;
  }
  
  public String next() {
    String value = list[cursor];
    cursor += 2;
    return value;
  }
}










