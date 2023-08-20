const express = require("express");
const router = express.Router();
const { sentilize } = require("./sentilizer");

router.get("/", (req, res) => {
  res.send("This is the homepage");
});

router.post("/sentilize", async (req, res) => {
  try {
    const payload = req.body;
    // 打印 payload.sentence 的值
    console.log("Received sentence:", payload.sentence);
    console.log("Received payload:", req.body);

    const result = await sentilize(payload.sentence);
    res.send(result);
    console.log("sentiment:", result);

  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});



module.exports = router;

// export const routes = [
//   {
//     method: 'GET',
//     path: '/',
//     handler: function (request, h){
//       return 'This is the homepage';
//     }
//   },
//   {
//     method: 'POST',
//     path: '/sentilize',
//     handler: function(request, h){
//       // return 'ok'
//       let payload = request.payload;
//       if (typeof(payload) === 'string'){
//         payload = JSON.parse(payload);
//       }
//       return sentilize(payload.sentence);
//     }
//   }
// ];
