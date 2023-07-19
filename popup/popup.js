const templateListItem = document.querySelector("#template-li")
const stringsUl = document.querySelector("#strings-ul")
let listItems = ["aytala","macha"]
const getListItem = (string) => {
    const element = templateListItem.content.firstElementChild.cloneNode(true);
    element.textContent = string
    return element
}

const main = () => {

    for(let string of listItems){
        stringsUl.appendChild(getListItem(string))
    }
}
main()


