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

-- 3. 날짜 함수 : curdate(), now(), sysdate()
-- (1)curdate() : 현재 시스템(pc) 날짜를 출력, 년월일 만 출력
select curdate() from dual;
-- (2) now(), sysdate() : 현재 시스템 날짜를 출력, 년월일 시분초 출력 
select now(), sysdate() from dual;

-- 4. 형변환 함수 : cast(), convert()
-- cast(변경데이터 as 변경할 데이터타입)
select 12345 숫자, cast(12345 as char) 문자 from dual;
select '12345' 문자 , cast('12345' as unsigned integer) 정수 from dual;

-- 입력폼에서 '20150101' 데이터 날짜를 가진 사원을 조회
select *
	from employee
    where hire_date = cast('20150101' as date);

-- floor 함수를 적용한 cast 함수 
select floor('12-34-5') 문자,
	   floor(cast('12-34-5' as unsigned integer)) 정수
	from dual;

-- 5. 문자열 치환 함수 : replace(문자열, old, new) 
select '123,456' 문자,
	replace('123,456',',','') 문자,
    cast(replace('123,456',',','') as unsigned integer) 숫자
	from dual;

-- 사원테이블의 입사일 포맷을 변경 '2015-01-01' --> '2015/01/01'
select emp_name, hire_date,
	replace(hire_date,'-','/') hire_date
	from employee;

/* *******************************************************
	그룹(집계)함수 : sum(), avg(), min(), max(), count() ...
	group by : 그룹함수를 적용하기 위해 일반 컬럼을 그룹핑하는 단뒤
    having : 그룹함수의 조건절을 적용하는 구문
******************************************************* */

-- 1. sum(숫자, 숫자컬럼)
-- 사원테이블에서 모든 사원의 연봉 총합을 조회 
select sum(salary) 총연봉,
		concat(format(sum(salary),0) , ' 만원') 총연봉
	from employee;

-- 2. avg(숫자, 숫자컬럼)
-- 사원들의 총연봉, 평균연봉 조회 , 3자리구분, '만원'단위, 소수점 1자리까지
select concat(format(sum(salary), 1) ,' 만원') 총연봉,
	   concat(format(avg(salary), 1), ' 만원') 평균연봉
	from employee;

-- 3. min(숫자, 숫자컬럼) : 최소값
-- 가장 작은 값을 출력
-- 사원들의 총연봉, 평균 연봉, 최소연봉을 출력
-- 3자리구분, 만원 추가, 소수점자리 생략
select concat(format(sum(salary),0),' 만원') 총연봉,
	   concat(format(avg(salary),0),' 만원') 평균연봉,
       concat(format(min(salary),0),' 만원') 최소연봉
	from employee;

-- 4. max(숫자, 숫자컬럼)
-- 가장 큰 값을 출력
-- 사원들의 총연봉, 평균 연봉, 최대연봉을 출력
-- 3자리구분, 만원 추가, 소수점자리 생략
select concat(format(sum(salary),0),' 만원') 총연봉,
	   concat(format(avg(salary),0),' 만원') 평균연봉,
       concat(format(max(salary),0),' 만원') 최대연봉
	from employee;

-- 5. count(컬럼명) 
-- 테이블의 모든 row count를 출력 
-- null을 포함한 데이터의 count는 계산하지 않는다. 
select count(*) '총 사원수' ,
       count(salary) '연봉협상 완료 사원수'
       from employee; -- 19

select *
	from employee
    where salary is null;

-- 총 사원수, 퇴직한 사원수, 현재사원수를 조회
select concat(cast(count(*) as char), ' 명') '총 사원수',
	   concat(cast(count(retire_date) as char), ' 명') '최직 사원수',
       concat(cast(count(*) - count(retire_date) as char), ' 명') '재직 사원 수'
	from employee;

-- 사원테이블에서 정보시스템 부서의 사원수를 조회
select count(*)
	from employee
    where dept_id='SYS';

-- 2015 년도에 입사한 사원수
select count(*) '2015 입사자',
	   sum(salary) '총 연봉',
       avg(salary) '평균 연봉',
       min(salary) '최소 연봉'
	from employee
    where left(hire_date,4)='2015';

--  가장 최근 입사자와 오래된 입사자의 입사일 조회
select max(hire_date) '최근 입사일',
	   min(hire_Date) '최초 입사일'
	from employee;
-- 마케팅부서 기준 가장 낮은 연봉과 높은 연봉을 조회
select max(hire_date) '최근 입사일',
	   min(hire_Date) '최초 입사일'
	from employee
    where dept_id='MKT';

-- hrd 부서 기준 최근 입사자와 오래된 입사자의 입사일 조회
select max(hire_date) '최근 입사자',
	min(hire_date) '최초 입사자'
	from employee
    where dept_id = 'HRD';
-- 마케팅부서 기준 가장 낮은 연봉과 높은 연봉을 조회
select max(salary) '최대 연봉',
	   min(salary) '최소 연봉'
	from employee
    where dept_id = 'MKT';

-- 6. group by ~ 적용 : ~~별 그룹함수를 적용해야 하는 경우 
-- 사원테이블에서 부서별 사원수를 조회 
-- group by에 사용된 일반컬럼은 그룸함수와 함께 조회가 가능
select dept_id , count(*) 부서별사원수
	from employee
    group by dept_id;

-- 입사년도별 총연봉, 평균연봉, 최저연봉, 최고연봉, 입사사원수를 조회
select  left(hire_date, 4) '입사년도',
		concat(format(sum(salary),0) ,' 만원') '총연봉',
		min(salary) '최저연봉',
        truncate(avg(salary), 0) '평균연봉',
        max(salary) '최고연봉',
        count(*) '입사사원 수'
	from employee
    group by left(hire_date, 4);

-- 부서별 총연봉, 평균연봉, 최저연봉, 최고연봉, 입사사원수를 조회
select  dept_id '부서',
		sum(ifnull(salary, 0)) '총연봉',
		min(ifnull(salary,0)) '최저연봉',
        max(ifnull(salary,0)) '최고연봉',
        count(*) '입사사원 수'
	from employee
    group by dept_id;

-- 7. having 절 : group by를 통해 그룹핑 한 결과에 조건절을 추가하는 구문 
/* select *
	from employee
    group by
    having ;
*/
-- 부서별 평균 연봉을 조회
-- null값이 포함된 경우 0으로 변환
-- 소숫점 자리는 절삭
-- 부서아이디 함께 출력
-- 부서 평균연봉이 6000 이상인 부서만 출력
-- 평균연봉 기준 오름차순으로
select dept_id 부서명,
	   truncate(avg(ifnull(salary, 0)) , 0) 평균연봉 -- 오라클 NVL(컬럼명, 값)
	from employee
    group by dept_id
    having 평균연봉 >= 6000 -- having절 에서는 별칭컬럼명을 조건으로 사용 가능.
    order by 평균연봉;

-- 입사년도 기준 총연봉, 평균연봉을 조회
-- 총연봉이 5000 이상인 사원들만 출력
-- null값을 포함한 경우 0으로 초기화 
select  left(hire_date, 4) 입사년도,
		sum(salary) 총연봉 ,
        truncate(avg(ifnull(salary,0)), 0) 평균연봉
	from employee
    group by left(hire_date, 4)
    having 총연봉 >= 5000;

