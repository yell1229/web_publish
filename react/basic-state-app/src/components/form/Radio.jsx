import React, { useState } from 'react';

export default function Radio() {
  const [formData, setFormData] = useState({
    gender: '',  // 성별 값
  });
  const [errorMsg, setErrorMsg] = useState({
    gender: '',  // 성별 유효성 검사 메시지
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleValidator = () => {
    let isValid = true;
    let newErrorMsg = { ...errorMsg };

    // 성별 유효성 검사
    if (formData.gender === '') {
      newErrorMsg.gender = '성별을 선택해주세요';
      isValid = false;
    } else {
      newErrorMsg.gender = ''; // 성별이 선택되면 에러 메시지 초기화
    }

    setErrorMsg(newErrorMsg);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidator()) {
      console.log('폼이 제출되었습니다:', formData);
    }
  };

  return (
    <div>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label><b>성별</b></label>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="m"
                checked={formData.gender === 'm'}
                onChange={handleChange}
              />
              남자
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="f"
                checked={formData.gender === 'f'}
                onChange={handleChange}
              />
              여자
            </label>
          </div>
          {errorMsg.gender && <span style={{ color: 'red' }}>{errorMsg.gender}</span>}
        </div>

        <button type="submit">가입하기</button>
      </form>
    </div>
  );
}
