show databases;
use myshop2019;
select database();
show tables;


/*
	실습 데이터베이스 연결 : myshop2019
	실습 내용 - 기본적인 데이터 조회 
*/
-- Q01) customer 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
-- Q02) employee 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
-- Q03) product 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
-- Q04) order_header 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
-- Q05) order_detail 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
-- Q06) 모든 고객의 아이디, 이름, 지역, 성별, 이메일, 전화번호를 조회하세요. customer_id , customer_name , gender , phone , email, city  
-- Q07) 모든 직원의 이름, 사원번호, 성별, 입사일, 전화번호를 조회하세요.
-- Q08) 이름이 '홍길동'인 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q09) 여자 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q10) '울산' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.


-- Q11) 포인트가 500,000 이상인 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q12) 이름에 공백이 들어간 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q13) 전화번호가 010으로 시작하지 않는 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요. left(phone,3) != '010'(속도가 더 빠름) | phone not like '010%'
-- Q14) 포인트가 500,000 이상 '서울' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q15) 포인트가 500,000 이상인 '서울' 이외 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q16) 포인트가 400,000 이상인 '서울' 지역 남자 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q17) '강릉' 또는 '원주' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q18) '서울' 또는 '부산' 또는 '제주' 또는 '인천' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q19) 포인트가 400,000 이상, 500,000 이하인 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q20) 1990년에 출생한 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
-- Q21) 1990년에 출생한 여자 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
-- Q22) 1990년에 출생한 '대구' 또는 '경주' 지역 남자 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
-- Q23) 1990년에 출생한 남자 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
--      단, 홍길동(gildong) 형태로 이름과 아이디를 묶어서 조회하세요.
-- Q24) 근무중인 직원의 이름, 사원번호, 성별, 전화번호, 입사일를 조회하세요.
-- Q25) 근무중인 남자 직원의 이름, 사원번호, 성별, 전화번호, 입사일를 조회하세요.
-- Q26) 퇴사한 직원의 이름, 사원번호, 성별, 전화번호, 입사일, 퇴사일를 조회하세요.

-- Q28) 2019-01-01 ~ 2019-01-07 기간 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 소계, 배송비, 전체금액을 조회하세요.
--      단, 고객아이디를 기준으로 오름차순 정렬해서 조회하세요.
    
-- Q29) 2019-01-01 ~ 2019-01-07 기간 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 소계, 배송비, 전체금액을 조회하세요.
--      단, 전체금액을 기준으로 내림차순 정렬해서 조회하세요.

-- Q30) 2019-01-01 ~ 2019-01-07 기간 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 소계, 배송비, 전체금액을 조회하세요.
--      단, 사원번호를 기준으로 오름차순, 같은 사원번호는 주문일시를 기준으로 내림차순 정렬해서 조회하세요.

/**
	그룹함수
**/
/** customer 테이블 사용 **/
-- Q01) 고객의 포인트 합을 조회하세요.

-- Q02) '서울' 지역 고객의 포인트 합을 조회하세요.

-- Q03) '서울' 지역 고객의 수를 조회하세요.

-- Q04) '서울' 지역 고객의 포인트 합과 평균을 조회하세요.
     
-- Q05) '서울' 지역 고객의 포인트 합, 평균, 최댓값, 최솟값을 조회하세요.

-- Q06) 남녀별 고객의 수를 조회하세요.

-- Q07) 지역별 고객의 수를 조회하세요.
--      단, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.

 
-- Q08) 지역별 고객의 수를 조회하세요.
--      단, 고객의 수가 10명 이상인 행만 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
   
    
-- Q09) 남녀별 포인트 합을 조회하세요.
/*
	효율성면에서는 좋지 않음
    case 컬럼명
		when 'f' then '여자'
        else '남자'
    end
*/
   select case gender
		  when 'f' then '여자'
		  else '남자'
          end as gender,
          count(gender) count,
          sum(point) sum
          from customer
          group by gender;
-- Q10) 지역별 포인트 합을 조회하세요.
--      단, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
    
-- Q11) 지역별 포인트 합을 조회하세요.
--      단, 포인트 합이 1,000,000 이상인 행만 포인트 합을 기준으로 내림차순 정렬해서 조회하세요.

      
-- Q12) 지역별 포인트 합을 조회하세요.
--      단, 포인트 합을 기준으로 내림차순 정렬해서 조회하세요.
   

