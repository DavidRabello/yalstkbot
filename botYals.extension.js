(function () {

	// Função principal do bot
	function extend() {
      	
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
		botName: "ARTPOPBot",
		startupCap: 1, // 1-200
		startupVolume: 10, // 0-100
		startupEmoji: true, // true ou false
		maximumAfk: 60,
		afkRemoval: true,
      	maximumDc: 60,
		bouncerPlus: true,
		blacklistEnabled: true,
		lockdownEnabled: false,
		lockGuard: false,
		maximumLocktime: 10,
		cycleGuard: false,
		maximumCycletime: 10,
		voteSkip: false,
		voteSkipLimit: 8,
		timeGuard: true,
		maximumSongLength: 9,
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
		motdEnabled: false,
		motdInterval: 10,
		motd: null,
		filterChat: true,
		etaRestriction: false,
		welcome: true,
		opLink: null,
		rulesLink: null,
		teamLink: null,
		themeLink: null,
		fbLink: "http://goo.gl/gxOOmp",
		youtubeLink: null,
		websiteLink: null,
		intervalMessages: [],
		messageInterval: 2,
		songstats: false,
		commandLiteral: "!",
		blacklists: {
			NSFW: "https://rawgit.com/italocjs/basicBot-customization/master/blacklists/ExampleNSFWlist.json",
			OP: "https://rawgit.com/italocjs/basicBot-customization/master/blacklists/ExampleOPlist.json"
		}
	}));

	// Executa o script
	$.getScript("https://rawgit.com/yalstk/yalstkbot/master/botYals.js", extend);

}).call(this);
