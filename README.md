
# Discord Bot

Stack:  
`Node.js` with `TypeScript`  
`Vitest` for unit test  
Deploy to `Cloudflare Workers`

Invite Link:  
[![Add to your server](https://img.shields.io/badge/Add%20to%20your%20server-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/api/oauth2/authorize?client_id=1090926791025229905&permissions=277025459200&scope=bot%20applications.commands)



# Description

A random picker for Pokémon UNITE

![demo image](/demo.png)


# Commands


``` sh
# Register Global Commands and deploy to Cloudflare
bash scripts/register_global.sh
# Register Guild Commands and deploy to Cloudflare
bash scripts/register_guild.sh
```
ref:  
[Register Discord Global Commands](https://discord.com/developers/docs/interactions/application-commands#making-a-global-command)  
[Register Discord Guild Commands](https://discord.com/developers/docs/interactions/application-commands#making-a-guild-command)  
[Deploy to Cloudflare Workers](https://developers.cloudflare.com/workers/platform/deployments/)



# Testing

Using 
[`chi-squared`](https://jstat.github.io/distributions.html#jStat.chisquare)
to test the probability distributions of the random pickers
``` sh
yarn test
```


