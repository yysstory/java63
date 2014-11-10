/* 1) CROSS 조인 
 * 두 개의 테이블 데이터를 M:N 조인
 */
SELECT ONO, PNO, QTY FROM ORDERS;
SELECT PNO, PNAME FROM PRODUCTS;

SELECT ONO, T1.PNO, T1.QTY, PNAME
FROM ORDERS T1, PRODUCTS T2;

/* 2) NATURAL 조인
 * => 두 개 테이블의 공통 컬럼을 기준으로 조인한다.
 * => 외부키를 기준으로 조인을 수행한다. 
 */
SELECT ONO, T1.PNO, T1.QTY, PNAME
FROM ORDERS T1, PRODUCTS T2
WHERE T1.PNO = T2.PNO;

/* 2) NATURAL 조인 => T1 JOIN T2 USING(컬럼명, 컬럼명, ...)
 * 단, 조인할 때 기준이 되는 컬럼명이 같아야 한다.
 */
SELECT ONO, T1.PNO, T1.QTY, PNAME
FROM ORDERS T1 JOIN PRODUCTS T2 USING(PNO);

/* 2) NATURAL 조인 => T1 JOIN T2 ON 조인조건1 ...
 * => 조인의 기준이 되는 컬럼명이 다를 때 사용
 * 
 */
SELECT ONO, T1.PNO, T1.QTY, PNAME
FROM ORDERS T1 JOIN PRODUCTS T2 ON T1.PNO = T2.PNO;

/* 3) OUTER JOIN 
 * 
 */
/* 모든 제품의 정보를 출력하되, 사진 정보도 함께 출력하라.*/
/* 다음 질의문은 조인 가능한 결과만 출력한다.*/
SELECT T1.PNO, T1.PNAME, T2.URL
FROM PRODUCTS T1 JOIN PROD_PHOTS T2 ON T1.PNO=T2.PNO;

/* 조인이 불가능하더라도, 즉 조인할 데이터가 상대 테이블에 없더라도 
 * 반드시 기준이 되는 테이블의 데이터를 모두 출력하고 싶다면 
 * OUTER 조인을 사용하라.!
 * 문법: 
 * 왼쪽 T1 테이블을 기준으로 T2 테이블과 조인하라!
 * => T1 LEFT OUTER JOIN T2 ON 조인조건1 ...
 * => 기준 테이블인 T1의 데이터는 모두 출력될 것이다.
 */
SELECT T1.PNO, T1.PNAME, T2.URL
FROM PRODUCTS T1 LEFT OUTER JOIN PROD_PHOTS T2 ON T1.PNO=T2.PNO;

/* 사진 테이블을 기준으로 조인을 하고 싶다면*/
SELECT T1.PNO, T1.PNAME, T2.URL
FROM PRODUCTS T1 RIGHT OUTER JOIN PROD_PHOTS T2 ON T1.PNO=T2.PNO;

/* 문제: 다음 결과를 추력하시오!
 * 주문번호, 제품명, 제조사명, 주문수량, 잔여수량, 고객명, 고객이메일
 */

SELECT T1.ONO, T2.PNAME, T3.MKNAME, T1.QTY, T2.QTY, T4.UNAME, T4.EMAIL
FROM ORDERS T1 LEFT OUTER JOIN PRODUCTS T2 ON T1.PNO=T2.PNO
LEFT OUTER JOIN MAKERS T3 ON T2.MKNO=T3.MKNO
LEFT OUTER JOIN MEMBERS T4 ON T1.UID=T4.UID;
















