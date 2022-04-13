const addUser = document.querySelector(".adduser");
const ul_list = document.querySelector(".list")
const create_Li = li => {
    const user_detail = `
    <li class="li_list ">
    <span>${li}</span>
    <a href=""><i class="fa-solid fa-trash remove"></i></a>
    </li>`;
    
    ul_list.innerHTML += user_detail;
    console.log(user_detail);
}
let input = document.getElementById('username');
input.addEventListener('submit', e => {
    e.preventDefault();
    const li = addUser.add.value.trim();
    if (li.lenght) {
        create_Li(li);
        addUser.reset();
    }
});
let ullist=document.getElementById('list')
ullist.addEventListener('click', e => {
    if (e.target.classList.contains("remove")) {
        e.target.parentElement.remove();
    };
})