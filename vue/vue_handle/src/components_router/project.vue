<template>
    <div>
      <h2>这里是project</h2>
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
        console.log(sessionStorage.getItem("projectname"))
        if(sessionStorage.getItem("projectname")){
          next()
        }else{
          let cb=()=>{
            return new Promise((resolve,reject)=>{
              setTimeout(()=>{
                  sessionStorage.setItem("projectname",JSON.stringify({
                    obj:{
                      age:234
                    }
                  }))
             
                  resolve("/project")
                },3000)
            })
          }
          next({path:"/loading",query:{cb}})
         
        }
          
      },
      created(){
        this.name=JSON.parse(sessionStorage.getItem("projectname"))
      },
      beforeDestroy () {
          // sessionStorage.removeItem("projectname")
      }
      
  }
</script>