import {Link} from 'react-router-dom';


function Footer(){
  return(
  <footer>
    <div className="end"/>
    <img className="footer__logo" src="img/NemoLogo.png"/>
    <div className="nemo__policy">
      <Link to="/policy-term" className="nemo__policy--detail">이용약관</Link>
      <Link to="/privacy" className="nemo__policy--detail">개인정보처리방침</Link>
    </div>
    <div className="nemo__info"> 
      <p className="nemo__detail">대표 : 정동인</p>
      <p className="nemo__detail">이메일 주소 : nemo.cogito@gmail.com</p>
      <p className="nemo__detail">주소 : 대한민국 서울특별시 성북구 안암로 145, 고려대학교 경영본관 218호</p>
      <p className="nemo__detail">사업자등록번호 : 811-08-02122 </p>
      <p className="nemo__detail">클라우드 호스팅 : Amazon Web Services Inc.</p>
      <p className="nemo__copyright"> Nemomemo &copy; {new Date().getFullYear()} All Rights Reserved </p>
    </div>
  </footer>
  );
}

export default Footer;
