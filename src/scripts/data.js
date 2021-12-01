export const fetchData = url => {
  let req = new XMLHttpRequest();

  return new Promise((resolve, reject) => {
    req.onreadystatechange = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        resolve(JSON.parse(req.responseText));
      }
    };

    req.open('GET', url);
    req.send();
  });
};
