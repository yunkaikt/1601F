<template>
    <div v-ons:click="fn">
      <p >{{name}}</p>
      <p>{{num}}</p>
       <b v-texts.a="name"></b>
      <button v-ons:click.once="fn">点击</button>
      <Child /> 
    </div>
</template>
<script>
  import Child from "./child"
  export default{
    data(){
      return {
        name:"zhangsan",
        num:0
      }
    },
  
   mounted () {
      console.log("index-mounted")
   },
   methods:{
    fn(){
      this.num++
      // this.name="lisi"
    }
   },
   directives:{
      bb:{
        bind(el,binding){
          // console.log("bb")
          // console.log(el.parentNode)
          console.log("parent-bind")
        },
        inserted (el) {
          // console.log(el.parentNode)
          //  console.log("parent-inserted")
          el.onclick=function(){
            console.log("ahhaha")
          }
        },
        update(el){
          // console.log("parent-update")
          console.log(el.getElementsByTagName("div"))
        },
        componentUpdated(el){
          console.log(el.getElementsByTagName("div"))
          // console.log("parent-componentUpdated")
        },
        unbind (){
          el.onclick=null
        }
      },
      texts:{
        bind(el,binding){
          console.log(binding)
          el.innerText=binding.value
        },
        componentUpdated(el,binding){
          console.log(33)
          el.innerText=binding.value
        }
      },
      ons:{
        bind(el,binding){
          console.log(binding.modifiers)
          if(binding.modifiers.stop){
            el.onclick=(e)=>{
              e.stopPropagation();
              binding.value()
            }
          }else if(binding.modifiers.once){
            var state=true
              
              el.onclick=()=>{
                if(state){
                  binding.value()
                  state=false
                }else{
                  el.onclick=null
                }
              }
           
            
          }
          
        }
      }
    },
   components: {
    Child
   }

  }

</script>
<style scoped>
.mainS{
  border: 1px solid black;
  margin:50px
}
</style>