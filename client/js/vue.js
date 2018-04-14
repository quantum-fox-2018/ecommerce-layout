
$(document).on('click.bs.dropdown.data-api', '.dropdown-menu', function (e) {
    e.stopPropagation();
});
const instance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: { 'token': localStorage.getItem('token') }
});

new Vue({
    el: '#app',
    data: {
        carts: [],
        products: [],
        totalQty: 0,
        errormessage :'',
        checkToken: localStorage.getItem('token')
    },
    methods: {
        addChart(product) {
            
            var counter = 0
            this.carts.forEach(element => {
                
                
                if (element.id === product._id) {
                    counter++
                    element.qty = element.qty + 1
                    element.price += element.price
                }

            });
            if (counter === 0) {
                let obj = {}
                obj.id = product._id
                obj.name = product.name
                obj.price = product.price
                obj.qty = 1
                console.log(obj);
                
                this.carts.push(obj)
            }

            this.totalQty += 1

        },
        addQty(cart) {
            this.carts.forEach(element => {
                this.products.forEach(dataPrd => {
                    if (cart.id === element.id) {
                        if (element.id === dataPrd._id) {
                            element.qty = element.qty + 1
                            element.price += dataPrd.price
                            this.totalQty++
                        }
                    }


                });


            });
        },
        minQty(cart) {
            this.carts.forEach(element => {

                this.products.forEach(dataPrd => {
                    if (cart.id === element.id) {
                        if (element.id === dataPrd._id && cart.qty > 1) {
                            element.qty = element.qty - 1
                            element.price -= dataPrd.price
                            this.totalQty--
                        }
                    }

                });

            });
        },
        removeCart(cart) {
            var getIndex = 0
            this.carts.forEach(element => {
                if (cart.id === element.id) {

                    this.carts.splice(getIndex, 1)
                    this.totalQty = this.totalQty - cart.qty
                }
                getIndex++

            });
        },
        login() {
            let email = document.querySelector('input#email').value;
            let password = document.querySelector('input#password').value;
            axios.post('http://localhost:3000/users/login', {
                email: email,
                password: password
            })
                .then((data) => {
                     if(data.status===202){
                       alert('Wrong username/password') 
                    }
                    else{
                        localStorage.setItem('id', data.data.id)
                        localStorage.setItem('token', data.data.token)
                        window.location.href = 'index.html';
                    }
                   
                   
                })
                .catch(err => {
                //    alert('Connection problem')
                   
                })
        },
        logout(){
            localStorage.removeItem('id');
            localStorage.removeItem('token');
            window.location.href = 'index.html'
            this.checkToken = null

        },

        buyproduct(){
            console.log('kenapaaa gaaaa');
            axios.post('http://localhost:3000/products/add', {
                name: 'a',
                price: 10
            })
                .then((data) => {
                  console.log('aaaaaa');
                  

                })
                .catch(err => {
                    // console.log(err)
                    console.log('assssdddda');
                })
            // this.carts.forEach(element => {
            //     console.log('masuuuikk'+element.id);
            //     console.log('masuuuikk'+element.qty);
              
            // })
        },
        register : function(){
            
            let email = document.querySelector('input#emailReg').value;
            let name = document.querySelector('input#nameReg').value;
            let password = document.querySelector('input#passwordReg').value;
            axios.post('http://localhost:3000/users/register', {
                email: email,
                name : name,
                password: password
    
            })
                .then((data) => {
                     if(data.status===202){
                       alert('Wrong username/password') 
                    }
                    else{
                        localStorage.setItem('id', data.data.id)
                        localStorage.setItem('token', data.data.token)
                        window.location.href = 'index.html';

                    }
                   
                   
                })
                .catch(err => {
                   console.log(err);
                   alert(err.response.data.err.message)
                   
                })
        }

    },
    
    created: function () {
        axios.get('http://localhost:3000/products', {
        }).then(response => {
            response.data.data.forEach(productList => {
                this.products.push(productList)

            }).catch(err=>{
                console.log(err);
                
            })

        })
    }

    
});

// {
//     id: 0,
//     name: 'Manchester United Home Jersey 17/18',
//     price: 800000,
//     link: 'https://www.imagehandler.net/?iset=0108&img=A1003394000&fmt=png&w=150&h=150&iindex=0007&c=999&cmp=85',
//     stock : 10
// }, {
//     id: 1,
//     name: 'Everton Third Jersey 17/18',
//     price: 600000,
//     link: 'https://www.imagehandler.net/?iset=0108&img=A1005607000&fmt=png&w=150&h=150&iindex=0007&c=999&cmp=85',
//     stock : 5
// }, {
//     id: 2,
//     name: 'Leicester City Home Jersey 17/18',
//     price: 650000,
//     link: 'https://www.imagehandler.net/?iset=0108&img=A1008982000&fmt=png&w=150&h=150&iindex=0007&c=999&cmp=85',
//     stock : 3
// }, {
//     id: 3,
//     price: 700000,
//     name: 'Tottenham Hotspur Home Jersey 17/18',
//     link: 'https://www.imagehandler.net/?iset=0108&img=A1002810000&fmt=png&w=150&h=150&iindex=0007&c=999&cmp=85',
//     stock : 4
// }