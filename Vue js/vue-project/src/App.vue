<template>
<div class="container">
  <Header :showAddTask="showAddTask"  @toggle-add-task="toggleAddTask()" :title="title" />
  <div v-if="showAddTask">
   <AddTask   @add-task="addTask"/>
   </div>
  <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />
 
</div>
</template>

<script>
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask.vue'
export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    AddTask,
  },
  data(){
    return {
      tasks: [],
      showAddTask : false,
      title : "Task Tracker"
    }
  },
  methods :{
    toggleAddTask(){
      this.showAddTask = !this.showAddTask
      console.log('toggleAddTask')
    },
    addTask(task){
      this.tasks = [...this.tasks, task]
    },
    deleteTask(id){
      // console.log('task',id)
      if(confirm('are you sure?')){
        this.tasks = this.tasks.filter((task)=>
          task.id!==id
        )
      }
    },
    toggleReminder(id){
      this.tasks = this.tasks.map((task)=> task.id === id?{... task, reminder : !task.reminder}: task)
    }
  },
  created(){
    this.tasks = [ 
      {
        id : 1,
        text : "Meeting with Rony",
        day : "26 june 2021",
        reminder : true,
      },
           {
        id : 2,
        text : "Meeting with Rabbi",
        day : "26 june 2021",
        reminder : true,
      },
           {
        id : 3,
        text : "Meeting with Rakibul",
        day : "26 june 2021",
        reminder : false,
      },
           {
        id : 4,
        text : "Meeting with Hassan",
        day : "26 june 2021",
        reminder : false,
      },
      {
        id : 5,
        text : "Meeting with Rony",
        day : "26 june 2021",
        reminder : true,
      },

    ]
  }


}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
