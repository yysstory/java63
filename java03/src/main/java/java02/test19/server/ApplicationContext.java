package java02.test19.server;

import java.lang.reflect.Method;
import java.util.Collection;
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
  
  public void addBean(String key, Object instance) {
    objPool.put(key, instance);
  }
  
  public void injectDependency() throws Exception {
    Method[] methods = null;
    //Parameter parameter = null; // JDK 1.8 이상
    Object dependency = null;
    
    // objPool에서 객체를 하나 꺼낸다.
    for (Object obj : objPool.values()) {
      //System.out.println(obj.getClass().getName());
      
      // 그 객체에서 setter 메서드를 꺼낸다.
      methods = obj.getClass().getMethods();
      for (Method m : methods) {
        if (m.getName().startsWith("set")) {
          //System.out.println("   " + m.getName());
          
          // setter 메서드의 파라미터 타입 알아내기
          //parameter = m.getParameters()[0]; //JDK 1.8 이상
          //System.out.println("      " + parameter.getType().getName());
          
          // setter 메서드의 파라미터 타입과 일치하는 객체를 찾는다.
          //dependency = findDependency(parameter.getType());
          dependency = findDependency(m.getParameterTypes()[0]);
          
          if (dependency != null) {
            // setter 메서드를 호출하여 찾은 객체를 주입한다.
            m.invoke(obj, dependency);
          }
        }
      }
    }
  }

  private Object findDependency(Class<?> type) {
    for (Object obj : objPool.values()) {
      if (type.isInstance(obj)) {
        return obj;
      }
    }
    return null;
  }
  
  public Collection<Object> getAllBeans() {
    return objPool.values();
  }
  
}






