-- Q13) 지역별 고객의 수, 포인트 합을 조회하세요.
--      단, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.


-- Q14) 지역별 포인트 합, 포인트 평균을 조회하세요.
--      단, 포인트가 NULL이 아닌 고객을 대상으로 하며, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
--      null인 사람들이 있는지 먼저 확인 :: select count(*) from customer where point is null;

-- Q15) '서울', '부산', '대구' 지역 고객의 지역별, 남녀별 포인트 합과 평균을 조회하세요.
--      단, 지역 이름을 기준으로 오름차순, 같은 지역은 성별을 기준으로 오름차순 정렬해서 조회하세요.
select  city, gender, sum(point) sum, avg(point) avg 
	from customer 
    where city in ('서울','부산','대구') 
    group by city, gender 
    order by city asc, gender asc;

/** order_header 테이블 사용 **/
    
-- Q16) 2019년 1월 주문에 대하여 고객아이디별 전체금액 합을 조회하세요.


-- Q17) 주문연도별 전체금액 합계를 조회하세요.
desc order_header;
-- Q18) 2019.01 ~ 2019.06 기간 주문에 대하여 주문연도별, 주문월별 전체금액 합을 조회하세요.
select  substring(order_date,1,4) year , 
		substring(order_date,6,2) month, 
        sum(total_due) sum 
        from order_header 
        where left(order_date,7) between '2019-01' and '2019-06' 
        group by substring(order_date,1,4) , substring(order_date,6,2);
-- Q19) 2018.01 ~ 2018.06 기간 주문에 대하여 주문연도별, 주문월별 전체금액 합과 평균을 조회하세요.
select  substring(order_date,1,4) year,
		substring(order_date,6,2) month,
        total_due
	from order_header;

select  if(grouping(year), '년도별 총 합계', ifnull(year,'-')) as year,
		if(grouping(month), '월별 총 합계', ifnull(month,'-')) as month,
        count(*) count,
        sum(total_due) sum,
        avg(total_due) avg
	from (select  substring(order_date,1,4) year,
				  substring(order_date,6,2) month,
				  total_due
			from order_header) t
	group by year, month with rollup;

-- Q20) 주문연도별, 주문월별 전체금액 합과 평균을 조회하고, rollup 함수를 이용하여 소계와 총계를 출력해주세요.


/**
	테이블 조인
*/

-- Q01) 전체금액이 8,500,000 이상인 주문의 주문번호, 고객아이디, 사원번호, 주문수량, 주문일시, 전체금액을 조회하세요.
-- order _header : order_id, , customer_id, employee_id, order_date, total_due
select count(*) from order_header; -- 903
select count(*) from order_header where total_due >= 8500000; -- 7
select order_id, customer_id, employee_id, order_date, total_due
	from order_header
    where total_due >= 8500000
    order by total_due desc;

	
-- Q02) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 고객이름도 같이 조회되게 수정하세요.
select oh.order_id, oh.customer_id, c.customer_name, oh.employee_id, oh.order_date, oh.total_due
	from order_header oh, customer c
    where oh.customer_id = c.customer_id
		  and oh.total_due >= 8500000
    order by total_due desc;

-- Q03) Q01 쿼리를 복사해 붙여 넣은 후 직원이름도 같이 조회되게 수정하세요.
select oh.order_id, oh.customer_id, c.customer_name, oh.employee_id,e.employee_name, oh.order_date, oh.total_due
	from order_header oh, customer c, employee e
    where oh.customer_id = c.customer_id and oh.employee_id = e.employee_id
		  and oh.total_due >= 8500000
    order by total_due desc;
    
-- Q04) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 고객이름, 직원이름도 같이 조회되게 수정하세요.
-- Q05) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 전체금액이 8,500,000 이상인 '서울' 지역 고객만 조회되게 수정하세요.
select oh.order_id, oh.customer_id, c.customer_name, c.city, oh.employee_id,e.employee_name, oh.order_date, oh.total_due
	from order_header oh, customer c, employee e
    where oh.customer_id = c.customer_id 
      and oh.employee_id = e.employee_id
		  and oh.total_due >= 8500000
          and c.city ='서울'
    order by total_due desc;
