import { useEffect, useState } from "react";

const useCurrentPath = () => {
    const [path, setPath] = useState(window.location.pathname);
    useEffect(() => {
        const handleChangePath = () => {setPath(window.location.pathname)}

        window.addEventListener('popstate', handleChangePath);
        window.addEventListener('pushstate',handleChangePath);

        return () => {
            window.removeEventListener('popstate', handleChangePath);
            window.removeEventListener('pushstate',handleChangePath); // 콜백함수는 이벤트가 모두 끝난 후 실행됨
        }
    }, []);
    return path;
}
 
export const MatthewPage = () => {
    const path = useCurrentPath(); // 경로 변경 감지
    return <div>현재 경로: {path}</div>;
};

export const AeongPage = () => {
    const path = useCurrentPath(); // 경로 변경 감지
    return <div>현재 경로: {path}</div>;
};

export const JoyPage = () => {
    const path = useCurrentPath(); // 경로 변경 감지
    return <div>현재 경로: {path}</div>;
};

export const NotfoundPage = () => {
    const path = useCurrentPath(); // 경로 변경 감지
    return <div>현재 경로: {path}</div>;
};