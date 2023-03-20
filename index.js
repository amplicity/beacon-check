require('dotenv').config();
const axios = require('axios');

exports.handler = async () => {
	console.log('checking your node...', process.env.PUBLIC_KEY);
	const response = await axios.get(process.env.REQUEST_URL + process.env.PUBLIC_KEY,{});
	const data = response.data.data[0];
	if (data.status !== "active_online"){
		await axios.post(process.env.SLACK_WEBHOOK_URL, {text: "📣 Your node is offline!"});
		console.log('Your node is offline!');
	}
	else {
		console.log("👍 Your node is online.");
	}
}

