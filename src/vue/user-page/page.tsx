import Box from '@mui/material/Box'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { User } from '../../model/user/user.model'
import UserGrid from './grid'
import UserHeader from './header'

export default function UserPage() {
  const params = useParams()
  const [user] = useState<User>(new User())

  return (
    <Box>
      <UserHeader id={user.id} username={user.username} avatar={user.avatar} />
      <UserGrid />
    </Box>
  )
}
