/*
	shoppy 테이블 정의
*/ 
-- shoppy_member 테이블 생성
use hrdb2019;
select database();
show tables;

-- shoppy로 시작하는 모든 테이블 조회 
select * from information_schema.tables
	where table_name like 'shoppy%';
    
create table shoppy_member(
	id 			varchar(30)		 	primary key,
    pwd 		varchar(50)			not null,
    name		varchar(10)			not null,
    phone		char(13) 			not null,
    emailname	varchar(20) 		not null,
    emaildomain	varchar(20) 		not null,
    zipcode		char(5),
    address		varchar(80),
    mdate		datetime
);

-- 정보확인
desc shoppy_member;
select * from shoppy_member;

-- 'test' 중복체크

-- 없는 경우 데이터가 없다.(null 도 없다)
select id from shoppy_member where id='hongs';

-- 중복체크 : 결과를 count 함수로 반환(0 or 1)
select count(id) as result from shoppy_member where id='hongs';  -- {result : 0}

























