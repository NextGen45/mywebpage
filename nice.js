function askquestion() {
  var namefound = false;
  while (namefound == false) {
    var name = prompt("Which artrist does dc comics ");
    if (name == "Jim lee") {
      alert("Great job!");
      namefound = true;
    } else {
      alert("wrong name my friend");
    }
  }
}
askquestion();

function imageCount() {
  var image = prompt("how many batmans do you wanna see");
  for (i = 0; i < image; i++) {
    document.write(
      '<img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2021/06/Batman-fighting-in-Detective-Comics-1037.jpg" >'
    );

    console.log(i);
  }
}

imageCount();
