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

select * from shoppy_member;

-- login
select count(*) as result_rows
	from shoppy_member
    where id='hongs' and pwd='12345';

use hrdb2019;
select * from information_schema.tables
	where table_name like 'shoppy%';
    
-- shoppy_product
create table shoppy_product(
	pid		int 	primary key 	auto_increment,
    pname 	varchar(50) 	not null ,
    price 	int ,
    description 	varchar(200) ,
    upload_file		varchar(100) ,
    source_file 	varchar(100) ,
    pdate 			datetime
);

desc shoppy_product;
select * from shoppy_product;

-- 입력 데이터 삭제
set sql_safe_updates =0; -- 해제:0 , 설정:1
delete from shoppy_product;
commit; -- 실제 bd에 있는 코드들이 삭제됨.
select * from shoppy_product; -- 삭제 확인

drop table shoppy_product;

-- mysql에는 json 사용가능
create table shoppy_product(
	pid		int 	primary key 	auto_increment,
    pname 	varchar(50) 	not null ,
    price 	int ,
    description 	varchar(200) ,
    upload_file		json ,
    source_file 	json ,
    pdate 			datetime
);

--
select 
		pid,
		pname as name,
		price,
		description as info,
		concat('http://localhost:9000/', upload_file->>'$[0]') as image, -- json 타입으로 저장되었을 때 배열을 가져올 수 있다.
		source_file,
		pdate
from shoppy_product;

desc shoppy_product;

select  pid,
		pname,
        price,
        description,
        upload_file as uploadFile,
        source_file as sourceFile,
        pdate,
        concat('http://localhost:9000/',upload_file->>'$[0]') as image,
        -- json_array(0, 1, 2 번지의 이미지를 가져와서 배열객체로 생성하는 함수) as imgList
        json_array(
			concat('http://localhost:9000/',upload_file->>'$[0]'),
            concat('http://localhost:9000/',upload_file->>'$[1]'),
            concat('http://localhost:9000/',upload_file->>'$[2]')
        ) as imgList,
        json_arrayagg(
			concat('http://localhost:9000/',jt.filename)
        ) as detailImgList
	from shoppy_product , 
        json_table(shoppy_product.upload_file, '$[*]'
         columns(filename varchar(100) path '$')) as jt
    where pid = 4
    group by pid;

-- json_table(테이블.컬럼명, 매핑데이터 colimns(멀럼 생성 후 리턴)) as jt
        json_table(shoppy_product.upload_file, '$[*]' -- upload_file 배열을 가져와서 -- 전체를 다 돌린다.
         colimns(filename varchar(100) path '$') as jt; -- $기호 자리에 데이터를 담는다.

select  pid,
                        pname as name,
                        price,
                        description as info,
                        upload_file as uploadFile,
                        source_file as sourceFile,
                        pdate,
                        concat('http://localhost:9000/',upload_file->>'$[0]') as image,
                        json_array(
                            concat('http://localhost:9000/',upload_file->>'$[0]'),
                            concat('http://localhost:9000/',upload_file->>'$[1]'),
                            concat('http://localhost:9000/',upload_file->>'$[2]')
                        ) as imgList,
                         json_arrayagg(
                                concat('http://localhost:9000/',jt.filename)
                            ) as detailImgList
                from shoppy_product , 
                    json_table(shoppy_product.upload_file, '$[*]'
                                columns(filename varchar(100) path '$')) as jt
                where pid = 3
                group by pid;

-- 컬리 테이블
create table kurly_product(
	pid				int 	primary key 	auto_increment,
    name 			varchar(50) 	not null,
    brand 			varchar(30) 	not null,
    description 	varchar(100) ,
    originalPrice 	int,
	discountRate 	varchar(3) ,
	discountedPrice int ,
	specialPrice 	varchar(10),
	delivery 		json,
	seller 			varchar(10) ,
	packaging 		varchar(10),
	first_image		varchar(100)
);

