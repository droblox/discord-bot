## Discord Bot

### Windows

- Install Windows Subsystem for Linux

### Windows Subsystem for Linux

- Run the following to install the latest Docker:

```
cat > /etc/apt/sources.list.d/docker.list << EOF
deb [arch=amd64] https://download.docker.com/linux/ubuntu $RELEASE stable
EOF
apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

- Run the following to install the latest NodeJS:

```
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt-get install -y nodejs

```

### Visual Studio Code

- Install the Docker extension from Microsoft
- Install the ESLint extension from Microsoft

### In the project folder

- Run `npm install` to install all dependencies
- Create an `.env` file in the root with the following where `<API_KEY>` is the API key you grot from Discord:

```
API_KEY=<API KEY>
```

### To start

- Start the container by right-clicking on `docker-compose.dev.yaml` and `Compose Up`
