console.log("external script");

function changeContent() {
  var elementContent = document.getElementById("changeContent");
  // console.log(elementContent);
  elementContent.innerHTML = "Nội dung đã được thay đổi...";
}


function changeImage() {
  var imgElement = document.getElementById("picture");
  imgElement.src = "http://thuthuatphanmem.vn/uploads/2017/11/05/hinh-nen-4k-dep-7_124944.jpg";
}
