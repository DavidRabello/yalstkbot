# Comandos:

Parametros entre (.) são opcionais

Host
-------

|Comando | Parametro | Descrição |
|:------:|:---------:|:--------------------------------------:|
|!afklimit | number | Muda o tempo máximo para um AFK ser kickado por inatívidade |
|!botname | (botname) | Muda o nome padrão do BOT |
|!clearchat | | Limpa o chat de todos |
|!cycle |  | Alternar clico de DJs |
|!cycletimer | number | Define o tempo de ciclo máximo quando o CycleGard está habilitado |
|!locktimer | number | Define o tempo máximo que a lista de espera pode ser bloqueada se LockGuard está habilitado |
|!logout |  | Desloga a conta de quem está hosteando o BOT |
|!refresh |  | Atualiza a página de quem está hosteando o BOT |
|!usercmdcd | number | Muda o tempo entre comandos dos usuários |
|!usercommands |  | Alterna os comandos dos usuários |
|!voteskip | (number) | Quando nenhum argumento for especificado, retorna o limite voteskip atual, quando "number" é especificado, o limite voteskip é atualizado para o novo limite especificado. |

Anfitrião+
--------

|Comando | Parametro | Descrição |
|:------:|:---------:|:--------------------------------------:|
|!add | @user | Adiciona o usuário especificado à lista de espera. |
|!afkremoval | | Alterna a seleção de AFK |
|!autoskip | | Pula automaticamente a másica quando finalizada (use apenas se o bug entre vídeos ocorrer) |
|!bouncer+ | | Desativar comandos de CO-Anfitrião |
|!lock | | Tranca a lista de espera |
|!lockdown | | Tranca totalmente a sala: somente membros da staff podem falar |
|!maxlength | number | Especifica o tempo máximo da música quando o timeguard está ativado |
|!move | @user (number) | Move o usuário para a posição "number" na lista de espera, posição 1 é a padrão. |
|!remove | @user | Remove o usuário da lista de espera. |
|!roulette | | Inicia a roleta. |
|!unlock | | Trava a lista de espera. |
|!welcome | (message) | Alterna a mensagem de boas vindas ao logar um usuário. |

CO-Anfitrião
-------

|Comando | Parametro | Descrição |
|:------:|:---------:|:--------------------------------------:|
|!active | (number) | Mostra quantos usuários conversaram nos últimos X minutos. Se X não for especificado, 60 é posto como padrão. |
|!afkreset | @user | Reseta o tempo afk do usuário |
|!afktime | @user | Mostra quanto tempo o usuário esteve ausente |
|!autodisable | | Toggle the autodisable |
|!ban | @user | Bane o usuário por 1 dia|
|!blacklist / !bl | blacklistname | Adiciona a música à lista negra especificada  |
|!blinfo | | Conseguir informação para adicionar uma musica à blacklist |
|!cycleguard | | Alterna um cycleguard |
|!dclookup / !dc | (@user) | Volta o usuário a sua posição antes de desconectar  |
|!eta | (@user) | Mostra quanto tempo falta para tocar |
|!ping | | Pong! |
|!filter | | Alterna o filtro de chat |
|!jointime | @user | Mostra a quanto tempo o usuário está na sala |
|!kick | (number) | Expula o usuário por "number" minutos, 0.25 minutos (15 segundos) é o tempo padrão. |
|!kill | | Desliga o BOT |
|!lockguard | | Alterna o lockguard |
|!lockskip | (reason) | Pula a música e joga o DJ para cima (a posição é definada com !lockskippos) |
|!lockskippos | number | Define a posição para qual lugar se deve mover o dj |
|!motd | (number)/(message) | Quando não há argumento especificado, retorna a mensagem do dia, quando "number" é especificado, o MotD é dado a cada "number" músicas, quando a "messagem" é dada, ele define o MotD na messagem |
|!mute | @user (number) | Muta o usuário, por "number" minutos se "number" é especificado, caso contrário para um  período indefinido |
|!reload | | Recarrega o bot |
|!restricteta | | Muda a restrição no eta: usuários comuns podem usar uma vez a cada hora |
|!sessionstats | | Mostra o status da sessão atual |
|!skip | | Pula a mídia atual |
|!status | | Mostra as configurações atuais do BOT |
|!timeguard | | Alterna o timeguard |
|!togglebl | | Alterna a blacklist |
|!togglemotd | | Alterna o motd |
|!togglevoteskip | | Alterna o voteskip |
|!unban | @user | Desbane o usuário especificado |
|!unmute | @user | Retira o mute do usuário especificado |
|!voteratio | @user | Mostrar as estatísticas de voto para um usuário. |

DJ Residente
-----------

|Comando | Parametro | Descrição |
|:------:|:---------:|:--------------------------------------:|
|!link | | Mostra o link da mídia atual

Usuário
----

|Comando | Parametro | Descrição |
|:------:|:---------:|:--------------------------------------:|
|!ask | (message) | Faz uma pergunta ao BOT, e ele irá retornar variações aleatórias das respostas sim ou não. |
|!commands | | Mostra um link para os comandos. |
|!dclookup / !dc | | Move o usuário para a ultima posição da lista. |
|!emoji | | Link para a lista de emojis. |
|!cookie | | Da um cookie a um amigo <3. |
|!kiss | | Manda um beijo bem caloro a alguém que você ama. |
|!eta | | Mostra quanto tempo irá levar para tocar sua música |
|!ghostbuster | @user | Verifica se o usuário é ghost |
|!help | | Link para uma imagem para ajudar os usuários à começarem usar o plug. |
|!join | | Entra para a roleta. |
|!leave | | Deixar a roleta se estiver participando. |
|!link | | Quando o usuário for o DJ, dar o link para o som que está tocando |
|!rules/!regras | | Link para as regras da sala |
|!team/!equipe | | Link para a equipe da sala |
|!theme | | Link para o tema da sala |
|!website/!site | | Link para o website da sala |
|!download / !dl | | Recebe um link para download da mídia |
|!allahuakbar | | Existe a possibilidade de ser explodido por um terrorista e sair da fila de DJs |
|!thor | | Você tem 10% de chance de ser digno de levantar seu martelo, caso você seja digno irá para a posição 1 da lista, caso contrário irá para último lugar, esse comando só pode ser útilizado a cada 10 minutos por padrão. |

