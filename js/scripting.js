
function redirectToNext(){
    window.location.href="index.html";   
  }
  
  function saveFormData() {
    const formData = new FormData(document.getElementById("myForm"));
  
    let textData = "";
    formData.forEach((value, key) => {
      textData += `${key}: ${value}\n`;
    });
    
    const blob = new Blob([textData], { type: "text/plain" });
  
    const downloadLink = document.createElement("a");
    downloadLink.download = "userdata.txt";
    downloadLink.href = URL.createObjectURL(blob);
  
    downloadLink.click();
    
    redirectToNext();

  }
  