-- 부서별 남녀사원의 사원수를 조회 
select  dept_id 부서ID, 
		gender 성별,
		count(*) 사원수
	from employee
    group by dept_id, gender;

-- 8. rollup 함수 : reporting을 위한 함수
/*  
형식 : 
	select [컬럼리스트]  
		from [테이블명]
		where [조건절]
		group by [그룹핑 컬럼] width rollup;
*/
-- 부서별 총 연봉을 조회, 연봉이 정해지지 않는 부서는 포함하지 않음
-- select if(grouping(dept_id), '부서 총합계', ifnull(dept_id, '-')) '부서',
-- 		concat(format(sum(salary), 0),' 만원') '총 연봉'
-- 	from employee
--     where salary is not null
--     group by dept_id with rollup;

-- 사원들의 휴가사용 내역을 조회
select *
	from vacation;
 
 -- 사원 id별 휴가사용 횟수 조회
 -- 총 휴가사용일 기준으로 내림차순 정렬
 select emp_id 사원아이디,
		count(*) 휴가상신횟수,
        sum(duration) 총가사용일자
	from vacation
    group by emp_id
    order by 총가사용일자 desc;
    
-- 2016~2017년도 사이에 사원아이디별 휴가사용 횟수 조회
select if(grouping(emp_id), '사원별 총 휴가사용내용', ifnull(emp_id, '-')) 사원아이디,
		count(*) 휴가상신횟수,
        sum(duration) 총사용일수
	from vacation
    where left(begin_date,4) between 2016 and 2017
    group by emp_id with rollup
    order by 총사용일수;
    
 /* **********************************************************
	DDL : 테이블 생성, 수정, 삭제 
    명령어 : create, alter, drop, truncate(함수랑 틀림. row를 제거)
    
********************************************************** */

-- 1. 테이블 생성 : create
-- 형식 : create table [생성할 테이블명] (
-- 		컬럼명 데이터타입(크기) [제약사항],
-- 		...
-- )
show tables;

-- test 테이블 생성 및 제거
create table test(
	id char(4)		not null
);
show tables;
desc test;
select *
	from test;
    
drop table test; -- table 삭제 
show tables;

-- data type(데이터 타입) : 숫자, 문자, 날짜(시간)
-- (1) 숫자 데이터 타입
-- 1) 정수: smallint(2), int(4), bigint(8)
-- 2) 실수 : float(4), double(8)
-- 3) 문자 : char(크기: 고정형) => 만들어질 때 크기가 픽스됨 , 
--          varchar(크기: 가변형) => bd 메모리의 가변성 최대폭 지정.데이터가 들어갈 때 크기가 픽스됨
-- 4) 텍스트 : text - 긴 문자를 저장하는 데이터 타입(공지글?)
-- 5) blob 타입 : blob - 큰 바이너리 타입의 데이터 저장(최대 2G까지 사용가능)
-- 6) 날짜 : date - 년, 월, 일, datetime(년,월,일,시,분,초까지 저장할 때)
--         데이터타입에 맞는 날짜 함수 호출필요!! 

-- emp 테이블 생성
-- 컬럼리스트 : emp_id 고정형(4), emp_name 가변형(10), hire_date 날짜/시간, salary 정수(5) 
create table emp(
	emp_id		char(4),
    emp_name 	varchar(10),
    hire_date 	datetime,
    salary 		int(5)
);
show tables;
desc  emp; -- null에 대한 제약없이 만들면 허용한다.

desc department;
-- dept 테이블 생성 : dept_id 고정형(3), dept_name 가변형(10), loc 가변형(20)
create table dept(
	dept_id 	char(3),
    dept_name	varchar(10),
    loc 		varchar(20)
);
show tables;
desc dept;


-- emp, dept 테이블의 모든 데이터 조회
select * from emp;
select * from dept;


-- 2. 테이블 생성(복제) : create table ~ as ~ select
-- 물리적으로 메모리 생성
-- 기본키, 참조키 등의 제약사항은 복제가 불가능, 복제 후 alter table 명령으로 제약사항 추가
-- 형식 : create table [생성(복제)할 테이블명] 
-- 		 as
--       select [컬럼리스트]
-- 			from [테이블명]
-- 			where [조건절]

-- 정보시스템 부서의 사월들만 별도로 테이블을 복제(CAS)
-- employee_sys

select * 
	from employee
    where dept_id = 'SYS'; -- 데이터가 있는지 확인

create table employee_sys 
as 
select * 
	from employee
    where dept_id = 'SYS'; -- 데이터를 새로운 테이블로 카피.

show tables;
select * 	
	from employee_sys;

desc employee_sys;
desc employee;

-- 퇴직한 사원들을 복제하여 employee_retire 테이블로 관리


create table employee_retire
as
select *
	from employee
    where retire_date is not null;

show tables;
select * from employee_retire;

-- 2015, 2017년 입사자들을 복제하여 별도로 관리
-- 테이블명: employee_2015_2017
create table employee_2015_2017
as
select emp_id, emp_name, phone, salary
	from employee
    where left(hire_date,4) in(2015, 2017);

show tables;
select *
	from employee_2015_2017;
    
    
/* *****************************************    
    테이블 제거 : drop table
    형식 : drop table [제거할 테이블명]
    명령 즉시 메모리에서 바로 테이블 삭제하므로 주의!! 
    복구가 불가능
******************************************** */ 
-- employee_2015_2017 테이블 제거
drop table employee_2015_2017; -- 메모리에서 실제로 삭제한다. 
    
    
-- employee_retire 테이블 제거
drop table employee_retire;
    
-- 재직중인 사원 테이블 생성(복제)
-- employee_working

create table employee_working
as
select *
	from employee
    where retire_date is null;
    
/* *****************************************    
    테이블 데이터 제거 : truncate table
    형식 : truncate table [제거할 데이터를 가진 테이블명]
    명령 즉시 메모리에서 바로 테이블의 데이터 모두 제거되므로 주의!! 
    복구가 불가능
******************************************** */   
    
select *
	from employee_working;
-- employee_working의 모든 데이터(row)를 제거.
truncate table employee_working;

/* *****************************************    
    테이블 구조 변경 : alter table
    형식 : alter table [변경할 테이블명]
    1) 컬럼 추가 : add column [new 컬럼명 데이터타입(크기) 제약사항]
    2) 컬럼 변경 : modify column [변경할 컬럼명 데이터타입(크기) 제약사항]
    3) 컬럼 삭제 : drop column [삭제할 컬럼명]
******************************************** */   

select * from employee_working;
desc employee_working;
-- employee_working에 bonus 컬럼 추가, 데이터타입은 정수형 4자리, null 허용 
alter table employee_working
		add column bonus int(4);

-- employee_working에 dname(부서명) 추가, 데이터타입 가변형(10), 널값 허용
alter table employee_working
add column dname varchar(10);

-- employee_working에 email주소 컬럼 크기를 30으로 수정 
alter table employee_working
modify column email varchar(30); -- 비어있을 때만 줄이는게 적용가능

-- employee_working에 salary 컬럼을 실수타입(double)로 수정
alter table employee_working
modify column salary double;

select * from employee_sys;
-- employee_sys 테이블의 이메일주소 컬럼 크기를 가변형 10 크기로 수정 
alter table employee_sys
	modify column email varchar(10); -- 데이터가 있는 상태에서 varchar(30)에서 줄이는것을 데이터가 유실될 가능성이 있으므로 에러발생.

