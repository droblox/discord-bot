## Discord Bot

### Windows

- Install Windows Subsystem for Linux to be able to use Linux on your Windows machine.

### Windows Subsystem for Linux

- Enter Windows Subsystem for Linux by typing `wsl` in the command line.
- Run the following to install the latest Docker which will allow you create containers:

```
cat > /etc/apt/sources.list.d/docker.list << EOF
deb [arch=amd64] https://download.docker.com/linux/ubuntu $RELEASE stable
EOF
apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

- Run the following to install the latest NodeJS which will allow you to create JavaScript / TypeScript server applications:

```
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt-get install -y nodejs
```

### Visual Studio Code

- Install the Docker extension from Microsoft. This will allow you to manage Docker from within Visual Studio Code.
- Install the ESLint extension from Microsoft. This will allow you to use ESLint from within Visual Studio Code.

### In the project folder

- Run `npm install` to install all dependencies for the project to be able to run.
- Create an `.env` file in the root with the following, where `<API_KEY>` is the API key you got from Discord:

```
API_KEY=<API KEY>
```

### To start the application / bot from within Visual Studio Code

- Start the container by right-clicking on `docker-compose.dev.yaml` and `Compose Up`
