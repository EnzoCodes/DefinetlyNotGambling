CREATE DATABASE monsters_db; 

CREATE TABLE monsters2 (
	id INT AUTO_INCREMENT NOT NULL, 
	name VARCHAR(30) NOT NULL, 
	movie VARCHAR(50) NOT NULL, 
	type VARCHAR(30) NOT NULL, 
	category VARCHAR(50) NOT NULL, 
	tier BOOLEAN NOT NULL,
	image VARCHAR(255) NOT NULL, 
	PRIMARY KEY (id)
);

DESCRIBE monsters; 

SELECT * FROM monsters;

INSERT INTO monsters (name, movie, type, category, tier, image) 
VALUES ('Sarlacc', 'The Return of the Jedi', 'Tentacled', 'Extra Terrestrials', 4, 'http://media.liveauctiongroup.net/i/20282/19782537_3.jpg?v=8D147F2BC4F6C50');

VALUES 
('The Crawling Eye', 'The Trollenberg Terror', 'Tentacled', 'Extra Terrestrials', 3, ''), 
('Martians', 'War of the Worlds', 'Tentacled', 'Extra Terrestrials', 1, ''), 
('Gar', 'Star Crystal', 'Tentacled', 'Extra Terrestrials', 2, ''), 
('Sil', 'Species', 'Tentacled', 'Extra Terrestrials', 2, 'https://s.pacn.ws/360/u7/species-16-scale-action-figure-sil-543691.4.jpg?oybjkh'),

('Blood Beast', 'Blood Beast from Outer Space', 'Breed with Humans', 'Extra Terrestrials', 1, ''),
('Breeders', 'Breeders', 'Breed with Humans', 'Extra Terrestrials', 2, ''),
('Xtro', 'Xtro', 'Breed with Humans', 'Extra Terrestrials', 4, ''),
('Inseminoid', 'Inseminoid', 'Breed with Humans', 'Extra Terrestrials', 3, ''),
('Sil', 'Species', 'Breed with Humans', 'Extra Terrestrials', 2, 'https://s.pacn.ws/360/u7/species-16-scale-action-figure-sil-543691.4.jpg?oybjkh');


INSERT INTO monsters (name, movie, type, category, tier, image) 
VALUES
('Guilala', 'The X from Outer Space', 'Space Dragons', 'Extra Terrestrials', 2, 'https://orig00.deviantart.net/0644/f/2011/151/0/e/guilala_animated_by_baltandan96-d3hqgo3.jpg'),
('Zarkorr', 'Zarkorr! The Invader', 'Space Dragons', 'Extra Terrestrials', 1, 'https://t00.deviantart.net/WPEF3walr75rl-AI9CtwF9jSoPw=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/9a48/th/pre/f/2014/250/1/1/zarkorr_by_megadanzilla-d7yarug.png'),
('King Ghidorah', 'Ghidorah, the Three-Headed Monster', 'Space Dragons', 'Extra Terrestrials', 3, 'https://wikizilla.org/wiki/images/thumb/d/d0/King_Ghidorah_in_Godzilla_Unleashed_game_of_2007.png/200px-King_Ghidorah_in_Godzilla_Unleashed_game_of_2007.png'),
('Gigan', 'Godzilla vs. Gigan', 'Space Dragons', 'Extra Terrestrials', 4, 'https://orig00.deviantart.net/310b/f/2009/281/c/7/godzilla_neo___gigan_by_kaijusamurai.jpg');

INSERT INTO monsters2 (name, movie, type, category, tier, image) 
VALUES
('Guilala', 'The X from Outer Space', 'Space Dragons', 'Extra Terrestrials', false, 'https://orig00.deviantart.net/0644/f/2011/151/0/e/guilala_animated_by_baltandan96-d3hqgo3.jpg'),
('Zarkorr', 'Zarkorr! The Invader', 'Space Dragons', 'Extra Terrestrials', false, 'https://t00.deviantart.net/WPEF3walr75rl-AI9CtwF9jSoPw=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/9a48/th/pre/f/2014/250/1/1/zarkorr_by_megadanzilla-d7yarug.png'),
('King Ghidorah', 'Ghidorah, the Three-Headed Monster', 'Space Dragons', 'Extra Terrestrials', false, 'https://wikizilla.org/wiki/images/thumb/d/d0/King_Ghidorah_in_Godzilla_Unleashed_game_of_2007.png/200px-King_Ghidorah_in_Godzilla_Unleashed_game_of_2007.png'),
('Gigan', 'Godzilla vs. Gigan', 'Space Dragons', 'Extra Terrestrials', true, 'https://orig00.deviantart.net/310b/f/2009/281/c/7/godzilla_neo___gigan_by_kaijusamurai.jpg');

