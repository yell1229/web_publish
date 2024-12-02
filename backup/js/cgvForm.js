
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

// input 텍스트 변경을 실시간으로 체크  id만 체크함.
// function handleChange(event){
//     let id = document.querySelector('#id');
//     const value = event.target.value.trim();
//     (value.length !== 0) ? id.nextElementSibling.style.color = 'green' : id.nextElementSibling.style.color = 'red';
// }

// input 텍스트 변경을 실시간으로 체크 V2
function handleChange(event){
    let target = event.target.id;
    let targetName = `#${target}`;
    let id = document.querySelector(targetName);  
    const value =id.value.trim();
    (value.length !== 0) ? id.nextElementSibling.style.color = 'green' : id.nextElementSibling.style.color = 'red';
}

// input 텍스트 변경을 실시간으로 체크 V3
// function handleChange(event){
//     let idMsg = document.querySelector('.error-msg-id');
//     let pwdMsg = document.querySelector('.error-msg-pwd');
    
//     if(event.target.id ==='id'){
//         (event.target.value.trim().length !== 0) ? idMsg.style.color = 'green' : idMsg.style.color = 'red';
//     }else{
//         (event.target.value.trim().length !== 0) ? pwdMsg.style.color = 'green' : pwdMsg.style.color = 'red';
//     }
// }

// 회원가입 폼 체크
function joinFormCheck(){
    const id = document.querySelector('#id');
    const pwd = document.querySelector('#pwd');
    const cpwd = document.querySelector('#cpwd');
    const name = document.querySelector('#name');
    const phone = document.querySelector('#phone');
    const emailname = document.querySelector('#emailname');
    const idCheckResult = document.querySelector('.idCheckResult');

    const idMsg = document.querySelector('#error-msg-id');
    const pwdMsg = document.querySelector('#error-msg-pwd');
    const cpwdMsg = document.querySelector('#error-msg-cpwd');

    if(id.value === ''){
        idMsg.style.display = 'inline-block';
        id.focus();
    }else if(pwd.value === ''){
        pwdMsg.style.display = 'inline-block';
        pwd.focus();
    }else if(cpwd.value === ''){
        cpwdMsg.style.display = 'inline-block';
        cpwd.focus();
    }else if(pwd.value !== cpwd.value){
        cpwdMsg.style.display = 'inline-block';
        cpwdMsg.style.color = 'red';
        cpwdMsg.textContent = '비밀번호가 일치하지 않습니다.';
        cpwd.focus();
    }else if(name.value === ''){
        name.focus();
    }else if(phone.value === ''){
        phone.focus();
    }else if(emailname.value === ''){
        emailname.focus();
    }else if(idCheckResult.value === 'default'){
        alert('아이디 중복체크를 진행해주세요.');
    }else{
        alert('가입 성공!');
    }
}
function handleChangeJoin(event){
    const idMsg = document.querySelector('#error-msg-id');
    const pwdMsg = document.querySelector('#error-msg-pwd');
    const cpwdMsg = document.querySelector('#error-msg-cpwd');
    const name = document.querySelector('#name');

    if(event.target.id === 'id'){
        (event.target.value.trim().length !== 0) ? idMsg.style.color = 'green': idMsg.style.color = 'red' ;
    }else if(event.target.id === 'pwd'){
        (event.target.value.trim().length !== 0) ? pwdMsg.style.color = 'green': pwdMsg.style.color = 'red' ;
    }else if(event.target.id === 'cpwd'){
        (event.target.value.trim().length !== 0) ? cpwdMsg.style.color = 'green': cpwdMsg.style.color = 'red' ;
    }else if(event.target.id === 'name'){
        (event.target.value.trim().length !== 0) ? name.style.boderColor = 'green': name.style.boderColor = 'red' ;
    }
    // switch(event.target.id){
    //     case 'id': (event.target.value.trim().length !== 0) ? idMsg.style.color = 'green': idMsg.style.color = 'red' ; break;
    //     case 'pwd': (event.target.value.trim().length !== 0) ? pwdMsg.style.color = 'green': pwdMsg.style.color = 'red' ; break;
    //     case 'cpwd': (event.target.value.trim().length !== 0) ? cpwdMsg.style.color = 'green': cpwdMsg.style.color = 'red' ; break;
    //     case 'name': (event.target.value.trim().length !== 0) ? name.style.outlineColor = 'green': name.style.boderColor = 'red' ; break;
    // }
}

// id 중복 체크
function idCheck(event){
    const did = 'test';
    const id = document.querySelector('#id');
    const idMsg = document.querySelector('#error-msg-id');

    if(id.value === ''){
        idMsg.style.display = 'inline-block';
        idMsg.style.color = 'red';
        id.focus();
    }else{
        //중복체크
        if(did === id.value.trim()){
            alert('이미 사용중인 아이디입니다. 다시 입력해주세요.');
            id.focus();
        }else{
            alert('사용이 가능한 아이디입니다.');
            document.querySelector('.idCheckResult').value = 'success';
            console.log(document.querySelector('.idCheckResult').value);
            
            event.target.style.backgroundColor = 'gray';
            
        }
    }
}

// 비밀번호 체크
function passwordCheck(){
    const pwd = document.querySelector('#pwd');
    const cpwd = document.querySelector('#cpwd');
    const pwdMsg = document.querySelector('#error-msg-pwd');
    const cpwdMsg = document.querySelector('#error-msg-cpwd');
    if(pwd.value === ''){
        pwdMsg.style.color = 'red';
        pwd.focus();
    }else if(cpwd.value === ''){
        cpwdMsg.style.color = 'red';
        cpwdMsg.focus();
    }else{
        // console.log('패스워드 비교 로직');
        if(pwd.value === cpwd.value){
            alert('패스워드가 동일합니다.');
        }else{
            alert('패스워드가 다릅니다. 다시 입력해주세요.');
            pwd.value = '';
            cpwd.value = '';
            pwdMsg.style.color = 'red';
            cpwdMsg.style.color = 'red';
            pwd.focus();
        }
    }
}















