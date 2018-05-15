<template>
    <div>
      <h2>这里是routerPage</h2>
        {{name.obj.age}}
    </div>
</template>
<script>
  export default {
      data(){
        return {
          name:null
        }
      },
      
      beforeRouteEnter(to,from,next){

        console.log("beforeRouteEnter1")
       
        // console.log(to)
        // console.log(from)
        // console.log(this.name)
        // axios.get("/").then(()=>{
        //   next(vm=>{
        //     console.log(vm)
        //   })
        // })
        setTimeout(()=>{ 
          // this.name={
          //   obj:{
          //     age:23
          //   }
          // }
          sessionStorage.setItem("name",JSON.stringify({
              obj:{
                age:23
              }
            }))
          next()
        },5000)

        // next({path:"/parent"})
        
      },
      created(){
        console.log("created2")
        this.name=JSON.parse(sessionStorage.getItem("name"))
        // setTimeout(()=>{
        //     this.name={
        //       obj:{
        //         age:23
        //       }
        //     }
        // },2000)
      },
       mounted () {
         console.log("mounted3")
       }
  }
</script>