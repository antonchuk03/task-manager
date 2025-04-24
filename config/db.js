import mongoose from 'mongoose';
const URI =
    'mongodb+srv://antonchuk03:pYoWSQ1t649jZSAq@cluster0.6shunpg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose
    .connect(URI)
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch((e) => {
        console.error(e);
    });
