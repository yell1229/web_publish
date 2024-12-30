-- 대소문자 구분이 없다.
/*
	*데이터베이스의 테이블은 행과 열을 이용하여 데이터를 저장하는 시스템이다. 
    
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
	테이블 조회(단순: 단위 테이블) :select
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

/*
	DISTINCT : 데이터의 중복 배제, 중복된 데이터 하나만 출력 
    형식 - select [distinct 컬럼리스트(중복 데이터 포함)] from [테이블명]
			from [테이블명]
            where[조건절];
*/
-- 사원테이블의 부서 컬럼을 조회.
desc department;
select distinct emp_id, dept_id
	from employee;
/* 저장 시 실린더의 위치에 가장 가까운곳에 저장되기 때문에 순서가 정렬되지 않음.
	order by : 데이터 정렬(오름차순, 내림차순)
    형식 : select ~
			from ~
            where~
            order by  컬럼리스트 [asc : 생략가능 /desc: 생략불가]
*/
-- 사원테이블에서 사원아이디, 사원명, 입사일, 연봉을 조회
-- 사원아이디 기준 오름차순으로 정렬
select emp_id, emp_name, hire_date, salary
	from employee
    order by  emp_id desc; -- 출력 직전에 실행된다.

-- 사원아이디기준 오름차순, 입사일기준 내림차순
select emp_id, emp_name, hire_date, salary
	from employee
    order by  emp_id asc, hire_date desc;

-- 급여를 기준으로 오름차순 정렬 후 조회
select *
	from employee
    order by  salary asc;

-- eng_name이 정해지지 않은 사원들을 최근 입사한 순서대로 조회
select *
	from employee
    where eng_name is null
    order by  hire_date desc;
-- 퇴직한 사원들을 급여가 높은 순으로 조회
select *
	from employee
    where retire_date is not null
    order by salary desc;

-- 정보시스템 부서의 사원들 중 급여가 높은 순으로 조회
select *
	from employee
    where dept_id = 'sys'
    order by salary desc;

-- 정보시스템 부서의 사원들 중 최근 입사일 기준, 급여가 낮은 순으로 조회
select *
	from employee
    where dept_id = 'sys'
    order by hire_date desc, salary asc;

/*
	특정 범위의 데이터를 검색: where [조건절 + 비교연산자] 
    형식 = select [컬럼리스트]
			from [테이블 명]
            where 컬럼명 [비교연산자 조건절] 
*/
-- 사원중에서 연봉이 5000이상인 사원들을 조회
select *
	from employee
    where salary >=5000
    order by salary asc;

-- 입사일이 2016넌 1월 1일 이전에 입사한 사원들 조회
-- DATE 타입은 표현은 문자처럼, 처리방식은 숫자처럼
select *
	from employee
    where hire_date <'2016-01-01';

-- 입사일이 2015년 1월1일 이후이고, 급여가 6000이상인 사원들을 조회
-- AND(~이고) : 두개의 조건이 모두 만족한 데이터만 조회
select *
	 from employee
     where hire_date > '2015-01-01' and salary >= 6000
     order by hire_date asc, salary asc;

-- 입사일이 2015년 1월1일 이후이거나 또는, 급여가 6000이상인 사원들을 조회
-- OR(~또는) : 두개의 조건 중 하나만 만족해도 데이터 조회
select *
	 from employee
     where hire_date > '2015-01-01' or salary >= 6000
     order by hire_date asc, salary asc;

-- 입사일이 2015년 1월1일부터 2017년 12월31일 사이에 입사항 사원들을 모두 조회
select *
	 from employee
     where hire_date >= '2015-01-01' and hire_date <= '2017-12-31';

-- 연봉 구간이 5000이상 7000사이의 사원들을 모두 조회
select *
	from employee
    where salary >= 5000 and salary <= 7000
    order by salary ;

/*
	between ~and : 특정 구간 조회시 사용
    형식 - select [컬럼리스트]
			from [테이블 명]
            where 컬럼명 between  [시작구간] and [종료구간];
*/
-- 2016년 입사자들을 조회
-- 2016-01-01 ~2016-12-31
select *
	from employee
    where hire_date between '2016-01-01' and '2016-12-31';

-- 사원아이디가 S0001, S0010, S0020인 사원의 모든 정보를 조회
select *
	from employee
    where emp_id='S0001' or emp_id='S0010' or emp_id='S0020';

