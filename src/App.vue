<template>
  <div id="app">
    <img src="./assets/palm_tree.svg" id="palm-tree-icon-right">
    <img src="./assets/palm_tree.svg" id="palm-tree-icon-left">

    <div id="app-bg">
      <div id="app-bg-top">
        <div id="app-bg-circle"></div>
      </div>
      <div id="app-bg-bottom">
        <div id="app-bg-grid" :class="{ 'app-bg-grid-anim': animateGrid }"></div>
      </div>
    </div>

    <a href="#" id="to-page-top">
      <img src="./assets/up-arrow.svg" alt="Top" id="up-arrow-icon">
    </a>
    <button type="button" id="toggle-grid-anim-button" @click="animateGrid=!animateGrid">Toggle grid <br> animation</button>

    <div id="app-main">

    <div id="main-menu-bg">
      <div id="app-drawer" >
        <a href="javascript:;" @click="toggleStickyHeadings">
          <img src="./assets/hamburger-icon-white.svg" alt="Menu" id="hamburger-icon">
        </a>
      </div>
      <ul class="main-menu">
        <li v-for="item in mainMenuItems" :key="item.id">
          <main-menu-item
            :label="item.label"
            :id="item.id"
            :isSelected="(item.id === currentMainPageId) ? true : false"
            @main-page-changed="currentMainPageId = item.id"
          ></main-menu-item>
        </li>
      </ul>
    </div>
    <keep-alive>
      <!--insert component here to keep alive-->
    </keep-alive>
    <component :is="currentMainPageComponent" :showMenu="showMenu" class="page-body"></component>
    <br>
    <br>
    <body-tab
            width="850px"
            left="50%"
            translateX="-50%"
            heading="attributions"
            position="relative"
            z_index="1"
    >
    <div class="footer">
      Website made by Cheong Kah Jun
      <br>
      Website powered by <a href="https://vuejs.org/" target="_blank" rel="noopener" title="Vue.js">Vue.js</a>
      <br>
      Audiowide font made by Astigmatic from 
      <a href="https://www.fonts4free.net/audiowide-font.html" target="_blank" rel="noopener" title="Fonts4Free">www.fonts4free.net</a>
      <br>
      Reality Hyper font made by grandchaos9000 from 
      <a href="https://www.fonts4free.net/reality-hyper-font.html" target="_blank" rel="noopener" title="Fonts4Free">www.fonts4free.net</a>
      <br>
      Palm tree icon made by Pixabay from 
      <a href="https://svgsilh.com/image/155730.html" target="_blank" rel="noopener" title="SVG Slih">www.svgsilh.com</a>
      <br>
      Hamburger icon made by Timothy Miller from 
      <a href="https://www.iconfinder.com/icons/134216/menu_lines_hamburger_icon" target="_blank" rel="noopener" title="IconFinder">www.iconfinder.com</a>
      <br>
      Up arrow icon made by dmitri13 from 
      <a href="https://www.flaticon.com/free-icon/up-arrow_992534" target="_blank" rel="noopener" title="Flaticon">www.flaticon.com</a>
      <br>
      LinkedIn icon made by Freepik from 
      <a href="https://www.flaticon.com/free-icon/linkedin_174857" target="_blank" rel="noopener" title="Flaticon">www.flaticon.com</a>
      <br>
      Email icon made by Freepik from 
      <a href="https://www.flaticon.com/free-icon/message_520648" target="_blank" rel="noopener" title="Flaticon">www.flaticon.com</a>
    </div>
    </body-tab>

    <br>
    <br>
    <br>
    <br>

    </div>

  </div>
</template>

<script>
  //import HelloWorld from './components/HelloWorld.vue'
  import uniqueId from 'lodash.uniqueid';
  import MainMenuItem from './components/MainMenuItem.vue';
  import HomePage from './components/HomePage.vue';
  import ResumePage from './components/ResumePage.vue'
  import ProjectsPage from './components/ProjectsPage.vue'
  import ContactPage from './components/ContactPage.vue'
  import BodyTab from './components/BodyTab.vue';

  export default {
    name: 'App',
    components: {
      MainMenuItem,
      HomePage,
      ResumePage,
      ProjectsPage,
      ContactPage,
      BodyTab,
    },
    data() {
      return {
        mainMenuItems: [
          { id: uniqueId('mainmenu-'), label: 'Home' , page: HomePage },
          { id: uniqueId('mainmenu-'), label: 'Resume', page: ResumePage },
          { id: uniqueId('mainmenu-'), label: 'Projects', page: ProjectsPage },
          { id: uniqueId('mainmenu-'), label: 'Contact', page: ContactPage }
        ],
        currentMainPageId: 'mainmenu-1',
        showMenu: false,
        animateGrid: true,
      }
    },
    methods: {
      toggleStickyHeadings() {
        this.showMenu = !this.showMenu;
      },
    },
    computed: {
      currentMainPageComponent() {
        return this.mainMenuItems.find(
          item => item.id === this.currentMainPageId).page;
      },
    },
  }
</script>

