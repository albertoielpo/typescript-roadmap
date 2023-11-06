import { IncomingMessage, ServerResponse, createServer } from "http";

const hostname = "127.0.0.1";
const port = 3000;

const exampleRouting = (req: IncomingMessage) => {
    if (req.url === "/") {
        return {
            code: 200,
            message: "hello world"
        };
    } else if (req.url === "/pippo") {
        return {
            code: 200,
            message: "hello pippo"
        };
    } else if (req.url === "/error-unmanaged") {
        const a: any = {}; //Never use any 💩
        return {
            code: 200,
            message: `hello pippo ${a.b.c}` //💩 nooooooo
        };
    } else if (req.url === "/error-managed") {
        try {
            const a: any = {}; //Never use any 💩
            return {
                code: 200,
                message: `hello pippo ${a.b.c}`
            };
        } catch (error) {
            return {
                code: 500,
                message: `internal server error`
            };
        }
    }
    return {
        code: 404,
        message: "not found"
    };
};

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    let { code, message } = exampleRouting(req);
    console.log(`${code} ${message}`);

    res.statusCode = code;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: message }));
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// EVENT LOOP
// README: https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick

// ┌───────────────────────────┐
// ┌─>│           timers          │
// │  └─────────────┬─────────────┘
// │  ┌─────────────┴─────────────┐
// │  │     pending callbacks     │
// │  └─────────────┬─────────────┘
// │  ┌─────────────┴─────────────┐
// │  │       idle, prepare       │
// │  └─────────────┬─────────────┘      ┌───────────────┐
// │  ┌─────────────┴─────────────┐      │   incoming:   │
// │  │           poll            │<─────┤  connections, │
// │  └─────────────┬─────────────┘      │   data, etc.  │
// │  ┌─────────────┴─────────────┐      └───────────────┘
// │  │           check           │
// │  └─────────────┬─────────────┘
// │  ┌─────────────┴─────────────┐
// └──┤      close callbacks      │
//    └───────────────────────────┘
