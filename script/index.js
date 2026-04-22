// 导航栏滚动效果 - 奥迪极简
const navbar = document.getElementById('navbar');
const navLogoBox = document.getElementById('nav-logo-box');
const navLogoText = document.getElementById('nav-logo-text');
const navBrand = document.getElementById('nav-brand');
const navLinks = document.querySelectorAll('.nav-link');
const navCta = document.getElementById('nav-cta');

window.addEventListener('scroll', function() {
    if (window.scrollY > 20) {
        navbar.classList.add('nav-scrolled');
        // 滚动后 - 白底黑字
        navLogoBox.classList.remove('bg-white');
        navLogoBox.classList.add('bg-black');
        navLogoText.classList.remove('text-black');
        navLogoText.classList.add('text-white');
        navBrand.classList.remove('text-white');
        navBrand.classList.add('text-gray-900');
        navLinks.forEach(link => {
            link.classList.remove('text-white/80', 'hover:text-white');
            link.classList.add('text-gray-600', 'hover:text-black');
        });
        navCta.classList.remove('border-white', 'text-white', 'hover:bg-white', 'hover:text-black');
        navCta.classList.add('border-black', 'text-black', 'hover:bg-black', 'hover:text-white');
    } else {
        navbar.classList.remove('nav-scrolled');
        // 未滚动时 - 黑底白字
        navLogoBox.classList.add('bg-white');
        navLogoBox.classList.remove('bg-black');
        navLogoText.classList.add('text-black');
        navLogoText.classList.remove('text-white');
        navBrand.classList.add('text-white');
        navBrand.classList.remove('text-gray-900');
        navLinks.forEach(link => {
            link.classList.add('text-white/80', 'hover:text-white');
            link.classList.remove('text-gray-600', 'hover:text-black');
        });
        navCta.classList.add('border-white', 'text-white', 'hover:bg-white', 'hover:text-black');
        navCta.classList.remove('border-black', 'text-black', 'hover:bg-black', 'hover:text-white');
    }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
