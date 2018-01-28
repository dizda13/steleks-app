import {Component, OnInit} from '@angular/core';
import {News} from './news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: News;

  constructor() {
  }

  ngOnInit() {
    this.news = new News(
      'Vrlo vazna vijest One Piece\n',
      '# From Wikipedia, the free encyclopedia\n' +
      '## For other uses, see One-piece (disambiguation).\n' +
      'One Piece\n' +
      'One Piece, Volume 61 Cover (Japanese).jpg\n' +
      'Cover of the sixty-first manga volume\n' +
      'ONE PIECE （ワンピース）\n' +
      '(Wan Pīsu)\n' +
      'Genre\tAdventure, fantasy[1]\n' +
      'Manga\n  \r\n\n\n\n\n' +
      '&gt; Written by\tEiichiro Oda\n' +
      '> _Published by\tShueisha\n_' +
      '> English publisher\t\n' +
      'NA\n' +
      'Viz Media\n' +
      '` Demographic\tShōnen  `' +
      '> Magazine\tWeekly Shōnen Jump  ' +
      '> English magazine\t  ' +
      'NA\n' +
      'Weekly Shonen Jump\n' +
      'Original run\tJuly 22, 1997 – present\n' +
      'Volumes\t87 (List of volumes)\n' +
      'Anime film\n' +
      'Defeat Him! The Pirate Ganzack!\n' +
      'Directed by\tGorō Taniguchi\n' +
      'Produced by\tTetsuo Daitoku\n' +
      'Hidekazu Terakawa\n' +
      'Written by\tHiroaki Kitajima\n' +
      'Music by\tToshiya Motomichi\n' +
      'Studio\tProduction I.G\n' +
      'Released\tJuly 26, 1998\n' +
      'Runtime\t29 minutes\n' +
      'Anime television series\n' +
      'Directed by\tKōnosuke Uda (#1–278)\n' +
      'Junji Shimizu (#131–159)\n' +
      'Munehisa Sakai (#244–372)\n' +
      'Hiroaki Miyamoto (#352–679)\n' +
      'Toshinori Fukazawa (#663–)\n' +
      'Satoshi Itō (#780–782)\n' +
      'Tatsuya Nagamine (#780–782)\n' +
      'Written by\tJunki Takegami (#1–195)\n' +
      'Hirohiko Uesaka (#196–798)\n' +
      'Shōji Yonemura (#799–)\n' +
      'Music by\tKohei Tanaka\n' +
      'Shirō Hamaguchi\n' +
      'Studio\tToei Animation\n' +
      'Licensed by\t\n' +
      'AUS\n' +
      'Madman Entertainment\n' +
      'NA\n' +
      'Funimation\n' +
      'UK\n' +
      'Manga Entertainment\n' +
      'Original network\tFNS (Fuji TV)\n' +
      'English network\t\n' +
      'AU\n' +
      'Network Ten, Cartoon Network (Toonami)\n' +
      'CA\n' +
      'YTV\n' +
      'JP\n' +
      'Animax\n' +
      'NZ\n' +
      'Cartoon Network, TV2\n' +
      'SEA\n' +
      'Animax Asia\n' +
      'UK\n' +
      'Toonami, CN Too\n' +
      'US\n' +
      'Cartoon Network/Adult Swim (Toonami)\n' +
      'Fox (4Kids TV)\n' +
      'ZA\n' +
      'SABC 2\n' +
      'Original run\tOctober 20, 1999 – present\n' +
      'Episodes\t821 (List of episodes)\n' +
      'Anime film\n' +
      'One Piece: Romance Dawn Story\n' +
      'Directed by\tKatsumi Tokoro\n' +
      'Produced by\tYosuke Asama\n' +
      'Written by\tTsuyoshi Sakurai\n' +
      'Music by\tKohei Tanaka\n' +
      'Shiro Hamaguchi\n' +
      'Studio\tToei Animation\n' +
      'Released\tSeptember 21, 2008\n' +
      'Runtime\t34 minutes\n' +
      'Original video animation\n' +
      'One Piece Film Strong World: Episode 0\n' +
      'Directed by\tNaoyuki Ito\n' +
      'Produced by\tHiroaki Shibata\n' +
      'Written by\tHitoshi Tanaka\n' +
      'Music by\tKohei Tanaka\n' +
      'Shiro Hamaguchi\n' +
      'Studio\tToei Animation\n' +
      'Released\tDecember 12, 2009\n' +
      'Runtime\t30 minutes\n' +
      'Wikipe-tan face.svg Anime and Manga portal\n' +
      'One Piece (Japanese: ワンピース Hepburn: Wan Pīsu) is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha\'s Weekly Shōnen Jump magazine since July 22, 1997, and has been collected in 87 tankōbon volumes. The story follows the adventures of Monkey D. Luffy, a boy whose body gained the properties of rubber after unintentionally eating a Devil Fruit. With his crew of pirates, named the Straw Hat Pirates, Luffy explores the Grand Line in search of the world\'s ultimate treasure known as "One Piece" in order to become the next Pirate King.\n' +
      '\n' +
      'The manga has been adapted into an original video animation (OVA) produced by Production I.G in 1998, and an anime series produced by Toei Animation, which began broadcasting in Japan in 1999. Additionally, Toei has developed thirteen animated feature films, one OVA and eleven television specials. Several companies have developed various types of merchandising such as a trading card game and numerous video games. The manga series was licensed for an English language release in North America and the United Kingdom by Viz Media and in Australia by Madman Entertainment. The anime series was licensed by 4Kids Entertainment for an English-language release in North America in 2004, before the license was dropped and subsequently acquired by Funimation in 2007.\n' +
      '\n' +
      'One Piece has received praise for its storytelling, art, characterization, and humor. Several volumes of the manga have broken publishing records, including the highest initial print run of any book in Japan. The official website for Eiichiro Oda\'s One Piece manga announced that the manga has set a Guinness World Record for "the most copies published for the same comic book series by a single author". As of October 2017, the manga has sold over 430 million copies worldwide, making it the best-selling manga series in history. It became the best-selling manga for the tenth consecutive year in 2017.[2]\n' +
      '\n' +
      'Contents \n' +
      '1\tOverview\n' +
      '1.1\tPremise\n' +
      '1.2\tSetting\n' +
      '2\tProduction\n' +
      '3\tMedia\n' +
      '3.1\tManga\n' +
      '3.2\tFestival films and original video animation\n' +
      '3.3\tAnime series\n' +
      '3.4\tTheatrical films\n' +
      '3.5\tVideo games\n' +
      '3.6\tMusic\n' +
      '3.7\tLight novels\n' +
      '3.8\tArt and guidebooks\n' +
      '3.9\tTheme park and other establishments\n' +
      '3.10\tOther media\n' +
      '3.11\tLive-action series\n' +
      '4\tReception\n' +
      '4.1\tManga\n' +
      '4.2\tAnime\n' +
      '5\tAwards and accolades\n' +
      '5.1\tManga\n' +
      '5.2\tAnime\n' +
      '6\tReferences\n' +
      '7\tFurther reading\n' +
      '8\tExternal links\n' +
      'Overview\n' +
      'Premise\n' +
      'See also: List of One Piece characters\n' +
      'The series focuses on Monkey D. Luffy, a young man who, inspired by his childhood idol and powerful pirate "Red Haired" Shanks, sets off on a journey from the East Blue Sea to find the famed treasure One Piece and proclaim himself the King of the Pirates. In an effort to organize his own crew, the Straw Hat Pirates (麦わら海賊団篇 Mugiwara Kaizoku-dan), Luffy rescues and befriends a swordsman named Roronoa Zoro, and they head off in search of the One Piece. They are joined in their journey by Nami, a navigator and thief; Usopp, a sniper and a liar; and Vinsmoke Sanji, a womanizing chef who is also a prince from a family of Royal Assasins. They acquire a ship named the Going Merry and engage in confrontations with notorious pirates of the East Blue. As Luffy and his crew set out on their adventures, others join the crew later in the series, including the doctor and anthropomorphized reindeer Tony Tony Chopper, an archaeologist and former assassin Nico Robin, a cyborg shipwright Franky, and skeletal musician Brook, and they also acquire a new ship named Thousand Sunny.\n' +
      '\n' +
      'Setting\n' +
      '\n' +
      'The globe of the One Piece world\n' +
      'The world of One Piece is populated by humans and many other races such as "fishmen" (a race of fish/human hybrids, similar to mermen and mermaids), dwarves, Minkmen (a race of humanoid animals), and giants. It is covered by two vast oceans, which are divided by a massive mountain range called the Red Line (赤い土の大陸 レッドライン Reddo Rain), which is also the only continent in the world.[3] The Grand Line (偉大なる航路 グランドライン Gurando Rain), a sea that runs perpendicular to the Red Line, further divides them into four seas: North Blue (北の海 ノースブルー Nōsu Burū), East Blue (東の海 イーストブルー Īsuto Burū), West Blue (西の海 ウェストブルー Uesuto Burū) and South Blue (南の海 サウスブルー Sausu Burū).[4] Surrounding the Grand Line are two regions called Calm Belts (凪の帯 カームベルト kāmu beruto), similar to horse latitudes, which experience almost no wind or ocean currents and are the breeding ground for huge sea creatures called sea kings (海王類 kaiōrui, lit. "sea kings"). Because of this, the calm belts are very effective barriers for those trying to enter the Grand Line.[5] However, navy ships, members of an intergovernmental organization known as the World Government, are able to use a sea-prism stone (海楼石 kairōseki) to mask their presence from the sea kings and can simply pass through the calm belts. All other ships are forced to take a more dangerous route, going through a mountain at the first intersection of the Grand Line and the Red Line, a canal system known as Reverse Mountain (リヴァース・マウンテン Rivāsu Maunten).[6] Sea water from each of the four seas runs up that mountain and merges at the top to flow down a fifth canal and into the first half of the Grand Line.[7] The second half of the Grand Line, beyond the second intersection with the Red Line, is known as the New World (新世界 Shin Sekai).[8]\n' +
      '\n' +
      'The currents and weather of the Grand Line\'s open sea are extremely unpredictable, whereas in the vicinity of islands the climate is stable.[9] The magnetic fields within the Grand Line cause normal compasses to malfunction, making it even more difficult to navigate,[10] and instead a special compass called a Log Pose (記録指針 ログポース Rogu Pōsu) must be used.[11] The Log Pose functions by locking on to one island\'s magnetic field and then locking on to another island\'s magnetic field.[12] The time for it to set depends on the island.[13] This process can be bypassed by obtaining an Eternal Pose (永久指針 エターナルポース Etānaru Pōsu), a Log Pose variation that is permanently set to a specific island and never changes.[14]\n' +
      '\n' +
      'The world of One Piece includes anachronisms, such as the Transponder Snails (電伝虫 Den-Den Mushi), snail-like animals that can be attached to electric equipment and function as rotary phones,[15] fax machines,[15] surveillance cameras,[16] and similar devices.[16] Dials (貝 ダイアル daiaru), the shells of certain sky-dwelling animals, can be used to store kinetic energy, wind, sound, images, heat, and the like and have various applications.[17]\n' +
      '\n' +
      'Devil Fruits\n' +
      'A Devil Fruit (悪魔の実 Akuma no Mi) is a type of fruit that, when eaten, confers a power on the eater.[18] A person may only eat one Devil Fruit during their lifetime.[19] There are three categories of Devil Fruits;[20] Zoan (動物系 ゾオン Zoon) fruits allow the user to fully or partially transform into a specific animal. As well as real-life animals, some Zoan fruits allow the user to transform into mythical creatures.[21] Logia (自然系 ロギア Rogia) fruits give control over, and allow the user "to change their living body structure into the powers of nature".[20] Paramecia (超人系 パラミシア Paramishia) is a category of fruits that give the user superhuman abilities.[22] Devil Fruits are said to be incarnations of the sea devil himself, and as a result, Devil Fruit users cannot swim in sea water, as "they are hated by the sea".[23] Sea-prism stone also has this effect. When even partially submerged in sea water, they lose all their strength and coordination, although some abilities remain. For example, Luffy is still able to stretch after being totally submerged. Moving water, such as rain or waves, does not have this effect. When a Devil Fruit user dies, the powers will be reincarnated into a new Devil Fruit. For unknown reasons, Devil Fruit users can\'t eat a second Devil Fruit because it would cause their bodies to burst, though Blackbeard manage to get a second Devil Fruit power through a unknown method. Devil Fruit powers can be in a stage called "Awakened", where the user can turn anything around them, besides their own bodies, into what their Devil Fruit power is.[24]\n' +
      '\n' +
      'Haki\n' +
      'Haki (覇気, lit. "Ambition") is a latent ability that every living being in the world of One Piece possesses; very few manage to awaken it, and even fewer master it. There are three varieties of Haki: Color of Observation or Mantra (見聞色の覇気 Kenbunshoku no Haki) allows one to sense the presence of other beings and to have a form of limited precognition. (This is a great advantage in combat because the user can foresee his opponent\'s attacks). Color of Armament (武装色の覇気 Busōshoku no Haki) allows one to envelop body parts and even inanimate forms with a force akin to an invisible armor that possesses defensive and offensive properties. It also allows one to inflict harm upon Devil Fruit users. The rare Color of the Conquering King (覇王色の覇気 Haōshoku no Haki) is an ability that, unlike the other two Haki, only a few gifted people have. (If a person is not gifted, then no matter how much they train they will never be able to use it). The Color of the Conquering King enables one to overpower the will of the weak-willed. It can be used to mind-control or even render the victim unconscious. Note that strong willed people can withstand, or even completely ignore, the effects of this Haki, even if they do not possess this ability themselves. This Haki can also have physical impacts, such as causing tremors and destruction to the user\'s surrounding area. It is shown that when it is used too much Haki will stop working for certain periods of time, so it can\'t be in use constantly.[25]\n' +
      '\n' +
      'Production\n' +
      'While working as an assistant to Nobuhiro Watsuki, Oda began writing One Piece in 1996.[26] It started as two one-shot stories entitled Romance Dawn[26]—which would later be used as the title for One Piece\'s first chapter and volume. They both featured the character of Luffy, and included elements that would appear later in the main series. The first of these short stories was published in August 1996 in Akamaru Jump and later in One Piece Red. The second was published in the 41st issue of Weekly Shōnen Jump in 1996, and reprinted in 1998 in Oda\'s short story collection, Wanted!.[27]\n' +
      '\n' +
      'Oda revealed that he originally planned One Piece to last five years, and that he had already planned the ending. However, he found it would take longer than he had expected.[28] Oda stated that the ending would be what he had decided in the beginning; he is committed to seeing it through.[29]\n' +
      '\n' +
      'When creating a Devil Fruit, Oda thinks of something that would fulfill a human desire; he added that he does not see why he would draw a Devil Fruit unless the fruit\'s appearance would entice one to eat it.[30] The names of many special attacks, as well as other concepts in the manga, consist of a form of punning in which phrases written in kanji are paired with an idiosyncratic reading. The names of Luffy, Sanji, Chopper, Robin, and Franky\'s techniques are often mixed with other languages, and the names of several of Zoro\'s sword techniques are designed as jokes; some of them look fearsome when read by sight but sound like kinds of food when read aloud. For example, Zoro\'s signature move is Onigiri, which is rendered as demon\'s cut but may also mean rice ball. Eisaku Inoue, the animation director, has said that the creators did not use these kanji readings in the anime since they "might have cut down the laughs by about half".[31] Nevertheless, Konosuke Uda, the director, said that he believes that the creators "made the anime pretty close to the manga".[31]\n' +
      '\n' +
      'Oda was "sensitive" about how his work would be translated.[32] In many instances, the English version of the One Piece manga uses one onomatopoeia for multiple onomatopoeia used in the Japanese version. For instance, "saaa" (the sound of light rain, close to a mist) and "zaaa" (the sound of pouring rain) are both translated as "fshhhhhhh".[33] Unlike other manga artists, Oda draws everything that moves himself to create a consistent look while leaving his staff to draw the backgrounds based on sketches he has drawn.[34]\n' +
      '\n' +
      'When a reader asked Oda who Nami is in love with, he answered that there will not likely be any references to romance, since he believes the series\' intended demographic is not interested.[35]\n' +
      '\n' +
      'Media\n' +
      'Manga\n' +
      'Main article: List of One Piece manga volumes\n' +
      'Further information: Lists of One Piece chapters\n' +
      'See also: List of One Piece chapters (1–186), List of One Piece chapters (187–388), List of One Piece chapters (389–594), List of One Piece chapters (595–806), and List of One Piece chapters (807–current)\n' +
      'Written and illustrated by Eiichiro Oda, One Piece has been serialized in the manga anthology Weekly Shōnen Jump since July 22, 1997.[36] The chapters have been collected into tankōbon volumes by Shueisha since December 24, 1997.[37] In total, there are 892 chapters and 87 tankōbon volumes.[38] Oda teamed up with Akira Toriyama to create a single crossover of One Piece and Toriyama\'s Dragon Ball. Entitled Cross Epoch, the one-shot was published in the December 25, 2006, issue of Weekly Shōnen Jump and the April 2011 issue of the English Shonen Jump.[39] Oda collaborated with Mitsutoshi Shimabukuro, author of Toriko, for a crossover one-shot of their series titled Taste of the Devil Fruit (実食! 悪魔の実!! Jitsushoku! Akuma no Mi!!, lit. "The True Food! Devil Fruit!!"),[40] which ran in the April 4, 2011, issue of Weekly Shōnen Jump. The spinoff series One Piece Party (ワンピースパーティー Wan Pīsu Pātī), written by Ei Andō in a super deformed art style, began serialization in the January 2015 issue of Saikyō Jump.[41]\n' +
      '\n' +
      'The One Piece manga was licensed for an English language release by Viz Media, who published it via chapters in the manga anthology Shonen Jump, since the magazine\'s launch in November 2002, and in bound volumes since June 30, 2003.[42][43][44] In 2009, Viz announced the release of five volumes per month during the first half of 2010 to catch up with the serialization in Japan.[45] Following the discontinuation of the print Shonen Jump, Viz began releasing One Piece chapterwise in its digital successor Weekly Shonen Jump on January 30, 2012.[46] In the United Kingdom, the volumes were published by Gollancz Manga, starting in March 2006,[47] until Viz Media took it over after the fourteenth volume.[48][49] In Australia and New Zealand, the English volumes have been distributed by Madman Entertainment since November 10, 2008.[50]\n' +
      '\n' +
      'In Poland, Japonica Polonica Fantastica is publishing the manga; twenty-six volumes were released.[51] In France, Glénat is publishing the manga.[52] It is published by Panini Comics in Mexico,[53] LARP Editores in Argentina,[54] Planeta de Libros in Spain,[55] and Edizioni Star Comics in Italy.[56]\n' +
      '\n' +
      'Festival films and original video animation\n' +
      'One Piece: Defeat Him! The Pirate Ganzack! was produced by Production I.G for the 1998 Jump Super Anime Tour and was directed by Gorō Taniguchi.[57] Luffy, Nami, and Zoro are attacked by a sea monster that destroys their boat and separates them. Luffy is found on an island beach, where he saves a little girl, Medaka, from two pirates. All the villagers, including Medaka\'s father have been abducted by Ganzack and his crew and forced into labor. After hearing that Ganzack also stole all the food, Luffy and Zoro rush out to retrieve it. As they fight the pirates, one of them kidnaps Medaka. A fight starts between Luffy and Ganzack, ending with Luffy\'s capture. Meanwhile, Zoro is forced to give up after a threat is made to kill all the villagers. They rise up against Ganzack, and while the islanders and pirates fight, Nami unlocks the three captives. Ganzack defeats the rebellion and reveals his armored battleship. The Straw Hat Pirates are forced to fight Ganzack once more to prevent him from destroying the island.\n' +
      '\n' +
      'A second film, One Piece: Romance Dawn Story, was produced by Toei Animation in July 2008 for the Jump Super Anime Tour. It is 34 minutes in length and based on the first version of Romance Dawn.[58][27] It includes the Straw Hat Pirates up to Brook and their second ship, the Thousand Sunny. In search for food for his crew, Luffy arrives at a port after defeating a pirate named Crescent Moon Gally on the way. There he meets a girl named Silk, who was abandoned by attacking pirates as a baby and raised by the mayor. Her upbringing causes her to value the town as her "treasure". The villagers mistake Luffy for Gally and capture him just as the real Gally returns. Gally throws Luffy in the water and plans to destroy the town, but Silk saves him and Luffy pursues Gally. His crew arrives to help him, and with their help he recovers the treasure for the town, acquires food, and destroys Gally\'s ship.\n' +
      '\n' +
      'The film was later released as a triple feature DVD with Dragon Ball: Yo! Son Goku and His Friends Return!! and Tegami Bachi: Light and Blue Night, that was available only though a mail-in offer exclusively to Japanese residents.[59]\n' +
      '\n' +
      'The One Piece Film Strong World: Episode 0 original video animation adapts the manga\'s special "Chapter 0", which shows how things were before and after the death of Roger. It received a limited release of three thousand DVDs as a collaboration with the House Foods brand.[60]\n' +
      '\n' +
      'Anime series\n' +
      'Further information: Lists of One Piece episodes\n' +
      'See also: List of One Piece episodes (seasons 1–8), List of One Piece episodes (seasons 9–14), and List of One Piece episodes (seasons 15–current)\n' +
      'Toei Animation produces an anime television series based on the One Piece manga. The series, which premiered in Japan on Fuji Television on October 20, 1999, has aired more than 800 episodes, and has been exported to various countries around the world.[61] Two cross-over episodes with the anime adaptation of Toriko were aired. The first of these, which was also the first episode of Toriko, aired on April 3, 2011.[62] A second special, which also crossed over with Dragon Ball Z, aired on April 7, 2013.[63]\n' +
      '\n' +
      'On June 8, 2004, 4Kids Entertainment acquired the license for distribution of One Piece in North America.[64] 4Kids contracted Viz Media to handle home video distribution. 4Kids\' in-house musicians wrote a new background score and theme song nicknamed "Pirate Rap". 4Kids\' dub mandated edits for content and length, which reduced the first 143 episodes into 104.[65] Initially, 4Kids originally created an English version of the first opening theme, "We Are!"[66] It premiered in the United States on September 18, 2004, in first-run syndication on the Fox network as part of the weekend programming block Fox Box, and later aired on Cartoon Network on their weekday afternoon programming block Toonami in April 2005. Production was halted in 2006 after episode 143/104.[67][68] Viz also ceased its home video release of the series after volume 11. On July 22, 2010, an interview with Anime News Network and Mark Kirk, senior vice-president of digital media for 4Kids Entertainment, revealed that 4Kids acquired One Piece as part of a package deal with other anime, and that the company did not screen the series before licensing it. However, once 4Kids realized One Piece was not appropriate for their intended demographic, the company decided to edit it into a more child-oriented series until they had an opportunity to legally drop the license. Kirk said the experience of producing One Piece "ruined the company\'s reputation". Since then, 4Kids established a stricter set of guidelines, checks, and balances to determine which anime the company acquires.[69]\n' +
      '\n' +
      'On April 13, 2007, Funimation licensed the series and started production on an English-language release of One Piece.[70] In an interview with voice actor Christopher Sabat, he stated that Funimation had been interested in acquiring One Piece from the very beginning, and produced a "test episode," in which Sabat portrayed the character of Helmeppo and Eric Vale played the part of the main character, Monkey D. Luffy. (They would later go on to provide the English voices for Roronoa Zoro and Sanji, respectively).[71] After resuming production of the renewed English dub, which featured less censorship because of fewer restrictions on cable programming, Funimation released its first uncut, bilingual DVD box set containing 13 episodes on May 27, 2008.[72] Similarly sized sets followed with fourteen sets released.[73] The Funimation-dubbed episodes premiered on Cartoon Network on September 29, 2007 and aired until its removal on March 22, 2008.[74] On October 28, 2011, Funimation posted a press release on their official website confirming the acquisition of episodes 206–263, and the aspect ratio, beginning with episode 207, would be changed to the 16:9 widescreen format.[75] On May 18, 2013, the uncut series began airing on Adult Swim\'s revived Toonami late-night programming block from episode 207 onward.[76] One Piece was removed from the Toonami block after March 18, 2017.[77]\n' +
      '\n' +
      'In May 2009, Funimation, Toei Animation, Shueisha, and Fuji Television announced they would simulcast stream the series within an hour of the weekly Japanese broadcast at no charge.[78] Originally scheduled to begin on May 30, 2009, with episode 403, a lack of security resulted in a leak of the episode, and Funimation delayed the offer until episode 415 on August 29, 2009.[79][80][81]\n' +
      '\n' +
      'On February 12, 2013, it was announced that Manga Entertainment would start releasing the Funimation dub of One Piece in the United Kingdom in a DVD box set format.[82] Crunchyroll began simulcasting the series on November 2, 2013, for the United States, Canada, South Africa, Australia, New Zealand, and Latin America.[83]\n' +
      '\n' +
      'Theatrical films\n' +
      'Main article: List of One Piece films\n' +
      'Thirteen animated theatrical films based on the One Piece series have been released in Japan. The films are typically released in March in accordance with the spring vacation of Japanese schools.[84] The films feature self-contained, completely original plots, or alternate retellings of story arcs with animation of a higher quality than what the weekly anime allows. The first three films were typically double features paired up with other anime films, and were thus, usually an hour or less in length. The films themselves offer contradictions in both chronology and design that make them incompatible with a single continuity. Funimation has licensed the eighth, tenth, and twelfth films for release in North America, and these films have received in-house dubs by the company.[85][86]\n' +
      '\n' +
      'Video games\n' +
      'Main article: List of One Piece video games\n' +
      'The One Piece franchise has been adapted into multiple video games published by subsidiaries of Bandai and later as part of Bandai Namco Entertainment. The games have been released on a variety of video game, handheld consoles, and mobile devices. The video games feature role-playing games, and fighting games, such as the titles of the Grand Battle! meta-series. The series debuted in Japan on July 19, 2000, with From TV Animation - One Piece: Become the Pirate King!.[87] Over forty games have been produced based on the franchise.[88] Additionally, One Piece characters and settings have appeared in various Shonen Jump crossover games, such as Battle Stadium D.O.N, Jump Super Stars, Jump Ultimate Stars, and J-Stars Victory VS.\n' +
      '\n' +
      'Music\n' +
      'Main article: One Piece discography\n' +
      'Music soundtracks have been released that are based on songs that premiered in the series. Kohei Tanaka and Shiro Hamaguchi composed the score for One Piece.[61] Various theme songs and character songs were released on a total of 49 singles. Eight compilation albums and seventeen soundtrack CDs have been released featuring songs and themes that were introduced in the series.\n' +
      '\n' +
      'Light novels\n' +
      'A series of light novels was published based on the first festival film, certain episodes of the anime television series, and all but the first feature film. They feature artwork by Oda and are written by Tatsuya Hamasaki. The first of these novels, One Piece: Defeat The Pirate Ganzak! was released on June 3, 1999.[89] One Piece: Logue Town Chapter followed on July 17, 2000, as an adaptation of the anime television series\' Logue Town story arc.[90] The first feature film to be adapted was Clockwork Island Adventure on March 19, 2001.[91] On December 25, 2001, saw the publication of the second, and so far last, light novel adaptation of an anime television series arc in One Piece: Thousand-year Dragon Legend.[92] The adaptation of Chopper\'s Kingdom on the Island of Strange Animals was released on March 22, 2002, and that of Dead End Adventure on March 10, 2003.[93][94] Curse of the Sacred Sword followed on March 22, 2004, and Baron Omatsuri and the Secret Island on March 14, 2005.[95][96] The light novel of The Giant Mechanical Soldier of Karakuri Castle was released on March 6, 2006, and that of The Desert Princess and the Pirates: Adventures in Alabasta on March 7, 2007.[97][98] The newest novel adapts Episodes of Chopper Plus: Bloom in the Winter, Miracle Cherry Blossom and was released on February 25, 2008.[99]\n' +
      '\n' +
      'Art and guidebooks\n' +
      'Five art books and five guidebooks for the One Piece series have been released. The first art book, One Piece: Color Walk 1, released June 2001,[100] was also released in English by Viz Media on November 8, 2005.[101] A second art book, One Piece: Color Walk 2, was released on November 4, 2003;[102] and One Piece: Color Walk 3 – Lion the third art book, was released January 5, 2006.[103] The fourth art book, subtitled Eagle, was released on March 4, 2010, [104] and One Piece: Shark, the fifth art book, was released on December 3, 2010.[105]\n' +
      '\n' +
      'The first guidebook One Piece: Red – Grand Characters was released on March 2, 2002.[106] The second, One Piece: Blue – Grand Data File, followed on August 2, 2002.[107] The third guidebook, One Piece: Yellow – Grand Elements, was released on April 4, 2007,[108] and the fourth, One Piece: Green – Secret Pieces, followed on November 4, 2010.[109] An anime guidebook, One Piece: Rainbow!, was released on May 1, 2007, and covers the first eight years of the TV anime.[110]\n' +
      '\n' +
      'Theme park and other establishments\n' +
      'The Baratie restaurant, modeled after the restaurant of the same name in the manga, opened in June 2013 at the Fuji Television headquarters.[111] An indoor theme park located inside the Tokyo Tower called the Tokyo One Piece Tower, which includes the Mugiwara Cafe, opened on March 13, 2015.[112]\n' +
      '\n' +
      'Other media\n' +
      'Other One Piece media include a trading card game by Bandai called One Piece CCG and a drama CD centering on the character of Nefertari Vivi released by Avex Trax on December 26, 2002.[113][114] A Hello Kitty-inspired Chopper was used for several pieces of merchandise as a collaboration between One Piece and Hello Kitty.[115] A kabuki play inspired by One Piece ran at Tokyo\'s Shinbashi Enbujō throughout October and November 2015.[116]\n' +
      '\n' +
      'One Piece is the first-ever manga series to hold a "Dome Tour", in which events were held from March 25 to 27 at the Kyocera Dome in Osaka, and from April 27 to May 1 at the Tokyo Dome.[117] In 2014, the first One Piece exhibition in Korea was held at the War Memorial of Korea,[118] and the second exhibition in Hongik Daehango Art Center.[119] In 2015, a One Piece trompe-l\'œil exhibition was held at the Hong Kong 3D Museum.[120][121]\n' +
      '\n' +
      'Live-action series\n' +
      'Add to Google CalendarOne Piece\n' +
      'Based on\tOne Piece\n' +
      'by Eiichiro Oda\n' +
      'Country of origin\tUnited States\n' +
      'Original language(s)\tEnglish\n' +
      'Add to Google CalendarProduction\n' +
      'Executive producer(s)\tMarty Adelstein\n' +
      'Eiichiro Oda\n' +
      'Becky Clements\n' +
      'Production company(s)\tTomorrow Studios\n' +
      'Shueisha\n' +
      'On July 21, 2017, Weekly Shōnen Jump editor-in-chief Hiroyuki Nakano announced that Tomorrow Studios and Shueisha would commence production of an American live-action television adaptation of Eiichiro Oda\'s One Piece manga series as part of the series\' 20th anniversary celebrations.[122][123] Eiichiro Oda will serve as executive producer for the series alongside Tomorrow Studios CEO Marty Adelstein and Becky Clements.[123] The series will reportedly begin with the East Blue arc.[124]\n' +
      '\n' +
      'Reception\n' +
      'Manga\n' +
      'One Piece is the best-selling manga series in history; it sold 100 million collected tankōbon volumes by February 2005, over 200 million by February 2011,[125] over 360 million copies sold in Japan and 430 million copies sold in circulation worldwide as of October 2017.[126] According to Oricon, One Piece has been the best-selling manga series every year since 2008 when the company began its chart.[127] Due to promotions for the Strong World film, all 56 volumes of the manga released at the time charted on Oricon\'s list of the top 200 manga for the week of December 7–13, 2009.[128]\n' +
      '\n' +
      'Additionally, individual volumes of One Piece have broken publishing and sales records in Japan. In 2009, Volume 56 had the highest initial print run of any manga: 2.85 million copies.[129] Volume 57\'s print run of 3 million copies in 2010 was the highest first print for any book of any subject in Japan—a record that was broken several times by subsequent volumes and currently held by Volume 67\'s 4.05 million initial printing in 2012.[130] Volume 60 was the first book to sell over two million copies in its opening week on Oricon book rankings,[131][132] and later became the first book to sell over three million copies since the chart began in 2008.[133] The series was the best-selling manga for the tenth consecutive year in 2017.[134]\n' +
      '\n' +
      'One Piece has also sold well in North America, charting on Publishers Weekly\'s list of bestselling comics for April/May 2007 and numerous times on The New York Times Manga Best Seller list.[135][136][137] On ICv2\'s list of Top 25 Manga Properties Fall 2008 for North America, which is compiled by interviews with retailers and distributors, Nielsen BookScan\'s Top 20 Lists of graphic novels and ICv2\'s own analysis of information provided by Diamond Comic Distributors, One Piece came in 15th place.[138] It rose to second place on their Top 25 Manga Properties Q3 2010 list.[139]\n' +
      '\n' +
      '\n' +
      '\n' +
      'Life-size reproductions of the main characters\' two pirate ships: the Going Merry (left) and the Thousand Sunny (right)\n' +
      'Allen Divers of Anime News Network comments that the art style One Piece employs requires "time to get used to" with its "very simple" artwork and designs which appear "very cartoonish" at first. He also notes that the influence of Akira Toriyama (Dragon Ball) shines through in Oda\'s style of writing with its "huge epic battles punctuated by a lot of humor" and that, in One Piece, he creates a "rich tale" without focusing too much on plot.[140] Rebecca Silverman of the same site stated that one of the series\' strengths is to "blend action, humor, and heavy fare together" and praised the art, but stated that the panels could get too crowded.[141] The website activeAnime describes the artwork in One Piece as "wonderfully quirky and full of expression".[142] Splashcomics comments that Oda\'s "pleasantly bright and dynamic" (German: "angenehm hell und dynamisch") art style suits the story\'s "funny and exciting" (German: "witzigen und ... spannenden") atmosphere.[143]\n' +
      '\n' +
      'EX Media lauds Oda\'s art for its "crispy" monochrome pictures, "great use of subtle shade changes" on color pages, "sometimes exquisite" use of angles, and for its consistency.[144] Shaenon K. Garrity, who at some point edited the series for English Shonen Jump, said that, while doing so, her amazement over Oda\'s craft grew steadily. She states that "he has a natural, playful mastery of the often restrictive weekly-manga format," notes that "interesting things [are] going on deep in the narrative structure," and recommends "sticking through to the later volumes to see just how crazy and Peter Max-y the art gets".[145] Mania Entertainment writer Jarred Pine comments that "One Piece is a fun adventure story, with an ensemble cast that is continuing to develop, with great action and character drama." He praised Oda\'s artwork as "imaginative and creative" and comments that "Oda\'s imagination just oozes all of the panels [sic]". He also notes that "Oda\'s panel work [...] features a lot of interesting perspectives and direction, especially during the explosive action sequences which are always a blast," though he complains that the panels can sometimes get "a little chaotic".[146]\n' +
      '\n' +
      'Anime\n' +
      'The anime adaptations have also been very well-received. The first episode of the anime adaptation earned a viewer ratings percentage of 12.4, behind Pokémon and ahead of Ojamajo Doremi.[147] As of 2017, One Piece is among the top 10 anime in viewer ratings every week in Japan.[148][149] On several occasions the One Piece anime has topped Japan\'s DVD sales.[150][151]\n' +
      '\n' +
      'In a review of the second DVD release of 4Kids Entertainment\'s dub, Todd Douglass, Jr. of DVD Talk called its adaptation a "shabby treatment" resulting in an "arguably less enjoyable rendition". Douglass said that the 4Kids original opening was "a crappy rap song" and that the removal of whole scenes leaves a "feeling that something is missing". He later went on to say that "Fans of the \'real\' One Piece will want to skip picking [...] up [4Kids Entertainment\'s One Piece DVDs] until an uncut release is announced", and also stated that "kids may get into this version because it\'s what they have seen on TV".[152] Margaret Veira of activeAnime praised the TV series\' "great" animation, stating that "It gives life and stays true to the style and characters of the manga." She notes the fight scenes in particular have "a lot of energy to them".[153] Patrick King of Animefringe comments that the art style of One Piece is "very distinctive and fresh".[154]\n' +
      '\n' +
      'In a review of the first Funimation DVD release for Mania Entertainment, Bryce Coulter comments that One Piece is "not your typical pirate adventure" and that mixed with "the right amount of random fun along with a shonen style storyline" it becomes "an appealing and fun romp".[155] In a review of Funimation\'s second DVD release for Mania Entertainment, Bryce Coulter comments that "You can tell that they are giving One Piece the attention that was neglected by 4Kids" and that "One Piece is a great tale of high-seas fun that will leave you wanting more!"[156]\n' +
      '\n' +
      'In Indonesia, Global TV was reprimanded by the Indonesian Broadcasting Commission (KPI) for airing the anime television series. Nina Armando, member of the KPI and a lecturer at the University of Indonesia, said the show should not be aired at times when children are likely to watch.[157]\n' +
      '\n' +
      'Awards and accolades\n' +
      'Manga\n' +
      '```python\n\nThe One Piece manga was a finalist for the Tezuka Osamu Cultural Prize three times in a row from 2000 to 2002,[158][159][160] with the highest number of fan nominations in the first two years.[161] The German translation of its 44th volume won the Sondermann audience award in the international manga category, a yearly comic award given in seven categories by the Frankfurt Book Fair, the Frankfurter Rundschau, Spiegel Online and Comicforum, at the Fair\'s Comics Centre in 2005.[162][163] In a 2008 poll by Oricon, Japanese teenagers voted it the most interesting manga.[164] The manga was nominated for Favorite Manga Series in Nickelodeon Magazine\'s 2009 Comics Awards.[165] In 2012, One Piece won the 41st Japan Cartoonists Association Award Grand Prize, alongside Kimuchi Yokoyama\'s Nekodarake Nice.[166] Da Vinci magazine named One Piece number three on their list of 2013\'s top manga, which was voted on 4,619 professional book reviewers, bookstore employees, and Da Vinci readers.[167] On June 15, 2015, it was announced that Eiichiro Oda and One Piece had set the Guinness World Record for "The most copies published for the same comic book series by a single author" with 320,866,000 copies printed worldwide as of December 2014.[168]\n' +
      '\n' +
      'Anime\n' +
      '```\n\nThe first opening of the One Piece anime television series, "We Are!", won the Animation Kobe Theme Song Award of the year 2000.[169] In February 2001, One Piece placed 9th among anime television series in Japan.[170] In 2001, the readers of Animage, a popular Japanese anime magazine, voted the anime television series in 5th place of The Readers\' Picks for the Anime that should be remembered in the 21st Century.[171] In June 2002, Animage readers voted One Piece to be the 16th best new anime of the year 2001,[172] and gave it another 16th place in 2004 in the category Favorite Anime Series.[173] In a 2005 web poll by Japanese television network TV Asahi One Piece was voted 6th most popular animated TV series.[174] Before the poll, Asahi TV broadcast another list based on a nationwide survey in which One Piece placed 4th among teenagers.[175] In 2006, it was elected 32nd of the Top 100 Japanese anime by TV Asahi and 21st by its viewers.[176][177] Funimation\'s first DVD release of the series "One Piece: Season 1 First Voyage" was nominated for the Fifth Annual TV DVD Awards.[178]' +
      '\n',
      'http://thehypedgeek.com/wp-content/uploads/2017/05/one-piece.jpg'
    );
  }
}
