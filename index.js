require('dotenv').config();
const axios = require('axios');

exports.handler = async () => {
	console.log('checking your node...', process.env.PUBLIC_KEY);
	axios.get(process.env.REQUEST_URL + process.env.PUBLIC_KEY,{}).then((res) => {
		const response = res.data.data[0];
		if (response.status == "active_offline"){
			console.log('Your node is offline!');
			axios.post(process.env.SLACK_WEBHOOK_URL, {text: "📣 Your node is offline!"});
		}
		else {
			console.log("👍 Your node is online.");
		}
	}).catch((err) => {
		console.error(err);
	});
	
}