CREATE DATABASE monsters_db;

CREATE TABLE monsters (
	id INT AUTO_INCREMENT NOT NULL,
	name VARCHAR(30) NOT NULL,
	movie VARCHAR(50) NOT NULL,
	type VARCHAR(30) NOT NULL,
	category VARCHAR(50) NOT NULL,
	tier INTEGER NOT NULL,
	image VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);

DESCRIBE monsters;

SELECT * FROM monsters2;

INSERT INTO monsters (name, movie, type, category, tier, image)
VALUES ('Sarlacc', 'The Return of the Jedi', 'Tentacled', 'Extra Terrestrials', 4, 'http://media.liveauctiongroup.net/i/20282/19782537_3.jpg?v=8D147F2BC4F6C50');

VALUES
('The Crawling Eye', 'The Trollenberg Terror', 'Tentacled', 'Extra Terrestrials', 3, ''),
('Martians', 'War of the Worlds', 'Tentacled', 'Extra Terrestrials', 1, ''),
('Gar', 'Star Crystal', 'Tentacled', 'Extra Terrestrials', 2, ''),
('Sil', 'Species', 'Tentacled', 'Extra Terrestrials', 2, 'https://s.pacn.ws/360/u7/species-16-scale-action-figure-sil-543691.4.jpg?oybjkh'),

('Blood Beast', 'Blood Beast from Outer Space', 'Breed with Humans', 'Extra Terrestrials', 1, ''),
('Breeders', 'Breeders', 'Breed with Humans', 'Extra Terrestrials', 2, ''),
('Xtro', 'Xtro', 'Breed with Humans', 'Extra Terrestrials', 4, ''),
('Inseminoid', 'Inseminoid', 'Breed with Humans', 'Extra Terrestrials', 3, ''),
('Sil', 'Species', 'Breed with Humans', 'Extra Terrestrials', 2, 'https://s.pacn.ws/360/u7/species-16-scale-action-figure-sil-543691.4.jpg?oybjkh');


INSERT INTO monsters (name, movie, type, category, tier, image)
VALUES
('Guilala', 'The X from Outer Space', 'Space Dragons', 'Extra Terrestrials', 2, 'https://orig00.deviantart.net/0644/f/2011/151/0/e/guilala_animated_by_baltandan96-d3hqgo3.jpg'),
('Zarkorr', 'Zarkorr! The Invader', 'Space Dragons', 'Extra Terrestrials', 1, 'https://t00.deviantart.net/WPEF3walr75rl-AI9CtwF9jSoPw=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/9a48/th/pre/f/2014/250/1/1/zarkorr_by_megadanzilla-d7yarug.png'),
('King Ghidorah', 'Ghidorah, the Three-Headed Monster', 'Space Dragons', 'Extra Terrestrials', 3, 'https://wikizilla.org/wiki/images/thumb/d/d0/King_Ghidorah_in_Godzilla_Unleashed_game_of_2007.png/200px-King_Ghidorah_in_Godzilla_Unleashed_game_of_2007.png'),
('Gigan', 'Godzilla vs. Gigan', 'Space Dragons', 'Extra Terrestrials', 4, 'https://orig00.deviantart.net/310b/f/2009/281/c/7/godzilla_neo___gigan_by_kaijusamurai.jpg');


INSERT INTO monsters (name, movie, type, category, tier, image)
VALUES

