package java02.test19.server;

import java.util.HashMap;
import java.util.Set;
import java02.test19.server.annotation.Component;

import org.reflections.Reflections;

/* Bean Container
 * 1) 빈 생성관리
 * 2) 의존 객체 자동 주입
 */

public class ApplicationContext {
  HashMap<String,Object> objPool = new HashMap<>();
  
  public ApplicationContext(String packageName) throws Exception {
    prepareObjects(packageName);
  }
  
  private void prepareObjects(String packageName) throws Exception {
    Reflections reflections = new Reflections(packageName);
    Set<Class<?>> clazzList = 
        reflections.getTypesAnnotatedWith(Component.class);
    
    Object instance = null;
    Component compAnno = null;
    
    for (Class<?> clazz : clazzList) {
      instance = clazz.newInstance();
      
      // 클래스 관리자에게서 Component 애노테이션 정보 얻기
      compAnno = (Component) clazz.getAnnotation(Component.class);
      
      if (compAnno.value().equals("")) {
        objPool.put(clazz.getName(), instance);
      } else {
        objPool.put(compAnno.value(), instance);
      }
    }
  }
}






























