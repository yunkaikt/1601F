<template>
  <div class="mainS">
     <!-- <Childs :els="els"/> -->
     <Childs>
       <template slot="head">
          <aside>嘿哈嘿哈</aside>
       </template>
        <template scope="props">
            <p>{{props.text}}</p>
            <h5>嘿嘿</h5>
        </template>
     </Childs>
  </div>
</template>
<script>
export default{
  data(){
    return {
      els:"<div>234567</div>",
      name:"父组件name"
    }
  },
  methods:{
   
  }
 

}

</script>
<style scoped>
.mainS{
  border: 1px solid black;
  margin:50px
}
</style>