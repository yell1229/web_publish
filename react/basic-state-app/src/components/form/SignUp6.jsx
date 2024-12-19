import React,{useState, useRef} from 'react';
import {validateSignup} from '../../apis/validate.js';
import './Cgv.css';

export default function SignUp5() {

    return (
        <div className="content">
            <div className="join-form center-layout">
                <h1 className="center-title">회원가입</h1>
                <form>
                    <ul>
                        <li>
                            <label for="" ><b>아이디</b></label>
                            <span></span>
                            <div>
                                <input type="text" name="id" placeholder="아이디 입력(6~20자)" />
                                <button>중복확인</button>       
                            </div>
                        </li>
                        <li>
                            <label for=""><b>비밀번호</b></label>
                            <span>12자 이내의 비밀번호를 입력해주세요</span>
                            <div>
                                <input type="password" name="pwd" placeholder="비밀번호 입력(문자,숫자,특수문자 포함 6~12자)" />
                            </div>
                        </li>
                        <li>
                            <label for=""><b>비밀번호 확인</b></label>
                            <span>비밀번호가 일치하지 않습니다</span>
                            <div>
                                <input type="password" name="cpwd" placeholder="비밀번호 재입력" />
                            </div>
                        </li>
                        <li>
                            <label for=""><b>이름</b></label>
                            <div>
                                <input type="text" name="name" placeholder="이름을 입력해주세요" />
                            </div>
                        </li>
                        <li>
                            <label for=""><b>전화번호</b></label>
                            <div>
                                <input type="text" name="phone" placeholder="휴대폰 번호 입력('-' 포함)" />
                            </div>
                        </li>
                        <li>
                            <label for=""><b>이메일 주소</b></label>
                            <div>
                                <input type="text" name="emailname" placeholder="이메일 주소" />
                                <span>@</span>       
                                <select name="emaildomain">
                                    <option value="default">선택</option>
                                    <option value="naver.com">naver.com</option>
                                    <option value="gmail.com">gmail.com</option>
                                    <option value="daum.net">daum.net</option>
                                </select>
                            </div>
                        </li>
                        <li>
                            <button type="submit">가입하기</button>
                            <button type="reset">가입취소</button>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    );
}
