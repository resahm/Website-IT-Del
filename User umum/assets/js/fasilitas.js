function toggleContent(btnId, dotsId, moreId) {
  var dots = document.getElementById(dotsId);
  var moreText = document.getElementById(moreId);
  var btnText = document.getElementById(btnId);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

// Menggunakan loop untuk mengaitkan fungsi dengan setiap elemen yang sesuai
var buttonIds = ["myBtn", "myBtnn", "myBtnnn", "myBtnnnn", "myBtnnnnn", "myBtnnnnnn", "myBtnnnnnnn"];
var dotsIds = ["dots", "dotsz", "dotszs", "dotszsz", "dotszszs", "dotszszsz", "dotszszszs"];
var moreIds = ["more", "moree", "moreee", "moreeee", "moreeeee", "moreeeeee", "moreeeeeee"];

for (var i = 0; i < buttonIds.length; i++) {
  var btnId = buttonIds[i];
  document.getElementById(btnId).addEventListener('click', function (index) {
    return function () {
      toggleContent(buttonIds[index], dotsIds[index], moreIds[index]);
    };
  }(i));
}