('Audrey II', 'Little Shop of Horrors', 'Plant Like', 'Extra Terrestrials', 4, "https://s-media-cache-ak0.pinimg.com/originals/3a/dc/a4/3adca489fd74faa36a193d653f235988.jpg"),
('Triffids', 'The Day of the Trifids', 'Plant Like', 'Extra Terrestrials', 1, 'http://www.thepropgallery.com/media/wysiwyg/Original-Triffid_04.jpg');
('Meteorite Plant, 'Creepshow', 'Plant Like', 'Extra Terrestrials', 1, ""),
('Man-Eating Plant', 'Journey to the Prehistoric Planet', 'Plant Like', 'Extra Terrestrials', 1, 'http://www.basilrathbone.net/films/voyage/Voyage_DVD.JPG');

('Krites', 'Critters','Small', 'Extra Terrestrials', 1, 'https://r.hswstatic.com/w_907/gif/stufftoblowyourmind-23-2014-02-critters.jpg'),
('Munchies', 'Munchies', 'Small', 'Extra Terrestrials', 1, 'https://static1.squarespace.com/static/541648fde4b0f910e312cd76/t/553eb63ae4b023447a1629cf/1430173247816/'),

('Bugs', 'Starship Troopers', 'Insectoid', 'Extra Terrestrials', 2, 'https://monsterlegacy.files.wordpress.com/2014/07/warriorbug.gif?w=604'),
('Creatures', 'Pitch Black', 'Insectoid', 'Extra Terrestrials', 3, 'https://hotcutegirlygeek.files.wordpress.com/2012/05/hammerheadfinal.jpg'),
('Giant Spider Alien', 'Arachnid', 'Insectoid', 'Extra Terrestrials', 1, 'https://i.pinimg.com/736x/f9/b2/8e/f9b28e11dcf2b03862ffa1a3edf9a3ed--spider-art-giant-spider.jpg');

'Sattelite Dish Creature', 'TerrorVision', 'Blobbish/Amorphous', 'Extra Terrestrials', 2, ''), 
'Hedorah', 'Godzilla vs. Hedorrah', 'Blobbish/Amorphous', 'Extra Terrestrials', 4, ''),
'The Blob', 'The Blob', 'Blobbish/Amorphous', 'Extra Terrestrials', 4, ''),
'Giant Amoeba', 'Angry Red Planet', 'Blobbish/Amorphous', 'Extra Terrestrials', 3, ''),

INSERT INTO monsters (name, movie, type, category, tier, image)
VALUES


('Annastasia Nightshade', 'Gothic Vampires from Hell', 'Musician Vampires', 'Vampires', 1, 'http://www.filmsayong.com/wp-content/gallery/gothic_vampires_from_hell_2007/pic2.gif'),
('Ralph', 'Rockula', 'Musician Vampires', 'Vampires', 3, 'http://2.bp.blogspot.com/-1T5QubMNh4E/VchnjCJfDGI/AAAAAAAABds/dA3CoNwTVPw/s1600/still-of-dean-cameron-in-rockula-%25281990%2529.jpg'),

('Nocturna', 'Nocturna', 'Draculas', 'Vampires', 1, 'https://vignette.wikia.nocookie.net/batman/images/1/18/Nocturna_DCnU.jpg/revision/latest?cb=20140716150307'),
('Count Alucard', 'Son of Dracula', 'Draculas', 'Vampires', 2, 'https://i.pinimg.com/736x/f6/2d/10/f62d10caefa2a420944c3ce0de8ea695--lon-chaney-jr-classic-monsters.jpg'),
('Zoltan', 'Zoltan Hound of Dracula', 'Draculas', 'Vampires',4 , 'https://highteadreams.files.wordpress.com/2016/10/zoltan.gif?w=300&h=184'),
('Countess Marya Zaleska', "Dracula's Daughter", 'Draculas', 'Vampires', 3, 'https://pbs.twimg.com/media/CSGI6UmUcAA1kKm.jpg');

('Samurai Vampires', 'Samurai Vampire Bikers from Hell', 'Vampire Martial Artists', 'Vampires', , ''),
('Blade', 'Blade', 'Vampire Martial Artists', 'Vampires', , ''),

('', '', 'Lesbian Vampires', 'Vampires', , ''),
('', '', 'Lesbian Vampires', 'Vampires', , ''),
('', '', 'Lesbian Vampires', 'Vampires', , ''),
('', '', 'Lesbian Vampires', 'Vampires', , ''),
('', '', 'Lesbian Vampires', 'Vampires', , ''),
('', '', 'Lesbian Vampires', 'Vampires', , ''),
('', '', 'Lesbian Vampires', 'Vampires', , ''),

