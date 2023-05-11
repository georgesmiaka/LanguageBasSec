#!/usr/bin/env bash

#
# Sarting the application - Server
#
cd server
npm run build
npm run dev &

#
# Sarting the application - Client
#
cd ..
cd client
npm start

