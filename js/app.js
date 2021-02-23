


(function(){

  document.querySelector("#btn-hombre").addEventListener("click", CargarUsuario)


  function CargarUsuario(){
  
  
   const xhr = new XMLHttpRequest;
  
  
   xhr.open("GET", "https://randomuser.me/api/?gender=male&nat=ES", true )
  
  
   xhr.onload = function(){
  
      if(this.status === 200){
  
  
          const user = JSON.parse(this.responseText)
  
          
          let html = ""
  
            html+= `
            <img src="${user.results[0].picture.medium}" alt="ramdon"  width="150px" height="150px" > <br>
             genero : ${user.results[0].gender} <br>
             Pais : ${user.results[0].location.country} <br>
             Nombre : ${user.results[0].name.first} ${user.results[0].name.last} <br>
             email :  ${user.results[0].email} <br>
             phone : ${user.results[0].phone}
  
            
            `  
  
              document.querySelector("#resultado").innerHTML = html
  
  
      }
   }
  
   xhr.send()
  
  }
  
  document.querySelector("#btn-mujer").addEventListener("click", CargarUsuario2)
  
  function CargarUsuario2(){
  
  
      const xhr = new XMLHttpRequest;
     
     
      xhr.open("GET", "https://randomuser.me/api/?gender=female&nat=ES", true )
     
     
      xhr.onload = function(){
     
         if(this.status === 200){
     
     
             const user = JSON.parse(this.responseText)
  
             let html = ""
     
               html+= `
                <img src="${user.results[0].picture.medium}" alt="ramdon"  width="150px" height="150px"; > <br>
                genero : ${user.results[0].gender} <br>
                Pais : ${user.results[0].location.country} <br>
                Nombre : ${user.results[0].name.first} ${user.results[0].name.last} <br>
                email :  ${user.results[0].email} <br>
                phone : ${user.results[0].phone}
     
               
               `  
     
                 document.querySelector("#resultado").innerHTML = html
     
     
         }
      }
     
      xhr.send()
     
     }


}())

