

var data={
  name:"zhangsan",
}

// document.getElementsByTagName("img")[0].src="./static/logo.png"

var xhr=new XMLHttpRequest()
// xhr.open("get","http://localhost:3000/api/data")
xhr.open("get","http://localhost:8080/apis/data")
xhr.send()
xhr.onreadystatechange=function(){
  if(xhr.readyState==4){
    if(xhr.status==200){
      // console.log(xhr.responseText)
      var data=JSON.parse(xhr.responseText)
      console.log(data)
      // domHandle(data)
    }
  }
}


export default data