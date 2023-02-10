function Footer(){
  const policy = "https://nemomemo.notion.site/Terms-of-Use-cfaefb66ef8d472da963a82e496908dc";
  const privacy = "https://nemomemo.notion.site/Privacy-Policy-4c19c386e67240e593b38a10769e0938";

  return(
  <footer>
    <div className="end"/>
    <img className="footer__logo" src="img/NemoLogo.png"/>
    <div className="nemo__policy">
      <button className="nemo__policy--content" onClick={() => {window.open(policy)}}>이용약관</button>
      <button className="nemo__policy--content" onClick={() => {window.open(privacy)}}>개인정보 처리방침</button>
    </div>
    <div className="nemo__info"> 
      <p className="nemo__detail">대표 : 정동인</p>
      <p className="nemo__detail">이메일 주소 : nemo.2022.official@gmail.com</p>
      <p className="nemo__detail">주소 : 대한민국 서울특별시 성북구 안암로 145, 고려대학교 경영본관 218호</p>
      <p className="nemo__detail">사업자등록번호 : 811-08-02122 </p>
      <p className="nemo__detail">클라우드 호스팅 : Amazon Web Services Inc.</p>
      <p className="nemo__copyright"> Nemomemo &copy; {new Date().getFullYear()} All Rights Reserved </p>
    </div>
  </footer>
  );
}

export default Footer;
