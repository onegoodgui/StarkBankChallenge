import app, { init } from "./app.js";
import { webhookConfig } from "./services/webhookService.js";

const PORT = process.env.PORT || 4000;

init().then(() => {
  webhookConfig("ngrok").then(() => {
    app.listen(PORT, () => {
      console.log(`server listening on port ${PORT}`);
    });
  });
});
