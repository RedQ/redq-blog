import sendgrid from '@sendgrid/mail';
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function (req, res) {
	const { email, message } = req.body;
	console.log(email);
	const content = {
		to: 'paul@redq.io',
		from: email,
		subject: `New Message From - ${email}`,
		text: message,
		html: `<p>${message}</p>`,
	};

	try {
		await sendgrid.send(content);
	} catch (error) {
		console.log('ERROR', error);
		return res.status(error.statusCode || 500).json({ error: error.message });
	}
	return res.status(200).json({ message: 'Message sent successfully.' });
}
