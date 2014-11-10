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

























