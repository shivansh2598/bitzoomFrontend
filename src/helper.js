import { baseIp } from "./config";


export const handleUploadImage = (ev, uploadInput, branch, semester, subject, year) => {
  ev.preventDefault();

  const data = new FormData();
  data.append("file", uploadInput.files[0]);
  data.append("branch", branch);
  data.append("subject", subject);
  data.append("semester", semester);
  data.append("year", year);

  fetch(`${baseIp}/upload`, {
    method: "POST",
    body: data,
    headers: {
      "x-access-token": localStorage.getItem("token"),
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      if (myJson.status !== 200) {
        alert(myJson.msg);
      }
    })
    .catch((err) => {
      console.log("Some Error Occured");
    });
};

export const getFileSize = () => {
  var fi = document.getElementById("file"); // GET THE FILE INPUT.
  // VALIDATE OR CHECK IF ANY FILE IS SELECTED.
  if (fi.files.length > 0) {
    // RUN A LOOP TO CHECK EACH SELECTED FILE.
    var i = 0;
    var fsize = fi.files.item(i).size;
    // THE SIZE OF THE FILE.
    document.getElementById("fp").innerHTML =
      "<b>" + Math.round(fsize / 1024) + "</b> KB";
    if (fsize / 1024 < 30 * 1024) {
      document
        .getElementById("fp")
        .setAttribute("style", "background-color: green; color:white");
    } else {
      document
        .getElementById("fp")
        .setAttribute("style", "background-color: black; color:white");
    }
  }
};
 
