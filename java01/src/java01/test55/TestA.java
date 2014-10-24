package java01.test55;

public class TestA implements Gamer {
  int count;
  
  @Override
  public String who() {
    return "홍길동";
  }

  @Override
  public void init() {}

  @Override
  public String play() {
    count++;
    if ((count % 3) == 0) 
      return Gamer.ROCK;
    else if ((count % 4) == 0) 
      return Gamer.PAPER;
    else 
      return Gamer.SCISSORS;
  }

  @Override
  public void sendResult(int result) {}

}
