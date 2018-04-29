<template>
    <div>
      加载中。。。。。
    </div>
</template>
<script>
  export default {
      data(){
        return {
          
        }
      },
      created () {
          this.testFn()
      },
      watch:{
        $route(){
          this.testFn()
        }
      },
      methods: {
          testFn(){
             console.log( this.$route.query.cb)
               if(this.$route.query.cb!=undefined){
                  this.$route.query.cb().then((url)=>{
                    this.$router.push(url)
                  })
                }else{
               
                  this.$router.push("/project")
                }
          }
      }
      
  }
</script>