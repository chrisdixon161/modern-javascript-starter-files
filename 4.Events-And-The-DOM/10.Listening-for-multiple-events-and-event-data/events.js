const headerImage = document.querySelector('#headerImage');
function changeImage() {
  headerImage.setAttribute('src', 'burger2.jpg');
}
headerImage.addEventListener('click', changeImage)