-- employee_working 테이블의  bonus 컬럼 삭제
desc employee_working;

alter table employee_working
	drop column bonus;

-- employee_working 테이블 제거

drop table employee_working;

show tables;

alter table order_detail 
	rename column drder_detail_id to order_detail_id ;

-- employee 테이블에서 hrd 부서에 속한 사원들의 사원아이디, 사원명, 입사일, 연봉, 보너스(연봉10%) 정보를 별칭을 사용하여 조회한 후
-- employee_hrd 이름으로 복제
create table employee_hrd
as
select  emp_id 사원아이디,
		emp_name 사원명,
        hire_date 입사일,
        salary 연봉,
        salary * 0.1 보너스
	from employee
    where dept_id='HRD';

show tables;
desc employee_hrd;

/* **************************************************
	dml : insert(c), select(R), update(U), delete(D)
    
************************************************** */
-- 1. insert : 데이터 추가
-- 형식: insert into [테이블명](컬럼리스트)
--			values(데이터리스트 ...) //   컬럼리스트 와 데이터 리스트 1:1 맵핑되도록 한다.

show tables;
desc emp;
select * from emp;
-- s001, 홍길동, 현재날짜, 1000
insert into emp(emp_id, emp_name, hire_date, salary)
	values('S001','홍길동',curdate(), 1000);

-- s002, 홍길순, 현재날짜(now, sysdate), 2000
insert into emp(emp_id, emp_name, hire_date, salary)
	values('S002','홍길순',now(),2000);

-- s003, 김철수, 현재날짜(now, sysdate), 3000
-- 컬럼리스트 생략시에는 생성시 컬럼의 순서대로 insert 실행됨
insert into emp()
	values('S003','김철수',sysdate(),3000);

-- s004, 이영희, 현재날짜(now, sysdate), 연봉협상전 데이터 추가 
insert into emp(emp_id, emp_name, hire_date,salary)
	values('S004','이영희', now(),null);

-- employee 테이블의 정보시스템 부서의 사원들 정보 중
-- 사원아이디, 사원명, 입사일, 부서아이디, 연봉을 2016년 이전에 입사한 사원들 .복제하여 employee_sys 테이블 생성 
drop table employee_sys;
create table employee_sys
as
select emp_id,emp_name, hire_date, dept_id, salary
	from employee
    where dept_id='SYS' and left(hire_date,4) < '2016';

show tables;
select * from employee_sys;

-- employee_sys 테이블에 2016년도 이후에 입사한 정보시스템 부서 서원 추가
-- 서브쿼리를 이용한 데이터 추가
insert into employee_sys(emp_id,emp_name, hire_date, dept_id, salary)
select emp_id,emp_name, hire_date, dept_id, salary
	from employee
    where dept_id='SYS' and left(hire_date,4) >= '2016';

-- dept  테이블 구조 확인 및 데이터 추가
show tables;
desc dept;
select * from dept;
-- sys, 정보시스템, 서울
-- mkt, 마케팅, 뉴욕
-- hrd, 인사, 부산 
-- acc, 회계, 정해지지 않음
insert into dept(dept_id, dept_name, loc) values('sys', '정보시스템', '서울');
insert into dept(dept_id, dept_name, loc) values('mkt','마케팅','뉴욕');
insert into dept(dept_id, dept_name, loc) values('hrd','인사','부산');
insert into dept(dept_id, dept_name, loc) values('acc','회계',null);
-- 에러발생 : 컬럼리스트와 매칭 카운트가 다름
-- insert into dept(dept_id, dept_name) values('acc','회계',null);
-- 에러발생 : dept_id 컬럼 사이즈보다 큰 데이터 입력 char(3)
-- insert into dept(dept_id, dept_name) values('SALES','회계',null);


/* ***********************************************************
	constraint(제약사항) : 데이터 무결성의 원칙을 적용하기 위한 규칙
    - unique : 유니크(중복방지) 제약 사항 
    - not null : null 값을 허용하지 않는 제약
    - primary key(기본키) : unique + not null 제약을 지정
    - foreign key(참조키) : 타 테이블을 참조하기 위한 제약
    - default : 디폴트로 저장되는 데이터 정의하는 제약
    
    사용형식 : create table + 제약사항 
             alter table + 제약사항 
*********************************************************** */
-- DB의 스키마 구조를 통해 각 테이블의 제약사항 확인
-- information_schema.table_constraints
select * from information_schema.table_constraints
	where table_name ='employee';

desc employee;


show tables;
desc emp;
-- emp_cost 테이블 생성
-- 기본기 제약 : emp_id
-- 유니크 제약 : emp_name
-- not null 제약 : salary

create table emp_cost(
	emp_id		char(4) primary key,
    emp_name 	varchar(10) unique ,
    hire_date 	datetime ,
    salary 		int not null
);

select * from information_schema.table_constraints
		where table_name ='emp_cost';

-- s001, 홍길동, 현재날짜, 1000
insert into emp_cost(emp_id, emp_name, hire_date, salary)
	values('s001','홍길동', now(), 1000);

select * from emp_cost;

-- s001, 김철수, 현재날짜, 1000 (emp_id를 동일하게 넣어 테스트)
-- Error Code: 1062. Duplicate entry 's001' for key 'emp_cost.PRIMARY'
-- PRIMARY 키로 설정되어 있는 컬럼은 입력폼에서 아이디 중복체크 기능을 통해 확인함.
insert into emp_cost(emp_id, emp_name, hire_date, salary)
	values('s001', '김철수', now(), 1000);

-- 솔루션 : 중복된 's001' -> 's002' 변경 후 실행
insert into emp_cost(emp_id, emp_name, hire_date, salary)
	-- values('s001', '김철수', now(), 1000);
    values('s002', '김철수', now(), 1000);

-- null 입력 테스트 : Error Code: 1048. Column 'emp_id' cannot be null	
-- 솔루션 : null 또는 중복된 값을 배제하여 진행.
insert into emp_cost(emp_id, emp_name, hire_date, salary)
	-- values(null, '김철수2', now(), 1000);
    values('s003', '김철수2', now(), 1000);

-- emp_name에 null값 추가.
insert into emp_cost(emp_id, emp_name, hire_date, salary)
    values('s004', null, now(), 1000);

-- emp_name에 null값 추가. 오라클에서는 null도 유니크하게 체크하지만, mysql은 중복으로 사용 가능함.
insert into emp_cost(emp_id, emp_name, hire_date, salary)
    values('s005', null, now(), 1000);

select * from information_schema.table_constraints
		where table_name ='emp_cost';

-- emp_const2 테이블 생성
-- emp_id: primary key
-- emp_name: unique
create table emp_const2(
	emp_id 	char(4),
 	emp_name varchar(10),
		constraint pk_emp_id	primary key(emp_id),
		constraint uk_emp_name  unique(emp_name)  
);

desc emp_const2;
select * from information_schema.table_constraints
		where table_name ='emp_const2';
        
        
        

/* ********************************************
	하나 이상의 테이블 생성 및 연결, 조회
	- 생성: create table
    - 연결 : foreign key(참조키)  제약 추가
    - select(조회) : join, subquery
    ** 데이터베이스의 테이블 설계과정: 데이터베이스 모델링
		-> 데이터 정규화 
		-> erd(entity relationship diagram)
******************************************** */