-- ansi sql로 변경
select oh.order_id, oh.customer_id, c.customer_name, c.city, oh.employee_id,e.employee_name, oh.order_date, oh.total_due
	from order_header oh inner join customer c 
                         inner join employee e
		on oh.customer_id = c.customer_id 
		and oh.employee_id = e.employee_id
    where oh.total_due >= 8500000
          and c.city ='서울'
    order by total_due desc;

-- ansi sql로 변경(mssql)
select oh.order_id, oh.customer_id, c.customer_name, c.city, oh.employee_id,e.employee_name, oh.order_date, oh.total_due
	from order_header oh inner join customer c on oh.customer_id = c.customer_id 
                         inner join employee e on oh.employee_id = e.employee_id  -- outer join 일 경우 이렇게 분리해서 사용한다.
    where oh.total_due >= 8500000
          and c.city ='서울'
    order by total_due desc;
    
-- Q06) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 전체금액이 8,500,000 이상인 '서울' 지역 '남자' 고객만 조회되게 수정하세요.
select oh.order_id, oh.customer_id, c.customer_name, c.gender, c.city, oh.employee_id,e.employee_name, oh.order_date, oh.total_due
	from order_header oh, customer c, employee e
    where oh.customer_id = c.customer_id 
      and oh.employee_id = e.employee_id
		  and oh.total_due >= 8500000
          and c.city ='서울'
          and c.gender='M'
    order by total_due desc;
-- Q07) 주문수량이 30개 이상인 주문의 주문번호, 상품코드, 주문수량, 단가, 지불금액을 조회하세요.
desc order_detail;
-- 테이블 컬럼명 변경
alter table order_detail 
	rename column drder_detail_id to order_detail_id;
    
-- ORACLE 방식
select order_id, order_detail_id, product_id, order_qty, unit_price, line_total
	from order_detail
    where order_qty >= 30;

-- Q08) 위에서 작성한 쿼리문을 복사해서 붙여 넣은 후 상품이름도 같이 조회되도록 수정하세요.
-- ORACLE 방식
select od.order_id, od.order_detail_id, od.product_id, od.order_qty, od.unit_price, od.line_total, p.product_name
	from order_detail od , product p
    where od.product_id = p.product_id
		and order_qty >= 30;
        
-- ANSI SQL
select od.order_id, od.order_detail_id, od.product_id, od.order_qty, od.unit_price, od.line_total, p.product_name
	from order_detail od inner join product p on od.product_id = p.product_id
    and order_qty >= 30;
-- Q09) 상품코드, 상품이름, 소분류아이디를 조회하세요.
select count(*) from product; -- 41
select product_id, product_name ,sub_category_id
	from product;
-- Q10) 위에서 작성한 쿼리문을 복사해서 붙여 넣은 후 소분류이름, 대분류아이디가 조회되게 수정하세요.
desc sub_category;
select p.product_id, p.product_name , p.sub_category_id, s.sub_category_name, s.category_id
	from product p, sub_category s
    where p.sub_category_id = s.sub_category_id;
-- Q10) 위에서 작성한 쿼리문을 복사해서 붙여 넣은 후 대분류이름 추가해서 조회.   
select p.product_id, p.product_name , p.sub_category_id, s.sub_category_name, s.category_id, c.category_name
	from product p, sub_category s, category c
    where p.sub_category_id = s.sub_category_id and s.category_id = c.category_id;
-- ansi aql
select p.product_id, p.product_name , p.sub_category_id, s.sub_category_name, s.category_id, c.category_name
	from product p inner join sub_category s on p.sub_category_id = s.sub_category_id
		           inner join category c     on s.category_id = c.category_id;
                   
-- 대분류, 소분류별, 상품갯수, 상품가격 합계, 상품가격 평균
/* select 대분류, 소분류 별 상품갯수, 지불금액, 합계, 지불금액 평균
	from (상품, 소분류, 대분류 테이블 조인 결과) t1
    group by 대분류, 소분류 */
select category_name, sub_category_name, count(product_id)
	from (select p.product_id, p.product_name , p.sub_category_id, s.sub_category_name, s.category_id, c.category_name
			from product p, sub_category s, category c
			where p.sub_category_id = s.sub_category_id and s.category_id = c.category_id) t1
	group by category_name, sub_category_name;


select p.product_id, p.product_name , p.sub_category_id, s.sub_category_name, s.category_id, c.category_name, od.unit_price
			from product p, sub_category s, category c, order_detail od
			where p.sub_category_id = s.sub_category_id 
				  and s.category_id = c.category_id
				  and p.product_id = od.product_id;
                  
