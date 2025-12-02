const inputBox = document.getElementsByClassName("inputContainer")[0]
const Func = (event) => {
    //create containers for new tasks inputted by user
    const mainContainer = document.createElement("div")
    mainContainer.classList.add("mainContainer")
    const parentContainer = document.createElement("div")
    parentContainer.classList.add("parentContainer")


    //reset when hit space only
    if(event.target.value == " "){
        event.target.value = ""; 
        return;
    }
    let inputElement = event.target.value //obtain the input text by using event.target.value


    //add text into container
    const textContainer = document.createElement("div")
    textContainer.classList.add("textContainer")
    const spanTag = document.createElement("span")
    textContainer.append(spanTag)
    spanTag.append(inputElement)
    parentContainer.append(textContainer)
    event.target.value = ""   //reset the input 

    //add trash icon
    const trashIcon = document.createElement("i")
    trashIcon.classList.add("fa-solid", "fa-trash-can", "trashIcon")  //using bootstrap class
    parentContainer.append(trashIcon)
    

    //cross out the finished task
    textContainer.addEventListener("click" , () => {
            let clickCheck= spanTag.classList.contains("spanTag")
            if (clickCheck) {
                spanTag.classList.remove("spanTag")
            } else{
                spanTag.classList.add("spanTag")
            }
    })

    //remove when trash icon is clicked
    trashIcon.addEventListener("click", () => {
        mainContainer.remove();
    })



    const Container = document.getElementsByClassName("Container")[0]
    Container.append(mainContainer)
    mainContainer.append(parentContainer)

}

//listen event by change event listener
inputBox.addEventListener("change", Func)