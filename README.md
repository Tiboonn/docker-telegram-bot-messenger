# Docker Telegram Notifier
Docker container to send out messages to a Telegram bot.

environment variables required:
- TELEGRAM_CHAT_ID - Telegram chat id
- TELEGRAM_BOT_TOKEN - Looks like: `123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11`
- MESSAGE - Your message

## Example
```
docker run -e "MESSAGE=MessageHere" -e "TELEGRAM_CHAT_ID=CHATID" -e "TELEGRAM_BOT_TOKEN=TOKEN" telegram
```

Sending the contents of a file to Telegram use
`-e "MESSAGE=$(cat testing.txt)"`
```
docker run -e "MESSAGE=$(cat testing.txt)" -e "TELEGRAM_CHAT_ID=CHATID" -e "TELEGRAM_BOT_TOKEN=TOKEN" telegram
```
