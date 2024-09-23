exports.run = (client, message, args) => {
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.react('⛔')
      let messageArray = message.content.split(" ");
      let argss = messageArray.slice(1);
      var yazi = argss.slice(0).join(" ")
      if (!args[0]) return message.channel.send('⛔ Herhangi bir mesaj yazmadın!')
      /* Komutta @everyone veya @here bloklu değildir!
      Komuttan sonra @everyone atıp silerseniz sıkıntı yaratmaz.
      Komut admin permi istediği için sıkıntı yaratmaz. */
      message.channel.send(yazi).catch(() => {})
      message.delete().catch(() => {})
}
