var handler = async m => 

conn.reply(m.chat, ` 
┏━━━━━━━━━━━━━━━━━━━━┅
┇                   *「 ANIME」*       
┣━━━━━━━━━━━━━━━━━━━━┅
┃ ❖ https://kusonime.com
┃ ❖ https://huntersekaisub.blogspot.com
┃ ❖ https://riie.jp
┃ ❖ https://m.meownime.ai
┃ ❖ https://meownime.ltd
┃ ❖ https://nimegami.id
┃ ❖ https://animekompi.cam
┃ ❖ https://nontonanimeid.top
┃ ❖ https://kazefuri.vip
┃ ❖ https://pendekarsubs.us
┃ ❖ https://myanimelist.net
┗━━━━━━━━━━━━━━━━━━━━┅
 `, m, rcanal, )

handler.help = ['animelink']
handler.tags = ['emox']
handler.command = /^animelink$/i

handler.eatrellas = 1;
handler.register = true

export default handler 
