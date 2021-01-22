import { sendMail } from '../../lib/send-mail';

export default async (req, res) => {
  const { method } = req;
  if (method === 'POST') {
    const { name, email, subject, message } = req.body;
    try {
      await sendMail('support@redq.io', email, subject, {
        name,
        message,
      });
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
    return res.status(200).json({ message: `successfully send mail` });
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${method} Not Allowed` });
  }
};
