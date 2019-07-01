let express = require("express")
let app =express()
app.listen(3001)
app.get('/banner',function(req,res){
 res.json({code:200,banner})
})