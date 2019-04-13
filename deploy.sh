#!/bin/sh

npm run build && firebase deploy --project dayly-test --only hosting
