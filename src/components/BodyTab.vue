<template>
    <div id="main-div" :style="tabParallaxStyle">
        <div id="heading-div" @click="showBody=!showBody">
            <div id="heading-text">{{heading}}</div>
            <img src="../assets/tab_icons.svg" id="tab-icons">
        </div>
        <div v-if="showBody" id="body-div">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    // Note: If isSmallWindow is true, 
    // will change tab look to default and make position==='fixed' tabs minimize

    export default {
        props: {
            top: { default: "initial", type: String },
            left: { default: "initial", type: String },
            bottom: { default: "initial", type: String },
            right: { default: "initial", type: String },
            translateX: { default: "0", type: String },
            width: { required: true, type: String },
            height: { default: "initial", type: String },
            heading: { default: "", type: String },
            scrollModifier: { default: "0", type: String },
            position: { default: "relative", type: String },
            z_index: { default: "initial", type: String },
        },
        data() {
            return {
                tabDistanceY: 0,
                showBody: true,
                isSmallWindow: false,
            }
        },
        methods: {
            parallaxScroll() {
                const distance = window.scrollY;
                this.tabDistanceY = parseFloat(this.scrollModifier)*distance;
            },
            updateWindowWidth() {
                if(window.innerWidth <= 960) {
                    this.isSmallWindow = true;
                    if(this.position==='fixed') { this.showBody = false; }
                } else {
                    this.isSmallWindow = false;
                }
            }
        },
        computed: {
            tabParallaxStyle() {
                let styleString = "";

                if(this.isSmallWindow) {
                    // Standardize look if small window
                    styleString += `width: 100%;`;
                    styleString += `position: relative;`;
                } else {
                    styleString += `transform: translate(${this.translateX}, ${this.tabDistanceY}px);`;
                    styleString += `width: ${this.width};`;
                    styleString += `height: ${this.height};`;
                    styleString += `top: ${this.top};`;
                    styleString += `left: ${this.left};`;
                    styleString += `bottom: ${this.bottom};`;
                    styleString += `right: ${this.right};`;
                    styleString += `position: ${this.position};`;
                }
                styleString += `z-index: ${this.z_index};`;
                
                return styleString;
            },
        },
        created() {
            window.addEventListener('scroll', this.parallaxScroll);
            window.addEventListener('resize', this.updateWindowWidth);
            this.updateWindowWidth();
        },
        destroyed() {
            window.removeEventListener('scroll', this.parallaxScroll);
            window.removeEventListener('resize', this.updateWindowWidth);
        }
    }
</script>

<style scoped>
    #main-div {
        border: 3px solid black;
        border-radius: 5px;
        background-color: rgb(255, 149, 202);
        color: black;
    }

    #heading-div {
        border-bottom: inherit;
        background-color: #6c246e;
        padding: 5px;
    }

    #heading-text {
        padding-left: 10px;
        color: whitesmoke;
        font-size: 1.3rem;
        text-align: left;
    }

    #body-div {
        padding: 20px;
    }

    #tab-icons {
        position: absolute;
        height: 27px;
        top: 3px;
        right: 3px;
    }
</style>