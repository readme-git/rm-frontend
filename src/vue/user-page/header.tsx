import Box from '@mui/material/Box'
import { User } from '../../model/user/user.model'

export default function UserHeader({ id, username }: User) {
  return (
    <Box>
      <h1>{id}</h1>
      <h1>{username}</h1>
    </Box>
  )
}
