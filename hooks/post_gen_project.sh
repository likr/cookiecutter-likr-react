#!/bin/sh
if type yarn > /dev/null 2>&1
then
  yarn install
else
  npm install
fi
