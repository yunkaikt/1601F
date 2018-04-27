function $ajax(option){
    let {
      url,
      type,
      data,
    }=option
    return new Promise((resolve,reject)=>{
      var xhr=new XMLHttpRequest()
      
      if(type=="post"){
        xhr.open(type,url)
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        xhr.send(data) 
      }else{
        if(data){
          Object.entries(data).forEach(function(i,index) {
            if(index==0){
              url+=`?${i[0]}=${i[1]}`
            }else{
              url+=`&${i[0]}=${i[1]}`
            }
          }, this);
        }
        xhr.open(type,url)
        xhr.send() 
      }

      xhr.onreadystatechange=function(){
        if(xhr.readyState==4){
          if(xhr.status=="200"){
           resolve(JSON.parse(xhr.responseText)) 
          }else{
            reject("status="+xhr.status)
          }
        }
      }
    })
}
export default $ajax