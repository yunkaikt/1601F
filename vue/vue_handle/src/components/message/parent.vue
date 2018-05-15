<template>
    <div class="mainS">
     
        <p>{{name}}</p>
        <Childm :cb="cb" ref="aa"/>
    </div>
</template>
<script>
  export default{
    data(){
      return {
        name:null
      }
    },
    mounted(){
      // 访问组件实例
      // 1、通过children，parent
      // console.log(this.$children[0].name)
      // this.name=this.$children[0].name
      // 2、refs
      // console.log(this.$refs.aa.name)
      // this.name=this.$refs.aa.name


    },
    created () {
        this.$bus.$on("up",(data)=>{
          console.log(data)
          this.name=data
        })
    },
    methods: {
      cb(data){
        console.log(data)
        // this.name=data
      }
    }
  
  }

</script>
<style scoped>
.mainS{
  border: 1px solid black;
  margin:50px
}
</style>