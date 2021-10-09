function validateUsr(username) {
    if(username.length > 16 || username.length < 4) return false
    if(/[^a-z0-9_]/g.test(username)) return false
    return true
}