select category_name, sub_category_name, count(product_id), sum(unit_price), avg(unit_price)
	from (select  distinct p.product_id, p.product_name , p.sub_category_id, s.sub_category_name, s.category_id, c.category_name, od.unit_price
			from product p, sub_category s, category c, order_detail od
			where p.sub_category_id = s.sub_category_id 
				  and s.category_id = c.category_id
				  and p.product_id = od.product_id) t1
	group by category_name, sub_category_name;
-- Q11) 다정한 사원이 2019년에 주문한 상품명을 모두 출력해주세요.
select employee_id
	from employee
    where employee_name='다정한';
select e.employee_name, oh.order_date, p.product_name, oh.order_id, od.order_detail_id
	from employee e , order_header oh,  order_detail od, product p
    where e.employee_id = oh.employee_id
		and oh.order_id = od.order_id
        and od.product_id = p.product_id
        and e.employee_name='다정한'
        and left(oh.order_date,4) = '2019';

-- 2019년도 주문 아이디별 다정한 사원의 주문건수 조회
select order_id, count(order_id)
	from (select e.employee_name, oh.order_date, p.product_name, oh.order_id, od.order_detail_id
			from employee e , order_header oh,  order_detail od, product p
			where e.employee_id = oh.employee_id
				and oh.order_id = od.order_id
				and od.product_id = p.product_id
				and e.employee_name='다정한'
                and left(order_date,4) = '2019') t1
	group by order_id;

-- 주문년도별, 주문 월별, 아이디별 다정한 사원의 주문건수 조회
-- 2019년도 (having)
 select left(order_date,4) as year,substring(order_date, 6,2) as month, count(order_id)
	from (select e.employee_name, oh.order_date, p.product_name, oh.order_id, od.order_detail_id
			from employee e , order_header oh,  order_detail od, product p
			where e.employee_id = oh.employee_id
				and oh.order_id = od.order_id
				and od.product_id = p.product_id
				and e.employee_name='다정한') t1
	group by left(order_date,4) , substring(order_date, 6,2)
    having year = '2019';       
   select * from product;     
-- Q12) 청소기를 구입한 고객아이디, 사원번호, 주문번호, 주문일시를 조회하세요.
select row_number() over(order by oh.order_date desc) as no,
		oh.customer_id, oh.employee_id, oh.order_id, oh.order_date, p.product_name
	from order_header oh, order_detail od, product p
    where oh.order_id = od.order_id and od.product_id = p.product_id
    and p.product_name like '%청소기%';

/**
	서브쿼리
*/
-- Q13) 'mtkim', 'soyoukim' 고객 주문의 주문번호, 고객아이디, 주문일시, 전체금액을 조회하세요.   
select order_id, customer_id, order_date,total_due
	from order_header
    where customer_id in ('mtkim', 'soyoukim');
-- 수정 : 김마트, 김소유 고객의 주문번호, 고객아이디, 주문일시, 전체금액을 조회하세요. 
select customer_id
	from customer
    where customer_name in ('김마트', '김소유');
    
select order_id, customer_id, order_date,total_due
	from order_header
    where customer_id in (select customer_id -- 서브 쿼리가 먼저 실행 됨.
							from customer
							where customer_name in ('김마트', '김소유'));

-- Q14) '전주' 지역 고객의 아이디, 고객명, 고객의 생일을 조회하세요.    
select customer_id, customer_name, birth_date
	from customer
    where city = '전주';
    
-- '전주' 지역의 고객의 주문번호를 조회
select *
	from order_header
    where customer_id in (select customer_id
								from customer
								where city='전주');

-- Q15) 위 두 쿼리문을 조합해서 하위 쿼리를 사용해 '전주' 지역 고객 주문의 주문번호, 고객아이디, 주문일시, 전체금액을 조회하세요.
-- 만약 고객명을 함께 출력하고 싶다면, order_header & customer 조인해야 됨.
select order_id,customer_id, order_date, total_due
	from order_header
    where customer_id in (select customer_id
								from customer
								where city='전주');
-- Q16) 고객의 포인트 최댓값을 조회하세요.
select max(point) from customer;

-- Q17) 하위 쿼리를 사용해 가장 포인트가 많은 고객의 이름, 아이디, 등록일, 포인트를 조회하세요.
select customer_name, customer_id, register_date, point
	from customer
    where point = (select max(point) from customer);
