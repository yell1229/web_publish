// signup 컴포넌트 초기화 작업
export function initSignup () {


// 함수는 객체 .use를 붙이면 리액트가 관리하는 함수... 리액트가 관리하는 메모리 영역에 만든다(커스터머훅 use를 붙이면된다)
    return {names, placeholders, labels, initFormData,} // 여러개는 객체로 넘긴다.
}


export function useInitSignupRefs(){ // 리액트가 관리하는 메모리 영역에 저장된다. 'use~', 일반 메모리와 서로 참조는 불가능하다.

}