set -euxo pipefail

BASEDIR=$(dirname $0)
source "${BASEDIR}/key.sh"

yarn register_guild
yarn deploy
