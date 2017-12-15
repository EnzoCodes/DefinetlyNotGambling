CREATE DATABASE items_db;

USE items_db;

1	Brandon Stark	Stark	4	↵https://i.imgur.com/8LgdC4q.jpg?1
2	Ned Stark	Stark	3	https://i.imgur.com/8xJ4Cx4.jpg?1
3	Arya Stark	Stark	4	https://i.imgur.com/gGdHMxg.jpg?1↵
4	Sanza Stark	Stark	3	https://i.imgur.com/N3dSzP7.jpg?1
5	Tywin Lannister	Lannister	1	https://i.imgur.com/AlugMA6.jpg?1
6	Tyrion Lannister	Lannister	2	https://i.imgur.com/yTcf3Dm.jpg?1
7	Goeffrey	Lannister	3	https://i.imgur.com/BmWtwqv.jpg?1
8	Jamie Lannister	Lannister	3	https://i.imgur.com/HTaxxHR.jpg?1
9	The Red Woman	Other	2	https://i.imgur.com/oZ4pDp3.jpg?1
10	Jon Snow	Other	1	https://i.imgur.com/ckTupq0.jpg?1

SELECT * FROM Cats;
SELECT * FROM items;

INSERT INTO Cats (name, house, tier, image, houseImage)

VALUES
("", "", , "", ""),

("Ned Stark", "Stark", , "", "https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142"),
("Benjen Stark", "Stark", , "", "https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142"),
("Lyanna Stark", "Stark", , "", "https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142"),
("Robb Stark", "Stark", , "", "https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142"),
("Sanza Stark", "Stark", , "", "https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142"),
("Arya Stark", "Stark", , "", "https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142"),
("Brann Stark", "Stark", , "", "https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142"),
("Rickon Stark", "Stark", , "", "https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142");

("", "Lannister", , "", "https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Lannister-Main-Shield.PNG/revision/latest?cb=20170101095357"),

("Aemon Targaryen", "Targaryen", 4, "https://vignette.wikia.nocookie.net/gameofthrones/images/3/36/Famtree-MaesterAemon.png/revision/latest/scale-to-width-down/100?cb=20170827222240", "https://vignette.wikia.nocookie.net/gameofthrones/images/4/43/House-Targaryen-Main-Shield.PNG/revision/latest?cb=20170510235320"),
("Rhaegar Targaryen", "Targaryen", 4, "https://vignette.wikia.nocookie.net/gameofthrones/images/7/7f/Famtree-RhaegarTargaryen.png/revision/latest?cb=20170830151530", "https://vignette.wikia.nocookie.net/gameofthrones/images/4/43/House-Targaryen-Main-Shield.PNG/revision/latest?cb=20170510235320"),
("Jon Snow", "Targaryen", 1, "https://vignette.wikia.nocookie.net/gameofthrones/images/4/43/House-Targaryen-Main-Shield.PNG/revision/latest?cb=20170510235320", "https://vignette.wikia.nocookie.net/gameofthrones/images/d/d4/Jon_Snow_family_tree_image.jpg/revision/latest/scale-to-width-down/100?cb=20160616211642"),
("Viserys Targaryen", "Targaryen", 4, "https://vignette.wikia.nocookie.net/gameofthrones/images/a/ad/Viserys_tree.jpg/revision/latest/scale-to-width-down/100?cb=20120224011850", "https://vignette.wikia.nocookie.net/gameofthrones/images/4/43/House-Targaryen-Main-Shield.PNG/revision/latest?cb=20170510235320"),
("Daenerys Targaryen", "Targaryen", 2, "https://vignette.wikia.nocookie.net/gameofthrones/images/6/6c/Daenerys_tree.jpg/revision/latest/scale-to-width-down/100?cb=20140713213624", "https://vignette.wikia.nocookie.net/gameofthrones/images/4/43/House-Targaryen-Main-Shield.PNG/revision/latest?cb=20170510235320");

("", "Martel", , "", "https://vignette.wikia.nocookie.net/gameofthrones/images/7/7e/House-Martell-Main-Shield.PNG/revision/latest?cb=20170523024859"),

("", "Tully", , "", "https://vignette.wikia.nocookie.net/gameofthrones/images/b/bd/House-Tully-Main-Shield.PNG/revision/latest?cb=20170523040648"),

("", "Greyjoy", , "", "https://vignette.wikia.nocookie.net/gameofthrones/images/8/86/House-Greyjoy-Main-Shield.PNG/revision/latest?cb=20170523015836"),

("", "Baratheon", , "", "https://vignette.wikia.nocookie.net/gameofthrones/images/0/00/House-Baratheon-Main-Shield.PNG/revision/latest?cb=20170519002924"),

("", "Tyrell", , "", "https://vignette.wikia.nocookie.net/gameofthrones/images/c/cf/House-Tyrell-Main-Shield.PNG/revision/latest?cb=20170108163035");






("", "", , "", ""),

1	Brandon Stark	Stark	4	https://imgur.com/8LgdC4q
2	Ned Stark	Stark	3	https://imgur.com/8xJ4Cx4
3	Arya Stark	Stark	4	https://imgur.com/gGdHMxg
4	Sanza Stark	Stark	3	https://imgur.com/N3dSzP7
5	Tywin Lannister	Lannister	1	https://imgur.com/AlugMA6
6	Tyrion Lannister	Lannister	2	https://imgur.com/yTcf3Dm
7	Goeffrey	Lannister	3	https://imgur.com/BmWtwqv
8	Jamie Lannister	Lannister	3	https://imgur.com/HTaxxHR

Sam 
Khaleesi
Marjorie
King Robert 
K Brother
no fingers
K blonde
Khal Drogo

INSERT 