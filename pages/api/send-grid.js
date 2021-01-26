import sendgrid from '@sendgrid/mail';
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function (req, res) {
  const { email } = req.body;
  // console.log(email);
  const content = {
    to: 'paulruet58@gmail.com',
    from: email,
    subject: `New Message From - ${email}`,
    text: `New Subscriber Added ${email}`,
    html: `<p>New Subscriber Added ${email}</p>`,
  };

  try {
    await sendgrid.send(content);
  } catch (error) {
    // console.log('ERROR', error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  return res
    .status(200)
    .json({ message: 'Successfully subscribed to RedQ Inc.' });
}
