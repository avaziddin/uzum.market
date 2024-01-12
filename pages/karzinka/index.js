import axios from "axios";
import { headered } from "../../jses/pomoshnik";

let summa = []

headered()
let get = JSON.parse(localStorage.getItem("kar"))
let boxi = document.querySelector(".boxi")
let obshaya_summa = document.querySelector(".obshsumma")
let itogo_tovarov = document.querySelector(".tovari")
function reload(arr) {
    itogo_tovarov.innerHTML = "Итого товаров : " + get.length
    let reload = document.createElement("div")
    let img = document.createElement("div")
    let left = document.createElement("div")
    let img_img = document.createElement("img")
    let left_span = document.createElement("span")
    let left_h1 = document.createElement("h1")
    let left_minus_pilus = document.createElement("div")
    let minus_pilus_span_minus = document.createElement("span")
    let minus_pilus_span_sifra = document.createElement("h3")
    let minus_pilus_span_pilus = document.createElement("span")
    let left_button_delete = document.createElement("button")
    let left_one = document.createElement("div")
    let left_two = document.createElement("div")

    left_one.classList.add("left-one")
    left_two.classList.add("left-two")
    reload.classList.add("reload")
    left_span.classList.add("title_karzinka")
    img.classList.add("img")
    img.style.padding = "5px"
    left.classList.add("left")
    img_img.classList.add("reload_img")
    img_img.src = arr.media[0]
    left_span.classList.add("title-karzinka")
    left_span.innerHTML = arr.title
    left_h1.innerHTML = arr.price
    left_minus_pilus.classList.add("pilus-minus")
    minus_pilus_span_minus.innerHTML = "-"
    minus_pilus_span_sifra.value = 1
    minus_pilus_span_sifra.innerHTML = minus_pilus_span_sifra.value
    minus_pilus_span_pilus.innerHTML = "+"
    left_button_delete.innerHTML = "delete"
    left_button_delete.classList.add("delete-karzinka")

    summa.push( parseInt( (left_h1.innerHTML)))
    let sum = summa.reduce((acc, current) => acc + current, 0);
    console.log(sum);


    obshaya_summa.innerHTML = sum + " сум"

    
    boxi.append(reload)
    reload.append(img, left)
    img.append(img_img)
    left.append(left_one, left_two)
    left_one.append(left_span)
    left_two.append(left_h1, left_minus_pilus, left_button_delete)
    left_minus_pilus.append(minus_pilus_span_minus, minus_pilus_span_sifra, minus_pilus_span_pilus)


    minus_pilus_span_pilus.onclick = () => {
        minus_pilus_span_sifra.value++
        minus_pilus_span_sifra.innerHTML = minus_pilus_span_sifra.value

        left_h1.innerHTML = arr.price * minus_pilus_span_sifra.value + " сум"
        if (minus_pilus_span_sifra.value == 11) {
            minus_pilus_span_sifra.value = 10
            minus_pilus_span_sifra.innerHTML = minus_pilus_span_sifra.value
            left_h1.innerHTML = arr.price * 10 + " сум"

        }
    }
    minus_pilus_span_minus.onclick = () => {

        let h2Text = left_h1.innerHTML;
        let numbers = h2Text.match(/\d+/g);
        let number = numbers[0]

        minus_pilus_span_sifra.value--
        minus_pilus_span_sifra.innerHTML = minus_pilus_span_sifra.value
        left_h1.innerHTML = Math.floor(number - arr.price) + " сум"
        if (minus_pilus_span_sifra.value === -1) {
            minus_pilus_span_sifra.value = 0
            minus_pilus_span_sifra.innerHTML = minus_pilus_span_sifra.value

            if (minus_pilus_span_sifra.value == 0) {
                left_h1.innerHTML = 0 + " сум"
            }
        }
    }


}

axios.get("http://localhost:8080/goods")
    .then(res => {
        res.data.forEach(item => {
            get.forEach(el => {
                if (item.id === el) {
                    reload(item)

                }
            })

        })
    }) 