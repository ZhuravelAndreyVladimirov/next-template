#!/usr/bin/env sh

if [ -z "$husky_skip_init" ]; then
  husky_skip_init=1
  export husky_skip_init

  if [ -n "$HUSKY" ]; then
    echo "husky - skipping hooks (HUSKY=$HUSKY)"
    exit 0
  fi

  if [ -n "$CI" ]; then
    echo "husky - running in CI, hooks are enabled"
  fi
fi
