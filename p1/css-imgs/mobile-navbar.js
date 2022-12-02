MobileNavbar==this
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
    }

    animeteLinks(){
        this.navLinks.forEach((link ,index) =>{
        link.style.animation
        ?(link.style.animation = "")
    :(link.style.animation = `navLinkFade 0.5 ease forwards0.3s  ${index / 7 + 0.3}`);
        });
    }

    handleClick(){
        this.navList.activeClass.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animeteLinks();
    }

    addClikEvent(){
        this.mobileMenu.addClikEvent("click", this.handleClick);
    }

    init(){
        if(this.mobileMenu){
            this.addClikEvent();
        }
        return this;
    }
}

const MobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);

Mobilenavbar.init();