use hrdb2019;
select database();
show tables;

-- erd : database 메뉴 > reverse engeering
-- 정규화 : 데이터베이스 저장 효율성을 높이기 위한 방식 - 데이터 중복배제, 테이블 분리 ...
-- 반정규화 : 분리된 테이블을 하나로 합치는 방식 

-- 예시)
-- [kk전자의 인사관리시스템 : 사원테이블 생성 - 정규화진행하지 않은 상태]
-- 사원 테이블의 데이터 : 
-- 사원아이디(kid, 기본키 auto increment), 사원명, 주소, 입사일, 연봉, 부서번호, 부서명, 부서위치

-- 사원테이블 kk_employee(참조키 필수) / 부서테이블 kk_deoartment(먼저 만든다)

-- 부서테이블 kk_deoartment
create table kk_deoartment(
	dept_id char(3) primary key,
    dept_name varchar(10) not null,
    loc varchar(20)
);
select * from information_schema.table_constraints
	where table_name like 'kk%';
-- 부서 데이터 입력
insert into kk_deoartment(dept_id,dept_name,loc)
	values('SYS','정보시스템','서울시 서초구');
insert into kk_deoartment(dept_id,dept_name,loc)
	values('HRD','인사관리','서울시 종로구');
insert into kk_deoartment(dept_id,dept_name,loc)
	values('ACC','회계관리','서울시 강남구');

-- 사원테이블 kk_employee
create table kk_employee(
	kid 		int primary key auto_increment,
    kname		varchar(10)  	not null,
    address 	varchar(20),
    hire_date 	date,
    salary 		int,
    dept_id 	char(3),
    constraint fk_kk_employee foreign key(dept_id) 
				references kk_deoartment(dept_id)
);

desc kk_employee;
select * from information_schema.table_constraints
	where table_name like 'kk%';
select * from kk_employee;

-- dept_id : kk_deoartment를 참조하기 때문에 값이 틀리면 안됨.
insert into kk_employee(kname, address, hire_date, salary, dept_id)
	values('홍길동','서울시 강남구',curdate(),5000,'SYS');
insert into kk_employee(kname, address, hire_date, salary, dept_id)
	values('스미스','뉴욕',curdate(),5000,'HRD');
select * from kk_employee;

/*
1. 과목(subject)테이블은 
컬럼: sid(과목아이디), sname(과목명), sdate 
*/

create table subject(
	sid 	int 	primary key 	auto_increment,
    sname 	varchar(10),
    sdate 	datetime
);

create table student(
	stid	int 		primary key 	auto_increment,
    sname 	varchar(10) not null,
    gender 	char(1) 	not null,
    sid 	int, 	 -- foreign key, subject(sid)
    stdate  datetime,
    constraint fk_subject foreign key(sid) 
			   references subject(sid)
);

create table professor(
	pid 	int 		primary key 	auto_increment,
    name 	varchar(10) not null,
    sid 	int,     -- foreign key, subject(sid)
    pdate 	datetime,
    constraint fk_subject_pro foreign key(sid)
			   references subject(sid)
);

select * from information_schema.table_constraints
	where table_name = 'professor';
desc professor;

show tables;

-- subject 과목 데이터 추가
insert into subject(sname, sdate) values('html', now());
insert into subject(sname, sdate) values('javascript', now());
insert into subject(sname, sdate) values('mysql', now());
select * from subject;
-- student 학생 데이터 추가
insert into student(sname,gender,sid,stdate) values('홍길동','M','1',sysdate());
insert into student(sname,gender,sid,stdate) values('김철수','F','2',sysdate());
insert into student(sname,gender,sid,stdate) values('홍길순','M','3',sysdate());
insert into student(sname,gender,sid,stdate) values('영희','F','1',sysdate());
select * from student;
-- professor 교수 데이터 추가
insert into professor(name, sid, pdate) values('스미스','1',now());
insert into professor(name, sid, pdate) values('이순신','2',now());
insert into professor(name, sid, pdate) values('강감찬','3',now());
select * from professor;

-- html 과목의 정보를 조회
select * from subject where sname='html';

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	join(조인) : 두개 이상의 테이블 연동 
    - 두 개 이상의 테이블을 조합하여 집합 
    - cros(catesian) join (합집합)
	  : 두 개 테이블이 독립적으로 생성된 경우, join 연결고리 X 
      : professor & student -> professor * student
      
	-inner(equi) join (교집합)
	  : 두개 테이블이 join 연결고리를 통해 연동 
	- outer join : inner join(교집합) + 선택한 테이블 중 교집합에서 제외된 데이터 
    - self join : 한 테이블을 조인하는 형식 --> 서브쿼리(sub query)
      ** 한 테이블에 PK를 참조하는 컬럼이 존재하는 경우 사용!
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
select * from professor; 

-- cros(catesian) join (합집합)
-- select [컬럼리스트] from [테이블명 [테이블별칭], 테이블명 [테이블별칭] ...]
-- where [조건절]
select *
	from professor, student
    order by pid;

select pid, name, p.sid, sname,gender, stdate 
	from professor p, student s;

-- professor, student, department join하여 모든 데이터 조회
select count(*) from professor; -- 3
select count(*) from student; -- 4
select count(*) from department; -- 7

select count(*) from professor, student, department; -- 84

-- ansi sql(sequl :: ms-sql) 방식
select *
	from professor cross join student
		           cross join department;


-- inner join (교집합) 형식
-- select [컬럼리스트] from [테이블명1 [테이블별칭], 테이블명2 [테이블별칭] ...]
-- where [테이블명1.조인컬럼 = 테이블명2.조인컬럼]
-- and [조건절 ~~]
select * from subject;
select * from professor;
select * 
	from subject s, professor p 
	where s.sid = p.sid;

insert into professor(name, sid,pdate)
	values('안중근','1',now());

select *
	from subject s, professor p
    where s.sid = p.sid;
    
 insert into subject(sname, sdate)
	values('react',now());
    
select *
	from subject s, professor p
    where s.sid = p.sid;
    

    

-- html 과목을 가르치는 교수 검색
-- inner join 이후 조건으로 검색
select *
	from subject s, professor p
	where s.sid = p.sid
    and sname='html';

-- ncsql 방식
select * from subject s inner join professor p
		 on s.sid = p.sid
         where sname='html';

-- 이순신 교수가 강의하는 과목의 과목아이디, 과목명,교수아이디, 교수명, 교수등록일을 조회 
select * from professor;
select * from subject;
select s.sid,s.sname, p.pid, p.name, p.pdate
	from subject s , professor p 
    where s.sid = p.sid
    and p.name='이순신';
    
-- ncsql 방식
select s.sid,s.sname, p.pid, p.name, p.pdate
		from subject s inner join professor p 
		on s.sid = p.pid
		where p.name='이순신';


-- html 과목을 수강하는 모든 학생을 조회
select *
	from subject su , student st 
    where suu.sid = st.sid
    and s.sname='html';
select *
	from subject su inner join student st 
    on su.sid = st.sid
    where su.sname='html';

-- html 과목을 수강하는 모든 학생과 강의하는 교수를 모두 조회
select *
	from subject su, professor p, student st
    where su.sid = p.sid and su.sid = st.sid
    and su.sname='html';
  
select *
	from subject su inner join professor p inner join student st
    on su.sid = p.sid and su.sid = st.sid
    where su.sname = 'html';
    
