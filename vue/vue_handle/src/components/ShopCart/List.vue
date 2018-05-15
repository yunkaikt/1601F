<template>
  <div>
      <div class="product">
      <input type="checkbox" :checked="item.state" @change="changeFn">
        <dl>
            <dt>
                <img :src="item.images.cart" alt="">
            </dt>
            <dd>
                <h4>{{item.name}}</h4>
                <p>{{item.subtitle}}</p>
                <p>单价：{{item.vip_price / 100}}</p>
                <p>
                    <span class="jian"  @click="changeNum('reduce')">-</span>
                    <span class="count">{{item.quantity}}</span>
                    <span class="add" @click="changeNum('add')">+</span>
                </p>
            </dd>
        </dl>
  </div>
  </div>
</template>
<script>
export default {
  props:["item"],
  data(){
      return {
          
      }
  },
//   computed:{
//     everyData(){
//         return this.item
//     }
//   },
  methods:{
    changeFn(){
        this.item.state=!this.item.state
      
        this.$bus.$emit("checkChange")
    },
    changeNum(type){
        if(type=="add"){
            this.item.quantity++
        }else{
            if(this.item.quantity>=2){
                this.item.quantity--
            }else{
                this.$bus.$emit("deleteItem",this.item.id)
            }
           
        }
    }
  }
};
</script>
<style scoped>
body{
    margin: 0;
}
label{
    width: 100%;
    height: 30px;
}
.product,dl {
  display: flex;
  margin: 0;
}
.product{
    padding:10px 0;
    border-bottom: 1px solid #ccc;
}
img {
  width: 100px;
  height: 100px;
}
h4,p{
    margin: 0;
}
h4{
    font-size: 14px;
}
p{
    font-size: 12px;
}
dd p{
    display: flex;
}
.jian,.add{
    width: 40px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border: 1px solid #ccc;
}
.count{
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border: 1px solid #ccc;
}
</style>

