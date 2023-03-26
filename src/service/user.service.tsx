import { User } from '../model/user/user.model'
import { requests } from './api'

const UserApi = {
  get: (): Promise<User> => requests.get(''),
}

export default UserApi
