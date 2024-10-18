document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const content = document.getElementById('content').value;
    const textColor = document.getElementById('coloroftext').value;
    const bgColor = document.getElementById('backgroundcolor').value;
  

    const newElement = document.createElement('div');
  
   
    newElement.textContent = content;
    newElement.style.color = textColor;
    newElement.style.backgroundColor = bgColor;
    newElement.style.padding = '10px'; 
    newElement.style.marginTop="20px";
  
    const container = document.getElementById('container');
  
    container.appendChild(newElement);
  });
  