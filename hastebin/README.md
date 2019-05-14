# Hastebin

This image builds [Hastebin](https://github.com/seejohnrun/haste-server/) on Node 12 and was based on the image created by [Ric Lister](https://github.com/rlister/dockerfiles/tree/master/hastebin).

## Example

Default storage is file storage, so you can get up and running with the followiung command:

```sh
docker run --name hastebin -d -p 7777:7777 -v /data:/app/data joachimdalen/hastebin
```

The following `docker-compose.yml` file provides an example using Redis as storage.

```yml
version: "3"
services:
  hastebin:
    container_name: hastebin
    image: joachimdalen/hastebin
    environment:
      HOST: 0.0.0.0
      PORT: 7777
      KEY_LENGTH: 10
      MAX_LENGTH: 400000
      STATIC_MAX_AGE: 86400
      RECOMPRESS_STATIC_ASSETS: "true"
      LOGGING_LEVEL: verbose
      LOGGING_TYPE: Console
      LOGGING_COLORIZE: "false"
      KEY_GENERATOR_TYPE: phonetic
      STORAGE_TYPE: redis
      STORAGE_PATH: ./data
      STORAGE_HOST: hastebinredis
      STORAGE_PORT: 6379
      STORAGE_DB: 2
      STORAGE_EXPIRES: 2592000
    ports:
      - "7777:7777"
  hastebinredis:
    container_name: hastebinredis
    image: redis
    volumes:
      - hastebin_data:/data
volumes: hastebin_data:
```

### Environment variables

All configuration variables for Hastebin is exposed as environment variables.

| Variable                 | Default Value |
| ------------------------ | ------------- |
| HOST                     | 0.0.0.0       |
| PORT                     | 7777          |
| KEY_LENGTH               | 10            |
| MAX_LENGTH               | 400000        |
| STATIC_MAX_AGE           | 86400         |
| RECOMPRESS_STATIC_ASSETS | true          |
| LOGGING_LEVEL            | verbose       |
| LOGGING_TYPE             | Console       |
| LOGGING_COLORIZE         | false         |
| KEY_GENERATOR_TYPE       | phonetic      |
| STORAGE_TYPE             | file          |
| STORAGE_PATH             | ./data        |
| STORAGE_PORT             | 6379          |
| STORAGE_HOST             | 0.0.0.0       |
| STORAGE_DB               | 2             |
| STORAGE_EXPIRES          | 2592000       |
