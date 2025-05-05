/* Event Listeners */
document.querySelector('.create-post-btn').addEventListener('click', () => {
    alert('Create a new post functionality coming soon!');
  });
  
  /* Toggle View Functionality */
  const gridViewBtn = document.querySelector('.grid-view-btn');
  const inlineViewBtn = document.querySelector('.inline-view-btn');
  const postWrappers = document.querySelectorAll('.post-wrapper');
  
  /* Sample Data for Posts */
  const postData = [
    { title: "My Crazy Dog Spark!", date: "08/26", likes: "204 Likes", comment: "This is an example of a very good photo that you can post on instagram" },
    { title: "The greatness of Croatia", date: "04/09", likes: "2605 Likes", comment: "This is an example of a very good photo that you can post on instagram" },
    { title: "Amazing Goal by Cristiano!", date: "06/10", likes: "204 Likes", comment: "This is an example of a very good photo that you can post on instagram" },
    { title: "Post Title 4", date: "07/15", likes: "150 Likes", comment: "This is a sample comment for post 4" },
    { title: "Post Title 5", date: "07/20", likes: "300 Likes", comment: "This is a sample comment for post 5" },
    { title: "Post Title 6", date: "08/01", likes: "250 Likes", comment: "This is a sample comment for post 6" },
    { title: "Post Title 7", date: "08/05", likes: "180 Likes", comment: "This is a sample comment for post 7" },
    { title: "Post Title 8", date: "08/10", likes: "220 Likes", comment: "This is a sample comment for post 8" },
    { title: "Post Title 9", date: "08/15", likes: "190 Likes", comment: "This is a sample comment for post 9" }
  ];
  
  /* Grid View Toggle */
  gridViewBtn.addEventListener('click', () => {
    postWrappers.forEach(post => {
      post.classList.remove('col-12');
      post.classList.add('col-12', 'col-md-4');
      const header = post.querySelector('.post-header');
      const footer = post.querySelector('.post-footer');
      if (header) header.remove();
      if (footer) footer.remove();
    });
    gridViewBtn.classList.add('active');
    inlineViewBtn.classList.remove('active');
  });
  
  /* Inline View Toggle */
  inlineViewBtn.addEventListener('click', () => {
    postWrappers.forEach((post, index) => {
      post.classList.remove('col-12', 'col-md-4');
      post.classList.add('col-12');
  
      const existingHeader = post.querySelector('.post-header');
      const existingFooter = post.querySelector('.post-footer');
      if (existingHeader) existingHeader.remove();
      if (existingFooter) existingFooter.remove();
  
      const header = document.createElement('div');
      header.classList.add('post-header');
      header.innerHTML = `
        <h5 class="post-title">${postData[index].title}</h5>
        <span class="post-date">${postData[index].date}</span>
      `;
      post.prepend(header);
  
      const footer = document.createElement('div');
      footer.classList.add('post-footer');
      footer.innerHTML = `
        <p class="post-likes">${postData[index].likes}</p>
        <p class="post-comment">${postData[index].comment}</p>
      `;
      post.append(footer);
    });
    inlineViewBtn.classList.add('active');
    gridViewBtn.classList.remove('active');
  });
  
  /* Default View */
  gridViewBtn.classList.add('active');