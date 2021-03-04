function getuser(req, res, next) {
    let id = req.headers.authorization;
    console.log(id);
    let userData = users.filter((item) => item.id == id);
    if(userData.length === 0) {
        res.status(400).json({
            message: 'Not authorize',
        })
        return;
    }

    let newData = {
        name: userData[0].name,
        email: userData[0].email,
    }
    res.status(200).json({
        message:'Status OK',
        data: newData ,
    })
}

exports.getuser = getuser;

let users = [
    {
        id: 1001,
        email: 'test@gmail.com',
        password: 'password',
        name: "User 1"
        
    },
    {
        id: 1002,
        email: 'test1@gmail.com',
        password: 'password1',
        name: "User 2"
    },
    {
        id: 1003,
        email: 'test3@gmail.com',
        password: 'password3',
        name: "User 3"
    },

]
