let btn = document.querySelector('.nav-menu-btn')
let nav_list2 = document.querySelectorAll('.list-link2')
let nav = document.getElementById('nav2')
let count = 0;
let background_array = ['lime','red']
let c = 0;
//event listener to toggle the side-menu
 clickMe = () =>{
    c++
    btn.style=`background-color:${background_array[[1,0][c%2]]}`
        btn.classList.toggle('color-origin')
        nav_list2.forEach((item, i) => {
            setTimeout(() => {
                let list = item.parentElement.classList
                list.toggle('pop-out')
            }, 250 * i)
        })
}


//event listener on resize
window.addEventListener('resize', (e) => {
    let container = e.target;
    if (container.innerWidth > 750) {
        nav_list2.forEach((item) => {
            let list = item.parentElement.classList
                list.remove('pop-out')
                btn.style.background = 'red'
                list.add('hiding')
                c=0;
        })
    } 
})