-- 부서 아이디가 mkt, gen, hrd인 부서에 속한 모든 사원을 조회
select *
	from employee
    where dept_id='mkt' or dept_id='gen' or dept_id='hrd'
    order by dept_id;

/*
	in 연산자 : 하나의 컬럼에 추가되는 or 연산식을 대체하는 연산자 
    형식 - select [컬럼리스트]
			from [테이블 명]
            where 컬럼명 in  (조건1, 조건2, 조건3, ...);
*/

-- 사원아이디가 S0001, S0010, S0020인 사원의 모든 정보를 조회
select *
	from employee
    where emp_id in ('s0001', 's0010', 's0020');

-- 부서 아이디가 mkt, gen, hrd인 부서에 속한 모든 사원을 조회
select *
	from employee
    where dept_id in('mkt', 'gen', 'hrd');
    
/*
	와일드 카드 문자 : 특정 문자열 검색 
    종류 : %(전체) , _(한 문자)
    사용법 : like 연산자와 함께 조건식을 추가하여 사용됨. 
    형식 : select [컬럼리스트]
			from [테이블 명]
            where 컬럼명 [와일드 카드 문자를 이용한 틀정문자열 검색 조건];
*/

-- 영여 이름이 'f'로 시작하는 모든 사원들을 조회
select *
	from employee
    where eng_name like 'f%';
-- '한'씨 성을 가진 모든 사원들을 조회
select *
	from employee
    where emp_name like '한%';

-- 이메일 주소 2번째 자리에 'a'가 들어가는 모든 사원을 조회
select *
	from employee
    where email like '_a%';
    
-- 이메일 주소가 4자리인 모든 사원을 조회
select *
	from employee
    where email like '____@%';
-- 이름에 '삼'이 들어가는 모든 사원을 조회
select *
	from employee
    where emp_name like '%삼%';

/* *******************************************************
	내장함수(Built-in) : 숫자, 문자, 날짜 함수 
    - 함수 테스트를 위한 테이블 dual
    - select [함수 실행] from dual;
******************************************************* */
-- 1. 숫자 함수 : abs(), rand(), truc() ... 
-- (1) abs함수: 절대값 표현 함수 
select 100, -100, abs(100), abs(-100)
	from dual;

-- (2) floor 함수 : 소숫점을 버리는(삭제) 함수
-- truncate(trunc) : 소숫점을 삭제하는 함수 - truncate(데이터, 자릿수) ==> 이전 버전에서는 trunc 명령어 사용 가능
select 123.456, floor(123.456) from dual;
select 123.456, truncate(123.456, 0) as '소숫점 0' , truncate(123.456,2) as '소수점 2' from dual;

-- (3) rand  함수: 임의의 수 생성
select rand(),
		rand()*1000,
        rand()*1000000
	from dual;
-- 정수만 출력할 수 있도록 쿼리 실행
select  floor(rand()) as 'RAND',
		 truncate(rand()*1000, 0) as 'RAND 3자리',
         truncate(rand()*100000, 0) as 'RAND 5자리',
         truncate(rand()*100000, 2) as 'RAND 소숫점 2'
	from dual;

-- (4) mod 함수 : 모듈러 연산을 실행하는 함수 - mod(숫자데이터, 연산숫자) ==> js의 %
select mod(100,2) 짝수 , mod(101,2) 홀수 from dual; 

-- 1~3 자리의 정수를 생성화고, 생성한 정수를 2로 나누는 모듈러 함수를 실행하는 쿼리를 완성하시오.
select  mod(truncate(rand()*1000, 0) ,2) as 'RESULT' from dual;

-- 사원테이블에서 사원아이디, 사원명, 부소아이디, 입사일, 연봉, 인센티브(연봉의 20%)
-- 연봉협상이 아직 진행되지 않은 사원은 모두 0으로 출력, 인센티브 포함
-- 5000 미만의 사원들 정보만 출력
select emp_id, emp_name, dept_id, hire_date, 
	ifnull(salary, 0) 'salary', ifnull(truncate(salary * 0.2, 0), 0) 'incentive' -- 가장 마지막에 치환되는 값.
	from employee
    -- where salary between 0 and 4999 
    where salary < 5000 or salary is null -- 0이 아닌 null로 조건을 줘야 한다.
    order by salary;

-- 2. 문자 함수 : concat(), substring() ...
-- (1) concat(문자열, 문자열...) : 문자열 결합

