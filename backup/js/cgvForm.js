
// 로그인 폼 체크
function loginFormCheck(){
    let id = document.querySelector('#id');
    let pwd = document.querySelector('#pwd');
    
    if(id.value === ''){
        // alert('아이디를 입력해주세요');
        id.nextElementSibling.textContent = id.getAttribute('placeholder');
        id.nextElementSibling.style.fontSize = '12px';
        id.nextElementSibling.style.color = 'red';
        id.focus();
    }else if(pwd.value === ''){
        // alert('비밀번호를 입력해주세요');
        pwd.nextElementSibling.textContent = pwd.getAttribute('placeholder');
        pwd.nextElementSibling.style.fontSize = '12px';
        pwd.nextElementSibling.style.color = 'red';
        pwd.focus();
    }else{
        // 아이디 비교 로직 또는 함수 호출
        alert('입력완료');
    }
}