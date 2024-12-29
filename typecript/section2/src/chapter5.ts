//enum type : 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입.

enum Role {
    ADMIN,
    USER=10,
    GUEST 
}

const user1 = {
    name:'이정환',
    role:Role.ADMIN // 관리자
}
const user2 = {
    name:'이정환',
    role:Role.USER // 사용자
}
const user3 = {
    name:'이정환',
    role:Role.GUEST // 게스트
}
console.log(user1, user2, user3);
