import { app } from './src/app'
import { closeWebSocketServer } from './src/helpers/closeWss'
const PORT = 8000

const server = app.listen(PORT, () => {
    console.log('server listening on ', PORT)
})

process.on('SIGINT', () => {
    closeWebSocketServer()
    server.close(() => console.log('server closed'))
})
