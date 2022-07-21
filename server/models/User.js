import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    },
    year: {
      type: String,
      required: true
    },
    branch: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    isGEC: {
      type: Boolean,
      required: true
    },
    folderLink: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: true
    }
  },
  { timestamps: true }
);



export default mongoose.model("User", UserSchema);