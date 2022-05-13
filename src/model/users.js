const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
  name: {type: String, required: true, trim: true},
  email: {type: String, required: true, unique: true, trim: true},
  password: {type: String, required: true},
  date: { type: Date, default: Date.now },
},{
  timestamps: true,
  versionKey: false
})

const User = model("User",UserSchema)