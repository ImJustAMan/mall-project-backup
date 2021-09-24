<template>
  <div class='hot-item-wrap'>
    <div class='hot-item-text'>
      <div class='hot-item-title'>
        {{ title }}
      </div>
      <div class='hot-item-content'>
        {{ content }}
      </div>
    </div>
    <div class='hot-item-img'>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  content: String,
  img: String
})
</script>

<style lang='scss' scoped>
@mixin wh($w, $h) {
  width: $w;
  height: $h;
}

.hot-item-wrap {
  .hot-item-text {

    .hot-item-title {
      font-size: 15px;
    }

    .hot-item-content {
      font-size: 13px;
      color: #CBCBCB;
    }
  }

  @for $i from 1 through 4 {
    &:nth-child(#{$i}) {
      @if ($i == 1) {
        grid-area: a;
      } @else if ($i == 2) {
        grid-area: b;
      }

      @if ($i == 1 or $i == 3) {
        border-right: 1px solid #ededed;
      } @else if ($i == 2) {
        border-bottom: 1px solid #ededed;
      }

      @if ($i == 2) {
        display: flex;
      }

      .hot-item-text {
        @if ($i == 1) {
          margin: 26px 0 13px 18px;
        } @else if ($i == 2) {
          margin: 26px 0 0 9px;
        } @else {
          margin: 10px 0 0 10px;
        }

        .hot-item-title {
          @if ($i == 1) {
            color: #FF6969;
          } @else if ($i == 2) {
            color: #696DFF;
          } @else if ($i == 3) {
            color: #FFBE69;
          } @else {
            color: #44F3F9;
          }
        }
      }

      .hot-item-img {
        @if ($i == 1) {
          margin-left: 6px;
          @include wh(121px, 132px);
        } @else if ($i == 2) {
          margin: 4px 0 0 33px;
          @include wh(75px, 94px);
        } @else if ($i == 3) {
          @include wh(57px, 51px);
        } @else {
          @include wh(39px, 52px);
        }

        @if ($i == 3 or $i == 4) {
          margin: 0 auto;
        }
        text-align: center;
        background-color: #E83E61;
      }
    }
  }
}

</style>
