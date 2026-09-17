import AuthGard from '@/components/auth/auth-guard'
import React, { ReactNode } from 'react'

function layout({children}:{children:ReactNode}) {
  return (
    <AuthGard>
      {children}
    </AuthGard>
  )
}

export default layout