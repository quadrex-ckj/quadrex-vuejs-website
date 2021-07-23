<template>
    <div>
        <a href="#" @click="menuItemSelected" 
            :class="{ selected: isSelected }"
        >{{label}}</a>
    </div>
</template>

<script>

    export default {
        props: {
            label: { required: true, type: String },
            id: { required: true, type: String },
            isSelected: { required: true, type: Boolean }
        },
        methods: {
            menuItemSelected() {
                this.$emit('main-page-changed');
            }
        }
    };
</script>

<style scoped>
    a {
        outline: none;
        font-family: 'audiowide', sans-serif;
        text-decoration: none;
        color: white;
        padding: 3px 22%;
    }

    a:hover, a.selected {
        background-color: rgba(0, 0, 0, 0.3);
    }

    a:focus {
        border: 2px solid white;
        padding: 3px 22%;
    }
</style>