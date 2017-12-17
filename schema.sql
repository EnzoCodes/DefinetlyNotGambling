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

1	Jamie Lannister	Lannister	4	https://i.imgur.com/dOXHUw2.png	https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Lannister-Main-Shield.PNG/revision/latest?cb=20170101095357
2	Tywin Lannister	Lannister	3	https://i.imgur.com/ccac2hc.png	https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Lannister-Main-Shield.PNG/revision/latest?cb=20170101095357
3	Podrick Payne	Payne	1	https://i.imgur.com/Jnc9cMV.png	https://i.imgur.com/xvSU8iY.png
8	Ned Stark	Stark	3	https://i.imgur.com/wOxYS3G.jpg?1	https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142
9	Benjen Stark	Stark	4	https://s-media-cache-ak0.pinimg.com/originals/37/41/64/3741648909fddb208111afca4f0bf95f.jpg	https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142
10	Lyanna Stark	Stark	4	https://vignette.wikia.nocookie.net/gameofthrones/images/b/b8/Lyanna_tree.jpg/revision/latest/scale-to-width-down/100?cb=20170831202744	https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142
11	Robb Stark	Stark	2	https://i.imgur.com/VbgX8Sa.png?1	https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142
12	Sanza Stark	Stark	3	https://i.imgur.com/7aBfvXd.png?1	https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142
13	Arya Stark	Stark	4	https://i.imgur.com/qhXhgXa.png?1	https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142
14	Brann Stark	Stark	3	https://i.imgur.com/8LgdC4q.jpg?1	https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142
15	Rickon Stark	Stark	4	https://vignette.wikia.nocookie.net/gameofthrones/images/1/10/Rickon_fam_tree.png/revision/latest?cb=20160622202016	https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142
16	Aemon Targaryen	Targaryen	4	https://i2.wp.com/consciouscat.net/wp-content/uploads/2013/04/old-cat.jpg?resize=500%2C333&ssl=1	https://vignette.wikia.nocookie.net/gameofthrones/images/4/43/House-Targaryen-Main-Shield.PNG/revision/latest?cb=20170510235320
17	Rhaegar Targaryen	Targaryen	4	http://www.catbreedslist.com/uploads/allimg/cat-pictures/Norwegian-Forest-Cat-1.jpg	https://vignette.wikia.nocookie.net/gameofthrones/images/4/43/House-Targaryen-Main-Shield.PNG/revision/latest?cb=20170510235320
18	Jon Snow	Targaryen	1	https://i.imgur.com/fImSobG.jpg	https://vignette.wikia.nocookie.net/gameofthrones/images/d/d4/Jon_Snow_family_tree_image.jpg/revision/latest/scale-to-width-down/100?cb=20160616211642
19	Viserys Targaryen	Targaryen	4	https://i.imgur.com/L3nCE3J.jpg?1	https://vignette.wikia.nocookie.net/gameofthrones/images/4/43/House-Targaryen-Main-Shield.PNG/revision/latest?cb=20170510235320
20	Daenerys Targaryen	Targaryen	2	https://i.imgur.com/VfvmBG6.png?1	https://vignette.wikia.nocookie.net/gameofthrones/images/4/43/House-Targaryen-Main-Shield.PNG/revision/latest?cb=20170510235320

