FROM node:lts-alpine3.13

ADD package.json /
RUN npm install

ADD telegram-notifier.js /
ADD run.sh /

ENTRYPOINT ["node", "/telegram-notifier.js"]
CMD ["start"]
