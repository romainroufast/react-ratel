#yarn install

yarn lerna run --parallel --scope "@react-ratel/*" build

cd packages/react-ratel/build
npm publish