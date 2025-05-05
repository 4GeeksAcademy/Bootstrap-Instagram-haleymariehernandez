document.querySelector(".create-post-btn").addEventListener("click", () => {});

document.getElementById("imageUpload").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const imagePreview = document.getElementById("imagePreview");
      imagePreview.innerHTML = "";
      const img = document.createElement("img");
      img.src = e.target.result;
      imagePreview.appendChild(img);
    };
    reader.readAsDataURL(file);
  }
});

document.getElementById("sharePostBtn").addEventListener("click", () => {
  const caption = document.getElementById("postCaption").value;
  alert("Post shared!\nCaption: " + (caption || "No caption provided"));

  document.getElementById("imagePreview").innerHTML =
    '<input type="file" id="imageUpload" accept="image/*" style="display: none;" /><button class="btn btn-primary select-image-btn" onclick="document.getElementById(\'imageUpload\').click()">Select from computer</button>';
  document.getElementById("postCaption").value = "";

  const modal = bootstrap.Modal.getInstance(
    document.getElementById("createPostModal")
  );
  modal.hide();
});

const postWrappers = document.querySelectorAll(".post-wrapper");
const rowContainer = document.querySelector(".row");

const postData = [
  {
    title: "Look at this cute duck!",
    date: "08/26",
    likes: "204 Likes",
    comment: "Quack,Quack,Quack!",
  },
  {
    title: "Can we play mermaids here?",
    date: "04/09",
    likes: "2605 Likes",
    comment: "I love the ocean",
  },
  {
    title: "Look at these beautiful people",
    date: "06/10",
    likes: "204 Likes",
    comment: "1 2 3 SMILE!",
  },
  {
    title: "Flowers and books are the way to my heart!",
    date: "07/15",
    likes: "150 Likes",
    comment: "what's your favorite book at the moment?",
  },
  {
    title: "Surprise... more flowers LOL!",
    date: "07/20",
    likes: "300 Likes",
    comment: "Can you tell I really love flowers...",
  },
  {
    title: "My OOTD",
    date: "08/01",
    likes: "250 Likes",
    comment: "my outfit of the day!",
  },
  {
    title: "Look at these busses!",
    date: "08/05",
    likes: "180 Likes",
    comment: "vroom,vroom!",
  },
  {
    title: "Look at this view!",
    date: "08/10",
    likes: "220 Likes",
    comment: "this and some hot coco would be amazing!",
  },
  {
    title: "Look at the moon!",
    date: "08/15",
    likes: "190 Likes",
    comment: "isn't she stunning!",
  },
];

document.getElementById("grid-tab").addEventListener("shown.bs.tab", () => {
  postWrappers.forEach((post) => {
    post.classList.remove("col-12", "inline-view");
    post.classList.add("col-12", "col-md-4");
    const header = post.querySelector(".post-header");
    const footer = post.querySelector(".post-footer");
    if (header) header.remove();
    if (footer) footer.remove();
  });
  rowContainer.classList.remove("inline-view-row");
});

document.getElementById("inline-tab").addEventListener("shown.bs.tab", () => {
  postWrappers.forEach((post, index) => {
    post.classList.remove("col-12", "col-md-4");
    post.classList.add("col-12", "inline-view");

    const existingHeader = post.querySelector(".post-header");
    const existingFooter = post.querySelector(".post-footer");
    if (existingHeader) existingHeader.remove();
    if (existingFooter) existingFooter.remove();

    const header = document.createElement("div");
    header.classList.add("post-header");
    header.innerHTML = `
      <h5 class="post-title">${postData[index].title}</h5>
      <span class="post-date">${postData[index].date}</span>
    `;
    post.prepend(header);

    const footer = document.createElement("div");
    footer.classList.add("post-footer");
    footer.innerHTML = `
      <p class="post-likes">${postData[index].likes}</p>
      <p class="post-comment">${postData[index].comment}</p>
    `;
    post.append(footer);
  });
  rowContainer.classList.add("inline-view-row");
});

document.getElementById("grid-tab").click();
