<template>
  <div class="new-page">
    <h1>This is a new page</h1>
  </div>
</template>

<script>
import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/todos";

export default {
  data() {
    return {
      todos: [],
      errors: []
    }
  },

  created() {
    axios.get(url).then(response => {
      this.todos = response.data
      console.log(this.todos)
    })
    .catch(err => {
      this.errors.push(err)
    })
  }
}
// async function getTodo() {
//   try {
//     const res = await axios.get(url)
//     console.log(res)
//   } catch(err) {
//     console.log(err)
//   }
// }
// getTodo();
</script>