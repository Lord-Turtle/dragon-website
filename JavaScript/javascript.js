/*let dragons = [{id: 0, title: "A diagram of different types", image_url: "https://i.redd.it/ar2lainljj621.jpg"},
				 {id: 1, title: "The Godfather ", year: 1992, image_url: "https://studycli.org/wp-content/uploads/2021/06/chinese-dragons-explained.png"},
				 {id: 2, title: "The Dark Knight", year: 2008, image_url: "Media/movie2.jpg"},
			     {id: 3, title: "12 Angry Men", year: 1957, image_url: "Media/movie3.jpg"},
			     {id: 4, title: " Schindler\'s List", year: 1993, image_url: "Media/movie4.jpg"},
				];


//Slideshow: Manual
let slideIndex = 0;//Initial slide = 0
function nextSlide() {
	//Change the slide_index
	if (slideIndex < dragons.length - 1) {
		slideIndex++;
	} else {
		slideIndex = 0;
	}
	//Change the image source for the img
	document.getElementById("manual-slide-title").innerHTML = dragons[slideIndex].title;
	document.getElementById("manual-slide-image").src = dragons[slideIndex].image_url;	
}

function previousSlide() {
	//Change the slide_index
	if (slideIndex > 0) {
		slideIndex--;
	} else {
		slideIndex = dragons.length - 1;
	}
	//Change the image source for the img
	document.getElementById("manual-slide-title").innerHTML = dragons[slideIndex].title;
	document.getElementById("manual-slide-image").src = dragons[slideIndex].image_url;		
}*/

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}