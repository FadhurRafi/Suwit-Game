export { dNone };

const dNone = () => {
    const h2 = document.querySelector('section .col h1').classList.toggle('d-none')
    const game_result = document.getElementById('game_result').style.display = 'block'
}