-- employee, department, vacation, unit 테이블들의 ERD 참조 
-- 모든 사원들의 사원번호, 사원명, 성별, 부서명, 입사일 조회 
-- 사원번호 기준으로 오름차순 
select * from employee;
select * from department;
select e.emp_id, e.emp_name, e.gender, d.dept_name, e.hire_date
	from employee e, department d
    where e.dept_id = d.dept_id
    order by emp_id;

select e.emp_id, e.emp_name, e.gender, d.dept_name, e.hire_date
	from employee e inner join department d
    on e.dept_id = d.dept_id
    order by emp_id;
    
 
-- 영업부서에 속해있는 사원들의 사원번호, 사원명, 입사일, 급여, 부서아이디, 부서명 조회
select e.emp_id, e.emp_name, e.hire_date, e.salary, d.dept_id, d.dept_name
	from employee e, department d
    where e.dept_id = d.dept_id
    and d.dept_name ='영업';
select e.emp_id, e.emp_name, e.hire_date, e.salary, d.dept_id, d.dept_name
	from employee e inner join department d
    on e.dept_id = d.dept_id
    where d.dept_name ='영업';

-- 인사과에 속한 사원들 중에 휴가를 사용한 사원들의 리스트를 모두 조회     
select * from vacation;
select * from employee;  

select *
	from department d, employee e, vacation v
    where d.dept_id = e.dept_id and e.emp_id = v.emp_id
    and d.dept_name='인사';
    
    
 /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
-- 영업부서인 사원의 사원명, 폰번호, 부서명, 휴가사용 이유 조회
-- 휴가 사용 이유가 '두통'인사원, 소속본부 조회
select * from vacation; -- resaon(휴가사유), emp_id(fireign)
select * from employee;  -- emp_id, emp_name, pnone , dept_id(foreign)
select * from department; -- dept_id , unit_id(foreign)
select * from unit;  -- unit_id, nit_name(본부이름)

select e.emp_name, e.phone ,d.dept_name, v.reason, u.unit_name
	from vacation v, employee e, department d, unit u 
    where v.emp_id = e.emp_id and e.dept_id = d.dept_id and d.unit_id = u.unit_id
    and v.reason = '두통'
    and d.dept_name='영업';
-- ncsql 형태로 변경 
select e.emp_name, e.phone ,d.dept_name, v.reason, u.unit_name
	from vacation v inner join employee e inner join department d inner join unit u 
    on v.emp_id = e.emp_id and e.dept_id = d.dept_id and d.unit_id = u.unit_id
    where v.reason like '%두통%' and d.dept_name='영업';
    
-- 2014년부터 1025년도까지 입사한 사원들 중에서 퇴사하지 않은 사원들의
-- 사원아이디, 사원명, 부서명, 입사일, 소속본부를 조회  
select * from employee;  -- emp_id, emp_name,  , dept_id(foreign), hire_date, retire_date
select * from department; -- dept_id , unit_id(foreign)
select * from unit;  -- unit_id, nit_name(본부이름)
    
select e.emp_id 아이디, e.emp_name 이름, d.dept_name 부서명, e.hire_date 입사일, u.unit_name 소속본부
	from employee e, department d, unit u
    where e.dept_id = d.dept_id and d.unit_id = u.unit_id
		and left(e.hire_date,4) between '2014' and '2015' 
		and e.retire_date is null
        order by u.unit_name asc;
        
        
-- outer join (보통 pk 영역이 outer가 된다 fk는 종속되기 때문.)   

-- 오라클 형식의 outer join이 지원되지 않음
/* 하위 버전에서는 사용이 가능할 수 있음.
select *
	from subject s left outer join professor p
    on s.sid = p.sid(+);  
*/

-- ansi sql : left outer join, right outer join
select *
	from subject s left outer join professor p
    on s.sid = p.sid;
    
-- professor 기준으로 조회하면(foreign kye) 제외되는 부분이 없기때문에 inner join과 동일하다
select *
	from subject s right outer join professor p
    on s.sid = p.sid;

-- department, unit 테이블 
-- 모든 부서의 본부아이디, 본부이름을 조호
select * from department;
select * from unit;

select * 
	from department d left outer join unit u
    on d.unit_id = u.unit_id
    order by u.unit_name;

-- 2017년도부터 2018년도까지 입사한 사원들의 사원명, 입사일, 연봉, 부서명 조회해주세요.
-- 단 퇴사한 사원들도 모두 조회
-- 소속본부를 모두 조회
select * from employee; -- emp_name, hire_date, salary, dept_id
select e.emp_name, e.hire_date, e.salary,d.dept_name, u.unit_name
	from employee e inner join department d on e.dept_id = d.dept_id -- 조건이 틀릴 땐 따로따로 조건을 줘야 한다.
					left outer join unit u  on d.unit_id = u.unit_id
    where left(e.hire_date,4) between '2017' and '2018'
    and e.retire_date is null; -- 퇴사한 사원 제외

-- subject, student 테이블 사용
-- 학생들이 선택하지 않은 과목을 조회 
select * from subject;
select * from student;

select *
	from subject su left outer join student st
    on su.sid = st.sid
    where st.sid is null;

-- self join을 취한 테이블 복제
create table emp
as
select * from employee;

select * from emp;
desc emp;
-- emp 테이블에 emp_id 컬럼에 기본키 제약 추가
alter table emp
	add constraint PK_EMP primary key(emp_id);
-- mgr column 추가
alter table emp
	add column mgr char(5);

-- sys 부서의 사원들의  매니저를 '홍길동(S0001)'사원으로 업데이트
set sql_safe_updates = 0;-- mysql에서만 사용
update emp
	set mgr = 'S0001'
    where dept_id = 'SYS';
select * from emp where dept_id = 'SYS';

-- mkt 부서의 사원들의  매니저를 '오감자(S0011)'사원으로 업데이트
set sql_safe_updates = 0;-- mysql에서만 사용
update emp
	set mgr = 'S0011'
    where dept_id = 'mkt';
    
-- hrd 부서의 사원들의  매니저를 '정주고(S0019)'사원으로 업데이트
set sql_safe_updates = 0;-- mysql에서만 사용
update emp
	set mgr = 'S0019'
    where dept_id = 'hrd';

-- self join : emp테이블의  emp_id(기본키), mgr(참조키)
-- 홍길동 사원이 관리하는 모든 사원들의 사원번호, 사원명, 입사일, 급여, 부서아이디, 부서명(department 추가)을 조회
select manager.emp_id, manager.emp_name, manager.hire_date, manager.salary, manager.dept_id , d.dept_name
	from emp employee , emp manager , department d
    where employee.emp_id = manager.mgr
    and manager.dept_id = d.dept_id  
    and manager.mgr = 'S0001';

-- hrd 부서를 관리하는 매니저의 사원번호, 사원명, 입사일, 급여, 부서아이디, 부서명(department 추가)을 조회
-- distinct 중복 데이터 삭제
select distinct e.emp_id, m.emp_name, e.emp_name, e.hire_date, e.salary, e.dept_id, d.dept_name
	from emp e , emp m , department d
    where e.emp_id = m.mgr and m.dept_id = d.dept_id
    and m.dept_id='hrd';

