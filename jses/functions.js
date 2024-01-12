import axios from "axios"
import { boxes, color } from "../main"

let big_box = document.querySelector(".big_box")
big_box.style.display = "none"
function reload(arr,place) {
    let box = document.createElement("div")
    let one = document.createElement("div")
    let two = document.createElement("div")
    let osenki = document.createElement("div")
    let two_two = document.createElement("div")
    let kredit = document.createElement("div")
    let summa = document.createElement("div")
    let two_span_div = document.createElement("div")
    let two_span= document.createElement("span")
    let osenki_span= document.createElement("span")
    let kredit_span= document.createElement("span")
    let summa2_span= document.createElement("span")
    let one_img= document.createElement("img")
    let osenki_img= document.createElement("img")

    box.classList.add("box")
    one.classList.add("one")
    two.classList.add("two")
    osenki.classList.add("osenki")
    kredit.classList.add("kredit")
    summa.classList.add("summa")
    two_span.innerHTML = arr.title
    osenki_span.innerHTML = arr.rating
    kredit_span = Math.floor(arr.price /12 ) +"  сум/мес"
    summa2_span.innerHTML = arr.price + "  sum"
    one_img.src = arr.media[0]
    osenki_img.src = "/img and logos/Gold_Star.svg.png"
    osenki_img.classList.add("star")
    osenki_span.classList.add("osenkispan")
    summa2_span.classList.add("sena")
    two_two.classList.add("two_two")
    two_span_div.classList.add("two_span_div")
    


    place.append(box)
    box.append(one,two)
    one.append(one_img)
    two.append(two_span_div,two_two)
    two_span_div.append(two_span)
    two_two.append(osenki,kredit,summa)
    osenki.append(osenki_img,osenki_span)
    kredit.append(kredit_span)
    summa.append(summa2_span)






    box.onclick = () => {
        localStorage.setItem("box", arr.title)
        window.location.href = "http://localhost:5173/pages/element_pages/"
    }

    
}


let types = ["furniture" , "PC","audio" , "TV" ,"kitchen"]
let kateg_ul = document.querySelector(".kateg ul")
let ranbge_input = document.querySelectorAll(".range-input input")
let progres = document.querySelector('.slider .progres')
let inpts = document.querySelectorAll('#ma')
let kateg_color_ul = document.querySelector(".color_kateg ul")
let these = document.querySelector('.these')
let name = document.querySelector('#name_kateg')
let count = document.querySelector('#lenght')
let main = document.querySelector(".main")

let priceGap = 10000;


inpts.forEach((input) => {
    input.oninput = (e) => {
        let min_val = parseInt(inpts[0].value)
        let max_val = parseInt(inpts[1].value)

        if (max_val - min_val >= priceGap) {

            console.log("mathe");

            if (e.target.className === "min_price") {
                ranbge_input[0].value = min_val;
                progres.style.left = (min_val / ranbge_input[0].max) * 100 + "%";
            } else {
                ranbge_input[1].value = max_val;
                progres.style.right = 100 - (max_val / ranbge_input[1].max) * 100 + "%";
            }



        }
        mouse_up_reload()
    }


})


ranbge_input.forEach((input) => {
    input.oninput = (e) => {

        let min_val = parseInt(ranbge_input[0].value)
        let max_val = parseInt(ranbge_input[1].value)

        if (max_val - min_val < priceGap) {
            if (e.target.className === "range-min") {
                ranbge_input[0].value = max_val - priceGap;
            } else {
                ranbge_input[1].value = min_val + priceGap;
            }

        } else {
            inpts[0].value = min_val;
            inpts[1].value = max_val;
            progres.style.left = (min_val / ranbge_input[0].max) * 100 + "%";
            progres.style.right = 100 - (max_val / ranbge_input[1].max) * 100 + "%";
        }
    }

    input.addEventListener('mouseup', function () {
        mouse_up_reload()
    });


})

function mouse_up_reload() {


    axios.get(" http://localhost:8080/goods")
        .then(res => {
            let katalog_type = localStorage.getItem("avazz")

        

            _reload_box(res.data, boxes, katalog_type)


            let how = boxes.childElementCount

            let h11 = document.createElement('h1')
             if (how < 1) { 

                h11.innerHTML = "dannii tovar k sojileniyu ne naiden potomuchto avaz durak"

                boxes.append(h11)

                console.log("monkey");
            } else {
                
                h11.innerHTML = ""
                console.log("money");

            }
 




        })




}

