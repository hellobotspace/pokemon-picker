set -euxo pipefail

BASEDIR=$(dirname $0)
source "${BASEDIR}/key.sh"

# yarn register_global
# yarn deploy
npx ts-node src/register_global.ts