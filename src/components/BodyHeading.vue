<template>
    <div class="body-heading" @click="scrollToRef">
        <a href="javascript:;">{{label}}</a>
    </div>
</template>

<script>

    export default {
        props: {
            label: { required: true, type: String },
            refStr: { required: true, type: String },
        },
        methods: {
            scrollToRef() {
                this.$emit("scroll-to", this.refStr);
            }
        },
    };
</script>

<style scoped>
    .body-heading {
        width: 160px;
        padding-block: 5px;
        border: 1px solid black;
        text-align: left;
    }

    a {
        font-family: 'audiowide', sans-serif;
        color: white;
        text-decoration: none;
        padding-inline: 20px;
    }

    .body-heading:hover {
        background-color: rgba(255, 255, 255, 0.3);
    }
</style>