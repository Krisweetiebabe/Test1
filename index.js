    
    var mainBlock = document.getElementById('mainBlock').addEventListener('click', check);
    var secondBlock = document.getElementById('secondBlock');
    secondBlock.addEventListener('click', check);
    secondBlock.addEventListener('click', checkMemory);
    

    function check() {
    var radioButton = this.querySelectorAll('.rectangle');
    var productImage = this.querySelector('#productImage');
    for (var i = 0; i < radioButton.length; i++) {
        if (radioButton[i].checked !== true) {
            radioButton[i].classList.remove('checked');
            productImage.src = "icons/image.png";
        }
        else {
            radioButton[i].classList.add('checked');
            productImage.src = "icons/image2.png";
        }
    }
}


function checkMemory() {
    var memoryInput = document.getElementsByName('memory');
    var memoryOption = document.getElementsByClassName('memory-option');
    var memoryValue0 = memoryInput[0].value;
    var memoryValue0 = memoryInput[0].value;
        
        for (var i = 0; i < memoryInput.length; i++)
            if(memoryInput[i].checked !== true) {
               memoryOption[i].classList.remove('memory-checked');
           }
           else {
               memoryOption[i].classList.add('memory-checked');
           }
       };

       
        
       


 

    

