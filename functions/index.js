const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");

const emailSecret = defineSecret("TAPO_EMAIL");
const passwordSecret = defineSecret("TAPO_PASSWORD");
const ipSecret = defineSecret("TAPO_PLUG_IP");

exports.test = onRequest(
  {
    secrets: [emailSecret, passwordSecret, ipSecret],
  },
  async (req, res) => {
    res.send("Firebase + Tapo secrets loaded successfully.");
  }
);