select concat('MY', 'SQL', '-84') as NAME
	from dual;

-- 사원테이블의 사원명과 영어이름을 결합하여 새로운 컬럼을 생성하고 컬럼명은  TEST_NAME으로 실행 예시)홍길동/HONG
-- 영어이름이 정해지지 않은 사원은 빈 문자열로 치환해서 실행
select emp_name, eng_name ,concat(emp_name, ' / ', ifnull(eng_name, '')) as TEST_NAME
	from employee;

-- 사원테이블의 사원아이디와 1~5자리 사이의 임의의 정수를 결합하여 사원번호라는 새로운 컬럼을 생성하고 조회 
-- 사원아이디, 사원번호, 사원명, 입사일, 급여, 퇴사일 컬럼리스트를 조회
-- 현재 근무중인 사원은 현재 날짜를 출력
select  emp_id, 
		concat(emp_id, '_', truncate(rand()*100000, 0) ) as '사원번호' , 
		emp_name, hire_date, salary, 
		ifnull(retire_date, curdate()) as 'retire_date',
        ifnull(retire_date, now()) as 'retire_date2'
	from employee;

-- (2) substring(문자열, 위치, 자릿수) : 문자열 추출 함수
select substring('대한민국 홍길동 만세 1234', 1, 4) 대한민국,
	   substring('대한민국 홍길동 만세 1234', 6, 3) 홍길동,
       substring('대한민국 홍길동 만세 1234', 13, 4) '1234',
       substring('대한민국 홍길동 만세 1234', 10, 2) 만세
	from dual;
-- 사원 테이블에서 사원아이디, 사원명, 입사년도, 입사월, 입사일, 급여를 조회.
select emp_id, emp_name, substring(hire_date, 1,4) '입사년도', substring(hire_date, 6,2) '입사월' , substring(hire_date, 9,2) '입사일', concat(truncate(salary / 12 ,1),'만원') '월급'
	from employee;

-- 2015년도 입사항 모든 사원들을 조회
select *
	from employee
	where substring(hire_date, 1,4) = '2015';
	-- where hire_date >= '2015-01-01';

-- 2018년도에 정보시스템 부서에 입사한 모든 사원들을 조회
select * 
	from employee
	where substring(hire_date, 1,4) = '2018' and dept_id='SYS';

-- (3) left(문자열, 추출숫자), right(문자열, 추출숫자)

select left('대한민국 홍길동 만세 1234 !!', 4) 대한민국,
		right('대한민국 홍길동 만세 1234 !!', 2) '!!'
        from dual;
        
-- 2015년도에 입사한 모든 사원들을 조회
select *
	from employee
    where left(hire_date, 4)='2015';
-- 모든 사원들의 폰번호 마지막 4자리를 조회
-- 사원명, 부서아이디, 입사년도, 폰번호(4자리)
select emp_name, dept_id, hire_date, right(phone,4) phone
	from employee;

-- (4) upper(대문자), lower(소문자)

-- 사원들의 영어이름과 이메일 주소를 모두 대문자로 조회
select emp_id, emp_name, upper(eng_name) ENG_NAME, upper(email) EMAIL
	from employee;

select emp_id, emp_name, lower(eng_name) eng_name, lower(email) email
	from employee;
-- (5) trim() : 공백 제거
select  trim('                mySQL 84')
        from dual;

-- (6) format(문자열 또는 숫자, 소수점 자리) : 문자열의 포맷 수정
-- 숫자를 3자리씩 콤마로 구분하여 출력하는 포맷 생성
select format(123456, 0), format(123456, 2) from dual;

-- 사원테이블의 사원아이디, 사원명, 입사일, 연봉을 조회
-- 연봉 협상이 전인 사원은 0으로 변환 후 조회
-- 연봉은 3자리씩 끊어서 , 구분하여 출력
select emp_id, emp_name, hire_date, concat(format(ifnull(salary, 0), 0), ' 만원') 연봉
	from employee
    order by salary;
    
-- 사원아이디, 사원명, 부서아이디, 입사일, 연봉, 보너스연봉(0.05%) 컬럼들을 조회
select emp_id, emp_name, dept_id, hire_date, format(ifnull(salary, 0), 0), concat(format(ifnull(salary, 0) * 0.05 , 1) , '만원') '보너스 연봉'
	from employee
    order by salary;














