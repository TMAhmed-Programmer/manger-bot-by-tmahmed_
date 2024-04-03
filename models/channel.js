const db = require("mongoose") // تعريف البكج
// الشكل الي بتنحفظ فيه الداتا
const logSchema = new db.Schema({
    GuildID:{ // هذا الي بيكون فيه ايدي السيرفر
        type:String, // النوع  اما سترنق او نمبر او اشياء كثير ع حسب شو بدك
        required:true 
    },
    channel:{ // هذا الي بيكون فيه اسم الروم
        type:String,
        required:true
    }
})


module.exports = db.model("logData" , logSchema)