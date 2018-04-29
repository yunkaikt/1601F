<template>
  <div>
      <label>全选：<input type="checkbox" class="every" :checked="totalState" @change="changeFn"/></label>
    <List v-for="(i,index) in list" :key="index" :item="i"></List>
    <Total :list="list"></Total>
  </div>
</template>
<script>
import List from './List'
import Total from './Total'
export default {

  data() {
    return {
      list: [],
      totalState:false,
      totalPrice:0
    };
  },
  components: {
    List,
    Total
  },
  methods: {
      testState(){
        this.totalState=this.list.every((i)=>{
          return i.state
        })
      },
      changeFn(){
        this.totalState=!this.totalState
        if(this.totalState){
          this.list=this.list.map((i)=>{
            i.state=true
            return i
          })
        }else{
          this.list=this.list.map((i)=>{
            i.state=false
            return i
          })
        }
      }
     
  },

  beforeCreate() {
    
    this.$ajax({
      url: "/api/data",
      type: "get"
    }).then(data => {
      this.list=data.map((i)=>{
        i.state=true
        return i
      })
      this.testState()
      console.log(this.list)
    });
   
  },
  mounted () {
      this.$bus.$on("checkChange",()=>{
       
        this.testState()
      })
      this.$bus.$on("deleteItem",(id)=>{
     
       this.list=this.list.filter((i)=>{
      
         return i.id!=id
    
        })
      
      })
  }
};
</script>
<style scoped>
</style>