-- Q18) 하위 쿼리를 사용해 홍길동(gdhong) 고객보다 포인트가 많은 고객 이름, 아이디, 등록일, 포인트를 조회하세요.
select point
	from customer
    where customer_name='홍길동';
select customer_id, customer_name, register_date, point
	from customer
    where point > (select point
						from customer
						where customer_name='홍길동');

-- Q19) 하위 쿼리를 사용해 홍길동(gdhong) 고객과 같은 지역의 고객 이름, 아이디, 지역, 등록일, 포인트를 조회하세요.
--      단, 고객 이름을 기준으로 오름차순 정렬해서 조회하세요.
desc customer;
select customer_name, customer_id, city, register_date, point
	from customer
    where city = (select city from customer where customer_name='홍길동') 
    order by customer_name asc;
    
-- Q20) 하위 쿼리를 사용해 홍길동(gdhong) 고객보다 포인트가 많은 고객 이름, 아이디, 등록일, 포인트를 조회하고, 행번호를 추가하여 출력하세요.
select 	row_number() over(order by point desc) as no,
		customer_name, customer_id, register_date, point
	from customer
    where point > (select point from customer where customer_name='홍길동') ;
 
-- 2016~ 2019년도 까지 주문한 고객의 아이디, 고객명, 주문번호, 주문총금액을 조회
show tables;    
select count(*) from order_header; -- 903 
select count(*) from order_header2016; -- 596
select count(*) from order_header2017; -- 561

select c.customer_name, t1.customer_id, t1.order_id, t1.total_due
	from customer c, 
		 (select * from order_header
			union all
			select * from order_header2016
			union all
			select * from order_header2017) t1
	where c.customer_id = t1.customer_id;

-- 년도별 주문건수, 총판매 합계, 년도기준 오름차순 정렬
-- 년도:year, 건수: count, 합계:sum
-- '년도',    '건'         ,3자리 구분 '만원'
select  concat(left(order_date, 4),'년도') year, concat(count(order_id),'건') count, concat(format(sum(total_due),0),'만원') sum
	from customer c, 
		 (select * from order_header
			union all
			select * from order_header2016
			union all
			select * from order_header2017) t1
	where c.customer_id = t1.customer_id
    group by year;

-- view를 이용하여 order_header_total (2016~2019)
select *
	from information_schema.views
    where table_schema='myshop2019';

create view order_header_total
as
select * from order_header
			union all
			select * from order_header2016
			union all
			select * from order_header2017;

-- 잘 만들었는지 확인
select  concat(left(order_date, 4),'년도') year, concat(count(order_id),'건') count, concat(format(sum(total_due),0),'만원') sum
	from customer c, order_header_total t1
	where c.customer_id = t1.customer_id
    group by year;

-- 2016~ 2019 : order_header_total (view)
-- 2016~ 2019 detail : order_detail_total (view)
select count(*) from order_detail; -- 2425
select count(*) from order_detail2016; -- 1582
select count(*) from order_detail2017; -- 1479

create view order_detail_total
as
select * from order_detail
union all
select * from order_detail2016
union all
select * from order_detail2017;

select * from information_schema.views
	where table_schema = 'myshop2019';
    
select count(*) from order_detail_total;

-- view 적용.
 select left(order_date,4) as year,substring(order_date, 6,2) as month, count(order_id)
	from (select e.employee_name, oh.order_date, p.product_name, oh.order_id, od.order_detail_id
			from employee e , order_header_total oh,  order_detail_total od, product p 
			where e.employee_id = oh.employee_id
				and oh.order_id = od.order_id
				and od.product_id = p.product_id
				) t1
	group by left(order_date,4) , substring(order_date, 6,2)
    order by year;       

-- 카테고리 활용(form과 연동됨) : 서브쿼리 

-- '대분류'로 가전제품 선택 후 소분류 값 가져오기
select category_id from category where category_name='가전제품';

select sub_category_name
	from sub_category
    where category_id in (select category_id from category where category_name='가전제품');



-- 소분류에서 '대형'을 선택 한 후 상품명 가져오기
select sub_category_id from sub_category where sub_category_name='대형';

select product_name 
	from product 
    where sub_category_id=(select sub_category_id from sub_category where sub_category_name='대형');









