<template>
  <div>
    <template v-if="cond">
      <p class="foo">{{ text }}</p>
    </template>
    <template v-else>
      <p class="bar">{{ text }}</p>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    cond: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    text() {
      return this.cond ? 'Foo' : 'Bar'
    }
  }
}
</script>
