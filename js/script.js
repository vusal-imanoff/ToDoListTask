var btn=document.querySelector(".btn")
btn.addEventListener("click",function(e) {
    e.preventDefault()
    var user=document.getElementById("user_name").value
    document.getElementById("user_name").value=" "
    var li=document.createElement("li")
    li.classList.add("li_list")
    var i = document.createElement("i")
    i.classList.add("fa-solid")
    i.classList.add("fa-trash")
    i.classList.add("remove")
    
    li.innerHTML=`<span>${user}</span>`
    li.appendChild(i);
    var ul=document.querySelector(".list")
    ul.appendChild(li)
    i.addEventListener("click",function(e){

        if(confirm("are you sure")){

            ul.removeChild(e.target.parentElement)
        }
        
    })
})
