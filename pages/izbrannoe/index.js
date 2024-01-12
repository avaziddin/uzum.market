import { headered} from "../../jses/pomoshnik";
import axios from "axios"

headered()
let boxes = document.querySelector(".boxesses")

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

let get = JSON.parse(localStorage.getItem("izb"))


axios.get("http://localhost:8080/goods")
.then(res => {
    res.data.forEach(item => {
        get.forEach(el => {
            if (item.id === el) {
                reload(item,boxes)
            }
        })
         
  })
}) 
