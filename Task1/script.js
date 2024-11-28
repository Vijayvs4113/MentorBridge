
// initialize books object
const books = [
    { id: 1, title: 'Book1', price: 200, stock: 10 },
    { id: 1, title: 'Book1', price: 200, stock: 10 },
    { id: 2, title: 'Book2', price: 250, stock: 14 },
    { id: 3, title: 'Book3', price: 300, stock: 20 },
    { id: 3, title: 'Book3', price: 300, stock: 20 },
    { id: 4, title: 'Book4', price: 400, stock: 40 }
]

// initialize customers object
const customers = [
    { id: 1, name: 'Vijay', isexistingcustomer: true, lastpurchase: 'Book1' },
    { id: 2, name: 'Kumar', isexistingcustomer: true, lastpurchase: 'Book1' },
    { id: 3, name: 'Ram', isexistingcustomer: true, lastpurchase: 'Book1' },
    { id: 4, name: 'Praveen', isexistingcustomer: true, lastpurchase: 'Book1' },
]

// input of customer choosen book ids and customer id
const bookIds = [1, 2, 2, 3]
const customerId = 2

// function for remove duplicates
function removeDuplicates() {
    const uniqueSet = new Set()
    const uniqueBooks = []

    for (const book of books) {
        if (!uniqueSet.has(book.id)) {
            uniqueSet.add(book.id)
            uniqueBooks.push(book)
        }
    }
    return uniqueBooks
}

function filterChoosenBooks(uniqueBookList) {
    return uniqueBookList.filter(book => bookIds.includes(book.id))
}

function calculateDiscount(customerChoosenBooks) {
    const currentCustomer = customers.find(customer => customer.id === customerId)

    currentCustomer ? isexistingcustomer = true : isexistingcustomer = false

    for (let book of customerChoosenBooks) {
        // calculate discount for existing customer
        if (currentCustomer) {
            if (book.price > 200) {
                discount = book.price * 15 / 100
            }
            else {
                discount = 0
            }
        }
        // calculate discount for new customer
        else {
            switch (book.price) {
                case (book.price > 100 && book.price <= 200):
                    discount = book.price * 2 / 100
                    break;
                case (book.price > 200 && book.price <= 500):
                    discount = book.price * 5 / 100
                    break;
                case (book.price > 500 && book.price <= 750):
                    discount = book.price * 10 / 100
                    break;
                case (book.price > 750):
                    discount = book.price * 15 / 100
                    break;

                default:
                    discount = 0
                    break;
            }
        }
        book.discount = discount
    }
}

// function for doing final calculations
function finalCalculations(customerChoosenBooks, bill) {
    totalPrice = 0
    totalDiscount = 0
    for (book of customerChoosenBooks) {
        finalPrice = book.price - book.discount
        book.finalprice = finalPrice
        totalPrice += finalPrice
        totalDiscount += book.discount
    }

    bill.totalPrice = totalPrice
    bill.totalDiscount = totalDiscount
    // console.log(totalPrice,totalDiscount)
}

// function for preparing bill

function prepareBill() {
    const bill = {}

    // find the customer name from customer array
    const customerName = customers.find(customer => customer.id === customerId).name
    bill.customerName = customerName

    // remove duplicates in books list
    const uniqueBookList = removeDuplicates()

    // get the customer choosen books
    const customerChoosenBooks = filterChoosenBooks(uniqueBookList)

    // calculate discount for each books
    calculateDiscount(customerChoosenBooks)
    
    updatedbooksPurchased = customerChoosenBooks.map(book => {
        
        return {
            title: book.title,
            quantity: 1,
            price: book.price,
            discount: book.discount
        }
    })
   
    bill.bookPurchased = updatedbooksPurchased

     // calling final calculations
     finalCalculations(updatedbooksPurchased, bill)

    // console.log('customer choosen books: ',customerChoosenBooks);
    console.log('bill:', bill)
}

prepareBill()


