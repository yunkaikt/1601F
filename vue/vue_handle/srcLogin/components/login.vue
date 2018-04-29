<template>

    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm login">
        <el-form-item label="用户名" prop="name">
          <el-input v-model.number="ruleForm2.name"></el-input>
        </el-form-item>
      <el-form-item label="密码" prop="pw">
        <el-input type="password" v-model="ruleForm2.pw" auto-complete="off"></el-input>
      </el-form-item>
     
     
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
        <el-button @click="register">注册</el-button>
      </el-form-item>
    </el-form>
</template>

  <script>

    import {mapActions} from "vuex"
    export default {
      data() {
        var checkAge = (rule, value, callback) => {
          if (!value) {
            return callback(new Error('用户名不能为空'));
          }else{
            callback();
          } 
         
          
        };
        var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
           
            callback();
          }
        };
       
        return {
          ruleForm2: {
            pw: '',
            name:""
          },
          rules2: {
            pw: [
              { validator: validatePass, trigger: 'blur' }
            ],
            name: [
              { validator: checkAge, trigger: 'blur' }
            ]
          }
        };
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
                console.log(this.ruleForm2)
                this.axios.get("/api/login",{params:this.ruleForm2}).then((data)=>{
               
                  if(data.data.code=="1001"){
                    console.log(data.data.data.userId)
                    this.setUserId_A(data.data.data.userId)
                    this.$router.push(this.$route.query.url)
                  }
                  
                })
            } else {
              console.log('error submit!!');
              return false;
            }
          });
          
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        },
        ...mapActions([
            "setUserId_A"
        ]),
        register(){
          this.$router.push("/register")
        }
      }
    }
  </script>
  <style scoped>
  .login{
    width: 300px;
    margin:200px auto 0;
  }
  </style>