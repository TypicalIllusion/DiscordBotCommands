module.exports= {
    name: 'mute6h',
    description: 'mutes person for 6h',
    execute(message, args){
    let user = message.author;
    let receiver = message.mentions.members.first();
    if(!message.mentions.members.first())
        return message.reply("Please use @ instead of copying the name.")
    if(!message.member.roles.cache.has('ROLE ID')) 
        return message.reply("You can't use this!")
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
    if(member.hasPermission(['MANAGE_ROLES']) && !message.member.hasPermission('MANAGE_ROLES')) return;
        

        let mutedRole = message.guild.roles.cache.get('744706189576634488');
        let verifiedRole = message.guild.roles.cache.get('768192802282274816');
        if(mutedRole) {
            member.roles.add(mutedRole);
            member.roles.remove(verifiedRole);
            message.channel.send(`${receiver} was successfully muted by ${user.username}.`);
            setTimeout(() => {
                member.roles.remove(mutedRole)
                member.roles.add(verifiedRole)
            }, 21600000);
        }
}
}
