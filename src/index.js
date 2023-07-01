addEventListener("fetch", (event) => {
  return new Response("Hello world!", {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  });
});
