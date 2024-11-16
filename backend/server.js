"use strict";
// import express, {Request,Response} from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import cors from 'cors';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// dotenv.config();
// const app = express();
// app.use(cors());
// const port = process.env.PORT || 3001;
// mongoose.connect(process.env.MONGO_URI || '')
// .then(()=>console.log('Connected to MongoDB'))
// .catch((err)=>console.error('Failed to connect to MongoDB',err));
// app.use(express.json());
// interface Student{
//     fullName:String,
//     age:String,
//     college:String
// }
// const studentSchema = new mongoose.Schema<Student>({
//     fullName:{type:String,required:true},
//     age:{type:String,required:true},
//     college:{type:String,required:true},
// },
// {
//     collection:'studentcollection',
// }
// )
// const StudentModel = mongoose.model<Student>('Student',studentSchema);
// app.get('/students', async(req:Request,res:Response)=>{
//     try{
//         const students = await StudentModel.find();
//         res.status(200).json(students);
//     }
//     catch(error)
//     {
//         res.status(500).json({message:'failed to get student data',error});
//     }
// })
// app.post('/submit',async(req:Request,res:Response)=>{
//     try{
//         const{fullName,age,college} = req.body;
//         const student = new StudentModel({fullName,age,college});
//         await student.save();
//         res.status(200).json({message:'Student datya saved successfully',student});
//     }
//     catch(error)
//     {
// res.status(500).json({message:'Failed to save student data',error})
//     }
// });
// app.listen(port,()=>{
//     console.log(`Server is running on port ${port}`);
// })
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const PORT = process.env.PORT || 3001;
mongoose_1.default.connect(process.env.MONGO_URI || ' ')
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log(error.message));
const studentSchema = new mongoose_1.default.Schema({
    fullName: { type: String, required: true },
    age: { type: Number, required: true },
    college: { type: String, required: true },
}, {
    collection: 'studentcollection'
});
const StudentModel = mongoose_1.default.model('Student', studentSchema);
app.get('/students', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield StudentModel.find();
        res.status(200).json(students);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching data', error });
    }
}));
app.post('/submit', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fullName, age, college } = req.body;
        const student = new StudentModel({ fullName, age, college });
        yield student.save();
        res.status(200).json({ message: 'Data submitted successfully', student });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error submitting data' });
    }
}));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
