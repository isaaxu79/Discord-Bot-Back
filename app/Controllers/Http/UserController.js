'use strict'

const User = use('App/Models/User')
class UserController {

    /**
       * All users
       * GET Users
       */
    async index ({ request, response, view }) {
        try {
            let empresas = await User.all();
            return response.status(200).json(empresas);
        } catch (error) {
            return response.status(500).json(error)
        }
        
      }
    
      async getByUser({ params, request, response, view }){
        /*let { id } = params
        let empresa = await Database.table('empresas').select('*').where('usuario_id',id)

        return response.status(201).json(empresa)*/
    }
    
      /**
       * Create/save a new class.
       * POST empresas
       */
      async store ({ request, response }) {
        let userData = request.all()
    
        let user = await User.create(userData);
    
        return response.status(201).json(user)
    
      }
    
      /**
       * Display a single class.
       * GET empresas/:id
       */
      async show ({ params, request, response, view }) {
        /*let { id } = params
        let empresa = await Empresa.find(id)
    
        return response.status(201).json(empresa)*/
      }
    
    
      /**
       * Update class details.
       * PUT or PATCH empresas/:id
       *
       * @param {object} ctx
       * @param {Request} ctx.request
       * @param {Response} ctx.response
       */
      async update ({ params, request, response }) {
        /*let { id } = params
        let empresa_data = request.all()
    
        let empresa = await Empresa.findOrFail(id)
    
        empresa.merge(empresa_data)
    
        await empresa.save()
    
        return response.status(201).json(empresa)*/
      }
    
      /**
       * Delete a class with id.
       * DELETE empresas/:id
       *
       * @param {object} ctx
       * @param {Request} ctx.request
       * @param {Response} ctx.response
       */
      async destroy ({ params, request, response }) {
        /*let { id } = params
        let empresa = await Empresa.findOrFail(id)
    
        await empresa.delete()
    
        return response.status(200).json({
          msg: 'Eliminado'
        })*/
      }
}

module.exports = UserController
