import UserRoutes from "./routes/userRoutes.js";

export default (app) => {
    app.get('/', (req, res) =>{
        res.send('API Avaible at' + new Date());
    });

    app.use('/auth', UserRoutes);
}
