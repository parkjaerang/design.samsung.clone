window.addEventListener("DOMContentLoaded", () => {
    //variable definition
    const search_box = document.querySelector(".search_box");
    const search_icon = document.querySelector(".search_icon");
    const ham_menu = document.querySelector(".ham_menu");
    const menu_icon = document.querySelector(".menu_icon");
    const exit = document.querySelectorAll(".exit");
    const mainmenu = document.querySelector(".header_i nav");
    const menu_list = document.querySelectorAll(".menu_m li");
    const preview_overlay = document.querySelectorAll(".banner_preview ul li .overlay");
    const preview_list = document.querySelectorAll(".banner_preview ul li");

    // search click => searchbox open
    search_icon.addEventListener("click", () => {
        ham_menu.classList.remove("show");
        search_box.classList.add("show");
        mainmenu.classList.add("hide");
        document.body.classList.add("no-scroll");
    });

    // menu click => menubox open
    menu_icon.addEventListener("click", () => {
        ham_menu.classList.add("show");
        search_box.classList.remove("show");
        mainmenu.classList.add("hide");
        document.body.classList.add("no-scroll");
    });
    
    // X click => box close
    exit.forEach(x => {
        x.addEventListener("click", () => {
            search_box.classList.remove("show");
            ham_menu.classList.remove("show");
            mainmenu.classList.remove("hide");
            document.body.classList.remove("no-scroll");
        });
    });

    // ham_menu li mouseover => zoom
    menu_list.forEach(li => {
        li.addEventListener("mouseover", () => {
            li.classList.add("zoom");
        }),

        li.addEventListener("mouseout", () => {
            li.classList.remove("zoom");
        })
    });

    //banner preview mouseover => overlay add  active class
    preview_overlay.forEach(li => {
        li.addEventListener("mouseover",() => {
            li.classList.add("active");
        }),
        
        li.addEventListener("mouseout",() => {
            li.classList.remove("active");
        });
    })

    //banner preview mouseover => list zoom in/out
    preview_list.forEach(li => {
        li.addEventListener("mouseover",() => {
            li.classList.add("mouseover");
            li.classList.remove("mouseout");
        }),
        
        li.addEventListener("mouseout",() => {
            li.classList.remove("mouseover");
            li.classList.add("mouseout");
        });
    })

});
