const mongoose = require('mongoose');

// URI to connect
const uri = process.env.MONGO_URI;

// Connect to Database
mongoose
	.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log(`Connected to '${mongoose.connection.name}'`))
	.catch((err) =>
		console.error(`Error connecting to '${mongoose.connection.name}': ${err}`),
	);
