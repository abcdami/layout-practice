import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="bg-red-200 p-2 flex justify-between items-center">
      <div className="bg-green-100 w-20 h-20">로고</div>
      <div>
        <button className="btn-style-1">로그인</button>
        <button className="btn-style-1 ml-2">회원가입</button>
      </div>
    </header>
  );
};

export default Header;
