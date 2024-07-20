import React from "react";
import "../../css/Switch.scss";

// props로 checked (현재 상태)와 onChange (상태 변경 핸들러)를 받음
function Switch({ checked, onChange }) {
    return (
      // 스위치의 전체 컨테이너
      <div className="switch-container">
        {/* 실제 체크박스 input 요소 
            - 시각적으로는 숨겨져 있지만, 접근성을 위해 존재 */}
        <input
          className="switch-checkbox"
          id="switch-new"
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        {/* 시각적인 스위치 레이블
            - htmlFor 속성으로 input과 연결되어 있어 클릭 시 체크박스 상태가 변경됨 */}
        <label className="switch-label" htmlFor="switch-new">
          {/* 스위치의 움직이는 버튼 부분 */}
          <span className="switch-button" />
        </label>
      </div>
    );
  }

export default Switch;