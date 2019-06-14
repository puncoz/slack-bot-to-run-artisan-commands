RossBot
=======

RossBot is a Slackbot used for simple Linux server management directly from Slack.

Deployment requirements:  
   git  
   nodejs/npm >5.8.0
   pm2
   an api_token to integrate with slack  
   a custom emoji :ross: within your workspace (this will be your bots image)

Package Module Dependencies (Pulled in during 'npm install'):  
   dotenv >5.0.1  
   slackbots >1.1.0

Instructions for Deployment
---------------------------

It is recommended that you stick the rossbot source code into its own Git repository
for easier rossbot deployments. This will not affect how rossbot works, but it will
make your life simpler when deploying rossbot. I recommend GitLab as it is private.

Place rossbot on your server, for example /home/username/ross, or clone the repo
into that directory.

Alter commands.json to your liking.
- 'trigger' is what is used to run a command, for example if 'trigger' was set to
'deploy', the command would be 'ross deploy'. 'help' is unavailable as a custom
trigger.
- 'command' is the command that is run on your server.
- 'description' is what is shown next to the command when you run 'ross help'.

PM2 will need to be installed on the server to manage the rossbot process. This
can be installed by running:

`npm install pm2 -g`

cd into the rossbot directory and run the following to install rossbot's
dependencies:

`npm install`

You now need to set up rossbot to be used on Slack, this can be done by going
to https://slack.com/apps/A0F7YS25R-bots and clicking 'Add Configuration'.
Give your new bot the name ross. Make a note of the API token and fill out
the rest of the form.

Back to your server, run the following command in the rossbot directory:

`cp .env.example .env`

This will create a .env file. Edit this file and update it with the API
token that you got from the bot you just installed on your Slack team.
The room name can also be changed here, if you'd prefer he be available
in a different room.

Run the following command to activate rossbot:

`pm2 start Server.js --name=ross`

Head on over to Slack, and invite the bot to the channel defined in your
.env file. You can now use rossbot.

rossbot will need restarting each time you edit the commands.json file
to add a command.

For help, I can be contacted at https://sellfolio.net/store/josh/contact.

Thanks for purchasing rossbot.