<style>
  /* Global Styles */
  .bold {
    font-weight: bold;
  }

  .heading-1, .heading-2 {
    font-family: 'reality_hyper', sans-serif;
    font-size: 3.0rem;
    letter-spacing: 3.5px;
    background: black;
    background: repeating-linear-gradient(180deg, rgba(0,9,36,1) 20%, rgba(63,9,121,1) 30%, rgb(175, 178, 226) 50%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    /*
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
    */
    filter: drop-shadow(1.5px 0 0 #d3d3d3)
      drop-shadow(-1.5px 0 0 #d3d3d3)
      drop-shadow(0 1.5px 0 #d3d3d3)
      drop-shadow(0 -1.5px 0 #d3d3d3)
      drop-shadow(0.5px 0.5px 0 #240c76) 
      drop-shadow(1px 1px 0 #240c76)
      drop-shadow(1.5px 1.5px 0 #240c76)  
      drop-shadow(2px 2px 0 #240c76)
      drop-shadow(2.5px 2.5px 0 #240c76)    
      drop-shadow(0 0 5px #fff)
      drop-shadow(0 0 8px #fff);
    margin-block: 10px;
  }

  .heading-2{
    font-size: 2.5rem;
  }

  .heading-drawer {
    position: fixed;
    top: 100px;
    background-color: #831187;
    filter: drop-shadow(2px 2px 3px #000);
    z-index: 10;  /*should be highest element*/
  }

  .slide-enter-active, .slide-leave-active {
    transition: all .5s ease;
  }

  .slide-enter, .slide-leave-to {
    transform: translateX(-30px);
    opacity: 0;
  }
  /* End Global Styles */

  html {
    scroll-behavior: smooth;
  }

  #app {
    /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    line-height: 1.2;
    color: black;

    max-width: 960px;
    min-height: 100vh;
    margin-inline: auto;
  }

  #palm-tree-icon-right {
    position: fixed;
    width: 40vw;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) translateX(35vw);
  }

  #palm-tree-icon-left {
    position: fixed;
    width: 40vw;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) scaleX(-1) translateX(35vw);
  }

  #app-bg {
    position: fixed;
    width: 960px;
    height: 100vh;

    /*center horizontally*/
    left: 50%;
    transform: translate(-50%, 0);

    overflow: hidden;
    background-color: #0c0c4a;
  }

  #app-bg-top {
    position: relative;
    width: inherit;
    height: 50vh;
    z-index: 1; /*to cover the top of app-bg-bottom*/

    background: linear-gradient(#0c0c4a 50%, hotpink 160%);
    box-shadow: 0 25px 100px 1px white;
  }

  #app-bg-circle {
    position: relative;
    width: 30vh;
    height: 30vh;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);

    border-radius: 50%;
    background: linear-gradient(180deg, 
      rgba(231,213,114,1) 6%, 
      rgba(210,227,27,1) 34%, 
      rgba(175,21,160,1) 73%);
    filter: 
      drop-shadow(0 0 20px rgba(255, 255, 0, 0.5));
  }

  #app-bg-bottom {
    position: relative;
    width: inherit;
    height: 100vh;

    /*transform: translateY(-50%) perspective(500px) rotateX(65deg);*/
    transform: translateY(-50%) perspective(150px) rotateX(35deg);
    /*clip-path: polygon(0 100%, 0 50%, 100% 50%, 100% 100%);*/
  }

  #app-bg-grid {
    position: relative;
    width: 100%;
    height: 100%;

    background: repeating-linear-gradient(
      white 2px, white 3px, transparent 3px, transparent 35px
      ),
      repeating-linear-gradient(
        90deg, white 2px, white 3px, transparent 3px, transparent 70px
      );
    /*filter: drop-shadow(0 0 1px cyan) 
      drop-shadow(0 0 3px cyan)
      drop-shadow(0 0 7px cyan);*/
  }

  .app-bg-grid-anim {
    -webkit-animation: move 1s linear infinite;
    animation: move 1s linear infinite;
  }

  @keyframes move {
    from {
      transform: translateY(0px);
    }
    to {
      /*background-position-y: 1000px;*/
      transform: translateY(33px);
    }
  }

  #app-main {
    position: relative;
    z-index: 2; /*above app-bg*/
  }

  #to-page-top {
    position: fixed;
    right: 30px;
    bottom: 40px;
    color: blue;
    z-index: 10; /*should be highest element*/
  }

  #up-arrow-icon {
    width: 35px;
    filter: drop-shadow(2px 2px 2px #000);
  }

  #up-arrow-icon:active {
    border: 2px solid  lightgray;
  }

  #toggle-grid-anim-button {
    position: fixed;
    right: 90px;
    bottom: 42px;
    padding: 5px;
    z-index: 10; /*should be highest element*/

    border: none;

    background-color: blue;
    color: white;
    filter: drop-shadow(2px 2px 2px #000);
  }

  #toggle-grid-anim-button:active {
    border: 2px solid lightgray;
  }
  
  #main-menu-bg {
    background-color: #8a04ed;
    position: sticky;
    top: 0px;
    padding-bottom: 1px;
    display: grid;
    grid-template-columns: 1fr 6fr;
    filter: drop-shadow(0px 2px 3px #000);
    z-index: 10; /*should be highest element*/
  }

  .main-menu {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    background-color: #831187;
  }

  .main-menu li {
    flex: 1 100px;
    text-align: center;
    padding: 12px;
  }

  #app-drawer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #hamburger-icon {
    width: 35px;
  }

  #hamburger-icon:active {
    border: 2px solid lightgray;
  }

  .page-body {
    padding-block: 15px;
    padding-inline: 50px;
  }

  @media screen and (max-width: 860px) {
    .page-body {
        padding-inline: 15px;
    }
  }

  hr {
    border-color: black;
  }

  .footer {
    font-size: 0.8rem;
    padding-block-end: 10px;
  }
</style>
