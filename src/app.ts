import app from '@server/server';
import '@config/db'

const port = 3400;

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})