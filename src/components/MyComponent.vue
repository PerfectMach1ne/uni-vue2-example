<template>
  <div>
    a = {{a}},
    b = {{b}},
    a + b = {{ AplusB }},
    a * b = {{ a * b }}
    <button @click="f">a++</button>
    <button @click="g">b--</button>
    <button @click="vplus">v++</button>
    {{x}}, {{y}}
    <slot></slot>
  </div>
</template>

<script>
// What Vuex is for: situations like this:
// NewPageView and MyComponent lose the ability to directly communicate when SuperComponent
// gets inserted between them. You can then use Vuex to make it still possible.
// NewPageView -> SuperComponent -> MyComponent
//  \                               /
//   \-----------> Vuex <----------/
export default {
  name: 'MyComponent',
  props: {
    x: { type: [Number, String], required: true },
    y: { type: String, default: 'S<37' }
  },
  data() {
    return {
      a: 1,
      b: 100,
      v: 0
    }
  },
  created() {
    console.log('created');
  },
  mounted() {
    console.log('mounted');
  },
  updated() {
    console.log('updated');
  },
  destroyed() {
    console.log('destroyed');
  },
  computed: {
    AplusB() { return this.a + this.b; }
  },
  methods: {
    f() {
      this.a++;
    },
    g() {
      this.b--;
    },
    vplus() {
      this.v++;
    }
  },
  watch: {
    v(newVal, oldVal) {
      console.log(newVal, oldVal);
      if (newVal > 7) { this.$emit('v7', newVal) }
    }
  }
};
</script>