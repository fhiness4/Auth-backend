const { required } = require('joi')
const mongoose = require('mongoose')

const htmlschema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    html: {
      type: String,
      trim: true,  // Remove whitespace
      maxlength: [50000, 'HTML code cannot exceed 50000 characters']
    },
    css: {
      type: String,
      trim: true,  // Remove whitespace
      maxlength: [50000, 'css code cannot exceed 50000 characters']
    },
    js: {
      type: String,
      trim: true,  // Remove whitespace
      maxlength: [50000, ' js cannot exceed 50000 characters']
    }
  }
,
{
    timestamps: true
}
)

module.exports = mongoose.model('htmldata', htmlschema)
