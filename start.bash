#!/usr/bin/env bash

#
# Sarting the application - Server
#
cd server
npm i
npm run build
npm run dev &

#
# Sarting the application - Client
#
cd ..
cd client
npm i
npm start

