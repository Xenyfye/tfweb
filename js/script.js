MinecraftAPI.getServerStatus('play.totalfreedom.me', {
	port: 25565
}, function (err, status) {

	var s = document.querySelector('#server-status');
	var p = document.querySelector('#player-count');

	if (err) {

		s.innerHTML = 'offline';
		p.innerHTML = '0';
		return q.classList.add('red-text')

	}

	if (status.online) {

		s.innerHTML = "online";
		p.innerHTML = `${status.players.now}/${status.players.max}`;
		s.classList.add('green-text');
		return p.classList.add('green-text');

	} else {

		s.innerHTML = 'Offline';
		p.innerHTML = '0';
		return s.classList.add('red-text');

	}
});