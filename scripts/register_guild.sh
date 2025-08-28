set -euxo pipefail

BASEDIR=$(dirname $0)
source "${BASEDIR}/key.sh"

npx ts-node src/register_guild.ts
yarn deploy
# yarn register_guild
