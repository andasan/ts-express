import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (_, res) => res.json({ message: "Hello, Vercel!" }));

app.listen(PORT, () =>
	console.log("Server is running on http://localhost:3000"),
);
