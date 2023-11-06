function toggleHeaderContent() {
    var headerContent = document.getElementById("headerContent");
    var headerButton = document.getElementById("headerButton");

    if (headerContent.style.display === "none") {
      headerContent.style.display = "block";
      headerButton.textContent = "Esconder";
    } else {
      headerContent.style.display = "none";
      headerButton.textContent = "Mostrar";
    }
  }