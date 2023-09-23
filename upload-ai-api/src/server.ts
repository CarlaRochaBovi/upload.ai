import { fastify } from "fastify";
import { fastifyCors } from '@fastify/cors'
import { getAllPromptsRoute } from "./routes/getAllPrompts";
import { uploadVideoRoute } from "./routes/uploadVideo";
import { createTranscriptionRoute } from "./routes/createTranscription";
import { generateAICompletionRoute } from "./routes/generateAiCompletion";


const app = fastify();
app.register(fastifyCors, {
	origin: '*'
})
app.register(getAllPromptsRoute);
app.register(uploadVideoRoute);
app.register(createTranscriptionRoute)
app.register(generateAICompletionRoute)

app.listen({
	port: 3333,
}).then(() => {
	console.log("HTTP server running");
});
