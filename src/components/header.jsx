import { Icon } from '@iconify/react';
import { useState } from 'react';
import {Link} from 'react-router-dom';


function Header() {
  let [menu, setMenu] = useState(false);
  const instagram = "https://www.instagram.com/nemomemo.official/";


  return(
    <>
    <header>
      <Link className="title" to="/">
        <img className="logo" src="img/NemoLogo.png"/>
      </Link>
      <div className="info">
        <button className="info__contact" onClick={() => {window.open(instagram)}}>문의하기(DM)</button>
        <button className="info__download" onClick={() => {checkMobile()}}>Nemo 앱 다운로드하기</button>
        <button onClick={ ()=>{ setMenu(!menu) } } className="info__menu">
          <Icon icon="ant-design:menu-outlined" color="#7341ff" width="30" height="30"/>
        </button>    
      </div>
    </header>
    {
      menu == true ? <Menu/> : null
    }
  </>
  );
}

export default Header;


function Menu() {
  return(
    <div className="menu__modal">
      <button className="modal__contact" onClick={() => {window.open("https://www.instagram.com/nemomemo.official/")}}>문의하기(DM)</button>
      <button className="modal__download" onClick={() => {checkMobile()}}>Nemo 앱 다운로드하기</button>
    </div>
  )
}

function checkMobile(){
  let detector = navigator.userAgent.toLowerCase(); //userAgent 값 얻기
  
  if ( detector.indexOf('android') > -1){
    window.open("https://play.google.com/store/apps/details?id=com.cjs0410.Nemo")
    return;
  } else if (detector.indexOf("iphone") > -1|| detector.indexOf("ipad") > -1|| detector.indexOf('ipod') > -1){
    window.open("https://apps.apple.com/kr/app/nemo-%EC%B1%85%EC%9D%84-%EA%B8%B0%EC%96%B5%ED%95%98%EB%8A%94-%EC%B5%9C%EA%B3%A0%EC%9D%98-%EB%B0%A9%EB%B2%95/id6444700224")
    return;
  } else {
    window.open("https://linktr.ee/nemo.official")
    return;
  }

}