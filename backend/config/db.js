const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000 // 5 second timeout
    });
    console.log('✅ MongoDB Connected');
  } catch (err) {
    console.error('❌ Connection Error:', err.message);
    process.exit(1);
  }
};