import { getDistance } from "../lib/fuzzy.js"
import { debounce } from "../lib/polyfill.js"

const queryForm = document.querySelector("#query-form")
const queryInput = document.querySelector("#query-input")

const templateListItem = document.querySelector("#template-li")
const stringsUl = document.querySelector("#strings-ul")

let listItems = ["aytala", "macha", "sakkath", "kana", "aramagiru", "cool", "machi", "super"]

const getListItem = (string) => {
    const element = templateListItem.content.firstElementChild.cloneNode(true);
    element.textContent = string
    return element
}


const init = () => {
    queryInput.focus()
    for (let string of listItems) {
        stringsUl.appendChild(getListItem(string))
    }

}
const main = debounce((query) => {
    stringsUl.innerHTML = ""
    let scores = new Map()
    for (let item of listItems) {
        scores[item] = getDistance(query, item)
    }
    listItems.sort((a, b) => {
        if (scores[a] >= scores[b]) {
            // a is more near to query
            return -1;
        } else {
            return 1;
        }
    })
    for (let string of listItems) {
        stringsUl.appendChild(getListItem(string))
    }
},500);

queryInput.addEventListener('input', (e) => {
    e.preventDefault()
    main(queryInput.value)
})
queryForm.addEventListener('submit', (e) => {
    e.preventDefault()
    main(queryInput.value)
})


init()
