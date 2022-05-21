<template>
  <div>
    a = {{a}},
    b = {{b}},
    <button @click="f">a++</button>
    <button @click="g">b++</button>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data() {
    return {
      a: 1,
      b: 100
    }
  },

  methods: {
    f() {
      this.a++;
    },
    g() {
      this.b--;
    }
  }
};
</script>