('', '', 'General', 'Vampires', , ''),
('', '', 'General', 'Vampires', , ''),
('', '', 'General', 'Vampires', , ''),
('', '', 'General', 'Vampires', , ''),
('', '', 'General', 'Vampires', , ''),
('', '', 'General', 'Vampires', , ''),
('', '', 'General', 'Vampires', , ''),
('', '', 'General', 'Vampires', , ''),
('', '', 'General', 'Vampires', , ''),
('', '', 'General', 'Vampires', , ''),
('', '', 'General', 'Vampires', , ''),
('', '', 'General', 'Vampires', , ''),
('', '', 'General', 'Vampires', , ''),
('', '', 'General', 'Vampires', , ''),
('', '', 'General', 'Vampires', , ''),
('', '', 'General', 'Vampires', , ''),
('', '', 'General', 'Vampires', , ''),
('', '', 'General', 'Vampires', , ''),
('', '', 'General', 'Vampires', , ''),
('', '', 'General', 'Vampires', , ''),
('', '', 'General', 'Vampires', , ''),
('', '', 'General', 'Vampires', , ''),
('', '', 'General', 'Vampires', , ''),


('', '', '', '', , ''),
('', '', '', '', , ''),
('', '', '', '', , ''),
('', '', '', '', , ''),
('', '', '', '', , ''),
('', '', '', '', , ''),
('', '', '', '', , ''),

'Slug Like', 'Extra Terrestrials'
'Slug Like', 'Extra Terrestrials'
'Parasitic Slugs', 'Extra Terrestrials'
'Parasitic Slugs', 'Extra Terrestrials'

'Uses Humans As Hosts', 'Extra Terrestrials'
'Uses Humans As Hosts', 'Extra Terrestrials'
'Uses Humans As Hosts', 'Extra Terrestrials'
'Uses Humans As Hosts', 'Extra Terrestrials'
'Uses Humans As Hosts', 'Extra Terrestrials'

'Humanoid Bipedal', 'Extra Terrestrials'
'Humanoid Bipedal', 'Extra Terrestrials'
'Humanoid Bipedal', 'Extra Terrestrials'
'Humanoid Bipedal', 'Extra Terrestrials'
'Humanoid Bipedal', 'Extra Terrestrials'
'Humanoid Bipedal', 'Extra Terrestrials'
'Humanoid Bipedal', 'Extra Terrestrials'
'Humanoid Bipedal', 'Extra Terrestrials'

'General', 'Extra Terrestrials'
'General', 'Extra Terrestrials'
'General', 'Extra Terrestrials'
'General', 'Extra Terrestrials'
'General', 'Extra Terrestrials'
'General', 'Extra Terrestrials'
'General', 'Extra Terrestrials'
'General', 'Extra Terrestrials'
'General', 'Extra Terrestrials'



'Audrey II', 'Little Shop of Horrors', 'Plant Like', 'Extra Terrestrials',
'Triffids', 'The Day of the Trifids', 'Plant Like', 'Extra Terrestrials',
'Meteorite Plant, 'Creepshow', 'Plant Like', 'Extra Terrestrials',
'Man-Eating Plant', 'Journey to the Prehistoric Planet', 'Plant Like', 'Extra Terrestrials',

'Krites', 'Critters','Small', 'Extra Terrestrials'
'Munchies', 'Munchies', 'Small', 'Extra Terrestrials'

'Bugs', 'Starshipt Troopers', 'Insectoid', 'Extra Terrestrials'
'Creatures', 'Pitch Black', 'Insectoid', 'Extra Terrestrials'
'Giant Spider Alien', 'Arachnid', 'Insectoid', 'Extra Terrestrials'

'Blobbish/Amorphous', 'Extra Terrestrials'
'Blobbish/Amorphous', 'Extra Terrestrials'
'Blobbish/Amorphous', 'Extra Terrestrials'
'Blobbish/Amorphous', 'Extra Terrestrials'

'Slug Like', 'Extra Terrestrials'
'Slug Like', 'Extra Terrestrials'
'Parasitic Slugs', 'Extra Terrestrials'
'Parasitic Slugs', 'Extra Terrestrials'

'Uses Humans As Hosts', 'Extra Terrestrials'
'Uses Humans As Hosts', 'Extra Terrestrials'
'Uses Humans As Hosts', 'Extra Terrestrials'
'Uses Humans As Hosts', 'Extra Terrestrials'
'Uses Humans As Hosts', 'Extra Terrestrials'

