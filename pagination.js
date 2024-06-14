document.addEventListener("DOMContentLoaded", function () {
  const pages = ["blogs.html", "blogs-2.html"];
  const currentPage = window.location.pathname.split("/").pop();
  let currentIndex = pages.indexOf(currentPage);

  function updatePagination() {
    document.getElementById("page1").classList.remove("active");
    document.getElementById("page2").classList.remove("active");

    if (currentIndex === 0) {
      document.getElementById("page1").classList.add("active");
    } else if (currentIndex === 1) {
      document.getElementById("page2").classList.add("active");
    }
  }

  document.getElementById("prev").addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      window.location.href = pages[currentIndex];
    }
  });

  document.getElementById("next").addEventListener("click", function () {
    if (currentIndex < pages.length - 1) {
      currentIndex++;
      window.location.href = pages[currentIndex];
    }
  });

  updatePagination();
});
