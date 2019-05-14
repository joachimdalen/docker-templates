{
    "host": "0.0.0.0",
    "port": 7777,
    "keyLength": 10,
    "maxLength": 400000,
    "staticMaxAge": 86400,
    "recompressStaticAssets": true,
    "logging": [
      {
        "level": "verbose",
        "type": "Console",
        "colorize": false
      }
    ],
    "keyGenerator": {
      "type": "phonetic"
    },
    "storage": {
      "type": "redis",
      "path": "./data",
      "host": "hastebinredis",
      "port": 6379,
      "db": 2,
      "expire": 2592000
    },
    "documents": {
    }
  }