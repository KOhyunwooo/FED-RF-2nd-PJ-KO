import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'jquery.cookie';

//npm i jquery.cookie 해야함

function CookieIntro(props) {
  // 팝업의 표시 여부를 관리하는 상태
  const [isVisible, setIsVisible] = useState(false);
  // "다시 보지 않기" 체크박스의 상태를 관리
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 실행되는 효과
    // 'popupSeen' 쿠키가 없으면 팝업을 표시
    if ($.cookie('popupSeen') !== 'true') {
      setIsVisible(true);
    }
  }, []); // 빈 배열을 전달하여 컴포넌트 마운트 시에만 실행

  // 팝업 닫기 버튼 클릭 시 실행되는 함수
  const handleClose = () => {
    setIsVisible(false); // 팝업 숨기기
    if (dontShowAgain) {
      // "다시 보지 않기"가 체크되었다면 1시간 동안 유효한 쿠키 설정
      $.cookie('popupSeen', 'true', { expires: 1/24 });
    }
  };

  // PDF 파일 열기 함수
  const openPDF = () => {
    window.open(process.env.PUBLIC_URL + '/images/aaa.pdf', '_blank');
  };

  // 팝업이 보이지 않아야 할 때는 null 반환 (렌더링하지 않음)
  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '20px',
      background: '#f0f0f0',
      border: '1px solid #ccc',
      zIndex: 1000
    }}>
      <h2>팝업 내용</h2>
      {/* 클릭 시 PDF 파일을 여는 링크 */}
      <p onClick={openPDF} style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>
        여기를 클릭하여 PDF 파일을 열어보세요.
      </p>
      <label>
        <input
          type="checkbox"
          checked={dontShowAgain}
          onChange={(e) => setDontShowAgain(e.target.checked)}
        /> 1시간 동안 다시 보지 않기
      </label>
      <br /><br />
      <button onClick={handleClose}>닫기</button>
    </div>
  );
}

export default CookieIntro;