'Humanoid Bipedal', 'Extra Terrestrials'
'Humanoid Bipedal', 'Extra Terrestrials'
'Humanoid Bipedal', 'Extra Terrestrials'
'Humanoid Bipedal', 'Extra Terrestrials'
'Humanoid Bipedal', 'Extra Terrestrials'
'Humanoid Bipedal', 'Extra Terrestrials'
'Humanoid Bipedal', 'Extra Terrestrials'
'Humanoid Bipedal', 'Extra Terrestrials'

'General', 'Extra Terrestrials'
'General', 'Extra Terrestrials'
'General', 'Extra Terrestrials'
'General', 'Extra Terrestrials'
'General', 'Extra Terrestrials'
'General', 'Extra Terrestrials'
'General', 'Extra Terrestrials'
'General', 'Extra Terrestrials'
'General', 'Extra Terrestrials'









INSERT INTO clients (client_name) VALUES ('Bilal');
INSERT INTO clients (client_name) VALUES ('Brianne');
INSERT INTO clients (client_name) VALUES ('Vincent');

INSERT INTO parties (party_name, party_type, party_cost, client_id) VALUES ('Everybody Loves Raymond', 'tv', 500, 1);
INSERT INTO parties (party_name, party_type, party_cost, client_id) VALUES ('Big Bang Theory', 'tv', 900, 1);
INSERT INTO parties (party_name, party_type, party_cost, client_id) VALUES ('Top Gun', 'movie', 200, 2);
INSERT INTO parties (party_name, party_type, party_cost, client_id) VALUES ('Whiskey', 'grown-up', 300, 2);
INSERT INTO parties (party_name, party_type, party_cost, client_id) VALUES ('Cigar', 'grown-up', 250, 3);


