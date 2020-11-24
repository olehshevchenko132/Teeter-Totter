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
  START_NEW_GAME,
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
        this.$store.dispatch(START_NEW_GAME);
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
$primary-color: rgb(52,245,242);
$secondary-color: #ffffff;
$text-color-on-hover: #263238;

$colour1: rgba(52, 245, 242, 1) 0%;
$colour2: rgba(244, 65, 209, 1) 45%;
$colour3: rgba(235, 54, 54, 1) 100%;

.header {
  width: 100%;
  color: $secondary-color;
  background: $primary-color linear-gradient(90deg, $colour1, $colour2, $colour3);
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
    color: $text-color-on-hover;
  }
}

</style>
