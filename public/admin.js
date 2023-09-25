let api_base_url = 'http://localhost:3001'

async function main() {

    let response = await fetch(api_base_url+ '/listBooks')
    let books = await response.json()
    console.log(books)

    books.forEach(renderBook)
}

function renderBook(book) {

    let root = document.querySelector('#root')

    let li = document.createElement('li')
    li.textContent = book.title

    let quantityInput = document.createElement('input')
    quantityInput.value = book.quantity

    let saveButton = document.createElement('button')
    saveButton.textContent = 'Save'

    saveButton.addEventListener('click', () => {
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: book.id,
                quantity: quantityInput.value
            })
        })
    })

    li.append(quantityInput, saveButton)

    root.append(li)

}

main()

    // let bookContainer = document.querySelector('.book-container')
    // bookContainer.innerHTML += `
    //     <div class="col-sm-3">
    //         <div class="card" style="width: 100%;">

    //             <div class="card-body">
    //                 <h5 class="card-title">${book.title}</h5>
    //                 <input type="text" value="${book.quantity}"/>
    //                 <button>Submit</button>
    //                 </div>
    //         </div>
    //     </div>
    // `
    // let submitButton