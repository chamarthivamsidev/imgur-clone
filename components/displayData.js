function displayData(data, display_content) {
  data.map((item) => {
    let content_div = document.createElement("div");
    content_div.setAttribute("class", "content_div");

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
    let title = document.createElement("p");
    title.setAttribute("class", "title");
    title.innerHTML = `${item.title}`;

    img.src = "https://i.imgur.com/w0nADO1.gifv";

    content_div.append(img_div, title);
    display_content.append(content_div);
  });
}
// export default displayData;
