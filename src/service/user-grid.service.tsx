import { UserGrid } from '../model/user/grid.model'
import { requests } from './api'

const UserGridApi = {
  get: (): Promise<UserGrid> => requests.get(''),
}

export default UserGridApi
