import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Goods from 'App/Models/Goods'
import CreateGoodValidator from 'App/Validators/CreateGoodValidator'

export default class GoodsController {
  public async index({response}: HttpContextContract) {
    try {
        const allGoods = await Goods.all()
        response.ok({msg : 'Success', data : allGoods})
    } catch (error) {
        response.badRequest({msg : error})
    }
  }

  public async store({request, response}: HttpContextContract) {
    try {
        await request.validate(CreateGoodValidator)
        const newGoods = await Goods.create({
            goods_name : request.input('goods_name'),
            goods_stock : request.input('goods_stock'),
            goods_type : request.input('goods_type'),
            goods_price : request.input('goods_price')
        })
        await newGoods.save()
        response.created({msg : 'Success', data : newGoods})
    } catch (error) {
        response.badRequest({msg : error})
    }
  }

  public async show({response, params}: HttpContextContract) {
    try {
        const goods = await Goods.findOrFail(params.id)
        response.ok({msg : 'Success', data : goods})
    } catch (error) {
        response.badRequest({msg : error})
    }
  }

  public async update({request, response, params}: HttpContextContract) {
    try {
        await request.validate(CreateGoodValidator)
        const goods = await Goods.findOrFail(params.id)
        goods.goods_name = request.input('goods_name'),
        goods.goods_stock = request.input('goods_stock'),
        goods.goods_type = request.input('goods_type'),
        goods.goods_price = request.input('goods_price')

        await goods.save()
        response.ok({msg : 'Success', data : goods})
    } catch (error) {
        response.badRequest({msg : error})
    }
  }

  public async destroy({response, params}: HttpContextContract) {
    try {
        const goods = await Goods.findOrFail(params.id)
        await goods.delete()
        response.ok({msg : `Goods id = ${params.id} deleted`})
    } catch (error) {
        response.badRequest({msg : error})
    }
  }
}
