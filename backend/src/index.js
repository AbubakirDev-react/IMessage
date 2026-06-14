// const express = require('express');
import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import { clerkMiddleware } from '@clerk/express';

import User from './models/user.model.js';
import { connectDB } from './lib/db.js';

const app = express();
const PORT = process.env.PORT;
const FRONTEND_URL = process.env.FRONTEND_URL;

app.use(express.json()); // Middleware to parse JSON bodies from incoming requests
app.use(cors({ origin: FRONTEND_URL, credentials: true })); // CORS middleware to allow requests from the frontend URL
app.use(clerkMiddleware()); // Clerk middleware to handle authentication

app.get('/health', async (req, res) => {
    try {
        res.status(200).json({ ok: true });
    }   catch (error) {
        console.error('Error in health check:', error);
    }
});

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});