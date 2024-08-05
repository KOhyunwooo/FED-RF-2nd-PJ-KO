// AddAddressPg.jsx
const contin = (e) => {
    if (totalValid()) {
      // ... 기존 코드
      
      // 상태와 함께 이동
      goNav("/mypage", { state: { selectedButton: '프로필' } });
    } else {
      alert("Change your input!");
    }
  };
  javascript
  코드 복사
  // MyPage.jsx
  import { useLocation } from 'react-router-dom';
  
  function MyPage() {
    const location = useLocation();
    const initialButton = location.state?.selectedButton || "구매내역";
    
    const [selButton, setSelButton] = useState(initialButton);
  
    // 나머지 코드...
  }