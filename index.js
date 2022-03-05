var clientId = "fbac8857f6f0770";

var requestOptions = {
  method: "GET",
  headers: {
    Authorization: `Client-ID ${clientId}`,
  },
  redirect: "follow",
};

var subreddit = "random";

fetch(`https://api.imgur.com/3/gallery/random`, requestOptions)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
