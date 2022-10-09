

 

function process (form) {

    let bookArea = document.querySelector('.books');

    const newBook={
        Name: form.bookname.value,
        Author:form.author.value,
        Pages:form.pages.value,
    }

    if (form.completed.checked) {newBook.Completed = 'yes';}
    else {newBook.Completed = 'no';}


    let newCard = document.createElement('div');
    newCard.classList.add("bookcard");

    const arr1=["Book name:",newBook.Name,"Author:",newBook.Author,"Pages:",newBook.Pages,"Completed:"];
    
    arr1.forEach(function(e){
        div = document.createElement('div');
        div.textContent = e;
        newCard.appendChild(div);
    })

    
    let complete = document.createElement('input'); 
    complete.type = 'checkbox';
    if (form.completed.checked) complete.checked = true;
    else complete.checked = false;
    newCard.appendChild(complete);

    let clear = document.createElement('img');
    clear.src ='4021663.png'
    clear.style.width= '30px';
    clear.style.height= '30px';
    clear.addEventListener('click', function(){
        let con = confirm('are you sure you want to delete this book?');
        if(con) this.parentElement.remove();
    })
    newCard.appendChild(clear);


    bookArea.appendChild(newCard);

}


    function clearAll(){

        let bookArea = document.querySelector('.books');
        let con = confirm('are you sure you want to delete all book history?')
            if (con){
                while (bookArea.lastElementChild) {
                    bookArea.removeChild(bookArea.lastElementChild);
                }
            }
        
    }
    

 





