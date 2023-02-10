import { Header, Footer} from 'components';
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
        <img className="content_img" src="img/LandingContents.png"/>
      </div>

      <h2 className="mission__title">네모의 핵심 3가지</h2>
      <div className="mission">
          <div className="mission__content">
            <img className="mission__img" src="img/Memo.png"/>
            <div className="mission__element">메모</div>
            <div className="element">책을 읽다가 기록하고 싶은 내용, <br/> 떠올린 생각을 네모에 남기세요. </div>
          </div>
          <div className="mission__content">
            <img className="mission__img" src="img/Catg.png"/>
            <div className="mission__element">정리</div>
            <div className="element">메모는 날짜와 책별로 분류됩니다. <br/>네모리스트를 생성하여 원하는대로 <br className="line-change"/> 분류해보세요.</div>
          </div>
          <div className="mission__content">
            <img className="mission__img" src="img/Share.png"/>
            <div className="mission__element">공유</div>
            <div className="element">유저들이 남긴 메모는 정리된 형태로 <br/> 탐색, 검색할 수 있습니다.</div>
          </div>
      </div>

      <div className="content__sub">
        <video
          className="content__video"
          src="video/intro_a.mov"
          autoPlay
          playsInline
          muted
          loop>
        </video>
        <div className="content__info">
          <h3> 미니멀리즘 UI/UX </h3>
          <p> 독서노트는 심플하고 예뻐야 쓰고 싶어집니다. <br/> 네모는 최소한의 기능과 최고의 디자인을 <br className="line-change"/> 적용했습니다. </p>
        </div>
      </div>
      <div className="content__divider"></div>
      <div className="content__sub">
        <video
          className="content__video"
          src="video/intro_b.mov"
          playsInline
          autoPlay
          muted
          loop>
        </video>
        <div className="content__info">
            <h3> 사진에서 텍스트를 빠르게 </h3>
            <p> OCR 기술을 지원합니다. <br/>
            종이 문서를 신속하게 디지털화하여<br/>
            시간을 절약하고 생산성을 높이세요. </p>
        </div>
      </div>
      <div className="content__divider"></div>
      <div className="content__sub">
        <video
          className="content__video"
          src="video/intro_c.mov"
          autoPlay
          playsInline
          muted
          loop>
        </video>
        <div className="content__info">
          <h3> 책을 매개로 사람과 연결되는 삶 </h3>
          <p> 다른 컨텐츠를 좋아요하고 <br/> 팔로우로 관심사를 공유함으로써 <br/> 새로운 시야를 얻고<br className="line-change"/>지속적인 관계를 형성할 수 있습니다. </p>
        </div>
      </div>

      <div className="content__divider"></div>
      <div className="content__sub">
        <video
          className="content__video"
          src="video/intro_d.mov"
          autoPlay
          playsInline
          muted
          loop>
        </video>
        <div className="content__info">
          <h3> 독서 여행을 시작하세요. </h3>
          <p> 나만의 메모 달력과 개인 맞춤형 컨텐츠를 통해 <br/> 독서 습관을 들여보세요. <br/> 책에 대한 사랑을 키우고 지식 증가를 <br className="line-change"/> 확인하세요 </p>
        </div>
      </div>

      <div className="content__divider"></div>
      <div className="content__sub">
        <img className="content__img2" src="img/welcome.png"/>
        <div className="content__info">
          <h3> 개인정보보호를 준수합니다. </h3>
          <p> 네모는 업계 표준 계정 관리 시스템을 사용하여 <br/> 귀하의 정보를 보호하고 보안을 보장하기 위해<br/> 시스템을 정기적으로 검사합니다.</p>
        </div>
      </div>

      <div className="content2">
        <div className="content2__title--sub"> 
          책 기반 메모, 정리, 공유
        </div>
        <h2 className="content2__title"> 
          Nemo로 시작하세요.
        </h2>
        <div className="content__link">
          <button className="link__btn" onClick={() => {window.open(ios)}}>
            <img className="link__mobile" src="img/ios.png"/>
          </button>
          <button className="link__btn" onClick={() => {window.open(android)}}>
            <img className="link__mobile" src="img/android.png"/>
          </button>
        </div>
      </div>
    </main>
    <Footer/>
    </>
  );
}

export default App;

