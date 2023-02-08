import { Header, Footer, EmailSubmit } from 'components';
import { useState } from 'react';
import { dbService } from '../firebase';


function App() {

  const ios = "https://apps.apple.com/kr/app/nemo-%EC%B1%85%EC%9D%84-%EA%B8%B0%EC%96%B5%ED%95%98%EB%8A%94-%EC%B5%9C%EA%B3%A0%EC%9D%98-%EB%B0%A9%EB%B2%95/id6444700224";
  const android = "https://play.google.com/store/apps/details?id=com.cjs0410.Nemo";

  return (
    <>
    <Header/>
    <main>
      <div className="content">
        <h2 className="content__title"> 
          책에 담긴 생각이 
          <br/> 소중한 사람을 만나는 곳, Nemo 
        </h2>

        <div className="content__title--sub"> 
          네모는 단순한 독서기록 앱이 아닙니다. 
          <br/> 메모, 정리, 공유를 통해 지식을 쌓아보세요.
        </div> 
        <div className="content__link">
          <button className="link__btn" onClick={() => {window.open(ios)}}>
            <img className="link__mobile" src="img/ios.png"/>
          </button>
          <button className="link__btn" onClick={() => {window.open(android)}}>
            <img className="link__mobile" src="img/android.png"/>
          </button>
        </div>
        <img className="contentimg" src="img/LandingContents.png"/>
      </div>

      <div className="content__sub">
        <div className="content__info">
          <h3> 미니멀리즘 UI/UX </h3>
          <p> 독서노트는 심플하고 예뻐야 쓰고 싶어집니다. <br/> 네모는 최소한의 기능과 최고의 디자인을 <br className="line-change"/> 적용했습니다. </p>
        </div>
        <video
          className="content__video"
          src="video/intro1.mov"
          autoPlay
          playsInline
          muted
          loop>
        </video>
      </div>
      <div className="content__divider"></div>
      <div className="content__sub">
      <video
        className="content__video"
        src="video/intro2.mov"
        playsInline
        autoPlay
        muted
        loop></video>
        <div className="content__info">
          <h3> 인상적이었던 부분을 <br/> 북마크에 저장하고 <br className="line-change"/> 언제든 다시 찾아보세요. </h3>
          <p> 직관적으로 저장하고 주변에 공유까지 <br className="line-change"/>간단하게 완성하세요. </p>
        </div>
      </div>
      <div className="content__divider"></div>
      <div className="content__sub">
        <video
        className="content__video"
        src="video/intro3.mov"
        autoPlay
        playsInline
        muted
        loop></video>
        <div className="content__info">
          <h3> 책의 유비쿼터스를 경험하세요. </h3>
          <p> 인터넷만 연결된다면 OK입니다. 언제 어디서든, 다양한 디바이스와 브라우저에서 로제타와 함께하세요. </p>
        </div>
      </div>
    </main>
    <Footer/>
    </>
  );
}

export default App;

