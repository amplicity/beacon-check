require('dotenv').config();
const axios = require('axios');

exports.handler = async () => {
	console.log('checking your node...', process.env.PUBLIC_KEY);
	axios.get(process.env.REQUEST_URL + process.env.PUBLIC_KEY + '/balancehistory',{}).then((res) => {
		const balanceHistory = res.data.data;
		let balanceWentDown = false;
		for (let i = 0; i < 10; i++) {
			let prev = balanceHistory[i];
			if (prev.balance < balanceHistory[i+1].balance ){
				balanceWentDown = true;
				break;
			}
		}

		if (balanceWentDown){
			axios.post(process.env.SLACK_WEBHOOK_URL, {text: '😱 Node balance has decreased. Check ' + process.env.BEACONCHAIN_URL + process.env.PUBLIC_KEY})
		}

	}).catch((err) => {
		console.error(err);
	});
	
}
