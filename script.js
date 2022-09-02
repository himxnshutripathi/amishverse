const bttn = document.querySelector('.bttn');
bttn.onmousemove = function(e){
    const x = e.pageX - bttn.offsetLeft;
    const y = e.pageY - bttn.offsetTop;

    bttn.style.setProperty('--x', x+'px');
    bttn.style.setProperty('--y', y+'px');
}