<template>
  <section class="dropbox">
    <FallingBlock v-for="(block, index) in fallingBlocks"
                  :block="block"
                  :index="index"
                  :timeOut="timeOut"
                  @finished-falling="onFinishFalling"
                  :key="block.id">
    </FallingBlock>
  </section>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import {
  INITIALIZE_FALLING_BLOCKS,
  MOVE_LEFT,
  MOVE_RIGHT,
  ITERATION_COUNT_INCREASING,
  TIMEOUT_STEP_DECREASING,
  INITIAL_TIMEOUT,
} from '@/constants';
import FallingBlock from './FallingBlock.vue';

export default {
  name: 'Dropbox',
  components: {
    FallingBlock,
  },
  data() {
    return {
      timeOut: INITIAL_TIMEOUT,
      iterationCounter: 0,
    };
  },
  computed: {
    fallingBlocks() {
      return this.$store.state.fallingBlocks;
    },
  },
  methods: {
    ...mapMutations({
      initializeFallingBlocks: INITIALIZE_FALLING_BLOCKS,
      moveBlockRight: MOVE_RIGHT,
      moveBlockLeft: MOVE_LEFT,
    }),
    ...mapState({
      isGameOver: (state) => state.isGameOver,
    }),
    onKeyDown(evt) {
      if (evt.keyCode === 39) this.moveBlockRight();
      if (evt.keyCode === 37) this.moveBlockLeft();
    },
    onFinishFalling() {
      // eslint-disable-next-line no-plusplus
      this.iterationCounter++;
      if (this.iterationCounter === ITERATION_COUNT_INCREASING) {
        this.timeOut -= TIMEOUT_STEP_DECREASING;
        this.iterationCounter = 0;
      }

      if (this.isGameOver) {
        this.timeOut = INITIAL_TIMEOUT;
        this.iterationCounter = 0;
      }
    },
  },
  beforeMount() {
    this.initializeFallingBlocks();
    window.addEventListener('keydown', this.onKeyDown);
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.onKeyDown);
  },
};
</script>

<style lang="scss" scoped>
.dropbox {
  height: 65%;
  width: 100%;
  position: relative;
}
</style>
