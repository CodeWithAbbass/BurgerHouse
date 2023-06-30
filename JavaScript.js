const Sidebar = document.querySelector('.Sidebar');
const SidebarBtn = document.querySelector('.header_Hamburger');
const BarsBtn = document.querySelector('.Hamburger_Bars');
const CrossBtn = document.querySelector('.Hamburger_Cross');
SidebarBtn.addEventListener('click', function () {
    if (Sidebar.style.width === '0px' || Sidebar.style.width === '') {
        SidebarBtn.style.transform = 'translateX(-230px)';
        Sidebar.style.width = '300px';
        CrossBtn.classList.toggle('Hamburger_Active');
        BarsBtn.classList.toggle('Hamburger_Active');
    } else {
        CrossBtn.classList.toggle('Hamburger_Active');
        BarsBtn.classList.toggle('Hamburger_Active');
        SidebarBtn.style.transform = 'translateX(0px)';
        Sidebar.style.width = '0px';
    }
})


let slideIndex = 0;
showSlides();

function showSlides() {
    // let i = 0;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (slideIndex < slides.length) {
        if (slideIndex !== 0) {
            dots[slideIndex - 1].classList.remove('Active_Dot');
            slides[slideIndex - 1].classList.remove('Active_Slide');
        } else {
            dots[slideIndex].classList.remove('Active_Dot');
            slides[slideIndex].classList.remove('Active_Slide');
        }
        dots[slideIndex].classList.toggle('Active_Dot');
        slides[slideIndex].classList.toggle('Active_Slide');
        slideIndex++;
    } else {
        dots[slideIndex - 1].classList.toggle('Active_Dot');
        slides[slideIndex - 1].classList.toggle('Active_Slide');
        slideIndex = 0;
        dots[slideIndex].classList.toggle('Active_Dot');
        slides[slideIndex].classList.toggle('Active_Slide');
    }


    setTimeout(showSlides, 4000); // Change Slide every 4 seconds
}

