import basicAuth = require('./')

basicAuth({
    users: { admin: 'test' },
    unauthorizedResponse(req) {
        // Reject `any`: checking properties alone would also pass with an untyped request.
        const requestIsTyped: 0 extends (1 & typeof req) ? false : true = true
        const user: string = req.auth.user
        return { message: 'Unauthorized', user, requestIsTyped }
    }
})

basicAuth({ users: {}, unauthorizedResponse: 'Unauthorized' })
basicAuth({ users: {}, unauthorizedResponse: { message: 'Unauthorized' } })
