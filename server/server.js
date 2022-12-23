const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./mongoDB")
const cors = require("cors")
const productRoutes = require('./routes/productRoutes')
const adminProductRoutes = require('./routes/adminProductRoutes')
const authenticateRouter = require('./routes/authenticateRouter')

connectDB()
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors())

app.use('/api/products', productRoutes )

app.use('/api/admin', adminProductRoutes)

app.use("/authenticate", authenticateRouter)


const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running at ${PORT}`))