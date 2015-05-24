(function () {
	console.log('entrou aqui');
	// Função principal do bot
	function extend() {
		console.log('aqui também');
      	// Caso essa propriedade não seja iniciada, ela tenta após 1 segundo
		if (!window.bot)
			return setTimeout(extend, 1 * 1000);

		// Seta a variável global para controle do Bot
		var bot = window.bot;

		// Carrega as propriedades
		bot.retrieveSettings();
		
		// Carrega o script controlador
		bot.loadChat();

	}

	// Muda as configurações padrões que são carregadas após a execução do script
	localStorage.setItem("basicBotsettings", JSON.stringify({
		botName: "BOT Robocop",
		startupCap: 1, // 1-200
		startupVolume: 10, // 0-100
		startupEmoji: true, // true ou false
		maximumAfk: 20,
		afkRemoval: false,
      	maximumDc: 15,
		bouncerPlus: false,
		blacklistEnabled: true,
		lockdownEnabled: false,
		lockGuard: false,
		maximumLocktime: 10,
		cycleGuard: false,
		maximumCycletime: 10,
		voteSkip: false,
		voteSkipLimit: 8,
		timeGuard: true,
		maximumSongLength: 7,
		autodisable: true,
		commandCooldown: 5,
		usercommandsEnabled: true,
		lockskipPosition: 1,
		lockskipReasons: [
			["theme", "Bota outra - fora do tema/evento"],
			["op", "Essa porra toca demais! porra!, HAIL SATAN"],
			["history", "Ja tocou essa merda jumento, olha o caralho do historico, ALLAHU AKBAAR"],
			["nsfw", "Oba, tetinhas, mas se fodeu vou pular, ALAHU AKBAAAAAAR"],
			["erro", "Video indisponivel, como sou bonzinho, vou te jogar em 2 <3"]
		],
		afkpositionCheck: 5,
		afkRankCheck: "ambassador",
		motdEnabled: true,
		motdInterval: 15,
		motd: "Entrem no nosso website e leia as regras/conheca a staff > http://goo.gl/0OVRnT",
		filterChat: false,
		etaRestriction: false,
		welcome: true,
		opLink: null,
		rulesLink: "http://goo.gl/3sTk62",
		themeLink: null,
		fbLink: null,
		youtubeLink: null,
		website: "http://goo.gl/0OVRnT", // panelinha-radioativa.tk futuro link
		intervalMessages: [],
		messageInterval: 5,
		songstats: false,
		commandLiteral: "!",
		blacklists: {
			NSFW: "https://rawgit.com/italocjs/basicBot-customization/master/blacklists/ExampleNSFWlist.json",
			OP: "https://rawgit.com/italocjs/basicBot-customization/master/blacklists/ExampleOPlist.json"
		}
	}));

	console.log('isso é um milagre');
	// Executa o script
	$.getScript("https://rawgit.com/yalstk/yalstkbot/master/botYals.js", extend);

}).call(this);