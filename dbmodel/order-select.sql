/* DISTINCT 
 * 중복 데이터 제거
 * => DISTINCT를 붙이지 않으면 기본으로 ALL이다.
 */
/* 1) 모든 제품 번호를 출력하라. */
SELECT /*ALL*/ PNO FROM PRODUCTS;

/* 2) 모든 주문 제품의 번호를 출력하라. */
SELECT /*ALL*/ PNO FROM ORDERS;

/* 3) 주문한 제품이 무엇무엇이 있는지 목록을 출력하라. */
SELECT DISTINCT PNO FROM ORDERS;

/* ORDER BY 절
 * 출력 결과를 정렬  
 * 문법:
 * ORDER BY /*ASC*/ 컬럼명, /*ASC*/ 컬럼명, ...
 * ORDER BY DESC 컬럼명, ASC 컬럼명, ...
 * 
 * => 나열된 컬럼 순서대로 정렬한다. 기본은 상향 정렬(ㄱ ~ ㅎ)이다.
 * 
 * 정렬조건:
 * ASC(ENDING) => 오름차순
 * DESC(ENDING) => 내림차순
 * 
 * ORDER BY 절 수행 후 SELECT 실행 
 */

/* 1) 기본 출력 */
SELECT UID, UNAME, EMAIL FROM MEMBERS;

/* 2) 이름을 오름 차순으로 정렬하라. */
SELECT UID, UNAME, EMAIL FROM MEMBERS ORDER BY UNAME /*ASC*/ ;

/* 3) 이름을 내림 차순으로 정렬하라. */
SELECT UID, UNAME, EMAIL FROM MEMBERS ORDER BY UNAME DESC;

/* 4) 주문 정보를 제품 번호의 오름 차순으로 정렬하라. */
SELECT * FROM ORDERS ORDER BY PNO;

/* 5) 주문 정보를 제품 번호의 오름 차순으로 정렬하고,
 * 사용자 아이디로 오른차순으로 정렬하라. 
 */
SELECT * FROM ORDERS ORDER BY PNO, UID;

/* 6) 주문 정보를 제품 번호의 오름 차순으로 정렬하고,
 * 사용자 아이디로 내림차순으로 정렬하라. 
 */
SELECT * FROM ORDERS ORDER BY PNO, UID DESC;

/* 7) 주문 정보를 제품 번호의 오름 차순으로 정렬하고,
 * 사용자 아이디로 내림차순으로 정렬하라.
 * 
 * => 정렬을 먼저 한 다음 SELECT를 실행한다. 
 */
SELECT ONO, ODATE FROM ORDERS ORDER BY PNO, UID DESC;

/* 별명 붙이기
 * 문법:
 * SELECT 컬럼명 [AS] 별명, ...
 */
SELECT ONO AS NO, ODATE AS 'Order Date', PNO 'Product No', UID id
FROM ORDERS;


/* WHERE 절
 * 문법: 
 * WHERE 조건1 (AND | OR) 조건2 ...  
 */

/* 연산자 사용
 * 
 */
/* 1) 더하기 연산자*/
select ono, qty, qty * 500000 AS TOTAL from ORDERS;

/* 2) 비교 연산자 */
SELECT ONO, QTY FROM ORDERS
WHERE QTY > 2;

SELECT ONO, QTY FROM ORDERS
WHERE QTY = 1;

SELECT ONO, QTY FROM ORDERS
WHERE QTY > 1 AND QTY <= 5;

/* 문자열 비교 */
SELECT UID, UNAME, EMAIL
FROM MEMBERS
WHERE UNAME='홍길동';

/* '%'는 0개 이상의 글자 */
SELECT UID, UNAME, EMAIL
FROM MEMBERS
WHERE UNAME LIKE '김%';

/* '_'는 1개의 글자 */
SELECT UID, UNAME, EMAIL
FROM MEMBERS
WHERE UNAME LIKE '김_진';

/* 제품명에 '럭시'라는 글자를 포함한 모든 제품 선택하기
 * => 주의! 검색 속도가 매우 느리다. 
 */
SELECT PNO, PNAME
FROM PRODUCTS
WHERE PNAME LIKE '%럭시%';

/* IN 
 * 
 */
SELECT PNO,PNAME,MKNO
FROM PRODUCTS
WHERE MKNO=1 OR MKNO=2;

SELECT PNO,PNAME,MKNO
FROM PRODUCTS
WHERE MKNO IN (1, 2);



/* NULL 여부 검사
 * 
 */
SELECT * FROM PROD_PHOTS 
WHERE PNO IS NULL;

SELECT * FROM PROD_PHOTS 
WHERE PNO IS NOT NULL;

/* BETWEEN A AND B
 * 
 */
SELECT * FROM ORDERS
WHERE QTY >= 1 AND QTY <=3;

SELECT * FROM ORDERS
WHERE QTY BETWEEN 1 AND 3;

/* UNION => 결과의 결합 */
/* 두 개의 결과를 합쳐서 하나로 다루고 싶을 때 */
/* 예) 제품 이름과 제조사이름을 알고 싶다.*/
SELECT PNAME FROM PRODUCTS
UNION
SELECT MKNAME FROM MAKERS;

/* 예) 2014년 7월 이후의 주문 정보와 애플 제품 주문 정보 
 *
 */

/* UNION => 두 결과 데이터를 합칠 때 중복 데이터 제거*/ 
SELECT * FROM ORDERS WHERE ODATE >= '2014-7-1'
UNION
SELECT * FROM ORDERS WHERE PNO IN (1, 2, 3);

/* UNION ALL => 두 결과 데이터를 중복에 상관없이 합친다.*/
SELECT * FROM ORDERS WHERE ODATE >= '2014-7-1'
UNION ALL
SELECT * FROM ORDERS WHERE PNO IN (1, 2, 3);

/* 7월 이후 주문 정보 중에서 애플 제품을 제외한 주문 정보 */
/* MySQL은 MINUS 없다. 다른 문법으로 대체해야 한다. */
/*
SELECT * FROM ORDERS WHERE ODATE >= '2014-7-1'
MINUS
SELECT * FROM ORDERS WHERE PNO IN (1, 2, 3);
*/
SELECT * FROM ORDERS 
WHERE 
  ODATE >= '2014-7-1'
  AND PNO NOT IN (1, 2, 3);

/* 서브 쿼리 */
/* 1) 주문 제품의 주문 번호와 제품명을 출력하라 */
SELECT 
  ONO, 
  PNO,
  (SELECT PNAME FROM PRODUCTS WHERE PNO=T1.PNO) AS NAME,
  QTY 
FROM ORDERS T1;

/* 2) 검색어와 일치하는 회사 제품의 주문 정보를 출력하시오.*/
SELECT *
FROM ORDERS
WHERE PNO IN (SELECT PNO FROM PRODUCTS WHERE MKNO=1);

/* 3) '2014-7-1' 이후에 주문한 정보 중에서 u01, u05가 주문한 것
 * 
 */
SELECT *
FROM (SELECT * FROM ORDERS WHERE ODATE >= '2014-7-1') AS T1
WHERE UID IN ('u01', 'u05');


























