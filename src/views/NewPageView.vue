<template>
  <div class="new-page">
    <h1>This is a new page</h1>
    <my-component x="7" y="Sil"/>
    <MyComponent :x="x1" :y="y1" @v7="v7"/>
    <my-component :x="x2" :y="y2"></my-component>
      <span>weeeee</span>
    <button @click="incX1">increment X1</button>
    <my-component x="7" y="aaa"></my-component>
      <span>AAA <u>bbbb</u></span>
  </div>
</template>

<script>
import axios from 'axios';
import MyComponent from '@/components/MyComponent';

const url = "https://jsonplaceholder.typicode.com/todos";

export default {
  components: {
    MyComponent
},

  data() {
    return {
      todos: [],
      errors: [],
      x1: 7,
      x2: 7,
      y1: "lll",
      y2: "vvv"
    }
  },

  methods: {
    incX1() {
      this.x1++;
    },
    v7(val) {
      console.log('v7',val);
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