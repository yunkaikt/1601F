<template>
  <div>
    <p> 总价：{{total}}</p>
  </div>
</template>
<script>
export default {
  props:["list"],
  data() {
    return {
    
    }
  },
  computed: {
    total(){
      var num=0
      this.list.forEach((i)=>{
          if(i.state){
            num+=i.quantity*i.vip_price/100
          }
        });
        return num
    }
  }
}
</script>
<style scoped>
</style>

