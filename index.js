const fullscreenModal = document.getElementById('fullscreen-modal')
const registerBtn = document.getElementById('register-btn')
const loginBtn = document.getElementById('login-btn')

registerBtn.addEventListener('click', function(){
    startGame()
})

loginBtn.addEventListener('click', function(){
    startGame()
})

function startGame(){
    fullscreenModal.style.display = 'none'
}