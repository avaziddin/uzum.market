import axios from "axios";



export function headered() {
    let boxes = document.querySelector(".boxes")
    let uzum_logo_h1= document.createElement("h1") 
    let header = document.querySelector(".header")
    let modal_katalog = document.querySelector(".modal_katalog")
    let menu_katalog = document.querySelector(".aaaa")
    let tochka = document.querySelector(".tochka")
    let poisk = document.querySelector(".poisk")
    let first = document.querySelector(".first")
    let second = document.querySelector(".second")
    let two_element = document.querySelector(".two-element")

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

    function element(arr) {
        let first_images = document.createElement("img")
        let first_images_two = document.createElement("img")
        let first_images_three = document.createElement("img")
        let second_images = document.createElement("img")
        let aosenki = document.createElement("div")
        let aosenki_star = document.createElement("img")
        let aosenki_span = document.createElement("span")
        let element_h1 = document.createElement("h1")
        let prodaves = document.createElement("div")
        let prodaves_yag = document.createElement("div")
        let prodaves_du = document.createElement("div")
        let yag_span = document.createElement("span")
        let yag_du_span = document.createElement("span")
        let du_span = document.createElement("span")
        let du_du_span = document.createElement("span")
        let element_hr = document.createElement("div")
        let asena = document.createElement("div")
        let asena_sena = document.createElement("h1")
        let asena_asena_skidka = document.createElement("p")
        let prosto = document.createElement("div")
        let ashtuk = document.createElement("div")
        let rasprodaja = document.createElement("div")
        let ashtuk_minus = document.createElement("span")
        let ashtuk_sifra = document.createElement("h2")
        let ashtuk_pilus = document.createElement("span")
        let sena_rasprodaja = document.createElement("div")
        let sena_rasprodaji_sena = document.createElement("span")
        let informasiya_span = document.createElement("span")
        let pokupka = document.createElement("div")
        let button_karzinka = document.createElement("button")
        let button_izbrannoe = document.createElement("button")
        pokupka.style.padding = "20px 0px"


        first_images.src = arr.media[0]
        first_images_two.src = arr.media[1]
        first_images_three.src = arr.media[2]
        first_images.classList.add("first-images")
        first_images_two.classList.add("first-images")
        first_images_three.classList.add("first-images")
        second_images.src = arr.media[0]
        second_images.classList.add("second-images")
        aosenki.classList.add("aosenki")
        aosenki_star.src = "/img and logos/Gold_Star.svg.png"
        aosenki_star.classList.add("star")
        aosenki_span.innerHTML = arr.rating + "(228 отценок) более 200 заказов"
        aosenki_span.classList.add("otsenki-span")
        element_h1.innerHTML = arr.title
        prodaves.classList.add("prodaves")
        prodaves_yag.classList.add("yag")
        prodaves_du.classList.add("du")
        yag_span.innerHTML ="Продавец:"
        yag_du_span.innerHTML = "Avazbek Sharifov (Кличка: 'QUVVAT')"
        du_span.innerHTML = "Доставка:"
        du_du_span.innerHTML = "1 день бесплатно"
        element_hr.classList.add("hrrrr")
        asena.classList.add("asena")
        asena_sena.innerHTML = arr.price + "sum"
        asena_sena.style.fontSize = "28px"
        asena_sena.classList.add("asena-sena")
        asena_asena_skidka.innerHTML = Math.floor(arr.price + arr.price/2)  + "sum"
        asena_asena_skidka.classList.add("asena-sena-skidka")
        prosto.classList.add("prosto")
        ashtuk.classList.add("ashtuk")
        ashtuk_minus.innerHTML = "-"
        ashtuk_sifra.value  = "1"
        ashtuk_sifra.innerHTML = 1
        ashtuk_sifra.style.fontSize = "29px"
        ashtuk_pilus.innerHTML = "+"
        rasprodaja.classList.add("rasprodaja")
        sena_rasprodaja.classList.add("sena-rasprodaji")
        sena_rasprodaji_sena.innerHTML = Math.floor(arr.price/12 ) + "sum в месяц"
        informasiya_span.innerHTML = arr.description
        pokupka.classList.add("pokupka")
        button_karzinka.innerHTML = "Добавить в корзину"
        button_izbrannoe.innerHTML = "Добавить в избранное"
        button_izbrannoe.classList.add("dob-izb")
        button_karzinka.classList.add("dob-kar")


        first.append(first_images,first_images_two,first_images_three)
        second.append(second_images)
        two_element.append(aosenki,element_h1,prodaves,asena,prosto,informasiya_span,pokupka)
        aosenki.append(aosenki_star,aosenki_span)
        prodaves.append(prodaves_yag,prodaves_du,element_hr)
        prodaves_yag.append(yag_span,yag_du_span)
        prodaves_du.append(du_span,du_du_span)
        asena.append(asena_sena,asena_asena_skidka)
        prosto.append(ashtuk,rasprodaja)
        ashtuk.append(ashtuk_minus,ashtuk_sifra,ashtuk_pilus)
        rasprodaja.append(sena_rasprodaja)
        sena_rasprodaja.append(sena_rasprodaji_sena)
        pokupka.append(button_karzinka,button_izbrannoe)
        
        first_images.onclick = () => {
            second_images.src= first_images.src
        }
        first_images_two.onclick = () => {
            second_images.src= first_images_two.src

        }
        first_images_three.onclick = () => {
            second_images.src= first_images_three.src

        }
        ashtuk_pilus.onclick = () => {
            ashtuk_sifra.value++
            ashtuk_sifra.innerHTML = ashtuk_sifra.value
            
            asena_sena.innerHTML = arr.price * ashtuk_sifra.value + " сум"
            if (ashtuk_sifra.value == 11) {
                ashtuk_sifra.value = 10
            asena_sena.innerHTML = arr.price * 10 + " сум"

            }
        }
        ashtuk_minus.onclick = () => {

            let h2Text = asena_sena.innerHTML;
            let numbers = h2Text.match(/\d+/g);
            let number = numbers[0]

            ashtuk_sifra.value --
            ashtuk_sifra.innerHTML = ashtuk_sifra.value

            asena_sena.innerHTML = Math.floor(number - arr.price) + " сум"
            if (ashtuk_sifra.value === -1) {
                ashtuk_sifra.value = 0
                ashtuk_sifra.innerHTML = ashtuk_sifra.value

                if(ashtuk_sifra.value == 0){
                    asena_sena.innerHTML = 0 + " сум"
                }
            }
        }
        button_izbrannoe.onclick = () => {
            if (button_izbrannoe.classList.contains("dob-izb")) {
                button_izbrannoe.classList.add("dob-kar")
                button_izbrannoe.classList.remove("dob-izb")

            } else {
                button_izbrannoe.classList.add("dob-izb")
                button_izbrannoe.classList.remove("dob-kar")

            }
            let izbrannoe = [...(JSON.parse(localStorage.getItem("izb")) || [])];
            if (izbrannoe.includes(arr.id)) {
                izbrannoe = izbrannoe.filter((id) =>id !== arr.id)
            } else {
                izbrannoe.push(arr.id)
            }
            localStorage.setItem("izb",JSON.stringify(izbrannoe))
        }
          button_karzinka.onclick = () => {

            if (button_karzinka.classList.contains("dob-kar")) {
                button_karzinka.classList.add("dob-izb")
                button_karzinka.classList.remove("dob-kar")                
            }
            else {
                button_karzinka.classList.add("dob-kar")
                button_karzinka.classList.remove("dob-izb")                

            }
            let karzinka = [...(JSON.parse(localStorage.getItem("kar")) || [])];
            if (karzinka.includes(arr.id)) {
                karzinka = karzinka.filter((id) =>id !== arr.id)
            } else {
                karzinka.push(arr.id)
            }
            localStorage.setItem("kar",JSON.stringify(karzinka))
          }

    }
    let get = localStorage.getItem("box")
    axios.get("http://localhost:8080/goods")
    .then(res => {
        res.data.forEach(item => {
            
            if (item.title === get) {
                element(item)
                
            }
        })
    })
    

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
            window.location.href = "http://localhost:5173/pages/element_pages/"
            localStorage.setItem("box", arr.title)
        }



        
    }
    

   
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
                }
                if (val[0] === item.type[0]) {
                    poisk_reload(item.type,poisk)
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
        } else {
            modal_katalog.classList.remove("modal_katalog")
            modal_katalog.classList.add("none")
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

    

axios.get(" http://localhost:8080/goods")
.then(res => {
    res.data.forEach(elem => {
        if (!types.includes(elem.type)) {
            types.push(elem.type);
            avaz(elem.type);
        }
        
    });
}) 








}
