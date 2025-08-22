import { createContext, useContext, useEffect, useState } from 'react'
import { isAuthenticated as checkAuth, login as authLogin, logout as authLogout } from '@/utils/auth'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    setIsAuthenticated(checkAuth())
  }, [])

  const login = (username, password) => {
    const success = authLogin(username, password)
    setIsAuthenticated(success)
    return success
  }

  const logout = () => {
    authLogout()
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
