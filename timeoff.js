(function (){
    const customerImage = document.querySelector('#customer-img')
    const customerName = document.querySelector('#customer-name')
    const customerText = document.querySelector('#customer-text')

    const btn = document.querySelectorAll('.btn')
    let index = 1
    const customers = []

    function Customer(img, name, text){
        this.img = img
        this.name = name
        this.text = text
    }

    function createCustomer(img, name, text){
        let Img = `./img/${img}.PNG`
        let customer = new Customer(Img, name, text)

        customers.push(customer)
    }
    createCustomer(1, 'john', 'TimeOff is one of the most stylish and comfortable hotels in this town. What i love most about this hotel is that their rooms are nice and very affordable.')
    createCustomer(2, 'Juliet', 'When it comes to quality services, look no further than TimeOff royal resort, their staff are well mannered, friendly and sure know how to make their guest feel at home.')
    createCustomer(3, 'Martins', 'I had a great time staying at this hotel, the fitness centre helped me get in shape and i definitely enjoyed engaging in sporting activities at the hotel.')
    createCustomer(4, 'Savior', ' The view from the rooftop of the hotel is amazing and i recommend anyone coming to sapele to visit Timeoff Royal Resort.')

    btn.forEach(function(button){
        button.addEventListener('click', function(e){
            if (e.target.parentElement.classList.contains('prevBtn')){
                if (index === 0) {
                    index = customers.length
                }
                index--
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }

            if (e.target.parentElement.classList.contains('nextBtn')){
                index++
                if (index === customers.length) {
                    index = 0
                }
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }
        })
    })

})()