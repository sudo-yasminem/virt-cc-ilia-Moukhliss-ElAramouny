import Redis from "ioredis";
import "dotenv/config";

const redis = new Redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
});

redis.on("connect", () => {
    console.log("Redis connecté");
});

redis.on("erreur", (err) => {
    console.error("Erreur Redis", err);
});

export default redis



