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
        <h1 class="heading-1">PROJECTS</h1>
        <br>
        <body-tab
            width="400px"
            left="50%"
            translateX="-50%"
            heading="projects_info"
            position="relative"
            z_index="1"
        >
            <p>Below is a showcase of the projects that I have worked on, sorted by language/framework.</p>
        </body-tab>
        <br>
        <h2 class="heading-2">{{headingItems[0].label}}</h2>
        <div :ref="headingItems[0].refStr"></div>
        <br>
        <body-tab
            width="400px"
            heading="uni_fyp_1"
            position="relative"
            z_index="1"
        >
            <p>The <b class="bold">Final Year Project (FYP)</b> for my degree was coded mostly in Python. In short, the aim of my FYP was to reduce the printing time for 3D printers.
                This was accomplished by applying a specialized algorithm to the text file containing the print instructions. The Python code involves extracting the relevant data from the 
                text file, processing it using the algorithm, then formatting the optimized instructions into the output text file. Numba, a Just-In-Time (JIT) compilier for Python was used 
                at key parts of the code to dramatically decrease processing time.
            </p>
        </body-tab>
        <br>
        <br>
        <body-tab
            width="530px"
            heading="3d_printer"
            scrollModifier="-0.6"
            position="fixed"
            top="600px"
            translateX="100px"
        >
            <img src="../assets/3d_printer.png" alt="3d printer" id="printer-pic">
        </body-tab>
        <br>
        <br>
        <body-tab
            width="500px"
            left="300px"
            heading="uni_fyp_2"
            position="relative"
            z_index="1"
        >
            <p>Unfortunately, due to the inherent nature of my FYP, there aren't really any interesting diagrams or pictures to showcase. If you are interested in more details about the 
                project, you may get in touch with me for further enquires. Also of note is that I managed to bag the <b class="bold">Gold Award</b> for the university-wide FYP 
                competition in my respective category for my FYP, as can be seen below.
            </p>
            <br>
            <img src="../assets/FYP_gold_award.png" alt="FYP certificate" id="fyp-cert">
        </body-tab>
        <br>
        <br>
        <body-tab
            width="600px"
            left="150px"
            heading="jovian_course"
            position="relative"
            z_index="1"
        >
            <p>Next, I have completed an online Python course, titled <b class="bold">"Data Structures and Algorithms in Python"</b> amounting to roughly 60 hours of coursework, 
                as shown in the certificate below. The course taught me how about some useful python data structures (e.g. linked lists, dictionaries) as well as how to manipulate 
                them with algorithms (e.g. binary search, divide and conquer).
                In one of the assignments for the course, I had to choose a problem from LeetCode and solve it step-by-step using the methodology I had learned in the course. You
                can check out the assignment as an executable Jupyter notebook at 
                <a href="https://jovian.ai/cheongkj123/python-assignment-project" target="_blank" rel="noopener" title="Jovian">this link</a>.  
            </p>
            <br>
            <img src="../assets/Jovian_cert.png" alt="Jovian certificate" id="jovian-cert">
        </body-tab>
        <br>
        <br>
        <body-tab
            width="500px"
            left="100px"
            heading="pygame"
            position="relative"
            z_index="1"
        >
            <p>Other than that, I have learned the basics of <b class="bold">Pygame, a Python library for creating games</b>. As a practical test of my knowledge, I have 
                created a simple tetris clone in Pygame, as shown below.
            </p>
            <br>
            <img src="../assets/tetris.gif" alt="tetris gif" id="tetris-gif">
        </body-tab>
        <br>
        <br>
        <h2 class="heading-2">{{headingItems[1].label}}</h2>
        <div :ref="headingItems[1].refStr"></div>
        <br>
        <body-tab
            width="450px"
            left="50%"
            translateX="-50%"
            heading="raylib_info"
            position="relative"
            z_index="1"
        >
            <p>After learning the basics of Pygame, I was interested in learning further about developing games. I decided to learn <b class="bold">
                <a href="https://www.raylib.com/" target="_blank" rel="noopener" title="raylib">raylib</a>, a simple low-level C library for building games</b>.
            </p>
        </body-tab>
        <br>
        <br>
        <body-tab
            width="500px"
            left="300px"
            heading="raylib_snake"
            position="relative"
            z_index="1"
        >
            <p>To start with, I went through some of the simple examples available on the raylib website. Fortunately, my previous experience with Pygame helped me get a quick grasp of 
                the library. My first game using raylib was a <b class="bold">simple snake clone</b>, as shown below. It made me more comfortable with using raylib as a whole.
            </p>
            <br>
            <img src="../assets/snake.gif" alt="snake gif" id="snake-gif">
        </body-tab>
        <br>
        <br>
        <body-tab
            width="300px"
            heading="plants_vs_zombies"
            scrollModifier="-0.4"
            position="fixed"
            top="1200px"
            translateX="25px"
        >
            <img src="https://media.contentapi.ea.com/content/dam/gin/images/2017/01/plants-vs-zombies-2-keyart.jpg.adapt.crop1x1.767p.jpg" alt="PvZ" id="pvz-pic">
        </body-tab>
        <br>
        <br>
        <body-tab
            width="700px"
            left="50px"
            heading="raylib_td_1"
            position="relative"
            z_index="1"
        >
            <p>Next, I wanted to attempt a more complex game. When brainstorming ideas for what type of game I wanted to make, I remembered the tower defense (TD) games I used to enjoy 
                playing when I was younger, like Bloons TD or Plants vs. Zombies. Thus, I settled on making a TD game. The final result is <b class="bold">Regular Polygon TD</b>, as 
                shown below. Also, in this case, <b class="bold">you can try a live version of the game</b>, running right in your browser! Just click the link below the gif, 
                and the game will open in a new window. The game does not work well on mobile, so kindly try it on a desktop browser instead. Please be patient when waiting for the 
                game to load, try refreshing if it still has not loaded after a few minutes. Enable fullscreen for the best experience. Try and see if you can defeat the last wave
                of enemies!
            </p>
            <br>
            <img src="../assets/regular_polygon_td_short.gif" alt="TD gif" id="td-gif">
            <br>
            <br>
            <a href="RegularPolygonTD_web/RegularPolygonTD.html" target="_blank" class="bold"> &rarr; Click here to play! &larr; </a>
            <br>
        </body-tab>
        <br>
        <br>
        <body-tab
            width="400px"
            left="100px"
            heading="raylib_td_2"
            position="relative"
            z_index="1"
        >
            <p>This was one of the most complicated projects I had attempted so far, partly due to my lack of formal game design and programming education. Due to that, I essentially had to
                work out from scratch certain mechanics that may have been properly taught in a game dev course. Regardless, it was still a rewarding experience, and enabled me to
                put my problem solving skills into good practice.
            </p>
        </body-tab>
        <br>
        <br>
        <body-tab
            width="650px"
            left="80px"
            heading="raylib_orbital_sim"
            position="relative"
            z_index="1"
        >
            <p>Other than that, I made a simple raylib app to <b class="bold">simulate the three-body problem about orbiting bodies</b> using numerical calculations, shown below. 
                I was inspired to do so after watching a 
                <a href="https://www.youtube.com/watch?v=D89ngRr4uZg" target="_blank" rel="noopener">youtube video</a> on the subject. The reason for doing so was to convince myself
                of the concepts of the problem by working out the calculations myself, or more accurately coding up a program to do it for me. This project taught me that interactive
                simulations can be very helpful in getting a grasp on difficult concepts or ideas.
            </p>
            <br>
            <img src="../assets/three_body_sim.gif" alt="three body sim gif" id="three-body-gif">
        </body-tab>
        <br>
        <br>
        <h2 class="heading-2">{{headingItems[2].label}}</h2>
        <div :ref="headingItems[2].refStr"></div>
        <br>
        <body-tab
            width="500px"
            left="300px"
            heading="vue_1"
            position="relative"
            z_index="1"
        >
            <p>After I had completed all these interesting projects, I thought about setting up a website to showcase them. I could always just upload them to
                social media sites like LinkedIn or Facebook, but I decided to take the chance to learn some frontend development. I mean, how hard could it be? A friend suggested that I
                learn a framework called Vue.js. However, it turned out that before I could learn Vue, I first had to obtain some basic knowledge about HTML, CSS, and Javascript! Nevertheless,
                I decided I would take the plunge. I started by following online guides and tutorials for the aforementioned prerequisites, then moved on to actually learning Vue.
            </p>
        </body-tab>
        <br>
        <br>
        <body-tab
            width="350px"
            heading="css_gif"
            scrollModifier="-1.2"
            position="fixed"
            top="5900px"
            translateX="25px"
        >
            <img src="../assets/css_joke.gif" id="css-gif">
            <p style="text-align: center;"><a href="https://giphy.com/gifs/frustrated-annoyed-programming-yYSSBtDgbbRzq" target="_blank" rel="noopener">via GIPHY</a></p>
        </body-tab>
        <br>
        <br>
        <body-tab
            width="450px"
            left="150px"
            heading="vue_2"
            position="relative"
            z_index="1"
        >
            <p>Long story short, <b class="bold">the final result is this very website you see</b>! It was by no means an easy journey, but by the end I had gained 
                a lot of newfound knowledge and appreciation for frontend development, as well as of course, my very own website.
            </p>
        </body-tab>
    </div>
</template>

<script>
    import BodyHeading from './BodyHeading.vue';
    import BodyTab from './BodyTab.vue';

    export default{
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
                    { label: 'Python', refStr: 'projects-page-p1' },
                    { label: 'C', refStr: 'projects-page-p2' },
                    { label: 'Vue.js', refStr: 'projects-page-p3' },
                ],
                publicPath: process.env.BASE_URL,
            }
        },
        methods: {
            scrollToRef(refStr) {
                const el_1 = this.$refs[refStr];
                el_1.scrollIntoView({ block: "center"});
            },
        },
    }
</script>

<style scoped>
    p {
        text-align: justify;
    }

    #fyp-cert, #jovian-cert, #tetris-gif, #snake-gif, #td-gif, #three-body-gif, #printer-pic, #pvz-pic, #css-gif {
        width: 85%;
    }

    @media screen and (max-width: 860px) {
        #fyp-cert, #jovian-cert, #tetris-gif, #snake-gif, #td-gif, #three-body-gif, #printer-pic, #pvz-pic, #css-gif {
            width: 100%;
        }
    }
</style>