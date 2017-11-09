/**
 * Created by Alex on 15.10.2017.
 */
let header_div=document.getElementsByTagName('header')[0];
///console.dir(header_div);

window.addEventListener('scroll', function() {
   // console.log(getComputedStyle(header_div).height);
    //console.log(window.pageYOffset);
    let top = getComputedStyle(header_div);
    if (window.pageYOffset > parseInt(getComputedStyle(header_div).height)) {
        header_div.classList.remove('scrol1');
        header_div.classList.add('scrol');
    }else if (window.pageYOffset <  parseInt(getComputedStyle(header_div).height)) {
        header_div.classList.remove('scrol');
        header_div.classList.add('scrol1');
    }
});