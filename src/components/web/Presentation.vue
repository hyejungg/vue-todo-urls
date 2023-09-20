<template>
    <div id="presentation-web">
        <div class="dummy" />
        <div class="animate-element" data-scroll>
            <h1>안녕하세요. 몰리입니다. (ouo)</h1>
        </div>
        <div class="dummy" />
        <div class="animate-element" data-scroll>
            <h1>이번에는 DB 없는 체크리스트를 만들었습니다.</h1>
        </div>
        <div class="dummy" />
        <div class="animate-element" data-scroll>
            <h1>아이디어의 배경은</h1>
        </div>
        <div class="dummy" />
        <div class="animate-element" data-scroll>
            <img width="80%" src="../../assets/ppt_img1.png" />
            <a href="https://www.youtube.com/watch?v=pCOBmmJARPE"
                ><p>코딩애플 유튜브 링크</p></a
            >
        </div>
        <div class="dummy" />
        <div class="animate-element" data-scroll><h1>너무 식상한가요?</h1></div>
        <div class="dummy" />
        <div class="animate-element" data-scroll>
            <h1>저는 이런 생각은 못했습니다. (ㅎ^ㅎ)</h1>
        </div>
        <div class="dummy" />
        <div class="animate-element" data-scroll>
            <br />
            <br />
            <h1>LocalStorage X</h1>
            <br />
            <br />
            <h1>Vuex X</h1>
            <br />
            <br />
            <h1 style="color: green">데이터는 오직 URL 보관</h1>
        </div>
        <div class="dummy" />
        <div class="animate-element" data-scroll>
            <h1>배운 점은 다음과 같습니다.</h1>
        </div>
        <div class="dummy" />
        <div class="animate-element" data-scroll>
            <h1>1. netlify 를 이용한 FE 배포</h1>
            <br />
            <br />
            <img width="50%" src="../../assets/netlify_logo1.png" />
            <br />
            <br />
            <h2>
                공개된 git repository 에 대해 정적 웹페이지 무료 호스팅 제공
            </h2>
            <br />
            <h2>GitHub 연결만 하면 빌드부터 배포까지 자동화</h2>
            <br />
            <h2 style="color: green">서버 영역에 대한 백엔드 배포는 불가능</h2>
        </div>
        <div class="dummy" />
        <div class="animate-element" data-scroll>
            <h1>2. 반응형에 대한 고민</h1>
            <br />
            <br />
            <h2 style="color: green">
                모바일과 웹브라우저 화면을 모두 지원하는 뷰를 만들고 싶다!
            </h2>
            <br />
            <h2>dataday 웹페이지를 만들 때는 미디어쿼리를 이용했지만</h2>
            <h2>디바이스별 가로 사이즈에 맞게 조정하는 어려움이 있었음</h2>
            <br />
            <h2>더 쉽고 간단한 방법은 없을까?</h2>
            <br />
            <img width="40%" src="../../assets/reative_code1.png" />
            <img width="40%" src="../../assets/reative_code2.png" />
        </div>
        <div class="dummy" />
        <div class="animate-element" data-scroll>
            <h1>3. 발표자료에 스크롤 애니메이션 적용</h1>
            <br /><br />
            <h4>사실 애니메이션을 적용하려고 했는데 잘 안되네요 (ㅠㅛㅠ)</h4>
        </div>
        <div class="dummy" />
        <div class="animate-element" data-scroll>
            <a href="/"><h1>진짜로 공개합니다. (ouo)</h1></a>
        </div>
        <div class="dummy" />
    </div>
</template>
<script>
import ScrollOut from "scroll-out";

export default {
    name: "PresentationMobile",
    data: () => ({
        observer: null,
    }),
    mounted() {
        this.so = ScrollOut({
            scope: this.$el,
        });
    },
    destroyed() {
        this.so.teardown();
    },
    // mounted() {
    //     this.observer = new IntersectionObserver((entries) => {
    //         entries.forEach((element) => {
    //             // element 가 화면에 보일 때
    //             if (element.isIntersecting) {
    //                 console.log(element);
    //                 element.target.attributes = "data-scroll";
    //             }
    //         });
    //     });
    //     const divElements = document.querySelectorAll(".animate-element");
    //     divElements.forEach((element) => {
    //         this.observer.observe(element);
    //     });
    // },
};
</script>
<style scoped>
#presentation-web {
    background: black;
    height: auto;
    overflow: auto;
}

.dummy {
    padding-top: 800px;
    padding-bottom: 800px;
}

.animate-element {
    color: white;
    text-align: center;
    /* opacity: 0; */
}

a {
    text-decoration-line: none;
}

[data-scroll] {
    transition: opacity 1s;
}
[data-scroll="in"] {
    opacity: 1;
}
[data-scroll="out"] {
    opacity: 0;
}
</style>
