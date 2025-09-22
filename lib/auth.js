// Authentication utility functions

export function isAuthenticated() {
  if (typeof window === 'undefined') {
    return false
  }

  const isAuth = localStorage.getItem('isAuthenticated')
  const authTimestamp = localStorage.getItem('authTimestamp')
  
  if (!isAuth || !authTimestamp) {
    return false
  }

  // Check if authentication is older than 24 hours (optional security measure)
  const now = Date.now()
  const authTime = parseInt(authTimestamp)
  const twentyFourHours = 24 * 60 * 60 * 1000

  if (now - authTime > twentyFourHours) {
    // Clear expired authentication
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('authTimestamp')
    return false
  }

  return true
}

export function logout() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('authTimestamp')
  }
}

export function getAuthToken() {
  if (typeof window === 'undefined') {
    return null
  }
  return localStorage.getItem('isAuthenticated')
}
