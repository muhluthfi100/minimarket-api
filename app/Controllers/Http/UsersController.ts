import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import CreateUserValidator from 'App/Validators/CreateUserValidator'

export default class UsersController {
  public async index({response}: HttpContextContract) {

    try {
        const allUser = await User.all()
        response.ok({msg : 'success', data : allUser})
        
    } catch (error) {
        response.badRequest({msg : error})
    }
  }

  public async store({request, response}: HttpContextContract) {
    try {
        await request.validate(CreateUserValidator)
        const newUser = await User.create({
            user_name : request.input('user_name'),
            user_birthdate : request.input('user_birthdate'),
            gender : request.input('gender')
        })
        await newUser.save()
        response.created({msg : 'success', data : newUser})

    } catch (error) {
        response.badRequest({msg : error})
    }
  }

  public async show({response, params}: HttpContextContract) {
    try {
        const user = await User.find(params.id)
        if(user===null){
            response.badRequest({msg : 'User not Found'})
        }else{
            response.ok({msg : 'success', data : user})
        }

    } catch (error) {
        response.badRequest({msg:error})
    }
  }

  public async update({request, response, params}: HttpContextContract) {
    try {
        const user = await User.find(params.id)
        if (user!==null){
            await request.validate(CreateUserValidator)

            // Change value
            user.user_name = request.input('user_name'),
            user.user_birthdate = request.input('user_birthdate'),
            user.gender = request.input('gender')
    
            // Save
            await user.save()
            response.ok({msg:'success', data : user})
        }else{
            response.badRequest({msg : 'User Not Found Cannot Update'})
        }
        
    } catch (error) {
        response.badRequest({msg : error})
    }
  }

  public async destroy({response, params}: HttpContextContract) {
    try {
        const user = await User.findOrFail(params.id)
        user.delete()
        response.ok({msg : `User id = ${params.id} deleted`})
    } catch (error) {
        response.badRequest({msg : error})
    }
  }
}
