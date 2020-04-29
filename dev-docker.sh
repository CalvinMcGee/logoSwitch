docker build -t logoswitch .

docker run --rm \
-it \
-e "AWS_ACCESS_KEY_ID=" \
-e "AWS_SECRET_ACCESS_KEY=" \
logoswitch \
/bin/bash
