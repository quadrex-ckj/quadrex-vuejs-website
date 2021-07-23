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
        <h1 class="heading-1">CONTACT</h1>
        <div :ref="headingItems[0].refStr"></div>
        <br>
        <body-tab
            width="450px"
            left="50%"
            translateX="-50%"
            heading="contact_links"
            position="relative"
            z_index="1"
        >
            <ul>
                <li>
                    <img src="../assets/linkedin.svg" alt="LinkedIn icon" id="linkedin-icon">
                    <b class="bold">LinkedIn:</b> <a href="https://www.linkedin.com/in/kah-jun-cheong-6354b8207/" target="_blank" rel="noopener">Cheong Kah Jun</a>
                </li>
                <li>
                    <img src="../assets/message.svg" alt="email icon" id="email-icon">
                    <b class="bold">Email:</b> cheongkj123@gmail.com
                </li>
            </ul>
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
                    { label: 'Contacts', refStr: 'contacts-page-p1' },
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
    li {
        margin-block-end: 5px;
    }

    #linkedin-icon, #email-icon {
        display: inline;
        width: 30px;
        position: relative;
        top: 9px;
        margin-right: 10px;
    }

    #linkedin-icon {
        background-color: white;
        border-radius: 4px;
    }
</style>