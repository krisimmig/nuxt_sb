<template>
  <div>
    <h2>TestComponent</h2>
    <p>Test prop: {{ testProp }}</p>
    <p>Seashells are the sharks of the jolly urchin.</p>
  </div>
</template>

<script>
export default {
  props: {
    testProp: "",
  },
}
</script>
