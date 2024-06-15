import User from '#models/user'
import { loginUserValidator, registerUserValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async register({ request, response }: HttpContext) {
    try {
      const payload = await request.validateUsing(registerUserValidator)

      console.log(payload)

      const user = await User.create(payload)

      const token = await User.accessTokens.create(user, ['*'], {
        expiresIn: '30 days',
      })

      response.json({
        message: 'Login successful',
        token,
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  async login({ response, request }: HttpContext) {
    try {
      const payload = await request.validateUsing(loginUserValidator)
      const user = await User.verifyCredentials(payload.email, payload.password)

      console.log('user', user.toJSON())

      const token = await User.accessTokens.create(user)

      console.log('token', token.value!.release())

      return token
    } catch (error) {
      console.log(error)
    }
  }

  async logout({ auth, response }: HttpContext) {
    try {
      const user = auth.user!

      // await User.accessTokens.delete(user, user.currentAccessToken.identifier)
      return response.json({ message: 'Logout successful' })
    } catch (error) {
      console.log(error.message)
    }
  }

  async me({ auth }: HttpContext) {
    await auth.check()
    const user = auth.user
    return user
  }
}
