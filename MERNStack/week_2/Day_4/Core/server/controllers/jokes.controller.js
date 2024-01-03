const Joke =require("../model/jokes.model")

module.exports.getAll=(req,res)=>{
    Joke.find()
    .then((result)=>{
        res.json(result)

    }).catch((err)=>{
        res.json(err)
    })

}

module.exports.getById=(req,res)=>{
    Joke.findOne({_id:req.params.id})
    .then((result)=>{
        res.json(result)

    }).catch((err)=>{
        res.json(err)
    })

}


module.exports.create=(req,res)=>{
    Joke.create(req.body)
    .then((newJ)=>{
        res.json(newJ)

    }).catch((err)=>{
        res.json(err)
    })

}

module.exports.update=(req,res)=>{
    Joke.findOneAndUpdate({_id:req.params.id},req.body,{
        new: true,
        runValidators:true
    })
    .then((result)=>{
        res.json(result)

    }).catch((err)=>{
        res.json(err)
    })


}



module.exports.delete=(req,res)=>{
    Joke.deleteOne({_id:req.params.id})
    .then((result)=>{
        res.json(result)

    }).catch((err)=>{
        res.json(err)
    })


}



