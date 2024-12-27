-- 대소문자 구분이 없다.
/*
	SQL(Structured Query Language) : 데이터 베이스에서 사용하는 구조화된 언어
    --> DBMS(DataBase Management System)에 접속하여 CRUD 작업을 수행하는 언어 
    
    1)DDL(Data Definition Language) : 데이터 정의어
		- 데이터를 저장하기 위한 공간을 생성하고 관리하는 논리적인 언어
        - create, alter, truncate, drop
	2)DML(Data Manipulation Language) : 데이터 조작어 
		- 데이터를 CRUD 작업을 수행하는 언어
        - insert(C), select(R), update(U), delete(D) 
	3) DCL(Data Control Language) : 데이터 제어어
		- 데이터에 접근하는 권한을 제어하는 언어 
        - GRANT(부여), DEVOKE(해제)
	4) DTL(Data Transaction Language) : 데이터 트랜잭션 제어어 
		- 데이터베이스의 작업 처리 단위인 트랜잭션을 관리하는 언어 
        - commit(완료), rollback(취소), savepoint(작업구간별 저장) ...
*/
/*
	데이터베이스 선택 및 조회
    show databases; -- 모든 데이터베이스 목록 출력 
    use [선택한 데이터베이스명]; -- 사용할 데이터베이스 선택 
    select database(); -- 데이터베이스 선택 
    show tables; -- 데이터베이스에 저장된 테이블 전체 조회 
*/


show databases; -- 모든 데이터 베이스 목록을 출력
use hrdb2019; -- 
select database();
show tables;
select * from employee;
select * from department;
select * from unit;
select * from vacation;

show databases;
use hrdb2019;
select database();
show tables;

/*
	테이블 구조 확인 : desc(describe)
    형식 - desc [테이블명];
*/
show tables;
desc vacation;

/*
	테이블 조회(단순) :select
    형식 - select [컬럼리스트] from [테이블명];
		  select [*(전체컬럼리스트)] from [테이블명];
*/
show tables;
desc employee;
select emp_id, emp_name from employee;
select * from employee;
desc vacation;

-- 사원테이블에서 사원아이디, 사원명, 성별, 입사일을 조회한다.
show tables;
desc employee;
select emp_id, emp_name, gender, hire_date from employee;

-- 사원 테이블 사원명, 부서명, 입사일, 폰번호, 연봉 조회
show tables;
desc employee;
select emp_name, dept_id, hire_date, phone, salary from employee;

-- 부서 테이블의 모든 컬럼을 조회
show tables;
desc department;
select * from department;

-- [조회한 컬럼명을 alias(별칭)으로 출력]
-- 형식: select [컬럼명 as '별칭', 컬럼명 as '별칭', ...] from [테이블명];

-- 사원 테이블에서 아이디, 성명, 입사일, 부서명, 연봉 이름으로 조회 컬럼을 출력 
show tables;
desc employee;
select emp_name, dept_id, hire_date, phone, salary from employee;
select emp_name as '이름', dept_id as '아이디', hire_date as '입사일', phone as '전화번호', salary as '연봉' from employee;
select emp_name 이름, dept_id '사원 아이디', hire_date 입사일, phone 전화번호, salary 연봉 from employee; -- 오라클, mssql에서는 생략이 가능 , 한단어일 경우 '' 생략가능

-- 사원 테이블에서 사원명, 부서 , 연봉을 조회

show tables;
desc employee;
select emp_name, dept_id, salary from employee;
select emp_name 이름,
       dept_id 부서,
	   salary 연봉 
       from employee;
-- 기존 컬럼을 이용하여 가상컬럼 생성 - 연봉 10% 인센티브 컬럼 ==> 물리적으로 존재X
-- 타입이 숫자인 컬럼은 수식 연산이 가능함
select emp_name 이름,
       dept_id 부서,
	   salary 연봉,
       salary*0.1 인센티브
       from employee;
-- 현재의 날짜를 조회 
select curdate(); -- 컬럼명 date로 변경
select curdate() as 'DATE';

/*
	테이블 조회(단순: 1개 검색) :select ~ from ~where
    - 조건적을 추가하여 다양한 쿼리를 실행
    형식 - select [컬럼리스트] from [테이블명];
		  select [*(전체컬럼리스트, *)]
          from [테이블명]
          where[조건절];
*/
-- 사원테이블에서 sys 부서에 근무하는 모든 사월을 조회
show tables;
desc employee;
select * from  employee
	where dept_id='SYS';

select * 
	from employee
	where emp_name='정주고';
-- 사원 테이블에서 사원 아이디가 ㄴ0011인 사원의 정보를 모두 조회
select * 
	from employee
    where emp_id='S0011';
select * 
	from employee
    where salary= 5800;	
    
-- 사원테이블에서 여성 사원들의 아이디,이름, 입사일, 이메일 정보를 조회 
desc employee;
select gender, emp_id, emp_name, hire_date, email from employee;
select emp_id, emp_name, hire_date, email 
	from employee
    where gender='F';

-- 부서명이 sys인 사원들의 아이디, 사원명, 입사일 출력되는 아이디 컬럼명을 '사원 번호' 별칭 사용
select emp_id '사원 번호', emp_name, hire_date
	from employee
    where dept_id='sys';

-- where절 조건에 별칭으로 검색이 가능할까요? 
select emp_id '사원 번호', emp_name, hire_date, dept_id '부서 번호' -- 실행순서 3. 보여주기 직전에 이름을 바꾼다.
	from employee -- 실행순서 1.
    where dept_id='sys'; -- 실행순서 2. 조건 실행.
    -- where '부서 번호' = 'sys'; 

-- 사원테이블에서 마케팅 부서의 모든 사원 정보를 조회
show tables;
desc employee;
select *
	from employee
    where dept_id = 'MKT';
-- 사원테이블에서 입사일이 2014년 8월 1일인 모든 사원조회
select *
	from employee
    where hire_date ='2014-08-01'; -- date 타입은 표현은 문자처럼, 처리는 숫자형식
-- 연봉이 5000인 사원 정보 조회
select *
	from employee
    where salary=5000;

/*
null 타입 : 
숫자 컬럼에서는 가장 큰 숫자로 인식, 문자 컬럼에서는 작은 문자로 인식 
null은 논리적인 의미를 가지므로 is키워드를 통해 비교 연산을 수행
*/

-- 사원 테이블에서 eng_name이 null인 모든 사원의 정보를 조회
select *
	from employee
    where eng_name is null;
    -- where eng_name=null;

-- 연봉이 정해지지 않은 사원 조회
select *
	from employee
    where salary is null;

-- ifnull() : null 값을 다른 값으로 바꿔주는 함수  [*]와 함께 사용불가.
-- 형식 : ifnull(null 포함 컬럼명, 대체할 값);
-- 컬럼 리스트에서 호출
select  emp_name, salary, ifnull(salary, 0) as salary2
	from employee;

-- eng_name이 null인 사원들은  'SMITH' 이름으로 변경 후 조회
select emp_id, emp_name, eng_name, ifnull( eng_name, 'SMITH') as '영어 이름'
	from employee;

-- 모든 사원 아이디, 사원명, 입사일, 퇴사일을 조회. 
-- 현재 근무중인 사원의 퇴사일에 현재의 날짜를 출력
select emp_id emp_name, hire_date, retire_date, ifnull(retire_date, curdate()) as RETIRE_DATE
	from employee;
