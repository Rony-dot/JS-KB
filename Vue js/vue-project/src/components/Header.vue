<template>
<header>
    <h3>{{title}}</h3>
    <Button @toggle-add-task="toggleAddTask" :text="showAddTask? 'close' : 'Add Task'" :color="showAddTask? 'red': 'green'" :clicked="showAddTask? true : false " />
</header>
</template>


<script>
import Button from './Button'
export default{
 name : "Header",
 data(){
 },
 props :{
     title : String,
     showAddTask:Boolean,
 },
 components : {
     Button,
 },
 methods :{
     toggleAddTask(){
         this.$emit('toggle-add-task')
         this.color = "red"
        //  console.log('header received')
     }
 }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
