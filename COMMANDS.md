# Useful commands

**Remove dangling volumes**

```sh
docker volume rm `docker volume ls -q -f dangling=true`
```

**Stop all running containers**

```sh
docker container stop $(docker container ls -aq)
```

**Remove all stopped containers**

```sh
docker container rm $(docker container ls -aq)
```
