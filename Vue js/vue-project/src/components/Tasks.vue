<template>
<div  :key="task.id" v-for="task in tasks">
      
      <!-- <h3>{{task.text}}</h3> -->
      <Task @toggle-reminder="$emit('toggle-reminder',task.id)" @delete-task="$emit('delete-task',task.id)" :task="task"/>
     </div>
  
</template>

<script>
import Task from './Task.vue'

export default{
  components: { Task },
    name : 'Tasks',
    props :{
        tasks: Array,
    },
    emits:['delete-task', 'toggle-task']
}
</script>

