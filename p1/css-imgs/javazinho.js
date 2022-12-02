class Mobilenavbar{
    constructor(mobileMenu, navList,navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.handleclick = this.handleClick.bind(this);
    }

    animeteLinks(){
        this.navLinks.forEach((link ,index) =>{
        link.style.animation
        ?(link.style.animation = "")
    :(link.style.animation = `navLinkFade 0.5 ease forwards0.3s  ${index / 7 + 0.3}`);
        });
    }

    handleClick(){
        this.navlist.activeclass.toggle(this.activeclass);
        this.mobilemenu.classlist.toggle(this.activeclass);
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

const Mobilenavbar = new Mobilenavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);

Mobilenavbar.init();