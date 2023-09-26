let btn = document.querySelector('.nav-menu-btn')
let nav_list = document.querySelectorAll('.list-link2')
let nav = document.getElementById('nav2')
let count = 0;


//event listener to toggle the side-menu
let myfunc = (c) =>{ 
    btn.addEventListener('click', (e) => {
    c++
    console.log(c)

    if (c % 2 != 0) {
        e.target.style = "background:lime;transition:.5s"
        nav_list.forEach((item, i) => {
            setTimeout(() => {
                let list = item.classList
                list.remove('hiding')
                list.add('pop-out')
            }, 250 * i)
        })
    }
    else {
        e.target.style = "background:red;transition:.5s"
        nav_list.forEach((item, i) => {
            setTimeout(() => {
                let list = item.classList
                list.remove('pop-out')
                list.add('hiding')
            }, 250 * i)
        })
    }
})

}
myfunc(count)
//event listener on resize
window.addEventListener('resize', (e) => {
    let container = e.target;
    if (container.innerWidth > 750) {
        nav_list.forEach((item) => {
            let list = item.classList
            list.remove('pop-out')
            list.add('hiding')
        })
    }
    
})