-- 매니저가 없는 사원번호, 사원명, 입사일, 급여, 부서아이디 사원정보를 조회 
-- inner join 진행 시 매니저가 없는 사원은 제외됨. 
select *
	from emp m , emp e
    where m.mgr = e.emp_id
    and m.mgr is not null;
    
-- 제외되는 데이터까지 조회하기 위해서는 outer join
select m.emp_id, m.emp_name, m.hire_date, m.salary, m.dept_id
	from emp m left outer join emp e
    on m.mgr = e.emp_id
    where m.mgr is null;

-- 홍길동 사원이 관리하는 사원들의 사원아이디, 사원명, 연봉, 매니저사원번호, 매니저 이름 
select e.emp_name , m.emp_name
	from emp e, emp m -- e: 매니저 사원 정보, m:매니저가 관리하는 사원 테이블
    where e.emp_id = m.mgr
    and m.mgr='S0001';


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	sub query(서브쿼리) 
		: select ~ from ~where
	
    select [컬럼명, ... (스칼라 서브쿼리)] -- 오라클에서는 사용 불가. 속도 저하.
		from [테이블명 자리에 쿼리를 쓰면 (인라인 뷰)]
        where [조건절에 쓰이면 (서브쿼리)]
        
	(종류)
    - 단일행(row) 서브쿼리 : 
    - 다중행(row) 서브쿼리 :
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

-- (단일행)홍길동 사원이 속한 부서의 이름과 본부아이디를 조회. 
select * from employee;
select * from department;

select dept_name, unit_id
	from department
    where dept_id = ( select dept_id from employee where emp_name='홍길동' ); 
    -- where dept_id = 'SYS'; 

select dept_id -- 홍길동 사원이 속한 부서 'SYS'
	from employee
    where emp_name='홍길동';

-- 홍길동 사원이 사용한 휴가 내역을 조회
-- 2017 ~ 2018 년도 내역
select vacation_id, emp_id, begin_date, end_date, reason, duration -- 컬럼리스트는 컬럼명을 정확하게 작성하시길 권장.
	from vacation
    where emp_id = (select emp_id from employee where emp_name='홍길동')
    and left(begin_date,4) between '2017' and '2018';

-- join으로 변경
select v.vacation_id, v.emp_id, v.begin_date, v.end_date, v.reason, v.duration
	from vacation v, employee e
    where v.emp_id = e.emp_id
    and e.emp_name='홍길동'
    and left(begin_date,4) between '2017' and '2018';

-- 1. '제3본부'에 속한 부서들을 모두 출력 
select * from unit;  
select * from department;   

select *
	from department
    where unit_id = (select unit_id from unit where unit_name='제3본부');

-- 2. '제3본부'에 속한 사원들을 모두 출력 
select *
	from employee
    where dept_id in ( -- 부서 아이디가 2개 이므로 다중행 서브쿼리 형식은 IN
		select dept_id 
			from department
			where unit_id = (select unit_id from unit where unit_name='제3본부')
    );
    -- where dept_id in ('avc','mkt');
-- 다중 결과
select dept_id 
	from department
	where unit_id = (select unit_id from unit where unit_name='제3본부');


-- 가장 먼저 입사항 사원의 정보를 조회
select *
	from employee
    where hire_date = (select min(hire_date) from employee);
-- 서브쿼리 조건 
select min(hire_date) from employee;

-- 가장 급여가 높은 사원의 정보를 조회
select *
	from employee
    where salary = (select max(salary) from employee);
-- 가장 급여가 낮은 사원의 정보를 조회
select *
	from employee
    where salary = (select min(salary) from employee);

-- 정보시스템 부서의 사원 중에 휴가를 사용한 사원들을 조회 
select * 
	from employee
    where dept_id=(select dept_id from department where dept_name='정보시스템')
    and emp_id in(select distinct emp_id from vacation);

-- 정보시스템 부서의 사원 중에 휴가를 사용하지 않은  사원들을 조회 
select * 
	from employee
    where dept_id=(select dept_id from department where dept_name='정보시스템')
    and emp_id not in(select distinct emp_id from vacation);

/*
	출력 번호 생성 : row_number() over(order by [정렬할 컬럼명])
    ** select의 컬럼리스트 자리에 사용되며, * 문자와는 동시에 사용 불가능 
*/
-- 정보시스템 부서 사원들 사원아이디, 사원명, 입사일 조회
select row_number() over(order by emp_id) as 'no',
	emp_id, emp_name, hire_date
	from employee 
    where dept_id = (select dept_id from department where dept_name='정보시스템');
-- 모든 사원의 사원아이디, 사원명, 급여, 부서아이디 
-- 출력행 포함
select  row_number() over(order by salary DESC) as 'no' ,
		emp_id, emp_name, salary, dept_id
	from employee;

-- 사원별 휴가사용 일수를 그룹핑하여, 사원아이디, 사원명, 입사일, 연봉, 휴가사용일수를 조회해주세요.
-- 휴가사용 일수를 구하는 인라인뷰(임시로 만들어지는 테이블)와 사원테이블을 조인
select * from vacation;

select emp_id, sum(duration) vcount -- 뷰(임시로 만들어지는 테이블)가 만들어진다.
	from vacation
    group by emp_id;

select row_number() over(order by vcount desc) as no,
	e.emp_id, e.emp_name, e.hire_date, concat(format(e.salary, 0),' 만원') as 'salary', v.vcount as '휴가사용횟수'
	from employee e ,
		(select emp_id, sum(duration) vcount
			from vacation
			group by emp_id) v -- 인라인뷰의 별칭은 반드시 부여.
	where e.emp_id = v.emp_id;

-- hrd 부서 사원들의 휴가 사용 일수와 사원아이디, 사원명, 부서아이디, 부서명 조회 
-- 1. hrd 부서의 사원중 휴가를 사용한 사원아이디, 휴가사용일수
select emp_id, sum(duration) 
	from vacation
    where emp_id in (
		select emp_id
			from employee
            where dept_id='hrd'
    )
    group by emp_id;
-- 2. 1번 결과와 employee 테이블을 조인하여 사원 상세 정보 출력
select row_number() over(order by emp_id) as no,
		e.emp_id, e.emp_name, e.dept_id, vcount
	from 
		(select emp_id, sum(duration) vcount
		from vacation
		where emp_id in (
			select emp_id
				from employee
				where dept_id='hrd'
		)
		group by emp_id
    ) v, 
    employee e
    where v.emp_id = e.emp_id;

-- [휴가를 사용한 사원정보만]
-- 사원별 휴가사용 일수를 그룹핑하여, (사원아이디, 사원명, 입사일, 연봉), 휴가사용일수를 조회해주세요.
-- 1. 사원별 휴가사용 일수를 그룹핑 작업을 수행하는 인라인뷰 
select emp_id, sum(duration) as vcount
	from vacation
    group by emp_id;
    
-- 2. 1번의 인라인뷰와 employee 테이블과의 조인
select row_number() over(order by v.vcount desc) as no,
	e.emp_id, e.emp_name, e.hire_date, e.salary, v.vcount
	from employee e ,
		(select emp_id, sum(duration) as vcount
		from vacation
		group by emp_id) v
    where e.emp_id = v.emp_id;

