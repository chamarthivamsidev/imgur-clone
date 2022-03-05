var clientId = "fbac8857f6f0770";

var requestOptions = {
  method: "GET",
  headers: {
    Authorization: `Client-ID ${clientId}`,
  },
  redirect: "follow",
};

var subreddit = "random";

fetch(`https://api.imgur.com/3/gallery/top`, requestOptions)
  .then((response) => response.json())
  .then((result) => {
    console.log("result data:", result.data);
    display(result.data);
  })
  .catch((error) => console.log("error", error));

let display_content = document.getElementById("display_content");
let display_content_1 = document.getElementById("display_content_1");
let display_content_2 = document.getElementById("display_content_2");
let display_content_3 = document.getElementById("display_content_3");
let display_content_4 = document.getElementById("display_content_4");
let display_content_5 = document.getElementById("display_content_5");

function display(data) {
  let d1 = data.splice(0, 12);
  let d2 = data.splice(0, 12);
  let d3 = data.splice(0, 12);
  console.log("d3:", d3);
  let d4 = data.splice(0, 12);
  let d5 = data.splice(0, 12);

  displayData(d1, display_content_1);
  displayData(d2, display_content_2);
  displayData(d3, display_content_3);
  displayData(d4, display_content_4);
  displayData(d5, display_content_5);
}

function displayData(data, display_content) {
  data.map((item) => {
    let content_div = document.createElement("div");
    content_div.setAttribute("class", "content_div");

    content_div.addEventListener("click", () => {
      window.open(`${item.link}`);
    });

    let img = document.createElement("img");
    let img_div = document.createElement("div");
    img_div.setAttribute("class", "img_div");
    if (item.images) {
      if (item.images[0].type === "video/mp4") {
        img_div.innerHTML = `<video controls>
          <source src=${item.images[0].link} type="video/mp4">
          </video>`;
      }
      if (item.images[0].type === "image/jpeg") {
        img_div.innerHTML = `<img src=${item.images[0].link}/>`;
      }
      if (item.images[0].type === "image/png") {
        img_div.innerHTML = `<img src=${item.images[0].link}/>`;
      }
    } else {
      img_div.innerHTML = `<video  controls>
          <source src="https://i.imgur.com/a8RF3mH.mp4" type="video/mp4">
          </video>`;
    }
    let title = document.createElement("div");
    title.setAttribute("class", "title");
    title.innerHTML = `${item.title}`;

    let social_div = document.createElement("div");
    social_div.setAttribute("class", "social_div");
     
    let up_vote_div = document.createElement("div");
    up_vote_div.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Upvote</title><path fill="currentColor" stroke="#ffffff" stroke-width="0" fill-rule="evenodd" clip-rule="evenodd" d="M7.197 2.524a1.2 1.2 0 011.606 0c.521.46 1.302 1.182 2.363 2.243a29.617 29.617 0 012.423 2.722c.339.435.025 1.028-.526 1.028h-2.397v4.147c0 .524-.306.982-.823 1.064-.417.066-1.014.122-1.843.122s-1.427-.056-1.843-.122c-.517-.082-.824-.54-.824-1.064V8.517H2.937c-.552 0-.865-.593-.527-1.028.52-.669 1.32-1.62 2.423-2.722a52.996 52.996 0 012.364-2.243z"></path></svg><p>${item.favorite_count}</p> `;
    up_vote_div.setAttribute("class", "up_vote_div");

    let comment_div = document.createElement("div");
    comment_div.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" class="PostCommentsIcon" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Comments</title><path fill="currentColor" stroke="#ffffff" stroke-width="0" d="M4.455 12.195l.367 1.105 1.037-.53c.266-.135.637-.412 1.039-.74.39-.319.872-.737 1.422-1.245h2.291a3.306 3.306 0 003.306-3.306V5.306A3.306 3.306 0 0010.611 2H5.306A3.306 3.306 0 002 5.306v2.656c0 1.34.933 2.461 2.185 2.75.008.172.025.335.046.479a6.622 6.622 0 00.168.803c.016.07.035.137.056.2z"></path></svg><p>${item.comment_count}</p>`;
     comment_div.setAttribute("class", "comment_div");

    let views_div = document.createElement("div");
    let x = Math.floor(`${item.views}` / 1000);
    views_div.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" class="PostViewsIcon" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Post views</title><path d="M8 2.5C4.74998 2.5 2.30142 5.50267 1.27514 6.77517C0.925337 7.20917 0.908553 7.76483 1.2278 8.16583C2.22527 9.41833 4.6991 12.5 8 12.5C11.3686 12.5 13.8396 9.31133 14.796 8.0905C15.0769 7.732 15.0674 7.2535 14.7692 6.8755C13.7938 5.6395 11.3376 2.5 8 2.5ZM7.98224 9.33333C6.90897 9.33333 6.03887 8.51233 6.03887 7.5C6.03887 6.4875 6.90897 5.66667 7.98224 5.66667C9.05551 5.66667 9.92561 6.4875 9.92561 7.5C9.92561 8.51233 9.05551 9.33333 7.98224 9.33333Z" fill="currentColor"></path></svg><p>${x}K</p> `;
    views_div.setAttribute("class", "views_div");

    social_div.append(up_vote_div, comment_div, views_div);
    content_div.append(img_div, title, social_div);
    display_content.append(content_div);
  });
}
