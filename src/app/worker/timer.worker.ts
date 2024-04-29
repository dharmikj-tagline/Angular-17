/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  if (data) {
    setInterval(() => {
      postMessage(new Date());
    }, 1000);
  }
  postMessage(data);
});