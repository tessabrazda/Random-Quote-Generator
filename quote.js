async function randomQuote() {
  var apiString= "https://api.quotable.io/random?minLength=";
  var maxLength = document.getElementById("newLength").value;
  var minLength = maxLength-50;
  var newTag = document.getElementById("newTag").value;
  apiString = apiString + minLength + "&maxLength=" + maxLength + "&tags=" + newTag;
  
  const response = await fetch(apiString);
  const data = await response.json();

  document.getElementById("newQuote").innerHTML = "";
  document.getElementById("newAuthor").innerHTML = "";

  for (var para in data){
    if (para == "content"){
      document.getElementById("newQuote").innerHTML += "<p>" + '"' + data[para] + '"' + "</p>";
    }
    if (para == "author"){
      document.getElementById("newAuthor").innerHTML += "<p>" + "-" + data[para] + "</p>";
    }
  }
}