axios.get(" http://localhost:8080/goods")
    .then(res => {


        let color = res.data.filter(obj => obj.colors[0]).map(obj => obj.colors[0]),
            unique_color = color.filter((item, index) => color.indexOf(item) === index);

        /* 
                let katalog_type = localStorage.getItem("reload_katalog_type")
                let type = katalog_type.split(">", 3)
                let uniq_type = type[1].split("<", 2)
        
        
                _reload_box(res.data, these, uniq_type[0]) */

        mouse_up_reload()

        reload_a(unique_color, kateg_color_ul)
    })









function reload_a(arr, place) {


    for (let item of arr) {
        let li = document.createElement('li'),
            a = document.createElement('a')

        a.innerHTML = item
        li.id = item

        li.onclick = () => {

            axios.get(" http://localhost:8080/goods")
                .then(res => {

                    console.log(res.data[0].colors[0], li.id);


                    let katalog_type = localStorage.getItem("avazz")

                    _reload_box_colour(res.data, boxes, katalog_type , li.id)


                    let how_many = document.querySelectorAll(".these .box"),
                        how = how_many.length


                    if (how < 1) {
                        main.style.backgroundImage = "url('/public/icon/Gold_Star.svg.png')"
                        main.style.backgroundPosition = "center"
                        main.style.backgroundRepeat = "no-repeat"

                        console.log("monkey");
                    } else {
                        
                        main.style.backgroundImage = "none"
                        main.style.backgroundPosition = "none"
                        main.style.backgroundRepeat = "none"
                        console.log("money");
                    }


                })
        }


        place.append(li)
        li.append(a)
    }
}



export function _reload_box_colour(arr, place, type, color) {

    place.innerHTML = ""

    arr.forEach((el) => {


        if (el.type === type) {

            if (el.price >= inpts[0].value) {

                if (el.price <= inpts[1].value) {

                    if (el.colors[0] === color || el.colors[1] === color) {


                        let box = document.createElement("div")
                        let one = document.createElement("div")
                        let two = document.createElement("div")
                        let osenki = document.createElement("div")
                        let two_two = document.createElement("div")
                        let kredit = document.createElement("div")
                        let summa = document.createElement("div")
                        let two_span_div = document.createElement("div")
                        let two_span = document.createElement("span")
                        let osenki_span = document.createElement("span")
                        let kredit_span = document.createElement("span")
                        let summa2_span = document.createElement("span")
                        let one_img = document.createElement("img")
                        let osenki_img = document.createElement("img")

                        box.classList.add("box")
                        one.classList.add("one")
                        two.classList.add("two")
                        osenki.classList.add("osenki")
                        kredit.classList.add("kredit")
                        summa.classList.add("summa")
                        two_span.innerHTML = el.title
                        osenki_span.innerHTML = el.rating
                        kredit_span = Math.floor(el.price / 12) + "  сум/мес"
                        summa2_span.innerHTML = el.price + "  sum"
                        one_img.src = el.media[0]
                        osenki_img.src = "/img and logos/Gold_Star.svg.png"
                        osenki_img.classList.add("star")
                        osenki_span.classList.add("osenkispan")
                        summa2_span.classList.add("sena")
                        two_two.classList.add("two_two")
                        two_span_div.classList.add("two_span_div")



                        place.append(box)
                        box.append(one, two)
                        one.append(one_img)
                        two.append(two_span_div, two_two)
                        two_span_div.append(two_span)
                        two_two.append(osenki, kredit, summa)
                        osenki.append(osenki_img, osenki_span)
                        kredit.append(kredit_span)
                        summa.append(summa2_span)

                        let type = el.type
                        let title = el.title


                        let type_title = { type, title }

                        box.onclick = () => {
                            window.location.assign("/pages/thing_page/")
                            localStorage.setItem("box", JSON.stringify(type_title))
                        }




                    }
                }
            }
        }
    })
}




axios.get("  http://localhost:8080/goods")
    .then(res => {
        let price = res.data.filter(obj => obj.price).map(obj => obj.price)
        price.sort(function (a, b) {
            return a - b;
        });

        inpts[0].value = price[0]
        inpts[1].value = price[49]

        ranbge_input[0].min = price[0]
        ranbge_input[0].max = price[49]
        ranbge_input[1].min = price[0]
        ranbge_input[1].max = price[49]



    })




