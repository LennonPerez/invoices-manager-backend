import app from './configs/app'
import {AppDataSource} from './configs/db'

const initApp = async () => {
    try {
        await AppDataSource.initialize();
        const port: number = 3434;
        app.listen(port, () => console.log(`Listening port ${port}`))
    } catch (error) {
        console.log(`Error running server: ${error}`)
    }
}

initApp();
