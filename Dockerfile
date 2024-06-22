FROM node:20.12.2-alpine3.19

WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
ADD ./ ./

RUN npx browserslist@latest --update-db
RUN npx update-browserslist-db@latest
RUN npm install --save-dev eslint
RUN npm update
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]