export function _reload_box(arr, place, type) {

    place.innerHTML = ""

    arr.forEach((el) => {


        if (el.type === type) {

            if (el.price >= inpts[0].value) {

                if (el.price <= inpts[1].value) {







                    let box = document.createElement("div")
                    let one = document.createElement("div")
                    let two = document.createElement("div")
                    let osenki = document.createElement("div")
                    let two_two = document.createElement("div")
                    let kredit = document.createElement("div")
                    let summa = document.createElement("div")
                    let two_span_div = document.createElement("div")
                    let two_span = document.createElement("span")
                    let osenki_span = document.createElement("span")
                    let kredit_span = document.createElement("span")
                    let summa2_span = document.createElement("span")
                    let one_img = document.createElement("img")
                    let osenki_img = document.createElement("img")

                    box.classList.add("box")
                    one.classList.add("one")
                    two.classList.add("two")
                    osenki.classList.add("osenki")
                    kredit.classList.add("kredit")
                    summa.classList.add("summa")
                    two_span.innerHTML = el.title
                    osenki_span.innerHTML = el.rating
                    kredit_span = Math.floor(el.price / 12) + "  сум/мес"
                    summa2_span.innerHTML = el.price + "  sum"
                    one_img.src = el.media[0]
                    osenki_img.src = "/img and logos/Gold_Star.svg.png"
                    osenki_img.classList.add("star")
                    osenki_span.classList.add("osenkispan")
                    summa2_span.classList.add("sena")
                    two_two.classList.add("two_two")
                    two_span_div.classList.add("two_span_div")



                    place.append(box)
                    box.append(one, two)
                    one.append(one_img)
                    two.append(two_span_div, two_two)
                    two_span_div.append(two_span)
                    two_two.append(osenki, kredit, summa)
                    osenki.append(osenki_img, osenki_span)
                    kredit.append(kredit_span)
                    summa.append(summa2_span)

                    let type = el.type
                    let title = el.title


                    let type_title = { type, title }

                    box.onclick = () => {
                        window.location.assign("/pages/thing_page/")
                        localStorage.setItem("box", JSON.stringify(type_title))
                    }




                }

            }

        }




    })



}




