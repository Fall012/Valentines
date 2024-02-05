function showMessage(response) {
    if (response === "No") {
      const noButton = document.getElementById("no-button");
      const container = document.querySelector(".container");
      const maxWidth = window.innerWidth - noButton.offsetWidth;
      const maxHeight = window.innerHeight - noButton.offsetHeight;
  
      // Set button position to absolute
      noButton.style.position = "absolute";
  
      // Change image source to "gun.gif"
      document.getElementsByClassName("image")[0].src = "https://scontent.xx.fbcdn.net/v/t1.15752-9/422878091_843710330841934_3666564776469898704_n.jpg?stp=dst-jpg_p168x128&_nc_cat=102&ccb=1-7&_nc_sid=510075&_nc_ohc=hKrc_KVMrtEAX9erbkh&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTGPWV0CPt7FnHFnSYoH2dcv68Oq9MOH863fmC6DUJmEg&oe=65E85245";
  
      // Generate random coordinates within the visible container
      const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
      const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));
  
      // Apply new coordinates to the button
      noButton.style.left = randomX + "px";
      noButton.style.top = randomY + "px";
  
      // Update text content and hide name message
      document.getElementById("question").textContent =
        "PLEASEEEEEE!!!!!";
      document.getElementById("name").style.display = "none";
  
      // Optional: You can also add a timeout to reset the position after a few seconds
    }
  
    if (response === "Yes") {
      // Remove name message and no button
      document.getElementById("name").remove();
      document.getElementById("no-button").remove();
  
      // Update text content, show message, and change image source to "dance.gif"
      const yesMessage = document.getElementById("question");
      yesMessage.textContent = "LESGOOO see you on the 14th babygirl😘😘";
      yesMessage.style.display = "block";
      yesMessage.style.fontStyle = "normal";
      document.getElementsByClassName("image")[0].src = "https://github.com/the-code-crusader/ValentinesSite/blob/main/images/dance.gif?raw=true";
  
      // Remove yes button
      document.getElementById("yesButton").remove();
    }
  }