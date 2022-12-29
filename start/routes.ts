/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'


Route.group(() => {
    Route.resource('users', 'UsersController').apiOnly()
    Route.resource('goods', 'GoodsController').apiOnly()
    Route.post('/payment','TransactionsController.payment')
    Route.get('/payment/all','TransactionsController.allTransactions')

}).prefix('v1')

Route.get('/', async () => {
    return { hello: 'world' }
})


