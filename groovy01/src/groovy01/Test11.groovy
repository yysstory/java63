package groovy01

def m01 (x) {
  println x
}

//m01("홍길동")
//m01 "홍길동"

def m02(map) {
  println map.name
  println map.age
}

//m02(["name":"홍길동","age":20])
//m02 "name":"홍길동", "age":20
//m02 "name":"오호라"

def apply(map) {
  println map.plugin
}

//apply (['plugin':'java'])
//apply 'plugin':'java'
//apply plugin:'java'
def manifest(closure) {
  closure()  
}

def jar(closure) {
  closure()
}

//jar({println 'okok'})
jar {
  println 'okok'
  manifest { 
    println '오호라'
  }
}

jar(function(){
  println('okok');
  manifest(function(){println '오호라'});
})
















