<template>
  <div class='home-wrap'>
    <div class='banner'>

    </div>
    <div class='category'>
      <category-item
        v-for='category in categoryList'
        :key='category.title'
        :img='category.img'
        :title='category.title'
      />
    </div>
    <div class='headline'>
      <div class='headline-img'>
        <img :src='getQiniuImgUrl("headline.png")' alt='淘宝头条'>
      </div>
      <div class='headline-item-group'>
        <headline-item
          v-for='headline in headlineList'
          :key='headline.content'
          :type='headline.type'
          :content='headline.content'
        />
      </div>
    </div>
    <div class='recommend'>
      <div class='recommend-main-group'>
        <div class='recommend-main-item-wrap'>
          <div class='recommend-main-item-title'>
            “路转粉”每一秒都在发生
          </div>
          <div class='recommend-main-item-content'>
            败家主播天天有，边看直播边剁手
          </div>
        </div>
        <div class='recommend-main-item-wrap'>
          <div class='recommend-main-item-title'>
            主播优选
          </div>
          <div class='recommend-main-item-content'>
            百搭老爹鞋
          </div>
        </div>
      </div>
      <div class='recommend-group'>
        <recommend-item
          v-for='recommend in recommendList'
          :key='recommend.title'
          :title='recommend.title'
          :content='recommend.content'
        />
      </div>
      <div class='recommend-info'>
        <span class='recommend-info-left'>
          <span style='color: #E83E61;'>
            主播推荐
          </span>
         品质好货，不能错过的亲民价
        </span>
        <span class='recommend-info-right'>
          抢福利
          <span style='color: #cacaca'>
            &#62;
          </span>
        </span>
      </div>
    </div>
    <div class='bargain'>
      <div class='bargain-head'>
        <div class='bargain-head-title'>
          <img :src='getQiniuImgUrl("bargain.png")' alt='特价好货'>
          <span>特价好货</span>
        </div>
        <div class='bargain-head-more'>
          更多 >>
        </div>
      </div>
      <div class='bargain-group-wrap'>
        <swiper
          :modules='[FreeMode]'
          :slides-per-view='3.5'
          :space-between='7'
          free-mode
        >
          <swiper-slide
            v-for='item in 7'
            :key='item'
          >
            <bargain-item />
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class='hot'>
      <div class='hot-head'>
        <img :src='getQiniuImgUrl("hot.png")' alt='热卖排行'>
      </div>
      <div class='hot-group'>
        <hot-item
          v-for='hot in hotList'
          :key='hot.title'
          :title='hot.title'
          :content='hot.content'
        />
      </div>
    </div>
    <div class='like'>
      <div class='like-head'>
        <img :src='getQiniuImgUrl("like.png")' alt='猜你喜欢'>
      </div>
      <div class='like-group'>
        <like-item
          v-for='like in likeList'
          :key='like.id'
          :data='like'
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import CategoryItem from '@/components/CategoryItem.vue'
import HeadlineItem from '@/components/HeadlineItem.vue'
import RecommendItem from '@/components/RecommendItem.vue'
import BargainItem from '@/components/BargainItem.vue'
import HotItem from '@/components/HotItem.vue'
import LikeItem from '@/components/LikeItem.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode } from 'swiper'
import { getQiniuImgUrl } from "@/utils/utils"
import axios from 'axios'

import 'swiper/scss'
import 'swiper/scss/free-mode'

const categoryList = [
  {
    img: getQiniuImgUrl('cloth.png'),
    title: '服装城'
  },
  {
    img: getQiniuImgUrl('makeup.png'),
    title: '美妆馆'
  },
  {
    img: getQiniuImgUrl('market.png'),
    title: '慧科超市'
  },
  {
    img: getQiniuImgUrl('global.png'),
    title: '全球购'
  },
  {
    img: getQiniuImgUrl('lighting.png'),
    title: '闪购'
  },
  {
    img: getQiniuImgUrl('team.png'),
    title: '团购'
  },
  {
    img: getQiniuImgUrl('funny.png'),
    title: '有趣'
  },
  {
    img: getQiniuImgUrl('seckill.png'),
    title: '秒杀'
  }
]

const headlineList = [
  {
    type: '通知',
    content: '商城成功孵化，首次测试，希望大...'
  },
  {
    type: '公告',
    content: '庆祝商城首次成功上线，老板请客...'
  }
]