-- [전체 사원의 휴가일수 조회 : 휴가를 사용한 사원정보 + 사용하지 않은 사원]
-- 사원별 휴가결제 횟수, 휴가전체사용일수휴를 그룹핑하여,
-- 사원아이디, 사원명, 입사일, 연봉, 휴가결제 횟수, 휴가전체사용일수를 조회해주세요.
-- 단, 휴가를 사용하지 않은 사원의 휴가결제횟수, 휴가전체사용일수는 0값으로 할당 
select * from vacation;
    
-- 1. 사원별 휴가결제 횟수, 휴가전체사용일수휴를 그룹핑 작업 인라인뷰
select emp_id,count(emp_id) as count, sum(duration) as vcount
	from vacation
    group by emp_id;
    
-- 2. 1번의 인라인뷰 결과 테이블과 employee 테이블 left/right outer join
-- !!! mysql에서 outer join은 ansi sql 형식만 가능 !!!
-- 사원아이디, 사원명, 입사일, 연봉, 휴가결제 횟수, 휴가전체사용일수를 조회해주세요.
select row_number() over(order by v.count desc) as no,
	   e.emp_id, e.emp_name, e.hire_date, concat(format(ifnull(e.salary, 0), 0), ' 만원') as salary,
       ifnull(v.count, 0) as count, ifnull(v.vcount, 0) as vcount
	from employee e left outer join
		(select emp_id,count(emp_id) as count, sum(duration) as vcount
			from vacation
			group by emp_id) v
	on e.emp_id = v.emp_id; -- inner join의 결과가 들어가야 한다.


-- 스칼라 서브쿼리 : mysql에서는 사용이 가능하나 권장하지 않음X, 오라클 ,DB2 등 데이터베이스는 사용불가. 
-- hrd 부서의 사원들의 사원아이디, 사원명, 부서아이디, 본부 조회 
select emp_id, emp_name, dept_id,
	   (select dept_name from department where dept_id = 'hrd') as dept_id,
       (select unit_name from unit
			where unit_id = (select unit_id  from department where dept_id = 'hrd')) as unit_name
	from employee
	where dept_id='hrd';
    
-- 번호, 사원아이디, 사원명, 입사일, 부서아이디, 연봉
-- 급여 순으로 사월들을 정렬, 상위 5명의 사원만 출력
-- 인라인뷰(from 자리)로 만들어 no를 사용할 수 있도록 한다.
select no 
	   emp_id, emp_name, hire_date, dept_id, salary
	from(select  row_number() over(order by salary desc) as no, -- 출력 결과에서 만들어짐.
			     emp_id, emp_name, hire_date, dept_id, salary
			from employee) t1
	where no <= 5;

-- 입사일이 가장 빠른 사원 10명의 사원아이디, 사원명, 부서아이디를 조회 
select no, 
       emp_id, emp_name, dept_id, hire_date
	from (select row_number() over(order by hire_date) as no,
				emp_id, emp_name, dept_id, hire_date
			from employee) t1 -- 인라인 뷰 사용 시 반드시 알리아스 써줘야 됨.
	where no <= 10;

-- 사원들의 급여합계(group)가 가장 작은 부서의 사원들을 조회해주세요.
-- 1. 부서 찾기
select row_number() over(order by sum(salary)) as no,
		dept_id, sum(salary) as salary
	from employee
    where salary is not null
    group by dept_id;
-- 2. 연봉이 가장 낮은 부서 찾기(no:1)
select dept_id
	from (select row_number() over(order by sum(salary)) as no,
					dept_id, sum(salary) as salary
				from employee
				where salary is not null
				group by dept_id) t1
	where no = 1;
-- 3.가장 낮은 부서에 속하는 사원 찾기
select *
		from employee
        where dept_id = (select dept_id
							from (select row_number() over(order by sum(salary)) as no,
											dept_id, sum(salary) as salary
										from employee
										where salary is not null
										group by dept_id) t1
							where no = 1);
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	self join을 서브쿼리로 변경해서 조회하기
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

-- self join : emp테이블의  emp_id(기본키), mgr(참조키)
-- 홍길동 사원이 관리하는 모든 사원들의 사원번호, 사원명, 입사일, 급여, 부서아이디, 부서명(department 추가)을 조회
-- 서브쿼리를 이용하여 실행
select manager.emp_id, manager.emp_name, manager.hire_date, manager.salary, manager.dept_id , d.dept_name
	from emp employee , emp manager , department d
    where employee.emp_id = manager.mgr
    and manager.dept_id = d.dept_id  
    and manager.mgr = 'S0001';

-- -->  변경
select emp_id
	from emp
	where emp_name='홍길동';

select row_number() over(order by emp_id) as no,
		emp_id, emp_name, hire_date, salary, d.dept_id, d.dept_name, mgr
	from department d, 
		 (select emp_id, emp_name, hire_date, salary, dept_id, mgr
			from emp
			where mgr = (select emp_id from emp where emp_name='홍길동')) e -- 홍길동 사원의 emp_id
	where d.dept_id = e.dept_id;

-- hrd 부서를 관리하는 매니저의 사원번호, 사원명, 입사일, 급여, 부서아이디, 부서명(department 추가)을 조회
-- distinct 중복 데이터 삭제
select distinct e.emp_id, m.emp_name, e.emp_name, e.hire_date, e.salary, e.dept_id, d.dept_name
	from emp e , emp m , department d
    where e.emp_id = m.mgr and m.dept_id = d.dept_id
    and m.dept_id='hrd';

-- hrd 부서를 관리하는 매니저의 사원번호, 사원명, 입사일, 급여, 부서아이디, 부서명을 조회 
select emp_id, emp_name, hire_date, salary, dept_id 
	from emp
    where emp_id = (select distinct mgr
						from emp
						where dept_id = 'hrd'); -- hrd 부서의 관리 매니저
select emp_id, emp_name, hire_date, salary, d.dept_id , dept_name
	from department d, 
		(select emp_id, emp_name, hire_date, salary, dept_id 
				from emp
				where emp_id = (select distinct mgr
									from emp
									where dept_id = 'hrd')) e
	where d.dept_id = e.dept_id;
    
-- 1. 매니저가 없는 사원번호, 사원명, 입사일, 급여, 부서아이디 조회 
select  emp_id, emp_name, hire_date, salary, dept_id 
	from emp
	where mgr is null;  
-- 2. 추가(부서명, 소속본부) 조회 
select emp_id, emp_name, hire_date, salary, d.dept_id , dept_name, unit_name
	from department d, -- 3
		 unit u, -- 3
		 (select  emp_id, emp_name, hire_date, salary, dept_id -- 6 서브 쿼리는 리턴값이 작아서 비교가 적음. 속도가 더 빠르다.
			from emp
			where mgr is null) e
	where d.dept_id = e.dept_id and d.unit_id = u.unit_id;

-- 쿼리를 스캔하는 범위가 작아야 속도가 빨라짐. 
select emp_id, emp_name, hire_date, salary, d.dept_id , dept_name, unit_name
	from department d, -- 3
		 unit u, -- 3
		 emp e -- 20 : 비교 갯수가 많아짐.
	where d.dept_id = e.dept_id and d.unit_id = u.unit_id
    and e.mgr is null;

/*  조인이나 서브쿼리 작업시에는 효율성을 높이기 위해 집합을 작게 만들고 진행하는 것이 좋다. ***************************************** */

