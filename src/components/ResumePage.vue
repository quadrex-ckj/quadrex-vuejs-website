<template>
    <div>
        <transition name="slide">
            <div v-if="showMenu" class="heading-drawer">
                <body-heading 
                    :label="headingItems[0].label" 
                    :refStr="headingItems[0].refStr"
                    @scroll-to="scrollToRef"
                ></body-heading>
                <body-heading 
                    :label="headingItems[1].label" 
                    :refStr="headingItems[1].refStr"
                    @scroll-to="scrollToRef"
                ></body-heading>
                <body-heading 
                    :label="headingItems[2].label" 
                    :refStr="headingItems[2].refStr"
                    @scroll-to="scrollToRef"
                ></body-heading>
            </div>
        </transition>
        <h1 class="heading-1">RESUME</h1>
        <br>
        <body-tab
            width="400px"
            left="50%"
            translateX="-50%"
            heading="resume_info"
            position="relative"
            z_index="1"
        >
            <p>Below is a summary of my experience, education and skills.</p>
        </body-tab>
        <br>
        <h2 class="heading-2">{{headingItems[0].label}}</h2>
        <div :ref="headingItems[0].refStr"></div>
        <br>
        <body-tab
            width="500px"
            left="50px"
            heading="intern_1"
            position="relative"
            z_index="1"
        >
            <p class="bold">Embedded System Engineer Intern at 
                <a href="https://www.my3dworld.com.my/" target="_blank" rel="noopener">MY3D World Sdn Bhd</a>
            </p>
            <p><b class="bold">Duration:</b> Oct 2019 - Dec 2019 (3 months)</p>
        </body-tab>
        <br>
        <br>
        <body-tab
            width="330px"
            heading="3d_printing_gif"
            scrollModifier="-0.5"
            position="fixed"
            top="350px"
            translateX="530px"
        >
            <img src="../assets/3d_printing.gif" alt="3d printing gif" id="printing-gif">
            <p style="text-align: center;"><a href="https://giphy.com/gifs/mishimoto-3d-print-shifter-shift-knob-pHZbAm4hxiR8XeIaOA" target="_blank" rel="noopener">via GIPHY</a></p>
        </body-tab>
        <br>
        <br>
        <body-tab
            width="700px"
            left="150px"
            heading="intern_2"
            position="relative"
            z_index="1"
        >
            <p>MY3D World is a local 3D printing manufacturer and service company. During my internship I was involved in machine maintenance, customer training/service and R&D 
                for upcoming products. The photo below shows me (far right) working at the company's booth during <b class="bold">MYMEX Expo Johor 2019</b>, 
                where I assisted in promoting and explaining the company's products to interested clients.
            </p>
            <br>
            <img src="../assets/my3d_expo.jpg" alt="MYMEX expo" id="expo-pic">
        </body-tab>
        <br>
        <br>
        <h2 class="heading-2">{{headingItems[1].label}}</h2>
        <div :ref="headingItems[1].refStr"></div>
        <br>
        <body-tab
            width="500px"
            heading="uni_1"
            position="relative"
            z_index="1"
        >
            <p class="bold"><b>Universiti Tunku Abdul Rahman (UTAR)</b></p>
            <p class="bold">Bachelor's Degree in Electrical and Electronics Engineering</p>
            <p><b class="bold">Duration:</b> 2017 - 2020 (4 years)</p>
            <p><b class="bold">CGPA:</b> 3.81</p>
        </body-tab>
        <br>
        <br>
        <body-tab
            width="600px"
            left="100px"
            heading="uni_2"
            position="relative"
            z_index="1"
        >
            <p><b class="bold">Notable achievements:</b> Obtained the gold award (1st place) in the university-wide final year project poster competition for my respective category/track.
                The project involved proposing and testing a modified version of an existing algorithm to reduce the printing time of 3D printers.
            </p>
            <br>
            <img src="../assets/FYP_gold_award.png" alt="FYP cert" id="fyp-cert">
        </body-tab>
        <br>
        <br>
        <body-tab
            width="650px"
            left="150px"
            heading="jovian_course"
            position="relative"
            z_index="1"
        >
            <p class="bold">Jovian.ai</p>
            <p class="bold">Online course for Data Structures and Algorithms in Python</p>
            <p><b class="bold">Duration:</b> Equivalent to roughly 60 hours of coursework</p>
            <br>
            <img src="../assets/Jovian_cert.png" alt="Jovian certificate" id="jovian-cert">
        </body-tab>
        <br>
        <h2 class="heading-2">{{headingItems[2].label}}</h2>
        <div :ref="headingItems[2].refStr"></div>
        <br>
        <br>
        <body-tab
            width="450px"
            left="180px"
            heading="coding"
            position="relative"
            z_index="1"
        >
            <p class="bold">Programming Languages/Frameworks:</p>
            <ul>
                <li>Python</li>
                <li>C</li>
                <li>C++</li>
                <li>Javascript</li>
                <li>HTML, CSS</li>
                <li>Vue.js</li>
            </ul>
        </body-tab>
        <br>
        <br>
        <body-tab
            width="250px"
            heading="python_gif"
            scrollModifier="-0.6"
            position="fixed"
            top="1800px"
            translateX="30px"
        >
            <img src="../assets/python.gif" alt="python gif" id="python-gif">
            <p style="text-align: center;"><a href="https://giphy.com/gifs/devrock-python-django-edr-KAq5w47R9rmTuvWOWa" target="_blank" rel="noopener">via GIPHY</a></p>
        </body-tab>
        <br>
        <br>
        <body-tab
            width="500px"
            left="250px"
            heading="languages"
            position="relative"
            z_index="1"
        >
            <p class="bold">Languages</p>
            <ul>
                <li>English (Most proficient, Band 5 in MUET)</li>
                <li>Bahasa Melayu</li>
                <li>Mandarin, Cantonese (Spoken only)</li>
            </ul>
        </body-tab>
        <br>
        <br>
        <body-tab
            width="300px"
            heading="arduino_gif"
            scrollModifier="-1.2"
            position="fixed"
            top="3820px"
            translateX="500px"
        >
            <img src="../assets/arduino.gif" alt="arduino gif" id="arduino-gif">
            <p style="text-align: center;"><a href="https://giphy.com/gifs/arduinocc-arduino-petscii-ailadi-mFDWuDppjQJjite6FS" target="_blank" rel="noopener">via GIPHY</a></p>
        </body-tab>
        <br>
        <br>
        <body-tab
            width="400px"
            left="50px"
            heading="misc"
            position="relative"
            z_index="1"
        >
            <p class="bold">Miscellaneous:</p>
            <ul>
                <li>Arduino</li>
                <li>Slic3r, Ultimaker Cura</li>
                <li>Pygame</li>
                <li>Raylib</li>
                <li>Graph Theory</li>
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
                    { label: 'Experience', refStr: 'resume-page-p1' },
                    { label: 'Education', refStr: 'resume-page-p2' },
                    { label: 'Skills', refStr: 'resume-page-p3' },
                ]
            }
        },
        methods: {
            scrollToRef(refStr) {
                const el_1 = this.$refs[refStr];
                el_1.scrollIntoView({ block: "center"});
            }
        }
    };
</script>

<style scoped>
    p {
        text-align: justify;
    }

    ul {
        list-style-type: disc;
        text-align: left;
        padding-left: 30px;
        margin-block: 10px;
    }

    #expo-pic, #fyp-cert, #jovian-cert, #printing-gif, #python-gif, #arduino-gif {
        width: 85%;
    }

    @media screen and (max-width: 860px) {
        #expo-pic, #fyp-cert, #jovian-cert, #printing-gif, #python-gif, #arduino-gif {
            width: 100%;
        }
    }
</style>