export function header() {
    let boxes = document.querySelector(".boxes")
    let kategorii = document.querySelector(".kategorii")
    let uzum_logo_h1= document.createElement("h1") 
    
    let svet_span = document.querySelectorAll(".svet-h2")
    svet_span.forEach(el => {
        el.onclick = () => {
            localStorage.setItem("svet-span",el.innerHTML)
        }    
    });
    
    



let header = document.querySelector(".header")
    let modal_katalog = document.querySelector(".modal_katalog")
    let menu_katalog = document.querySelector(".aaaa")
    let tochka = document.querySelector(".tochka")
    let poisk = document.querySelector(".poisk")
    let dialog_menu = document.querySelector(".dialog-menu")
   
   
    function header_reload(place) {
    let location = document.createElement("div")
    let uzum = document.createElement("div")
    let tash = document.createElement("div")
    let dast = document.createElement("div")
    let russia = document.createElement("div")
    let uzum_logo = document.createElement("div")
    let kat = document.createElement("div")
    let uzum3 = document.createElement("div")
    let tashsh= document.createElement("div")
    let rus = document.createElement("div")
    let katalog = document.createElement("div")
    let inp_kat = document.createElement("div")
    let katsearch = document.createElement("div")
    let reloa= document.createElement("div")
    let reloa2 = document.createElement("div")
    let reloa3 = document.createElement("div")
    let tashshimg= document.createElement("img")
    let tashshspan = document.createElement("span")
    let tashshspan2= document.createElement("span") 
    let tashspan= document.createElement("span") 
    let dastspan= document.createElement("span") 
    let russiaspan= document.createElement("span") 
    let russiaspan2= document.createElement("span") 
    let russpan= document.createElement("span") 
    let rusimg= document.createElement("img") 
    let uzum_logo_img= document.createElement("img") 
    let katalog_span= document.createElement("span") 
    let inp_kat_input= document.createElement("input") 
    let katsearch_img= document.createElement("img") 
    let reloa_img= document.createElement("img") 
    let reloa_span= document.createElement("span") 
    let reloa2_img= document.createElement("img") 
    let reloa2_span= document.createElement("span") 
    let reloa3_img= document.createElement("img") 
    let reloa3_span= document.createElement("span")     
    let katalog_img = document.createElement("img")



    location.classList.add("location")
    uzum.classList.add("uzum")
    tash.classList.add("tash")
    dast.classList.add("dast")
    russia.classList.add("russia")
    uzum_logo.classList.add("uzum-logo")
    kat.classList.add("kat")
    uzum3.classList.add("uzum3")
    tashsh.classList.add("tashsh")
    rus.classList.add("rus")
    inp_kat.classList.add("inp-kat")
    katsearch.classList.add("katsearch")
    katalog.classList.add("katalog")
    reloa.classList.add("reloa")
    reloa2.classList.add("reloa")
    reloa3.classList.add("reloa")
    tashshimg.classList.add("tashshimg")
    tashshspan.classList.add("gorod")
    tashshspan2.classList.add("tashkent")
    tashspan.classList.add("tashspan")
    dastspan.classList.add("besp")
    tashshspan.innerHTML = "Город:"
    tashshspan2.innerHTML= "Ташкент"
    tashspan.innerHTML = "Пункты выдачи"
    dastspan.innerHTML= "Доставим ваш заказ бесплатно- всего за 1 день"
    russiaspan.innerHTML = "Вопрос-ответ"
    russiaspan2.innerHTML  = "Мои заказы"
    russpan.innerHTML = "Русский"
    uzum_logo_h1.innerHTML = "UZUM MARKET"
    uzum_logo_h1.classList.add("uzumlogoh1")
    katalog_span.innerHTML = "Каталог"
    katalog_span.classList.add("katalogspan")
    katalog_span.innerHTML = "Каталог"
    inp_kat_input.classList.add("kat-input")
    katsearch.classList.add("katsearch")
    reloa_span.innerHTML = "Войти"
    reloa2_span.innerHTML = "Избранное"
    reloa3_span.innerHTML = "Корзина"
    tashshimg.src = "/img and logos/location_on_FILL0_wght400_GRAD0_opsz24.svg"
    rusimg.src = "/img and logos/658787.png"
    rusimg.classList.add("rusimg")
    uzum_logo_img.src = "/img and logos/uzum logo.jpg"
    uzum_logo_img.classList.add("uzum-logoimg")
    katsearch_img.src = "/img and logos/search logo.svg"
    reloa_img.src = "/img and logos/akkaunt.svg"
    reloa2_img.src = "/img and logos/like.svg"
    reloa3_img.src = "/img and logos/korzina.svg"
    inp_kat_input.placeholder = "Искать товары и категории"


    place.append(location,uzum)
    location.append(tash,dast,russia)
    tash.append(tashsh,tashspan)
    tashsh.append(tashshimg,tashshspan,tashshspan2)
    dast.append(dastspan)
    russia.append(russiaspan,russiaspan2,rus)
    rus.append(rusimg,russpan)

    uzum.append(uzum_logo,kat,uzum3)
    uzum_logo.append(uzum_logo_img,uzum_logo_h1)
    kat.append(katalog,inp_kat)
    inp_kat.append(inp_kat_input,katsearch)
    katsearch.append(katsearch_img)
    uzum3.append(reloa,reloa2,reloa3)
    reloa.append(reloa_img,reloa_span)
    reloa2.append(reloa2_img,reloa2_span)
    reloa3.append(reloa3_img,reloa3_span)
    katalog.append(katalog_img,katalog_span)
    
    uzum_logo_h1.onclick = () => {
        window.location.href = "http://localhost:5173"

    }

    reloa3_span.onclick = () => {
        window.location.href = "http://localhost:5173/pages/karzinka/"

    }
    reloa2_span.onclick = () => {
        window.location.href = "http://localhost:5173/pages/izbrannoe/"

    }


    function poisk_reload(arr) {
        poisk.innerHTML = ""
        let glavniy_div = document.createElement("div")
        let glavniy_h1 = document.createElement("h4") 

        glavniy_div.classList.add("glavniy_div")
        glavniy_h1.innerHTML = arr
        glavniy_h1.style.fontFamily = "'Lucida Sans', 'Lucida Sans Regular'"



        poisk.append(glavniy_div)
        glavniy_div.append(glavniy_h1)


        glavniy_div.onclick = () => {
            boxes.innerHTML = ""
            uzum_logo_h1.onclick = () => {
                glavniy_div.style.display = "none"
                boxes.innerHTML =""
                tochka.classList.remove("none")
                tochka.classList.add("tochka")
                
            }
            if (tochka.classList.contains("tochka")) {
                tochka.classList.remove("tochka")
                tochka.classList.add("none")
            }
            boxes.onclick = () => {
                glavniy_div.classList.add("none")
                glavniy_div.classList.remove("glavniy_div")
            }
            
            localStorage.setItem("search",  glavniy_h1.innerHTML)
            let get = localStorage.getItem("search")
            console.log(get);

            axios.get("http://localhost:8080/goods")
            .then(res => {
                res.data.forEach(item => {
                    if (item.type === get ) {
                        reload(item,boxes);
                    }
                    if (item.title === get) {
                        reload(item,boxes);

                        glavniy_div.style.right = "550px"
                        
                    }
                })
            })
            
        }
        
    }

    /* <div class="header">    //html !!!!!!        
    </div>
    <div class="cant"><div class="rass">
      <img src="img and logos/rass.jpg" alt="" class="russ-logo">
      <span>Рассрочка</span>
    </div>
    </div> */




    inp_kat_input.onkeyup = () => {

        let val = inp_kat_input.value
        axios.get("http://localhost:8080/goods")
        .then(res => {
            res.data.forEach(item => {
                if (item.title[0,1,2,3] == val[0,1,2,3]) {
                    poisk_reload(item.title,poisk)
                    big_box.style.display = "flex"
                }
                if (val[0] === item.type[0]) {
                    poisk_reload(item.type,poisk)
                    big_box.style.display = "flex"

                }
            })
        })
      
    }
    let typess = []
    function katalog_types(arr,places) {
        let h1 = document.createElement("h1")
        h1.innerHTML = arr.type
        h1.style.fontSize = "40px"
        places.append(h1)
         h1.onclick = () => {
                big_box.style.display = "flex"
                document.body.style.overflow = "scroll"
                modal_katalog.classList.add("none")                
                boxes.innerHTML = ""
                localStorage.setItem("avazz",h1.innerHTML)
                let get = localStorage.getItem("avazz")

                axios.get("http://localhost:8080/goods")
                .then(res => {
                    res.data.forEach(item => {
                        if (item.type === get) {
                            reload(item,boxes);
                        }
                    })
                })
                tochka.classList.add("none")
                uzum_logo_h1.onclick = () => {
                    tochka.classList.remove("none")
                    boxes.innerHTML = ""
                    dialog_menu.style.display ="none"

                }
                

        } 
    
    }
    axios.get(" http://localhost:8080/goods")
    .then(res => {
        res.data.forEach(elem => {
            if (!typess.includes(elem.type)) {
                typess.push(elem.type);
                katalog_types(elem,menu_katalog);
            }
        
        });
    }) 



    modal_katalog.classList.add("none")
    katalog.onclick = () => {
        if (modal_katalog.classList.contains("none")) {
            modal_katalog.classList.remove("none")
            modal_katalog.classList.add("modal_katalog")
            document.body.style.overflow = "hidden"
            big_box.style.display = "none"
        } else {
            modal_katalog.classList.remove("modal_katalog")
            modal_katalog.classList.add("none")
            document.body.style.overflow = "scroll"
            big_box.style.display = "flex"

        }
    }

       

       
    
    
 }

header_reload(header)





 
 
let container = document.querySelector(".cant")
let types = []


function avaz(arr) {

    let span_rassrochka = document.createElement("span")
    span_rassrochka.classList.add("rass-span")  
    span_rassrochka.innerHTML = arr
    container.append(span_rassrochka)
    span_rassrochka.onclick = () => {
        big_box.style.display = "flex"
        boxes.innerHTML = ""
        localStorage.setItem("avazz",span_rassrochka.innerHTML)
        let get = localStorage.getItem("avazz")

        axios.get("http://localhost:8080/goods")
        .then(res => {
            res.data.forEach(item => {
                if (item.type === get) {
                    reload(item,boxes);
                }
            })
        })
        tochka.classList.add("none")
            uzum_logo_h1.onclick = () => {
            tochka.classList.remove("none")
            boxes.innerHTML = ""
            dialog_menu.style.display = "none"

        }
        

} 


    
}

    

axios.get(" http://localhost:8080/goods")
.then(res => {
    res.data.forEach(elem => {
        if (!types.includes(elem.type)) {
            types.push(elem.type);
            avaz(elem.type);
        }
        
    });
}) 
let kateg  = document.querySelector(".kateg ul")
function avazz(arr) {
       
    let span_rassrochka = document.createElement("a")
    let span_rassrochka_li = document.createElement("li")
    span_rassrochka.innerHTML = arr
    span_rassrochka_li.id = arr
    span_rassrochka_li.append(span_rassrochka)
    kateg.append(span_rassrochka_li)


    span_rassrochka.onclick = () => {
            
        boxes.innerHTML = ""
        localStorage.setItem("avazz",span_rassrochka.innerHTML)
        let get = localStorage.getItem("avazz")

        axios.get("http://localhost:8080/goods")
        .then(res => {
            res.data.forEach(item => {
                if (item.type === get) {
                    reload(item,boxes);
                }
            })
        })
        tochka.classList.add("none")
            uzum_logo_h1.onclick = () => {
            tochka.classList.remove("none")
            boxes.innerHTML = ""
        }
        

} 


    
}

    
let typesss = []
axios.get(" http://localhost:8080/goods")
.then(res => {
    res.data.forEach(elem => {
        if (!typesss.includes(elem.type)) {
            typesss.push(elem.type);
            avazz(elem.type);
        }
        
    });
})








}


 export function slayder() {
    var indexvalue = 0;
    function slideshow() {
        setTimeout(slideshow,3000)
        var x;
        const img = document.querySelectorAll(".slideshow")
        for(x = 0; x < img.length; x++) {
            img[x].style.display = "none"

        }

        indexvalue++;
        if (indexvalue > img.length) {
            indexvalue = 1
        }
        img[indexvalue -1].style.display= "block"
    }
    slideshow()

}



 export function box_reload () {
    let furniture = document.querySelector(".furniture")
    let pc = document.querySelector(".pc")
    let audio = document.querySelector(".audio")
    let tv = document.querySelector(".tv")
    let kitchen = document.querySelector(".kitchen")
    function box(arr,place) {
        let box = document.createElement("div")
        let one = document.createElement("div")
        let two = document.createElement("div")
        let osenki = document.createElement("div")
        let two_two = document.createElement("div")
        let kredit = document.createElement("div")
        let summa = document.createElement("div")
        let two_span_div = document.createElement("div")
        let two_span= document.createElement("span")
        let osenki_span= document.createElement("span")
        let kredit_span= document.createElement("span")
        let summa2_span= document.createElement("span")
        let one_img= document.createElement("img")
        let osenki_img= document.createElement("img")
        let span = document.createElement("span")
        span.innerHTML = arr.type
        
        box.classList.add("box")
        one.classList.add("one")
        two.classList.add("two")
        osenki.classList.add("osenki")
        kredit.classList.add("kredit")
        summa.classList.add("summa")
        two_span.innerHTML = arr.title
        osenki_span.innerHTML = arr.rating
        kredit_span = Math.floor(arr.price /12 ) +"  сум/мес"
        summa2_span.innerHTML = arr.price + "  sum"
        one_img.src = arr.media[0]
        osenki_img.src = "/img and logos/Gold_Star.svg.png"
        osenki_img.classList.add("star")
        osenki_span.classList.add("osenkispan")
        summa2_span.classList.add("sena")
        two_two.classList.add("two_two")
        two_span_div.classList.add("two_span_div")
        


        place.append(box)
        box.append(one,two)
        one.append(one_img)
        two.append(two_span_div,two_two)
        two_span_div.append(two_span)
        two_two.append(osenki,kredit,summa)
        osenki.append(osenki_img,osenki_span)
        kredit.append(kredit_span)
        summa.append(summa2_span)

        box.onclick = () => {
            window.location.assign("/pages/element_pages/")
            localStorage.setItem("box",two_span.innerHTML)
            localStorage.setItem("type-box",two_span.innerHTML)
            let tipi = localStorage.setItem("avazz",span.innerHTML)
            axios.get(" http://localhost:8080/goods")
            .then(res => {
                res.data.forEach(elem => {
                    if (tipi === arr.type) {
                       reload(elem,boxes)
                    }
        
                });
            })



                }








        
    }

    axios.get("http://localhost:8080/goods")
    .then(res => {
        res.data.forEach(item => {
            if (item.type === "furniture") {
                box(item,furniture)    

            } if (item.type === "PC") {
                box(item,pc)
            }
             if (item.type === "audio") {
                box(item,audio)
            }
             if (item.type === "TV") {
                box(item,tv)
            }
             if (item.type === "kitchen") {
                box(item,kitchen)
            }
            
        })
    })
}





