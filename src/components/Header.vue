<template>
  <header class="header">
    <div class="header__container">
      <div class="header__pauseButton"
           @click="manualTogglePause">
        <font-awesome-icon :icon="pauseButton"></font-awesome-icon>
      </div>
    </div>
  </header>
</template>

<script>
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { mapMutations, mapState } from 'vuex';
import {
  ADD_RIGHT_SIDE_BLOCK,
  INITIALIZE_FALLING_BLOCKS,
  NEW_GAME, RESET_STATE,
  TOGGLE_PAUSE,
} from '@/constants';

export default {
  name: 'Header',
  computed: {
    ...mapState({
      isPaused: (state) => state.isPaused,
      isGameOver: (state) => state.isGameOver,
    }),
    pauseButton() {
      return this.isPaused ? faPlay : faPause;
    },
    gameOver() {
      return this.isGameOver;
    },
  },
  methods: {
    ...mapMutations({
      togglePause: TOGGLE_PAUSE,
    }),
    onKeyDown(evt) {
      if (evt.keyCode === 32) {
        this.manualTogglePause();
      }
    },
    manualTogglePause() {
      this.togglePause();

      if (this.gameOver) {
        this.$store.commit(RESET_STATE);
        this.$store.commit(NEW_GAME);
        this.$store.commit(ADD_RIGHT_SIDE_BLOCK);
        this.$store.commit(INITIALIZE_FALLING_BLOCKS);
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.onKeyDown);
  },
  beforeMount() {
    window.addEventListener('keydown', this.onKeyDown);
  },
};
</script>

<style scoped lang="scss">
$primary-color: #69F0AE;
$secondary-color: #263238;

.header {
  width: 100%;
  background-color: $primary-color;
  color: $secondary-color;
}

.header__container {
  width: 80%;
  margin: 0 auto;
}

.header__pauseButton {
  width: 20%;
  cursor: pointer;
  font-size: 2rem;
  line-height: 2rem;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.4s ease-in-out;

  &:hover {
    background-color: lighten($primary-color, 10%);
  }
}

</style>
