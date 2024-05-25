const messages = document.getElementsByClassName("messageList")[0]
const userInput = document.getElementById("message");
const send = document.getElementById("send")


console.log(messages.innerHTML)

const messageList = [
    {
        id: "user",
        message: "Hello how are you"
    },
    {
        id: "bot",
        message: "me thek hon"
    },
    {
        id: "user",
        message: "or kia chal raha he"
    },
    {
        id: "bot",
        message: "bas farigh han"
    }
]

// render list of messages
for (let i = 0; i < messageList.length; i++) {
    messages.innerHTML += `<li class=${messageList[i].id} >  ${messageList[i].message}  </li>`
}


function sendMessage() {
    messages.innerHTML += `<li class="user">${userInput.value}</li>`;
    setTimeout(autoReply, 1000);
    userInput.value = "";
}

send.addEventListener("click", sendMessage);

// let count = 0;
// for (let i = 1; i <= 6; i++) {
//     // count = count + i
//     count += i
//     console.log(count, "count")
// }

function autoReply() {
    const dummyText = [
        {
            id: "bot",
            message: "bado badi"
        },
        {
            id: "bot",
            message: "peche toh dekho"
        },
        {
            id: "bot",
            message: "keya pora din swal karte rahte ho"
        },
        {
            id: "bot",
            message: "bas karo bhai"
        },
        {
            id: "bot",
            message: "thora samjh aa raha he"
        }
    ]

    const newMessage = Math.round(Math.random() * dummyText.length)

    console.log(dummyText[newMessage], "newMessage")
    messages.innerHTML += `<li>  ${dummyText[newMessage].message}   </li>`;
}



// function expandLoris() {
//     const expandedParagraph = "Hi, I am Muhammad Fareed";
//     document.getElementById("slowLoris").innerHTML = expandedParagraph;
// }

//  const testing = document.getElementById("slowLoris").innerHTML;
//  const testing = document.getElementById("slowLoris").innerText;
// const testing = document.getElementById("slowLoris").outerHTML;
// const testing = document.getElementById("slowLoris").outerText;

// console.log(testing)