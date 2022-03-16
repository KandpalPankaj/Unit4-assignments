const mongoose= require("mongoose")

const studentSchema= new mongoose.Schema({
    roll_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
        unique:true
    },
    current_batch:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "batch",
        required: true,
      },
},
{
    timestamps:true,
    versionKey:false
}
)

const Student= mongoose.model("student",studentSchema);

module.exports =Student;