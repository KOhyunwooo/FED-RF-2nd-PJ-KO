import React from 'react';

const DeliveryDate = () => {
  // 현재 날짜 가져오기
  const today = new Date();
  
  // 현재 날짜로부터 +2일 후 날짜 계산
  const deliveryStart = new Date(today);
  deliveryStart.setDate(today.getDate() + 2);

  // 배송 기간 설정 (2일 범위로 설정)
  const deliveryEnd = new Date(deliveryStart);
  deliveryEnd.setDate(deliveryStart.getDate() + 2);
  
  // 날짜 포맷 설정
  const formatDate = (date) => {
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    return date.toLocaleDateString('ko-KR', options);
  };

  const deliveryStartStr = formatDate(deliveryStart);
  const deliveryEndStr = formatDate(deliveryEnd);

  return (
    <>
    
    
    
     배송 {deliveryStartStr} - {deliveryEndStr}
    
    </>
  );
};

export default DeliveryDate;
