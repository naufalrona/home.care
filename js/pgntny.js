// Mendapatkan form komentar
const commentForm = document.getElementById("comment-form");

// Mendapatkan div untuk menampilkan komentar
const commentsDiv = document.getElementById("comments");

// Menambahkan event listener untuk form ketika disubmit
commentForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Mencegah form untuk melakukan submit
  const name = this.elements["name"].value;
  const kategori = this.elements["kategori"].value;
  const comment = this.elements["comment"].value;
  const date = new Date();
  const commentHTML = `
    <div class="comment">
      <h3>${name}</h3>
      <p>${comment}</p>
      <span>Email: ${email}</span>
      <span class="date">${date.toLocaleDateString()}</span>
    </div>
  `;
  commentsDiv.insertAdjacentHTML("beforeend", commentHTML);
  this.reset(); // Reset form
});




function goBack() {
    window.history.back();
  }