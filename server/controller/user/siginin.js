function signIn(req, res, next) {
    const {email, password} = req.body;
    let userData = users.filter((item) => item.email == email)[0];
    if(email !== userData.email) {
        res.status(400).json({
            message: 'user not found',
        })
        return;
    }
    if(password !== userData.password) {
        res.status(400).json({
            message: 'Password incorrect',
        })
        return;
    }
    let token = userData.id;
    res.status(200).json({
        message:'Status OK',
        signin: true,
        token: token,
    })
}

exports.signIn = signIn;

let users = [
    {
        id: 1001,
        email: 'test@gmail.com',
        password: 'password'
    },
    {
        id: 1002,
        email: 'test1@gmail.com',
        password: 'password1'
    },
    {
        id: 1003,
        email: 'test3@gmail.com',
        password: 'password3'
    },

]
