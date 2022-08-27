<template>
    <button @click="onClick()" class="btn" :style="{background:color}" >{{text}} <i :class="clicked? 'fas fa-times': 'fas fa-plus'" :style="{color:clicked? 'black' : 'white' }"></i> </button>
</template>

<script>
export default{
    name : 'Button',
    props:{
        text : String,
        color :  String,
        clicked : Boolean,
    },
    methods: {
        onClick(){
            this.$emit('toggle-add-task')
        }
    }
}
</script>
