<template>
 <div class='order-item-wrap'>
   <div class='order-item-head'>
     <div class='order-item-title'>
       <span></span>
       <span>充值中心</span>
       <span>&#62;</span>
     </div>
     <div class='order-item-status'>
       充值成功
     </div>
   </div>
   <div class='order-item-body'>
     <div class='order-item-img'>

     </div>
     <div class='order-item-info'>
       <div class='title'>
         适用神州17.3寸战神G7-CU G8-CU7NK/NA游戏本键游戏本键游戏本键游戏本键
       </div>
       <ul class='properties'>
         <li>充值号码：17600318888</li>
         <li>充值面额：10元</li>
       </ul>
     </div>
     <div class='order-item-price'>
       <div class='price'>
         ￥10.00
       </div>
       <div class='number'>
         X1
       </div>
     </div>
   </div>
   <div class='order-item-total'>
     <span class='total'>总价：￥17.80，优惠￥4.33</span>
     <span class='pay'>实付款：￥13.47</span>
   </div>
   <div class='order-item-btn'>
     <div
       class='button'
       @click='alertMsg("加入购物车")'
     >
       加入购物车
     </div>
     <div
       class='button'
       @click='alertMsg("查看物流")'
     >
       查看物流
     </div>
     <div
       class='button'
       @click='alertMsg("加入购物车")'
     >
       评价
     </div>
   </div>
 </div>
</template>

<script setup>
const alertMsg = msg => {
  alert(msg)
}
</script>

<style lang='scss' scoped>
.order-item-wrap {
  background-color: #fff;
  border-radius: 10px;
  padding: 13px;
  margin-bottom: 10px;

  &:nth-last-child(1) {
    margin: 0;
  }

  .order-item-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 15px;
    color: #666;
    margin-bottom: 20px;

    .order-item-title {
      span {
        margin-right: 8px;
        font-size: 15px;
        vertical-align: middle;

        &:nth-child(1) {
          background-color: #8a2be2;
          display: inline-block;
          width: 16px;
          height: 16px;
        }

        &:nth-last-child(1) {
          margin: 0;
          color: #cbcbcb;
        }
      }
    }

    .order-item-status {
      color: #f98b4f;
      font-size: 12px;
    }
  }

  .order-item-body {
    overflow: hidden;

    & > div {
      float: left;
    }

    .order-item-img {
      width: 90px;
      height: 90px;
      border-radius: 3px;
      background-color: #E83E61;
    }

    .order-item-info {
      margin: 6px 0 20px 14px;

      .title {
        font-size: 12px;
        color: #666;
        max-width: 170px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .properties {
        font-size: 9px;
        color: #999;
        list-style: none;
        margin: 5px 0 0;
        padding: 0;

        li {
          margin-bottom: 3px;

          &:nth-last-child(1) {
            margin: 0;
          }
        }
      }
    }

    .order-item-price {
      margin-top: 6px;

      .price {
        font-size: 9px;
        color: #666;
      }

      .number {
        color: #999;
        font-size: 9px;
        text-align: right;
        margin-top: 8px;
      }
    }
  }

  .order-item-total {
    text-align: right;
    margin-bottom: 26px;

    .total {
      font-size: 9px;
      color: #999;
    }

    .pay {
      font-size: 10px;
      color: #777;
      margin-left: 7px;
    }
  }

  .order-item-btn {
    display: flex;
    justify-content: flex-end;

    .button {
      width: 85px;
      height: 28px;
      border-width: 1px;
      border-style: solid;
      border-radius: 15px;
      border-color: #bbb;
      color: #bbb;
      font-size: 12px;
      line-height: 28px;
      text-align: center;
      margin-right: 9px;

      &:nth-last-child(1) {
        border-color: #f98b4f;
        color: #f98b4f;
        margin: 0;
      }
    }
  }
}
</style>
