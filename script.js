let addbtn = document.querySelector(".add-btn");
let modalCont = document.querySelector(".modal-cont");
let mainCont = document.querySelector(".main-cont");
let textAreaCont = document.querySelector(".textarea-cont")
let allPriorityColors = document.querySelectorAll(".priority-colors");

let colors = ["lightpink", "lightgreen", "red", "black"];
let modalPriorityColor = colors[colors.length - 1];

let addFlag = false;


// listener for modal priority coloring 
allPriorityColors.forEach((colorElem, idx) => {
    colorElem.addEventListener("click", (e) => {
        allPriorityColors.forEach((priorityColorElem, idx) => {
            priorityColorElem.classList.remove("border");
        })
        colorElem.classList.add("border");
    })
})


addbtn.addEventListener("click", (e) => {
    // display modal
    // generate ticket

    // addflag true-> display modal
    // addFlag false -> remove modal
    addFlag = !addFlag;
    if (addFlag) {
        modalCont.style.display = "flex";
    }
    else {
        modalCont.style.display = "none";
    }
})

modalCont.addEventListener("keydown", (e) => {
    let key = e.key;
    if (key == "Shift") {
        createTicket();
        modalCont.style.display = "none";
        addFlag = false;
        textAreaCont.value = "";

    }
})
function createTicket(ticketColor, ticketTask, ticketID) {
    let ticketCount = document.createElement("div");
    ticketCount.setAttribute("class", "ticket-cont");
    ticketCount.innerHTML = `
            <div class="ticket-color "></div>
            <div class="ticket-id">#sample id</div>
            <div class="task-area">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, necessitatibus adipisci eius soluta ipsum, nesciunt officiis laboriosam magnam quos mollitia distinctio minus natus aliquid consectetur? Commodi vitae suscipit fugit inventore?1
            </div>
            `;

    mainCont.appendChild(ticketCount);
}
