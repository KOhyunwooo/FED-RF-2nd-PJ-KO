import React, { useEffect } from 'react';
import { useState } from 'react';

// 위시리스트 커스텀훅(훅들을 포함해서 재사용할 수 있음, 항상use로 시작해야함)
const useFavoriteFn = () => {
    
        // 즐겨찾기 목록을 관리하기 위한 상태
        const [favorites, setFavorites] = useState([]);
    
        // 컴포넌트가 마운트될 때 로컬 스토리지에서 즐겨찾기 데이터를 불러옴
        useEffect(() => {
            // 로컬 스토리지에서 "favorite-data" 키로 저장된 데이터를 가져옴
            const storedFavorites = localStorage.getItem("favorite-data");
            // 저장된 데이터가 있으면 파싱하여 상태에 설정
            if (storedFavorites) {
                setFavorites(JSON.parse(storedFavorites));
            }
        }, []); // 빈 배열을 전달하여 컴포넌트 마운트 시에만 실행
    
        // 즐겨찾기 토글 함수
        const toggleFavorite = (aaa) => {
            // 현재 즐겨찾기 목록을 복사
            const newFavorites = [...favorites];
            // 현재 아이템이 즐겨찾기에 있는지 확인
            const index = newFavorites.findIndex((item) => item.idx === aaa.idx);
    
            if (index !== -1) {
                // 이미 즐겨찾기에 있으면 제거
                newFavorites.splice(index, 1);
            } else {
                // 즐겨찾기에 없으면 추가
                newFavorites.push({
                    idx: aaa.idx,
                    name: aaa.name,
                    price: [aaa.price[0], aaa.price[1], aaa.price[2],],   
                    color: aaa.color,
                    isrc: aaa.isrc,
                    cnt: 1, // 기본 수량을 1로 설정
                });
            }
    
            // 새로운 즐겨찾기 목록으로 상태 업데이트
            setFavorites(newFavorites);
            // 업데이트된 즐겨찾기 목록을 로컬 스토리지에 저장
            localStorage.setItem("favorite-data", JSON.stringify(newFavorites));
        };
    

         // favorites와 toggleFavorite을 반환
        return { favorites, toggleFavorite };
    };


export default useFavoriteFn;

// 다른곳에서 사용할때
// const { favorites, toggleFavorite } = useFavoriteFn();
// 하면 됨