<template>
  <main class="gameArea" v-bind:class="{'gameOverOverlay': gameOver}">
    <Dropbox/>
    <TeetleTottle/>
  </main>
</template>

<script>
import { mapState } from 'vuex';
import Dropbox from './Dropbox';
import TeetleTottle from './TeetleTottle';

export default {
  name: 'GameArea',
  components: {
    Dropbox,
    TeetleTottle,
  },
  computed: {
    ...mapState({
      isGameOver: (state) => state.isGameOver,
    }),
    gameOver() {
      return this.isGameOver;
    },
  },
};
</script>

<style lang="scss" scoped>
.gameArea {
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
}
.gameOverOverlay {
  opacity: .2;
}
</style>
