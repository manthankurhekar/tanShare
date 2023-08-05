const dropZone = document.querySelector('.drop-zone');
const browseBtn = document.querySelector('.browseBtn');
const fileInput = document.querySelector('#fileinput');

const host = "http://tanshare.onrender.com";
const uploadURL = `${host}/api/files`;

dropZone.addEventListener("dragover", (e) => {  
      e.preventDefault();
      console.log("Dragging!");
      if(!dropZone.classList.contains('dragged')) {
            dropZone.classList.add('dragged');
      }
});

dropZone.addEventListener("dragleave", () => {
      dropZone.classList.remove("dragged");
});

dropZone.addEventListener("drop", (e) => {
      e.preventDefault();
      dropZone.classList.remove("dragged");
      const files = e.dataTransfer.files;
      console.log(files);
      if(files.length) {
            fileInput.files = files;
            uploadFile();
      }
});

browseBtn.addEventListener("click", () => {
      fileInput.click();
});

const uploadFile = () => {
      const file = fileInput.files[0];
      const formData = new FormData();
      formData.append("myfile", file);
      const xhr = new XMLHttpRequest();

      xhr.onreadystatechange = () => {
            if(xhr.readyState);
      };

      xhr.open("POST", uploadURL);
      xhr.send(formData);
};