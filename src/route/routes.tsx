import { Route, Routes } from 'react-router-dom'
import UserPage from '../vue/user-page/page'

export default function Router() {
  return (
    <Routes>
      <Route path='/' />
      <Route path='/:id/:grid' element={<UserPage />} />
    </Routes>
  )
}
