export default function handler(req, res) {
  console.log(`Request Object: `, req);
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      return res.status(422).json({
        error: "Please provide all the details, invalid input",
      });
    }

    const newMessage = {
      email,
      name,
      message,
    };
    console.log(newMessage);
    res.status(201).json(newMessage);
  }
}