/* ****************************************************************************
	쿼리 결과 합치기 : union, union all (실시간 조회에는 맞지 않음)
	형식 : 쿼리1  union/union all  쿼리2
	
    **쿼리1, 쿼리2의 실행 결과 컬럼리스트가 동일해야함.
**************************************************************************** */
-- hrd 부서의 사원아이디, 사원명, 부서아이디, 연봉
-- sys 부서의 사원아이디, 사원명, 부서아이디, 연봉 실행결과 합치기 
select emp_id, emp_name, dept_id, salary
	from employee
    where dept_id='hrd'
union all
select emp_id, emp_name, dept_id, salary
	from employee
    where dept_id='sys';

-- 영업, 정보시스템 부서로 조회
select emp_id, emp_name, dept_id, salary
	from employee
    where dept_id=(select dept_id from department where dept_name='영업')
union all
select emp_id, emp_name, dept_id, salary
	from employee
    where dept_id=(select dept_id from department where dept_name='정보시스템');

-- 2013 ~2016년도 사이에 입사한 사원과 sys 부서의 사원들의 아이디, 사원명, 부서아이디, 폰번호, 연봉  조회
-- union all(중복허용, 전체 데이터 모두 출력) :22
-- union(중복X, 전체 데이터 모두 출력) : 17
select count(*) -- 22
	from (select emp_id, emp_name, dept_id, phone, salary -- 16
			from employee
			where left(hire_date,4) between '2013' and '2016'
		union
		select emp_id, emp_name, dept_id, phone, salary -- 6
			from employee
			where dept_id='sys') t1;
-- 2013~2015 연도별, 부서들의 연봉 합계가 가장 높은 부서들만 조회
select year, dept_id, salary
	from (select  row_number() over(order by sum(salary) desc) as no,
				left(hire_date,4) as year,
				dept_id,
				sum(salary) as salary
			from employee
			where left(hire_date,4) ='2013'
			group by year, dept_id) t1
	where no = 1
union 
select year, dept_id, salary
	from (select  row_number() over(order by sum(salary) desc) as no,
				left(hire_date,4) as year,
				dept_id,
				sum(salary) as salary
			from employee
			where left(hire_date,4) ='2014'
			group by year, dept_id) t1
	where no = 1
union
select year, dept_id, salary
	from (select  row_number() over(order by sum(salary) desc) as no,
				left(hire_date,4) as year,
				dept_id,
				sum(salary) as salary
			from employee
			where left(hire_date,4) ='2015'
			group by year, dept_id) t1
	where no = 1;

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	view(뷰) : 논리적인 가상의 테이블
    - sql을 실행하여 생성되는 테이블 
    - 형식 : create view [생성하는 뷰의 이름]
			as 
            서브 쿼리
            
	- 삭제 : drop view [뷰 이름]
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

show tables; -- show : 물리적으로 있는 경우 
-- view는 sql을 통해 생성되므로 information_schema라는 사전에 등록됨.
-- 전체 뷰 리스트 조회 시 information_schema.views
select * from
	information_schema.views;

-- employee, department, unit 테이블을 조인한 뷰 생성 
-- 뷰 이름: view_emp_dept_unit
create view view_emp_dept_unit
as
select e.emp_id, e.emp_name, e.hire_date,d.dept_id,d.dept_name,u.unit_name
	from employee e, department d, unit u
    where e.dept_id = d.dept_id and d.unit_id = u.unit_id
    order by e.emp_id asc;
    
select *
	from information_schema.views
    where table_schema = 'hrdb2019'; -- 만든 뷰 확인 

select * from view_emp_dept_unit
	where dept_id='sys'; -- 만들어진 뷰로 필터

drop view view_emp_dept_unit; -- view 삭제

-- 2013~2015 연도별, 부서들의 연봉 합계가 가장 높은 부서들만 조회
-- view 생성 : view_sum_salary
create view view_sum_salary
as
select year, dept_id, salary
	from (select  row_number() over(order by sum(salary) desc) as no,
				left(hire_date,4) as year,
				dept_id,
				sum(salary) as salary
			from employee
			where left(hire_date,4) ='2013'
			group by year, dept_id) t1
	where no = 1
union 
select year, dept_id, salary
	from (select  row_number() over(order by sum(salary) desc) as no,
				left(hire_date,4) as year,
				dept_id,
				sum(salary) as salary
			from employee
			where left(hire_date,4) ='2014'
			group by year, dept_id) t1
	where no = 1
union
select year, dept_id, salary
	from (select  row_number() over(order by sum(salary) desc) as no,
				left(hire_date,4) as year,
				dept_id,
				sum(salary) as salary
			from employee
			where left(hire_date,4) ='2015'
			group by year, dept_id) t1
	where no = 1;
    
select * from information_schema.views where table_schema = 'hrdb2019';

select  concat(year,'년') as year, 
		dept_id, 
        concat(format(salary,0),' 만원') as salary
	from view_sum_salary;


-- 매니저(홍길동, 오감자, 정주고)에 따라 관리하는 모든 사원들의
-- 사원번호, 사원명, 입사일, 급여, 부서아이디, 부서명을 조회하는 서브쿼리 생성 후 뷰로 저장 
-- view 이름 : view_emp_mgr
create view view_emp_mgr
as
select  e.emp_id as mgr_id,
		e.emp_name as mgr_name,
        m.emp_id,
        m.emp_name,
        m.dept_id,
        d.dept_name
	from emp e, emp m, department d
    where e.emp_id = m.mgr and m.dept_id = d.dept_id
    order by e.emp_id;

select * from information_schema.views
	where table_schema='hrdb2019';

select * from view_emp_mgr;
-- 홍길동 매니저가 관리하는 사원들 조회 
select  row_number() over(order by mgr_id) as no,
		emp_id, emp_name, dept_id, dept_name
	from view_emp_mgr where mgr_name='홍길동';
-- 정주고 매니저가 관리하는 사원들 조회
select  row_number() over(order by mgr_id) as no,
		emp_id, emp_name, dept_id, dept_name
	from view_emp_mgr where mgr_name='정주고';
-- 오감자 매니저가 관리하는 사원들 조회
select  row_number() over(order by mgr_id) as no,
		emp_id, emp_name, dept_id, dept_name
	from view_emp_mgr where mgr_name='오감자';

-- [전체 사원의 휴가일수 조회 : 휴가를 사용한 사원정보 + 사용하지 않은 사원]
-- 사원별 휴가결제 횟수, 휴가전체사용일수휴를 그룹핑하여,
-- 사원아이디, 사원명, 입사일, 연봉, 휴가결제 횟수, 휴가전체사용일수, 부서아이디, 부서명, 소속본부를 조회해주세요.
-- 단, 휴가를 사용하지 않은 사원의 휴가결제횟수, 휴가전체사용일수는 0값으로 할당 
-- view 이름 : view_emp_vacation

create view view_emp_vacation
as
select e.emp_id, e.emp_name, e.hire_date, e.salary, v.count, v.vcount, d.dept_id, d.dept_name, u.unit_name
	from employee e left outer join
		(select  emp_id, 
				count(emp_id) as count, 
				sum(duration) as vcount
			from vacation
			group by emp_id) v on e.emp_id = v.emp_id    
	inner join department d on e.dept_id = d.dept_id
    left outer join unit u on d.unit_id = u.unit_id
    order by e.emp_id;

select * from information_schema.views
	where table_schema = 'hrdb2019';
-- 홍길동 휴가 사용일수 밍 정보 조회
select * from view_emp_vacation where emp_name='홍길동';


show tables;






