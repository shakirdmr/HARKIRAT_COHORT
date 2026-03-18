import mongoose from 'mongoose';


const schemaObject = {
  name: {
    type: String,
    required: true,
    trim: true
  }
}


// Define the schema
const UserSchema = new mongoose.Schema(schemaObject); 


// 

// Create the model
const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
