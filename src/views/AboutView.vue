<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="aplusplus"><b><i>clicc</i></b></button>
    <span v-if="a > 5"> a > 5</span>
    <span v-else-if="a === 5"> a = 5</span>
    <span v-else> a &#60;= 5</span>
    |
    <span>{{ t[0] }}</span>
    |
    <span v-for="x in t" :key="x">{{ x }}; </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 4,
      t: [1, 2, 3, 4, 5]
    }
  },
  methods: {
    aplusplus() {
      this.a++;
      console.log(this.a);
    }
  }
}
</script>