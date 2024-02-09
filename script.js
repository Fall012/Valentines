function showMessage(response) {
    if (response === "No") {
      const noButton = document.getElementById("no-button");
      const container = document.querySelector(".container");
      const maxWidth = window.innerWidth - noButton.offsetWidth;
      const maxHeight = window.innerHeight - noButton.offsetHeight;
  
      noButton.style.position = "absolute";
  
      document.getElementsByClassName("image")[0].src = "https://scontent.xx.fbcdn.net/v/t1.15752-9/422878091_843710330841934_3666564776469898704_n.jpg?stp=dst-jpg_p168x128&_nc_cat=102&ccb=1-7&_nc_sid=510075&_nc_ohc=hKrc_KVMrtEAX9erbkh&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTGPWV0CPt7FnHFnSYoH2dcv68Oq9MOH863fmC6DUJmEg&oe=65E85245";
  
      const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
      const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));
  
      noButton.style.left = randomX + "px";
      noButton.style.top = randomY + "px";
  
      document.getElementById("question").textContent =
        "PLEASEEEEEE!!!!!";
      document.getElementById("name").style.display = "none";
    }
  
    if (response === "Yes") {
        
      document.getElementById("name").remove();
      document.getElementById("no-button").remove();
  
      const yesMessage = document.getElementById("question");
      yesMessage.textContent = "LESGOOO see you on the 14th babygirl😘😘";
      yesMessage.style.display = "block";
      yesMessage.style.fontStyle = "normal";
      document.getElementsByClassName("image")[0].src = "https://github.com/the-code-crusader/ValentinesSite/blob/main/images/dance.gif?raw=true";
  
      document.getElementById("yesButton").remove();
    }
  }
