package java01.test55;

public class TestB implements Gamer {
  int count;
  
  @Override
  public String who() {
    return "임꺽정";
  }

  @Override
  public void init() {}

  @Override
  public String play() {
    count++;
    if ((count % 5) == 0)
      return Gamer.PAPER;
    else
      return Gamer.ROCK;
  }

  @Override
  public void sendResult(int result) {}

}





