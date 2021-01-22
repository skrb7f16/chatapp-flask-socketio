document.addEventListener('DOMContentLoaded', () => {
    var socket = io.connect('http://' + document.domain + ':' + location.port);
    let room = "Lounge";
    getPreviousMessages(room)
    joinRoom(room);
    socket.on('message', (data) => {
        const p = document.createElement('p');
        const span_username = document.createElement('small')
        const span_time = document.createElement('small')
        const br = document.createElement('br');
        if (data.sender) {
            document.getElementById('display-message-section').innerHTML+=getMessage(data);
            document.getElementById('display-message-section').scrollTop=document.getElementById('display-message-section').scrollHeight
        }
        else {
            printSysMsg(data.msg)
        }
    })

    document.getElementById('add-room').onclick = () => {
        socket.emit('new-room', { 'room': document.getElementById('new-room').value, 'username': username })
        document.getElementById('rooms').innerHTML += `<p class='select-room text-white rounded p-5'>${document.getElementById('new-room').value}</p>`
        joinRoom(document.getElementById('new-room').value)
    }

    document.getElementById('send_message').onclick = () => {
        if(document.getElementById('user_message').value==''){
            return
        }
        socket.send({ 'msg': document.getElementById('user_message').value, 'username': username, 'room': room })
        document.getElementById('user_message').value = '';
    }

    document.querySelectorAll('.select-room').forEach(p => {
        p.onclick = () => {
            let newRoom = p.innerHTML;
            if (newRoom === room) {
                msg = `You are already in ${room} room`;
                printSysMsg(msg);
            }
            else {
                leaveRoom(room);
                joinRoom(newRoom);
                room = newRoom;

            }
        }
    })

    function leaveRoom(room) {
        socket.emit('leave', { 'username': username, 'room': room })
    }

    function joinRoom(room) {
        socket.emit('join', { 'username': username, 'room': room })
        document.getElementById('display-message-section').innerHTML = ''
        getPreviousMessages(room)
        

    }


    function printSysMsg(msg) {
        const p = document.createElement('p');
        p.innerHTML = msg;
        document.getElementById('display-message-section').innerHTML+=msg
    }


})

function getMessage(element){
    return `<div class="alert alert-success">
    <small>${element.sender}</small><br> <p>${element.message}</p><small>${element.timestamp}</small>
  </div>`
}

function getPreviousMessages(r){
    let messages;
    fetch('/recieve-history',{
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({'room':r})
    }).then(res=>res.json()).then(response=>{
        messages=response.messages
        messages.forEach(element=>{
            document.getElementById('display-message-section').innerHTML+=getMessage(element);
        })
    })
    document.getElementById('display-message-section').scrollTop=document.getElementById('display-message-section').scrollHeight
    
}