1	Sarlacc	The Return of the Jedi	Tentacled	Extra Terrestrials	1	http://media.liveauctiongroup.net/i/20282/19782537_3.jpg?v=8D147F2BC4F6C50
2	Guilala	The X from Outer Space	Space Dragons	Extra Terrestrials	0	https://orig00.deviantart.net/0644/f/2011/151/0/e/guilala_animated_by_baltandan96-d3hqgo3.jpg
3	Zarkorr	Zarkorr! The Invader	Space Dragons	Extra Terrestrials	0	https://t00.deviantart.net/WPEF3walr75rl-AI9CtwF9jSoPw=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/9a48/th/pre/f/2014/250/1/1/zarkorr_by_megadanzilla-d7yarug.png
4	King Ghidorah	Ghidorah, the Three-Headed Monster	Space Dragons	Extra Terrestrials	0	https://wikizilla.org/wiki/images/thumb/d/d0/King_Ghidorah_in_Godzilla_Unleashed_game_of_2007.png/200px-King_Ghidorah_in_Godzilla_Unleashed_game_of_2007.png
5	Gigan	Godzilla vs. Gigan	Space Dragons	Extra Terrestrials	1	https://orig00.deviantart.net/310b/f/2009/281/c/7/godzilla_neo___gigan_by_kaijusamurai.jpg
6	Audrey II	Little Shop of Horrors	Plant Like	Extra Terrestrials	1	https://s-media-cache-ak0.pinimg.com/originals/3a/dc/a4/3adca489fd74faa36a193d653f235988.jpg
7	Triffids	The Day of the Trifids	Plant Like	Extra Terrestrials	0	http://www.thepropgallery.com/media/wysiwyg/Original-Triffid_04.jpg
8	Meteorite Planet	Creepshow	Plant-Like	Extra Terrestrials	0	http://4.bp.blogspot.com/-nCH5cGx-xwY/UjqD9eGstcI/AAAAAAAACqs/WiQ44GKHqyU/s1600/CreepshowStephenKing.jpg
9	Man-Eating Plant	Journey to the Prehistoric Planet	Plant-Like	Extra Terrestrials	0	http://www.basilrathbone.net/films/voyage/Voyage_DVD.JPG
10	Krites	Critters	Small	Extra Terrestrials	0	https://r.hswstatic.com/w_907/gif/stufftoblowyourmind-23-2014-02-critters.jpg
11	Munchies	Munchies	Small	Extra Terrestrials	0	https://static1.squarespace.com/static/541648fde4b0f910e312cd76/t/553eb63ae4b023447a1629cf/1430173247816/
12	Bugs	Starship Troopers	Insectoid	Extra Terrestrials	0	https://monsterlegacy.files.wordpress.com/2014/07/warriorbug.gif?w=604
13	Creatures	Pitch Black	Insectoid	Extra Terrestrials	1	https://hotcutegirlygeek.files.wordpress.com/2012/05/hammerheadfinal.jpg
14	Giant Spider Alien	Arachnid	Insectoid	Extra Terrestrials	0	https://i.pinimg.com/736x/f9/b2/8e/f9b28e11dcf2b03862ffa1a3edf9a3ed--spider-art-giant-spider.jpg
15	Hedorah	Godzilla vs. Hedorrah	Blobbish/Amorphous	Extra Terrestrials	0	http://kaiju.wdfiles.com/local--files/wiki:hedorah/hedorah_1971_02.jpg
16	The Blob	The Blob	Blobbish/Amorphous	Extra Terrestrials	1	http://cdn-static.denofgeek.com/sites/denofgeek/files/styles/insert_main_wide_image/public/6/54//blob-58-2.jpg?itok=kvVZNS4P
17	Giant Amoeba	Angry Red Planet	Blobbish/Amorphous	Extra Terrestrials	0	https://s-media-cache-ak0.pinimg.com/originals/a6/10/ac/a610ac373fadc096699087d0daad5647.jpg
18	The Crawling Eye	The Trollenberg Terror	Tentacled	Extra Terrestrials	0	https://horrorpediadotcom.files.wordpress.com/2013/01/crawling-eye-1958.jpg
19	Martians	War of the Worlds	Tentacled	Extra Terrestrials	0	https://vignette3.wikia.nocookie.net/waroftheworlds/images/2/29/Martian_Rendered.png/revision/latest?cb=20111015193000
20	Gar	Star Crystal	Tentacled	Extra Terrestrials	0	http://www.badmovies.org/movies/starcrystal/starcrystal8.jpg
21	Sil	Species	Tentacled	Extra Terrestrials	0	https://s.pacn.ws/360/u7/species-16-scale-action-figure-sil-543691.4.jpg?oybjkh
22	Blood Beast	Blood Beast from Outer Space	Breed with Humans	Extra Terrestrials	0	http://1.bp.blogspot.com/-H4MomolA0Ro/T0HLe5TBpiI/AAAAAAAAAY8/HUb38W7wRQM/s1600/Night_of_the_Bloodbeast_Showdown.jpg
23	Breeders	Breeders	Breed with Humans	Extra Terrestrials	0	https://upload.wikimedia.org/wikipedia/en/b/b0/Breedersposter1986.jpg
24	Xtro	Xtro	Breed with Humans	Extra Terrestrials	1	https://33hpwq10j9luq8gl43e62q4e-wpengine.netdna-ssl.com/wp-content/uploads/2017/05/Xtro-Alien-750x409.jpg
25	Inseminoid	Inseminoid	Breed with Humans	Extra Terrestrials	0	http://horrornews.net/wp-content/uploads/2012/01/inseminoid-1981-movie-5.jpg
26	Sil	Species	Breed with Humans	Extra Terrestrials	0	https://s.pacn.ws/360/u7/species-16-scale-action-figure-sil-543691.4.jpg?oybjkh
27	Annastasia Nightshade	Gothic Vampires from Hell	Musician Vampires	Vampires	0	http://www.filmsayong.com/wp-content/gallery/gothic_vampires_from_hell_2007/pic2.gif
28	Ralph	Rockula	Musician Vampires	Vampires	0	http://2.bp.blogspot.com/-1T5QubMNh4E/VchnjCJfDGI/AAAAAAAABds/dA3CoNwTVPw/s1600/still-of-dean-cameron-in-rockula-%25281990%2529.jpg
29	Nocturna	Nocturna	Draculas	Vampires	0	https://vignette.wikia.nocookie.net/batman/images/1/18/Nocturna_DCnU.jpg/revision/latest?cb=20140716150307
30	Count Alucard	Son of Dracula	Draculas	Vampires	0	https://i.pinimg.com/736x/f6/2d/10/f62d10caefa2a420944c3ce0de8ea695--lon-chaney-jr-classic-monsters.jpg
31	Zoltan	Zoltan Hound of Dracula	Draculas	Vampires	1	https://highteadreams.files.wordpress.com/2016/10/zoltan.gif?w=300&h=184
32	Countess Marya Zaleska	Dracula's Daughter	Draculas	Vampires	0	https://pbs.twimg.com/media/CSGI6UmUcAA1kKm.jpg