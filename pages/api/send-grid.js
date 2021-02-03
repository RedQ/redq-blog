import sendgrid from '@sendgrid/mail';
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function (req, res) {
	const { email } = req.body;
	// console.log(email);
	const content = {
		to: 'paulruet58@gmail.com',
		from: email,
		subject: `New Message From - ${email}`,
		text: `New Subscriber Added in RedQ,Inc from ${email}`,
		html: `<p>New Subscriber Added in RedQ,Inc from ${email}</p>`,
	};

	try {
		await sendgrid.send(content);
	} catch (error) {
		// console.log('ERROR', error);
		return res.status(error.statusCode || 500).json({ error: error.message });
	}
	return res
		.status(200)
		.json({ message: '🎉You are successfully subscribed to RedQ, Inc!' });
}
