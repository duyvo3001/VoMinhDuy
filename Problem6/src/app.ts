import express, { Express, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import { HttpError } from "./utils/errorhandling";
import { WebSocketServer } from 'ws';
import connectMongodb from "./dbs/init.mongodb"
import { LeaderBoard } from "./service/leaderBoard.service";
import { router } from "./routes";

export const app: Express = express();

app.use(morgan('dev'))
app.use(helmet())
app.use(compression())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

try {
    connectMongodb
} catch (error) {
    (error: Error) => {
        console.error(error);
        process.exit(1);
    }
}
export const wss = new WebSocketServer({
    port: 4000,
    perMessageDeflate: {
        zlibDeflateOptions: {
            // See zlib defaults.
            chunkSize: 1024,
            memLevel: 7,
            level: 3
        },
        zlibInflateOptions: {
            chunkSize: 10 * 1024
        },
        // Other options settable:
        clientNoContextTakeover: true, // Defaults to negotiated value.
        serverNoContextTakeover: true, // Defaults to negotiated value.
        serverMaxWindowBits: 10, // Defaults to negotiated value.
        // Below options specified as default values.
        concurrencyLimit: 10, // Limits zlib concurrency for perf.
        threshold: 1024 // Size (in bytes) below which messages
        // should not be compressed if context takeover is disabled.
    }
})


wss.on('connection', (ws) => {
    console.log(`connection wss`);
    LeaderBoard.getLeaderBoard().then((leaderBoard) => ws.send(JSON.stringify(leaderBoard)))
});

wss.close

app.use('/',router)
app.use((req: Request, res: Response, next: NextFunction) => {
    const error = new HttpError('Not Found', 404)

    next(error)
})

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    const statusCode = 500

    return res.status(statusCode).json({
        status: 'error',
        code: statusCode,
        // stack: error.stack , 
        message: error.message || 'Internal Server Error'
    })
})