const recommendList = [
  {
    title: '美妆心得',
    content: '泰国羽翼粉饼'
  },
  {
    title: '男人装',
    content: '作梦家羽绒服'
  },
  {
    title: '美食美味',
    content: '张鸭子休闲盒装'
  }
]

const hotList = [
  {
    title: '宅男必备',
    content: '剩余 99 件'
  },
  {
    title: '团购好货',
    content: '夏末新品清仓'
  },
  {
    title: '金秋丰收',
    content: '喜迎甜蜜来袭'
  },
  {
    title: '天天特惠',
    content: '智能穿戴'
  }
]

const likeList = ref(null)

onMounted(() => {
  axios.get('/getLikeList')
    .then(({ data }) => {
      likeList.value = data
    })
})
</script>

<style lang='scss' scoped>
.banner {
  width: 100%;
  height: 200px;
  background-color: blueviolet;
}

.category {
  box-sizing: border-box;
  padding: 6.5px 17.5px;
  height: 148px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #fff;
}

.headline {
  box-sizing: border-box;
  height: 60px;
  padding: 12px 0 12px 12px;
  background: url('http://qz78u325z.hb-bkt.clouddn.com/headline_background.png?imageView2/0/format/webp/q/75') right no-repeat, #fff;
  background-size: 99px 60px;
  overflow: hidden;
  margin-bottom: 26px;

  & > div {
    display: inline-block;
    vertical-align: middle;
  }

  .headline-img {
    line-height: 35px;
    height: 35px;
    margin-right: 17.5px;

    img {
      width: 35px;
    }
  }
}

.recommend {
  position: relative;
  background-color: #fff;
  margin-bottom: 10px;

  &:before {
    width: 116.5px;
    height: 29px;
    content: '';
    display: block;
    background: url('http://qz78u325z.hb-bkt.clouddn.com/recommend.png?imageView2/0/format/webp/q/75') 0 0 no-repeat;
    background-size: 116.5px 29px;
    position: absolute;
    top: -14.5px;
    left: -16.5px;
  }

  .recommend-main-group {
    display: flex;

    .recommend-main-item-wrap {
      height: 125px;
      box-sizing: border-box;
      padding-left: 12px;
      color: #fefefe;

      &:nth-child(1) {
        width: 250px;
        background-color: cornflowerblue;
      }

      &:nth-child(2) {
        width: 125px;
        background-color: crimson;
      }

      .recommend-main-item-title {
        margin-top: 85px;
        font-size: 14px;
      }

      .recommend-main-item-content {
        font-size: 12px;
      }
    }
  }

  .recommend-group {
    display: flex;
    border-bottom: 1px solid #f1f1f1;
  }

  .recommend-info {
    padding: 12px 10px;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    line-height: 18px;
  }
}

.bargain {
  padding: 10px 12.5px;
  background-color: #fff;
  margin-bottom: 10px;

  .bargain-head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 7.5px;

    .bargain-head-title {
      img {
        width: 13px;
        vertical-align: middle;
        margin-right: 4px;
      }

      span {
        vertical-align: middle;
        font: {
          size: 12px;
          family: Adobe Heiti Std R, sans-serif;
        }
      }
    }

    .bargain-head-more {
      font-size: 10px;
      color: #888;
    }
  }
}

.hot {
  background-color: #fff;
  margin-bottom: 10px;

  .hot-head {
    line-height: 36px;
    border-bottom: 1px solid #ededed;
    text-align: center;

    img {
      width: 230px;
      vertical-align: middle;
    }
  }

  .hot-group {
    background-color: #fff;
    display: grid;
    /*这里设置每一行的高度*/
    grid-template-rows: 111px 111px;
    /*这里设置每一列的宽度*/
    grid-template-columns: 153px 111px 111px;
    /* 这里把第一列的两个单元格合并，变成左边那个大的盒子
       以及把第一行的后面两个单元格合并，变成右上角的那个大盒子
       剩下的就是下面的两个了，这个只管布局，不管尺寸*/
    grid-template-areas:
      'a b b'
      'a c d';
  }
}

.like {
  .like-head {
    line-height: 42px;
    background-color: #fff;
    text-align: center;

    img {
      width: 230px;
      vertical-align: middle;
    }
  }

  .like-group {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 6px;
  }
}
</style>
