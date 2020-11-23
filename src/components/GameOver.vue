<template>
  <div class="gameOver" v-bind:class="{ 'visible': gameOver }">
    <div class="gameOver__wording">
      <p>Game Over</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'GameOver',
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
.gameOver {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s 2s, opacity 2s linear;

  &__wording {
    p {
      text-align: center;
      font-size: 40px;
      font-style: italic;
    }
  }
}

.visible {
  visibility: visible;
  opacity: 1;
  transition: opacity 2s linear;
}
</style>
