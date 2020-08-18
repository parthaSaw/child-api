const axios = require('axios')

module.exports=(req,res,next)=>{
    data = {
        uname: req.headers.uname,
        pass: req.headers.pass
    }
    
    if(req.method == "POST"){
        data.isTransaction = true
    }

    axios.post('http://35.154.213.118:3000/login',data)
    // axios.post('http://localhost:3000/login',data)
    .then((data)=>{
        data = data.data
        if(data.status){
            next()
        }else{
            res.send(data.msg)
        }
    },(err)=>{
        console.log(err)
    })
    .catch((err)=>console.log(err))
}