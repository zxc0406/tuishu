window.onload = function () {
    let classMenu = document.getElementsByClassName('class');
    for (let i=0;i<classMenu.length;i++) {
        classMenu[i].addEventListener("click",function () {
            for(let j=0;j<classMenu.length;j++){
                classMenu[j].classList.remove('selected')
            }
            event.currentTarget.classList.add('selected');
        })
    }
}
