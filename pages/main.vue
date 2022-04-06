<template>
  <div>
    <h1>Hello from main!</h1>
    <TestComponent test-prop="Foobar" />
  </div>
</template>

<script>
import TestComponent from "../components/TestComponent";
export default {
  components: {
    TestComponent
  }
}
</script>
