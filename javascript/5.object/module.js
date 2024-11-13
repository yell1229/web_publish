// CRUD( 넣고, 읽고, 업데이트, 삭제) 데이터베이스에서 나온 용어.
// C(Create) , R(Read) , U(Update) , D(Delete) : DB관리
// set(함수명은 맞지 않으니 값으로)::  setValue() /  getValue() / updateValue() / deleteValue() or removeValue()
// person 객체를 CRUD로 관리하는 함수를 정의

// 화살표 함수 표현식
// const 함수명 = (파라미터) => { 실행문 };
export const setValue = (object,newkey,value) => object[newkey] = value;
export const getValue = (object,key) => object[key];
export const updateValue = (object,key,newvalue) => object[key] = newvalue;
export const deleteValue = (object,key) => delete object[key];