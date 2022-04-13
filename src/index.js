// write your code here
const menuImage = document.getElementById("ramen-detail")
const ratingDisplay = document.getElementById('rating-display')
const commentDisplay = document.getElementById('comment-display')
const form = document.getElementById("new-ramen")
const restName = document.getElementsByClassName("restaurant")
const ramenName = document.getElementsByClassName("name")
const ramenUrl = `http://localhost:3000/ramens`

// form.addEventListener("submit", handleSubmit)

fetch(`http://localhost:3000/ramens`)
    .then(res => res.json())
    .then(data => console.log(data));

