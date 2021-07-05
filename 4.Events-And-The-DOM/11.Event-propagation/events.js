const headerImage = document.querySelector('#headerImage');
function changeImage() {
  headerImage.setAttribute('src', 'burger2.jpg');
}
headerImage.addEventListener('click', changeImage)

function addToFavourites(e) {
  alert(`${e.target.parentNode.children[2].innerText}`)
}

const addButtons = document.querySelectorAll(".add");
addButtons.forEach(function(button) {
  button.addEventListener('click', addToFavourites)
})

