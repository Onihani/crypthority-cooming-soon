import dbConnect from "../../src/lib/dbConnect";
import Subscription from "../../src/models/Subscription";

async function mailSubscriptionsHandler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const subscription = await Subscription.create(req.body);
        res.status(201).json({ success: true, data: subscription });
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}

export default mailSubscriptionsHandler;
