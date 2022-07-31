const checkAuth = (req, res, next) => {
    const base64Auth = (req.headers.authorization || '').split(' ')[1] || ''
    console.log(Buffer.from(base64Auth, 'base64').toString())
    const [login, password] = Buffer.from(base64Auth, 'base64').toString().split(':')

    if (validAuth.find(user => user.username == login && user.password == password)) {
        return next()
    }

    res.set('WWW-Authenticate', 'Basic realm=401')
    res.status(401).send('Please authenticate')
}

const validAuth = [
    { username: 'fakeUser', password: 'fakePassword' }
]

module.exports = {
    checkAuth
}