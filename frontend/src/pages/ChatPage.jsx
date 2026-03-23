import React from 'react'
import { useAuthStore } from '../store/useAuthStore'
const ChatPage = () => {
  const {logout}=useAuthStore();
  return (
    <div className='text-white '>
      Chat page app
      <button onClick={()=>logout()}>Logout</button>
    </div>
  )
}

export default ChatPage
