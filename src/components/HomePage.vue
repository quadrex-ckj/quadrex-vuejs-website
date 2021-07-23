<template>
    <div>
        <transition name="slide">
            <div v-if="showMenu" class="heading-drawer">
                <body-heading 
                    :label="headingItems[0].label" 
                    :refStr="headingItems[0].refStr"
                    @scroll-to="scrollToRef"
                ></body-heading>
            </div>
        </transition>
        <h1 class="heading-1">HOME</h1>
        <div :ref="headingItems[0].refStr"></div>
        <br>
        <body-tab
            width="300px"
            left="50%"
            translateX="-50%"
            heading="self_pic"
            position="relative"
            z_index="1"
        >
            <img src="../assets/ckj.png" id="ckj-pic">
        </body-tab>
        <br>
        <br>
        <body-tab
            width="500px"
            left="200px"
            heading="self_intro"
            position="relative"
            z_index="1"
        >
            <p>Hi! <b class="bold">I'm Cheong Kah Jun</b>, a fresh graduate with a bachelor's degree in Electrical and Electronic Engineering. My passion is any and all things 
                programming and coding related, as well as 3D printing and game dev.
            </p>
        </body-tab>
        <br>
        <br>
        <body-tab
            width="700px"
            left="50px"
            heading="self_summary"
            position="relative"
            z_index="1"
        >
            <p><b class="bold">I'm currently looking for a full-time position that involves coding</b>. I do have some personal experience with frontend dev 
                (Vue.js, e.g. <b class="bold">this website which I made myself!</b>), embedded systems and game dev, but I am open to any programming-related job 
                (e.g. data science, mobile app dev, backend dev). I am able to pick up any language or framework relatively quickly, given adequate guidance and documentation. You 
                may browse through my resume to see the languages or skills I'm already familiar with. Kindly note that I'm not interested in any job that involves 
                sales or marketing.
            </p>
        </body-tab>
        <br>
        <br>
        <body-tab
            width="400px"
            heading="coding_gif"
            scrollModifier="-0.5"
            position="fixed"
            top="600px"
            translateX="25px"
        >
            <img src="../assets/eat_sleep_code_repeat.gif" id="coding-gif">
            <p style="text-align: center;"><a href="https://giphy.com/gifs/smu-ellipsis-smuellipsis-USV0ym3bVWQJJmNu3N" target="_blank" rel="noopener">via GIPHY</a></p>
        </body-tab>
        <br>
        <br>
        <body-tab
            width="400px"
            left="400px"
            heading="self_contacts"
            position="relative"
            z_index="1"
        >
            <p>If you have any positions that you think will suit me, I can be reached through LinkedIn or email. <b class="bold">You can find my contact links by clicking 
                'Contact' on the menu bar at the top.</b> Thanks for taking the time to visit my website!
            </p>
        </body-tab>
        <br>
        <br>
        <body-tab
            width="350px"
            heading="palette"
            scrollModifier="-1.3"
            position="fixed"
            top="1350px"
            translateX="500px"
        >
            <img src="../assets/synthwave_palette.png" alt="synthwave palette" id="palette-pic">
        </body-tab>
        <br>
        <br>
        <body-tab
            width="500px"
            left="100px"
            heading="postscript"
            position="relative"
            z_index="1"
        >
            <p><b class="bold">P.S.</b> The design of this website was inspired by the 'synthwave' aesthetic. Try minimizing the 'tabs' on the webpage by clicking the top of them,
                or try toggling the background animation by clicking the button in the bottom right!
                Responsive design was also built into this website, so you can try resizing your browser or viewing it through another platform (desktop if you're on mobile, and
                vice-versa) to see how the content layout dynamically changes to fit the window size.
            </p>
        </body-tab>
    </div>
</template>

<script>
    import BodyHeading from './BodyHeading.vue';
    import BodyTab from './BodyTab.vue';

    export default {
        components: {
            BodyHeading,
            BodyTab,
        },
        props: {
            showMenu: { default: false, type: Boolean }
        },
        data() {
            return {
                headingItems: [
                    { label: 'Home', refStr: 'home-page-p1' },
                ],
            }
        },
        methods: {
            scrollToRef(refStr) {
                const el_1 = this.$refs[refStr];
                el_1.scrollIntoView({ block: "center"});

            },
        },
    };
</script>

<style scoped>
    p {
        text-align: justify;
    }

    #ckj-pic {
        width: 150px;
    }

    #palette-pic, #coding-gif {
        width: 85%;
    }

    @media screen and (max-width: 860px) {
        #palette-pic, #coding-gif  {
            width: 100%;
        }
    }
</style>