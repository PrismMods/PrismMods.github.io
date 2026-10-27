#!/bin/sh
# Assembles the deployable site in pages/: the static pages as they are, plus
# each mod's docs built into <mod>/docs/. CI runs this, and so can you:
#   sh build.sh && python3 -m http.server 8000 -d pages
set -e
cd "$(dirname "$0")"

# A local .venv (see README) wins over whatever is on PATH.
z=zensical
[ -x .venv/bin/zensical ] && z="$PWD/.venv/bin/zensical"

rm -rf pages
mkdir pages
rsync -a --exclude='.*' --exclude='/docs/' --exclude='/pages/' \
  --exclude='*.mjs' --exclude='*.sh' --exclude='README.md' ./ pages/
for mod in sapphire topaz; do
  (cd "docs/$mod" && "$z" build -s)
  mv "docs/$mod/site" "pages/$mod/docs"
done
