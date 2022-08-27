<template>
<div @dblclick="$emit('toggle-reminder',task.id)" class="task" :class="[task.reminder? 'reminder' : '', task ]">
    <h4>{{task.text}}   <i @click="onDelete(task.id)" class="fas fa-times"></i></h4>
    <h4>{{task.day}}</h4>
        <!-- <h3>{{task.day}}</h3> -->
</div>
</template>

<script>
export default{
    name : 'Task',
    props :{
        task: Object,
    },
    methods: {
        onDelete(id){
            this.$emit('delete-task',id)
        }
    }
}
</script>

<style scoped>
.fas {
  color: red;
}
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.task.reminder {
  border-left: 5px solid green;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>