import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Goods from 'App/Models/Goods'
import Transaction from 'App/Models/Transaction'
import User from 'App/Models/User'

export default class TransactionsController {
    public async payment ({request, response}:HttpContextContract) {
        // Check if goods available and exist
        // Get Goods by ID
        const id = request.input('goods_id')
        let stocks = 0
        let total_price = 0
        const goods = await Goods.find(id)
        if (goods == null){
            response.badRequest({msg : "Product not found"})
            return
        } else {
            stocks = request.input('ammount_of_goods')
            const stocks_in_db = goods.goods_stock
            if (stocks_in_db >= stocks){
                // Update Stocks in db
                let stocks_updated = stocks_in_db - stocks
                goods.goods_stock = stocks_updated
                await goods.save()
                // Calculate Total Price
                total_price = goods.goods_price*stocks
                console.log(goods)
            }else {
                response.badRequest({msg : 'Not Enough Product Stocks'})
                return
            }
        }
        // Check if user exist
        const user_id = request.input('user_id')
        const user = await User.find(user_id)
        if (user == null){
            response.badRequest({msg : "User does not exist"})
            return
        }

        // Store payment to transaction table
        const transaction = await Transaction.create({
            User_user_id : user_id,
            Goods_goods_id : id,
            transaction_ammount : stocks,
            transaction_total_price : total_price
        })
        await transaction.save()
        response.created({msg : 'Success', data : transaction})

    }

    public async allTransactions ({response}:HttpContextContract) {
        try {
            const alltransactions = await Transaction.all()
            response.created({msg:'Success', data : alltransactions})
        } catch (error) {
            response.badRequest({msg:error})
        }

    }
}
