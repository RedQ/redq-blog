/** @jsx jsx */
import { useRef, useState } from 'react';
import { jsx, Flex, Input, Button } from 'theme-ui';

export default function Subscribe() {
	// 1. Create a reference to the input so we can fetch/clear it's value.
	const inputEl = useRef(null);
	// 2. Hold a status in state to handle the response from our API.
	const [status, setStatus] = useState({
		submitted: false,
		submitting: false,
		info: { error: false, msg: null },
	});
	const handleMailChimpResponse = (errorMsg, successMsg) => {
		if (errorMsg) {
			// 4. If there was an error, update the message in state.
			setStatus({
				info: { error: true, msg: errorMsg },
			});

			return;
		}

		// 5. Clear the input value and show a success message.
		setStatus({
			submitted: true,
			submitting: false,
			info: { error: false, msg: successMsg },
		});
		inputEl.current.value = '';
	};

	const handleSendGridResponse = (resStatus, msg) => {
		if (resStatus === 200) {
			// 5. Clear the input value and show a success message.
			setStatus({
				submitted: true,
				submitting: false,
				info: { error: false, msg: msg },
			});
			inputEl.current.value = '';
		} else {
			setStatus({
				info: { error: true, msg: msg },
			});
		}
	};
	const subscribe = async (e) => {
		e.preventDefault();
		setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

		// 3. Send a request to our API with the user's email address.
		const res = await fetch('/api/subscribe', {
			body: JSON.stringify({
				email: inputEl.current.value,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		});
		//for mailChimp integration
		const { error } = await res.json();
		handleMailChimpResponse(
			error,
			'Success! 🎉 You are now subscribed to the newsletter.'
		);
		// For sendGrid integration
		const text = await res.text();
		handleSendGridResponse(res.status, text);
	};

	return (
		<form onSubmit={subscribe}>
			<Flex my={3}>
				<label htmlFor="email" sx={{ variant: 'styles.srOnly' }}>
					Email Address
				</label>
				<Input
					ref={inputEl}
					id="email"
					name="email"
					type="email"
					placeholder="Type your email address"
				/>

				<div>
					{status.info.error && (
						<div className="error">Error: {status.info.msg}</div>
					)}
					{!status.info.error && status.info.msg && (
						<div className="success">{status.info.msg}</div>
					)}
				</div>
				<Button
					type="submit"
					sx={{ flexShrink: 0, ml: 2, px: 4 }}
					disabled={status.submitting}
				>
					{!status.submitting
						? !status.submitted
							? 'Subscribe'
							: 'Submitted'
						: 'Submitting...'}
				</Button>
			</Flex>
		</form>
	);
}
