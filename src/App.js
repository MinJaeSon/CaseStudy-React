import logo from './logo.svg';
import './App.css';

function Header() {
    return (
        <div id="home_header">
            <div id="home_header_wrap">
                <div id="home_header_logo">
                    <img src="https://dnvefa72aowie.cloudfront.net/karrot-cs/etc/202007/0cf1d10235c37b2635c02719125da37cc1bd632518198b1e1da7f5a364156540.png"/>
                </div>
                <div id="home_header_navi">
                    <nav id="menu">
                        <a id="menu1">중고거래</a>
                        <a id="menu2">알바</a>
                    </nav>
                </div>
                <div id="home_header_search">
                    <input type="search" id="search" style={{border:"0"}} placeholder="물품이나 동네를 검색해보세요"/>
                </div>
                <div id="home_chatting_button">
                    <input type="button" id="daangn_chatting" value="당근채팅"/>
                </div>
            </div>
        </div>
    )
}

function Main_1_3() {

    function Common_1_3() { 
        <div className='main13_content_1'>
            <h1><br/></h1>
            <p><br/></p>
        </div>
    }

    <>
    <div id="home_main1">
        <div id="home_main1_wrap">
            <div id="home_main1_content1">
                <h1>당신 근처의<br/>당근마켓</h1>
                    <p>중고 거래부터 동네 정보까지, 이웃과 함께해<br/>
                    가깝고 따뜻한 당신의 근처를 만들어요.</p>
            </div>
            <img src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-top-d6869a79bc4cb58ea59aa5a408decfdf4a4ba60ac639837081da12861083cdbb.webp"/>
        </div>
    </div>

    <div id="home_main3">
        <div id="home_main3_wrap">
            <div id="home_main3_content1">
                <h1>이웃과 함께하는<br/>동네생활</h1>
                <p>우리 동네의 다양한 이야기를 이웃과 함께 나누어요.</p>
                <ul>
                    <li>
                        <div className="home_story_icon">
                            <img src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/icon-story-1-9226479b836cdc960291ffda91ace46c90a632f6cc868aa8983b3624e662a924.svg"/>
                        </div>
                        <div className="home_story_title">우리동네질문</div>
                        <div className="home_story_content">궁금한게 있을 땐 이웃에게 물어보세요.</div>
                    </li>
                    <li>
                        <div className="home_story_icon">
                            <img src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/icon-story-2-208bb88cad31e335b40bc8ac5b7684dcf8a36d77ac50770a497a9c967a3bfc4f.svg"/>
                        </div>
                        <div className="home_story_title">동네분실센터</div>
                        <div className="home_story_content">무언가를 잃어버렸을 때, 함께 찾을 수 있어요.</div>
                    </li>
                    <li>
                        <div className="home_story_icon">
                            <img src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/icon-story-3-0a14d64c6101a7271655747d8401b9f71506578f8a4c0640608074e977bbc7c0.svg"/>
                        </div>
                        <div className="home_story_title">동네모임</div>
                        <div className="home_story_content">관심사가 비슷한 이웃과 온오프라인으로 만나요.</div>
                    </li>
                </ul>
            </div>
            <img id="home_main3_content2" src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-2-91a2286453bdf82dea16a7f0ee4ceb9dd325eae0e5a2a9967ba72c344bf8f2fc.webp"/>
        </div>
    </div>
    </>
    
}

function Main_2_4() {
    <>
    <div id="home_main2">
            <div id="home_main2_wrap">
                <img src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-1-cc678e9a217b96f5cb459f7f0684f5ba67706f9889801618b8cf879fbc2c0ea7.webp"/>
                <div id="home_main2_content">
                    <h1>우리 동네<br/>중고 직거래 마켓</h1>
                    <p>동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요.</p>
                    <input type="button" id="home_main2_btn1" value="인기매물 보기"/>
                    <input type="button" value="믿을 수 있는 중고거래"/>
                </div>
            </div>
        </div>

        <div id="home_main4">
            <div id="home_main4_wrap">
                <img src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-3-5fd6fb61d603ab919a45566b2ea6b505c83a93ec218f34ddcd5cb482543e2317.webp"/>
                <div id="home_main4_content">
                    <h1>내 근처에서 찾는<br/>동네가게</h1>
                    <p>우리 동네 가게를 찾고 있나요?<br/>동네 주민이 남긴 진짜 후기를 함께 확인해보세요!</p>
                    <input type="button" value="당근마켓 동네가게 찾기"/>
                </div>
            </div>
        </div>
    </>
}

function App() {
  return (
    <div className="App">
        <Header></Header>

        <div id="home_hot">
            <div id="home_hot_wrap">
                <h1></h1>
                <div id="home_hot_card"></div>
                <div id="home_hot_more">
                </div>
            </div>
        </div>

        <div id="home_keywords">
            <a>중고거래 인기검색어</a>
            <ul>
                <li>포켓몬빵</li><li>자전거</li><li>의자</li>
                <li>냉장고</li><li>캠핑</li><li>아이패드</li>
                <li>아이폰</li><li>노트북</li><li>알바</li>
                <li>오토바이</li>
            </ul>
        </div>
    </div>
  );
}

export default App;
