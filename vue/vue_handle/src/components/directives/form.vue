<template>
  <ul>
    <li>
      <label for="name">姓名：</label>
      <input type="text" id="name" v-test:name.require="rules" v-model="formData.name">
    </li>
    <li>
      <label for="password">密码：</label>
      <input type="text" id="password"  v-test:password.require="rules" v-model="formData.password">
    </li>
    <li>
      <label for="age">年龄：</label>
      <input type="text" id="age" v-test:age="rules" v-model="formData.age">
    </li>
    <li>
      <label for="email">邮箱：</label>
      <input type="text" id="email" v-test:email="rules" v-model="formData.email">
    </li>
    <li><button @click="submit">点击</button></li>
  </ul>
</template>
<script>
  export default {
    data() {
      return {
        formData:{
          name:"",
          password:"",
          age:"",
          email:""
        },
        rules:{
          name:{
            reg:/[\u4e00-\u9fa5]/,
            msg:"请正确输入您的姓名",
            state:false
          },
          password:{
            reg:/^[A-Za-z0-9]{6,12}$/,
            msg:"请正确输入您的密码",
            state:false
          },
          age:{
            reg:/^[0-9]*$/,
            msg:"请正确输入您的年龄",
            state:false
          },
          email:{
            reg:/^[a-zA-Z0-9]+@[a-z0-9]+\.[a-z]{2,3}$/,
            msg:"请正确输入您的邮箱",
            state:false
          }
        }
      }
    },
    methods: {
      submit(){
        let {name,password,age,email}=this.rules
        if(name.state&&password.state&&age.state&&email.state){
          console.log(this.formData)
        }else{
          alert("请填写")
        }
       
      }
    },
    mounted() {
      console.log("child-mounted")
    },
    directives: {
      test:{
        inserted(el,binding){
          // 清除dom
          let clearDom=function(){
            let $el=el.parentNode.getElementsByTagName("b")[0]
            if($el){
              el.parentNode.removeChild($el)
            }
            
          }
          // 创建节点
          let creatDom=function(msg,state){
            clearDom()
            let $el=document.createElement("b")
            $el.innerHTML=msg
            if(state){
                $el.style.color="green"
            }else{
              $el.style.color="red"
            }
            el.parentNode.appendChild($el)
          }


          // 检测是否为空

          let testNull=function(){
            if(el.value){
              testReg()
            }else{
              testRequire()
            }
          }

          // 检测是否为必填项

          let testRequire=function(){
            if(binding.modifiers.require){
              creatDom("不能为空",false)
              binding.value[binding.arg].state=false
            }else{
              clearDom()
            }
          }
          // 正则检验
          let testReg=()=>{
            let rulesArg=binding.value[binding.arg]
            console.log(rulesArg)
            if(rulesArg.reg.test(el.value)){
              // console.log("ok")
              creatDom("ok",true)
              rulesArg.state=true
            }else{
              creatDom(rulesArg.msg,false)
              rulesArg.state=false
              // console.log("error")
            }
          }

          el.onchange=()=>{
            testNull()
          }
        }
      }
    }
  }
</script>
<style scoped>
 ul{
   list-style: none
 }
</style>