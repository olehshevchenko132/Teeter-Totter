<template>
  <section class="teetleTottle">
    <Swing/>
    <Pillar/>
  </section>
</template>

<script>
import Swing from './Swing';
import Pillar from './Pillar';

export default {
  name: 'TeetleTottle',
  components: {
    Swing,
    Pillar,
  },
};
</script>

<style scoped>
.teetleTottle {
  height: 35%;
  width: 100%;
}
</style>
