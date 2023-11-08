ORIG_DIR=$(pwd)

cd $(dirname $0)
TEMP_DIR=$(mktemp -d)

rsync -av "../" "$TEMP_DIR" --exclude "node_modules" >> /dev/null

cd $TEMP_DIR

npm install

npx --yes expo-doctor

CI=1 npx --yes expo prebuild -p android --clean

cd ./android

./gradlew :app:assembleDebug

cp ./app/build/outputs/apk/debug/*.apk $ORIG_DIR/build-$(date +%s).apk