1	Jamie Lannister	Lannister	4	https://i.imgur.com/dOXHUw2.png	https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Lannister-Main-Shield.PNG/revision/latest?cb=20170101095357
2	Tywin Lannister	Lannister	3	https://i.imgur.com/ccac2hc.png	https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Lannister-Main-Shield.PNG/revision/latest?cb=20170101095357
3	Podrick Payne	Payne	1	https://i.imgur.com/Jnc9cMV.png	https://i.imgur.com/xvSU8iY.png
8	Ned Stark	Stark	3	https://i.imgur.com/wOxYS3G.jpg?1	https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142
9	Benjen Stark	Stark	4	https://s-media-cache-ak0.pinimg.com/originals/37/41/64/3741648909fddb208111afca4f0bf95f.jpg	https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142
10	Lyanna Stark	Stark	4	https://vignette.wikia.nocookie.net/gameofthrones/images/b/b8/Lyanna_tree.jpg/revision/latest/scale-to-width-down/100?cb=20170831202744	https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142
11	Robb Stark	Stark	2	https://i.imgur.com/VbgX8Sa.png?1	https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142
12	Sanza Stark	Stark	3	https://i.imgur.com/7aBfvXd.png?1	https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142
13	Arya Stark	Stark	4	https://i.imgur.com/qhXhgXa.png?1	https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142
14	Brann Stark	Stark	3	https://i.imgur.com/8LgdC4q.jpg?1	https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142
15	Rickon Stark	Stark	4	https://vignette.wikia.nocookie.net/gameofthrones/images/1/10/Rickon_fam_tree.png/revision/latest?cb=20160622202016	https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142
16	Aemon Targaryen	Targaryen	4	https://i2.wp.com/consciouscat.net/wp-content/uploads/2013/04/old-cat.jpg?resize=500%2C333&ssl=1	https://vignette.wikia.nocookie.net/gameofthrones/images/4/43/House-Targaryen-Main-Shield.PNG/revision/latest?cb=20170510235320
17	Rhaegar Targaryen	Targaryen	4	http://www.catbreedslist.com/uploads/allimg/cat-pictures/Norwegian-Forest-Cat-1.jpg	https://vignette.wikia.nocookie.net/gameofthrones/images/4/43/House-Targaryen-Main-Shield.PNG/revision/latest?cb=20170510235320
18	Jon Snow	Targaryen	1	https://i.imgur.com/fImSobG.jpg	https://vignette.wikia.nocookie.net/gameofthrones/images/d/d4/Jon_Snow_family_tree_image.jpg/revision/latest/scale-to-width-down/100?cb=20160616211642
19	Viserys Targaryen	Targaryen	4	https://i.imgur.com/L3nCE3J.jpg?1	https://vignette.wikia.nocookie.net/gameofthrones/images/4/43/House-Targaryen-Main-Shield.PNG/revision/latest?cb=20170510235320
20	Daenerys Targaryen	Targaryen	2	https://i.imgur.com/VfvmBG6.png?1	https://vignette.wikia.nocookie.net/gameofthrones/images/4/43/House-Targaryen-Main-Shield.PNG/revision/latest?cb=20170510235320
21	Joffrey Baratheon	Lannister	2	https://vignette.wikia.nocookie.net/gameofthrones/images/8/85/Famtree-JoffreyBaratheon.png/revision/latest?cb=20170728074025	https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Lannister-Main-Shield.PNG/revision/latest?cb=20170101095357
22	Cersei Lannister	Lannister	3	https://vignette.wikia.nocookie.net/gameofthrones/images/c/cd/Cersei_family_tree.jpg/revision/latest?cb=20160714032714	https://vignette.wikia.nocookie.net/gameofthrones/images/3/38/House_Lannister.jpg/revision/latest?cb=20110409110354
23	Myrcella Baratheon	Lannister	1	https://vignette.wikia.nocookie.net/gameofthrones/images/c/ce/Mycella_Season_5_family_tree_pic.jpg/revision/latest/scale-to-width-down/100?cb=20150318192440	https://i.imgur.com/lgIk8mF.png
24	Tommen Baratheon	Lannister	2	https://vignette.wikia.nocookie.net/gameofthrones/images/1/19/Famtree-TommenBaratheon.png/revision/latest?cb=20170728073017	https://i.imgur.com/lgIk8mF.png
25	Margaery Tyrell	Tyrell	2	https://vignette.wikia.nocookie.net/gameofthrones/images/a/a2/Famtree-MargaeryTyrell.png/revision/latest?cb=20170728071238	https://vignette.wikia.nocookie.net/gameofthrones/images/c/cf/House-Tyrell-Main-Shield.PNG/revision/latest?cb=20170108163035
26	Lancel Lannister	Tyrell	1	https://vignette.wikia.nocookie.net/gameofthrones/images/8/81/Lancel_tree.jpg/revision/latest/scale-to-width-down/100?cb=20150416215303	https://i.imgur.com/lgIk8mF.png
27	Tyrion Lannister	Lannister	4	https://vignette.wikia.nocookie.net/gameofthrones/images/3/37/Tyrion-Lannister-Familytree-Pic.jpg/revision/latest/scale-to-width-down/100?cb=20170731072247	https://i.imgur.com/lgIk8mF.png
28	Robert Baratheon	Tyrell	1	https://vignette.wikia.nocookie.net/gameofthrones/images/8/83/Robert_tree.jpg/revision/latest/scale-to-width-down/100?cb=20130503050100	https://vignette.wikia.nocookie.net/gameofthrones/images/0/00/House-Baratheon-Main-Shield.PNG/revision/latest?cb=20170519002924
29	Renly Baratheon	Tyrell	2	https://vignette.wikia.nocookie.net/gameofthrones/images/d/d0/Famtree-RenlyBaratheon.png/revision/latest?cb=20170728072327	https://vignette.wikia.nocookie.net/gameofthrones/images/3/3d/House-Tyrell-heraldry.jpg/revision/latest/scale-to-width-down/100?cb=20140402122823
30	Olenna Trrell	Tyrell	3	https://vignette.wikia.nocookie.net/gameofthrones/images/1/1b/Famtree-OlennaTyrell.png/revision/latest?cb=20170728065839	https://vignette.wikia.nocookie.net/gameofthrones/images/3/3d/House-Tyrell-heraldry.jpg/revision/latest/scale-to-width-down/100?cb=20140402122823
31	Samwell Tully	Tyrell	3	https://vignette.wikia.nocookie.net/gameofthrones/images/e/e9/Sam_at_Winterfell.jpg/revision/latest?cb=20170903200558	https://vignette.wikia.nocookie.net/gameofthrones/images/2/2d/House-Tarly-Main-Shield.PNG/revision/latest?cb=20170809082143
32	Dickon Tarly	Other	1	https://vignette.wikia.nocookie.net/gameofthrones/images/7/77/Famtree-DickonTarly.png/revision/latest?cb=20170722075902	https://vignette.wikia.nocookie.net/gameofthrones/images/2/2d/House-Tarly-Main-Shield.PNG/revision/latest?cb=20170809082143
33	Randyll Tarly	Other	1	https://vignette.wikia.nocookie.net/gameofthrones/images/f/f1/Famtree-RandyllTarly.png/revision/latest?cb=20170729123228	https://vignette.wikia.nocookie.net/gameofthrones/images/f/f1/Famtree-RandyllTarly.png/revision/latest?cb=20170729123228
34	Aemon Targaryen	Tyrell	1	http://www.telegraph.co.uk/content/dam/tv/2017/06/20/aemon_trans_NvBQzQNjv4BqrXQPXGvM58CJoUBPwmOnPxU--41c5Cba04Sh5SZbNZ8.jpg?imwidth=1240	
35	Petyr Baelish	Other	2	http://www.telegraph.co.uk/content/dam/tv/2017/05/30/TELEMMGLPICT000099222130_trans_NvBQzQNjv4BqaRL1kC4G7DT9ZsZm6Pe3PehAFAI_f6ud569StXyOKH0.jpeg?imwidth=1240	
36	Stannis Baratheon	Tyrell	3	http://www.telegraph.co.uk/content/dam/tv/2016/04/13/Stannis-Baratheon-Profile_%283%29_trans_NvBQzQNjv4Bqa06iPFyyhE7bErjBwdAYUdooENgPU1ZL5KSuN_XWyIU.png?imwidth=1240	
37	Ramsay Bolton	Other	2	http://www.telegraph.co.uk/content/dam/tv/2016/06/28/ramsaybolton_trans_NvBQzQNjv4BqtGQB12KHxxQCrwnTZkX0nwgWqwm85JEWpGVhFb46TTg.jpg?imwidth=1240	
38	Roose Bolton	Other	2	http://www.telegraph.co.uk/content/dam/tv/2016/04/20/roose-bolton_2866199k_1_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg?imwidth=1240	
39	Brienne of Tarth	Other	4	http://www.telegraph.co.uk/content/dam/tv/2016/06/21/brienne_trans_NvBQzQNjv4BqZgEkZX3M936N5BQK4Va8RWtT0gK_6EfZT336f62EI5U.jpg?imwidth=1240	
40	Bronn	Other	3	http://www.telegraph.co.uk/content/dam/tv/2016/04/19/gotbronn_2915631b_trans_NvBQzQNjv4BqpJliwavx4coWFCaEkEsb3kvxIt-lGGWCWqwLa_RXJU8.jpg?imwidth=1240	
41	Gregor Clegane	Tyrell	1	http://www.telegraph.co.uk/content/dam/tv/2016/06/29/the-mountain-oberyn_trans_NvBQzQNjv4BqE33fIs64eBxy2Ueorj1JP-GyFgYfvIWvNT1eEV5al2s.jpg?imwidth=1240	
42	Sandor Clegane	Tyrell	4	http://www.telegraph.co.uk/content/dam/tv/2017/06/29/hound_trans_NvBQzQNjv4BqVJV-JfT_DtQRnEXeNs_zzgpuJ3vxTKaRT_QXBhUn_AE.jpg?imwidth=1240	
43	Khal Drogo	Other	3	http://www.telegraph.co.uk/content/dam/tv/2017/03/09/drogodany_trans_NvBQzQNjv4BqrFGXK9OCVstxiNnNkv1ERRcbcZiJmFiTldawvJxQ7f0.jpg?imwidth=1240	
44	Balon Greyjoy	Tyrell	2	https://vignette.wikia.nocookie.net/villains/images/3/38/Balon_Greyjoy.jpg/revision/latest?cb=20130823042437	
45	Euron Greyjoy	Tyrell	1	http://www.telegraph.co.uk/content/dam/tv/2017/06/22/TELEMMGLPICT000099220797_trans_NvBQzQNjv4BqaRL1kC4G7DT9ZsZm6Pe3PehAFAI_f6ud569StXyOKH0.jpeg?imwidth=1240	
46	Theon Greyjoy	Tyrell	3	http://www.telegraph.co.uk/content/dam/tv/2017/06/27/theon-greyjoy-1024_trans_NvBQzQNjv4BqtR1WRZ4lb6BOb1-FBRpn-lFGGjcI28awSNtOPAVs6pc.jpg?imwidth=1240	
47	Yara Greyjoy	Tyrell	2	http://www.telegraph.co.uk/content/dam/tv/2016/02/12/Yara.jp_trans_NvBQzQNjv4BqrpfQw2hJyG_yckwxPAr0glhTQ9DkUxBOTgW36yVKUzg.jpg?imwidth=1160	
48	Grey Worm	Other	3	http://www.telegraph.co.uk/content/dam/tv/2017/07/02/Grey-Worm_trans_NvBQzQNjv4BqUdzhVSO1dBnYosldNXMOeSOoem_3qpp9C-iKHR23jxY.jpg?imwidth=1160	
49	Gendry	Tyrell	1	http://www.telegraph.co.uk/content/dam/tv/2016/11/01/gendry_trans_NvBQzQNjv4Bq3U9-D5U2JffhMhmF-FT3htll37dHCK0gPMuItIkibFY.jpg?imwidth=1160	
50	Gilly	Other	2	http://www.telegraph.co.uk/content/dam/tv/2016/06/21/gilly_trans_NvBQzQNjv4BqaRL1kC4G7DT9ZsZm6Pe3PcyX7532Kw8fYJxQ4xmErYc.jpg?imwidth=1160	
51	Tormund Giantsbane	Other	3	http://www.telegraph.co.uk/content/dam/tv/2016/05/13/97849982-GOTKiristofer_Hivju_as_Tormund-TV_trans_NvBQzQNjv4BqtGQB12KHxxQCrwnTZkX0n-WaI4YJg2cQ7YeMgThz0T0.jpg?imwidth=1160	
52	Jaqen H’ghar	Other	1	https://vignette.wikia.nocookie.net/gameofthrones/images/d/da/The_Door_Jaqen_infobox.jpg/revision/latest?cb=20160808073200	
53	High Sparrow	Other	1	http://www.telegraph.co.uk/content/dam/tv/2016/06/28/highsparrow_trans_NvBQzQNjv4Bq3Z7i_2nUjuO-XXgVmfiyhE-7TSv0ccWfuBYKmj9tsZ4.jpg?imwidth=1160	
54	Hodor	Other	1	http://www.telegraph.co.uk/content/dam/tv/2016/04/15/hodor_trans_NvBQzQNjv4BqNUHzxaamNmHDqK-YksWRz2o-yMLyYquKCawpyDOW254.jpg?imwidth=1160	
55	Hot Pie	Other	1	https://static1.squarespace.com/static/52fc05c9e4b08fc45bd99090/t/53889d8ae4b0319a6323d41d/1401462156549/?format=750w	
56	Oberyn Martell	Other	1	https://upload.wikimedia.org/wikipedia/en/a/ac/Oberyn_Martell-Pedro_Pascal.jpg	
57	Melisandre	Other	1	http://www.telegraph.co.uk/content/dam/tv/2016/04/25/melisandre_trans_NvBQzQNjv4BqutubNGxeqbD0m2XylzINLiOoem_3qpp9C-iKHR23jxY.jpg?imwidth=1160	
58	Jorah Mormont	Other	1	https://cdn.images.express.co.uk/img/dynamic/20/590x/secondary/Ser-Jorah-Mormont-888676.jpg	
59	Qyburn	Other	1	http://www.telegraph.co.uk/content/dam/tv/2016/06/29/qyburn_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg?imwidth=1160	
60	Meera Reed	Other	1	http://www.telegraph.co.uk/content/dam/tv/2016/04/30/meera-large_trans%2B%2BrpfQw2hJyG_yckwxPAr0gqsW2GA9nAM4IFtGNFTInME_trans_NvBQzQNjv4Bq2oUEflmHZZHjcYuvN_Gr-bVmXC2g6irFbtWDjolSHWg.jpg?imwidth=1160	
61	Ellaria Sand	Other	1	http://www.telegraph.co.uk/content/dam/tv/2017/06/27/ellaria-sand-1920_trans_NvBQzQNjv4BqNJjoeBT78QIaYdkJdEY4CnGTJFJS74MYhNY6w3GNbO8.jpg?imwidth=1160	
62	Davos Seaworth	Other	4	http://www.telegraph.co.uk/content/dam/tv/2016/07/04/95346217-got-davos_trans_NvBQzQNjv4Bqeo_i_u9APj8RuoebjoAHt0k9u7HhRJvuo-ZLenGRumA.jpg?imwidth=1160	
63	Shae	Other	1	http://www.telegraph.co.uk/content/dam/tv/2017/07/02/shae_finale_trans_NvBQzQNjv4BqLyQuLaWi53vasyfRaiyWAVQYArzCZkfUqg3bUYglOXQ.jpg?imwidth=1160	
64	Bran Stark	Stark	1	https://www.thesun.co.uk/wp-content/uploads/2017/09/nintchdbpict000228686557.jpg?strip=all&w=960	
65	Catelyn Stark	Tyrell	1	http://www.telegraph.co.uk/content/dam/tv/2016/05/25/catelyn_trans_NvBQzQNjv4BqA7N2CxnJWnYI3tCbVBgu9TWU-KwRaHvlaJXY1texVLQ.jpg?imwidth=1160	
66	Talisa Stark	Other	1	http://www.telegraph.co.uk/content/dam/tv/2017/07/02/talisa-stark-1024_trans_NvBQzQNjv4BqtR1WRZ4lb6BOb1-FBRpn-lFGGjcI28awSNtOPAVs6pc.jpg?imwidth=1160	
67	Varys	Other	4	http://www.telegraph.co.uk/content/dam/tv/2016/04/20/LordVarys_57883932_GAME_OF_T_3263431b_trans_NvBQzQNjv4BqpJliwavx4coWFCaEkEsb3kvxIt-lGGWCWqwLa_RXJU8.jpg?imwidth=1160	
68	Ygritte	Other	1	http://www.telegraph.co.uk/content/dam/tv/2016/04/20/Ygritte_Promotional_trans_NvBQzQNjv4BqpiVx42joSuAkZ0bE9ijUnGH28ZiNHzwg9svuZLxrn1U.jpg?imwidth=1160	