show databases;
select hrdb2019;
show tables;
select 
	row_number() over(order by emp_id) as no,
	emp_id as id,
    emp_name as name,
    gender,
    salary,
    concat(format(ifnull(salary ,0) ,0), '원') as osalary

from employee;

show databases;
select hrdb2019;

create table login(
	pic 	int 			primary key,
    id		varchar(20) 	not null,
    pwd 	varchar(15) 	not null
);

desc login;
insert into login(pic , id ,pwd)
	values(1,'홍길동','1234');
    
select * from login;

select count(*) 
	from login
    where id='홍길동' and pwd='123';