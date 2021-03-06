const events = [
  {
    title: 'Marilyn Minter: Pretty/Dirty',
    LocationId:1,
    opening: '2016-11-04',
    closing: '2017-04-02',
    price: 'Suggested $16',
    featuredArtist: 'Marilyn Minter',
    description: 'Marilyn Minter’s sensual paintings, photographs, and videos vividly explore complex and contradictory emotions around beauty and the feminine body in American culture. She trains a critical eye on the power of desire, questioning the fashion industry’s commercialization of sex and the body. Marilyn Minter: Pretty/Dirty is the first retrospective of her work.',
    UserId: 2
  },
  {
    title: 'Ken Weathersby: Time after Time',
    LocationId:2,
    opening: '2017-01-07',
    closing: '2017-02-25',
    price: 'Free',
    featuredArtist: 'Ken Weathersby',
    description: 'Ken Weathersby makes abstract paintings that play with and against the conventions of both painting and abstraction. His new paintings combine graphic geometric patterns with representational, printed images of art works cut out of discarded art history books. The images Weathersby employs often depict a sculpture of a single human or animal figure and stem primarily from the periods of ancient Greece, Rome, and medieval Europe.',
    UserId:1
  },
  {
    title: 'Comme des Garcons: Art of the In-Between',
    LocationId:3,
    opening: '2017-05-04',
    closing: '2017-09-04',
    price: 'Suggested $25',
    featuredArtist: 'Rei Kawakubo',
    description: 'The Costume Institute\'s spring 2017 exhibition will examine the work of Japanese fashion designer Rei Kawakubo, known for her avant-garde designs and ability to challenge conventional notions of beauty, good taste, and fashionability. The thematic show will feature approximately 120 examples of Kawakubo\'s womenswear for Comme des Garçons, from her first Paris runway show in 1981 to her most recent collection.',
    UserId:1
  },
  {
    title: 'Ghazel: Mismappings',
    LocationId: 4,
    opening: '2017-02-14',
    closing: '2017-04-07',
    price: 'Free',
    featuredArtist: 'Ghazel',
    description: 'A presentation of work by Ghazel, Mismappings is the artist’s first solo exhibition in the United States. Since her 2001 ISCP residency, Ghazel has lived in both Paris and Tehran. The exhibition focuses on Ghazel’s recent Marée Noire and Dyslexiaseries—drawings with ink on printed Farsi maps—that evoke the politics of representation on a geopolitical scale in an era of ongoing ecological and migratory crises.',
    UserId:1
  },
  {
    title: 'Secrets of Leaves',
    LocationId:5,
    opening: '2017-02-04',
    closing: '2017-03-19',
    price: 'Free',
    featuredArtist: 'Adrienne Elise Tarver',
    description: 'Secrets of Leaves, consists of caulking paintings on wire mesh and sculptures of varying scale, affixed to the gallery walls and hung from the ceiling throughout the space. The walls will be painted with flora motifs, interspersed with leaf sculptures protruding at various intervals creating the sense of not only viewing a jungle, but being in one.',
    UserId:1
  },
  {
    title: 'Making Faces: Images of Exploitation and Empowerment in Cinema',
    LocationId:6,
    opening: '2017-02-04',
    closing: '2017-04-30',
    price: '$25',
    featuredArtist: 'Features 38 artists',
    description: 'Making Faces is a study of screen characters and the performers who embodied them. Focusing on popular American films from the 1910s to the 1970s—from the era of silent movies to that of blaxploitation—this exhibition traces the attempts of commercial film studios to depict difference onscreen. Drawn from MoMA’s extensive collection of film stills, Making Faces presents images that Hollywood studios used to sell their vision—how they thought people should look, dress, and behave—to audiences. Explicitly created for distribution to newspapers, magazines, and other media outlets to advertise upcoming releases, film stills are highly constructed images that functioned as templates for these Hollywood ideals. Rather than simply highlighting major stars in iconic roles, Making Faces focuses on Hollywood’s portrayals of “outsiders” in films, and the various—sometimes contentious—ways in which race and gender were represented onscreen. The selected images showcase performers who rebelled against the accepted cultural norms of the time as well as those who found ways to work within a system that exploited them.',
    UserId:1
  },
  {
    title: 'Jackson Pollock: Exploring Alchemy',
    LocationId:7,
    opening: '2017-02-10',
    closing: '2017-09-06',
    price: '$15',
    featuredArtist: 'Jackson Pollock',
    description: 'Jackson Pollock’s Alchemy (1947), a celebrated icon of postwar abstraction that Peggy Guggenheim acquired through her financial support of the artist, is on view for the first time in the United States since 1969. A team of conservators from the Guggenheim and Italian organizations has completed scientific analysis and treatment of the painting in Florence. In the Sackler Center for Arts Education, video footage and interactive kiosks display three-dimensional imaging, elemental mapping, x-radiography, and non-destructive analytical techniques to identify the painting’s pigments and binders. This didactic exhibition on one of Pollock’s earliest poured paintings draws visitors into the world of an art conservator, allowing them to comprehend the physical properties of the materials the artist used to create Alchemy and how he applied them to the canvas.',
    UserId:2
  },
  {
    title: 'Nectar: War Upon The Bees',
    LocationId:8,
    opening: '2016-12-09',
    closing: '2017-02-11',
    price: 'Free',
    featuredArtist: 'Features 10 artists',
    description: 'Pratt Manhattan Gallery presents Nectar: War Upon the Bees, a visual essay centered on the way that disregard for bees and the “faster, bigger, cheaper” approach to modern food production is leading to severe consequences for human survival. Through various artistic mediums, the work of nine artists speaks to the way that bees are representative of today’s growing environmental threats and creates a rich compilation of imagery that evokes an important and socially engaged mission.',
    UserId:2
  },
  {
    title: 'War x Artifice',
    LocationId:9,
    opening: '2017-02-04',
    closing: '2017-03-02',
    price: 'Free',
    featuredArtist: 'Riccardo Vecchio',
    description: 'For this exhibition, Vecchio called upon the 100 year anniversary of World War I to explore the relationship between war and the artifice of nation-state building and the creation of borders on the landscape of the Italian Dolomites. He explored the typography and transformation of this former battlefront along the former borders between the reign of Italy and the Austro-Hungarian Empire, creating plein-air paintings and drawings of the starkly elegant yet unnatural forms in ice and rock that were the result of scarred mountain peaks and bomb craters blown up 100 years ago.',
    UserId:2
  },
  {
    title: 'Bill Jacklin 1986-2016',
    LocationId:13,
    opening: '2017-02-08',
    closing: '2017-03-04',
    price: 'Free',
    featuredArtist: 'Bill Jacklin',
    description: 'The Directors of Marlborough Gallery are pleased to announce the opening of an exhibition of work by Bill Jacklin on Wednesday, February 8th, with a reception from 6:00 – 8:00 pm. The exhibition will continue through March 4th. Bill Jacklin: 1986 – 2016 spans thirty years of the artist’s work painted in locations from New York and London, to the Italian city of Florence. The exhibition is comprised of 21 paintings, all of which explore space and light, people and places ranging from the darker and more precisely rendered Meatpackers NYC II (1986) to the dream-like Embrace: Grand Central III (2016). One of the constants in Jacklin’s long career has been his frequent play with dualities: in addition to light and shadow, there is order and chaos, energy stored versus energy being released, and most important of all, representation and abstraction. As writer Eric Bryant observes in the exhibition catalogue, “Viewers who search out a wider array of Jacklin’s work, or simply look more closely at these paintings will soon see the lineup of distinct styles dissolve into an intertwined network of borrowed and reworked elements.”',
    UserId:2
  },
  {
    title: 'L.C. Armstrong: Signals at Sunset',
    LocationId:13,
    opening: '2017-02-08',
    closing: '2017-03-04',
    price: 'Free',
    featuredArtist: 'L.C. Armstrong',
    description: 'The Directors of Marlborough Gallery are pleased to announce that Signals at Sunset, an exhibition of new work by L.C. Armstrong, will open on Wednesday February 8th, with a reception from 6 – 8 pm. The exhibition will continue through March 4th. Comprised of twelve paintings and two works in neon Signals at Sunset continues Armstrong’s explorations of the surreal and the hyperreal. Expanding upon the language of Magic Realism these flowerscapes, a term coined by writer Luanne McKinnon, depict bright, intensely detailed flowers over maximalist landscapes both real and imagined.',
    UserId:2
  },
  {
    title: 'Gareth Mason: Unruly Behavior',
    LocationId:14,
    opening: '2017-02-09',
    closing: '2017-03-04',
    price: 'Free',
    featuredArtist: 'Gareth Mason',
    description: 'Jason Jacques Gallery is pleased to present a new exhibition of ceramic works by British potter Gareth Mason. The opening reception will be on Thursday, February 9, 2017 from 6pm to 9pm. In addition to featuring a selection of unique vessels from the Jason Jacques Gallery collection, the show will revolve around six new works made during his residency in Jingdezhen, China - the “world capital of porcelain”. Gareth Mason spent three months at the Jingdezhen International Studio, from October to December 2016. Made of porcelain and decorated with red iron clay, glass, oxides, and various layers of glaze, these large-scale pieces reflect the influence of Chinese pottery on the England-based artist, both visually and technically. The result is a deconstructed explosion of shapes and textures that challenge art pottery conventions.',
    UserId:2
  },
  {
    title: 'Robert Kushner: Portraits & Perennials',
    LocationId:15,
    opening: '2017-02-09',
    closing: '2017-03-11',
    price: 'Free',
    featuredArtist: 'Robert Kushner',
    description: 'DC Moore Gallery is pleased to present Robert Kushner: Portraits & Perennials. The opening reception will be held on Thursday, February 9, 2017 from 6pm to 8pm. In this exhibition of new paintings and works on paper, Kushner extends the boundaries of his compositions, infusing his iconic, organic imagery with vibrant color and increased geometric precision in a lyrical synthesis of styles and techniques.',
    UserId:3
  },
  {
    title: 'Dan Christensen: Late Calligraphic Stain Paintings',
    LocationId:16,
    opening: '2017-02-09',
    closing: '2017-03-11',
    price: 'Free',
    featuredArtist: 'Dan Christensen',
    description: 'Berry Campbell is pleased to announce an exhibition of paintings by Dan Christensen (1942-2007). The exhibition, featuring nineteen paintings from his “Late Calligraphic Stain” period, opens on February 9, 2017 and runs through March 11, 2017 with an opening reception on Thursday, February 9 from 6 to 8 pm. During his forty-year career, Dan Christensen employed a painting method involving a considerable amount of improvisation and experimentation. However, his work had a logical and systematic evolution. Using the visual language of abstraction—from Abstract Expressionism through Color Field Painting and Minimalism—he pursued particular lines of inquiry until he felt he had exhausted them. He then changed the variables of his art to move in new directions. Yet, in doing so, he often doubled back, revisiting aspects of his earlier work to rework old themes and create new combinations. Like many artists before him—Picasso and Pollock come to mind—through such recycling, he gave layered resonance to his art.',
    UserId: 7
  },
  {
    title: 'Steppenwolf',
    LocationId:17,
    opening: '2017-02-09',
    closing: '2017-04-16',
    price: 'Free',
    featuredArtist: 'Aleksandar Duravcevic',
    description: 'The opening reception will be held on Thursday, February 9, 2017 from 6:30pm to 8:30pm. Steppenwolf trips through the halls of Aleksandar Duravcevic’s memory palace, crossing lunar creatures with phantom youth, cold flames, mythological animals, warrior cults, monuments to heroes, flatlands, magic mountains and mirrors. If time is immaterial, subjective and spiritual, then, Duravcevic asks: does time exist only in one’s soul? The “wolf trots to and fro”2 pacing his homeland in his dreams. Longing for his birthplace has driven him to madness. But his birthplace is no longer. For death’s sake, everything has changed. The place we once belonged to, like Eden, has disappeared and we are all refugees. Our warriors have been silenced; our monuments, from marble, have changed to light. Without memory, all is time-less, place-less, name-less and home-less. Duravcevic’s time is a nomadic ghost ship constructed of phantom limbs and memory devices sailing between Illyrian coasts. It is a journey littered with vestiges of empires – Austro-Hungarian, Holy Roman, Catholic, Communist or otherwise – an odyssey through a desolate, chimerical steppe.',
    UserId:3
  },
   {
    title: 'Vija Celmins',
    LocationId:18,
    opening: '2017-02-10',
    closing: '2017-04-15',
    price: 'Free',
    featuredArtist: 'Vija Celmins',
    description: 'The opening reception will be held on Friday, February 10, 2017 from 6pm to 8pm. Matthew Marks is pleased to announce Vija Celmins, the next exhibition in his gallery at 522 West 22nd Street. It is the artist’s first exhibition of new work in seven years and includes over thirty new paintings, sculptures, drawings, and prints. This is her first one-person show with Matthew Marks Gallery. Celmins has been rendering nature imagery from black and white photographic sources since the 1960s, exploring the same subjects repeatedly in paintings, drawings, and prints. For this exhibition, she focuses on two motifs she has employed for several decades: the ocean’s surface and the night sky.',
    UserId:3
  },
  {
    title: 'Michel Majerus Aluminum Paintings',
    LocationId:18,
    opening: '2017-02-10',
    closing: '2017-04-15',
    price: 'Free',
    featuredArtist: 'Michel Majerus',
    description: 'The opening reception will be held on Friday, February 10, 2017 from 6pm to 8pm. Matthew Marks is pleased to announce Michel Majerus Aluminum Paintings, the next exhibition in his gallery at 523 West 24th Street. The exhibition features thirteen works from 1996 and 2000, each painted on an aluminum panel approximately four by eight feet in size. Majerus, who died in plane crash in 2002 at age thirty-five, was one of the earliest painters to address how digital technology is changing the visible world, and was perhaps the first to prepare his imagery using Photoshop. Until 1996 he transferred this sampled and layered imagery onto canvas by hand. With these paintings, however, he began screen-printing it directly into the composition, a leap that would irrevocably change the course of his work.',
    UserId:3
  },
  {
    title: 'NO EXIT',
    LocationId:19,
    opening: '2017-02-11',
    closing: '2017-04-15',
    price: 'Free',
    featuredArtist: 'Carl Andre, Helmut Federle, Alberto Giacometti, Vilhelm Hammershøi, Yves Klein, Yayoi Kusama, Agnes Martin, Blinky Palermo, Jackson Pollock, Mark Rothko, Jan Schoonhoven, Sonja Sekula',
    description: 'Peter Blum is pleased to announce NO EXIT, on view at 20 West 57th Street, New York. There will be a special early preview on Saturday, February 11, from 2 to 5 pm. What we seldom talk about in art is the desperation informing much of it, not because the artists are good at disguising it, but because we seem to not want to see what is in front of our eyes. Even in the works that might initially strike the viewer as beautifully ordered, one need only look a little longer to see how hard the artist has worked to present his or her anxiety as a moment of sublime calm. The purpose of this exhibition is to raise questions about the relationship between objectivity and subjectivity, time and timelessness.',
    UserId:3
  },
  {
    title: 'Tam Van Tran',
    LocationId: 20,
    opening: '2017-02-16',
    closing: '2017-03-18',
    price: 'Free',
    featuredArtist: 'Tam Van Tran',
    description: 'Tam Van Tran’s work was featured in the 2004 Whitney Biennial, Whitney Museum of American Art, New York, NY. He has had numerous solo exhibitions, which include Museum of Contemporary Art Santa Barbara, Santa Barbara, CA; “Breathing,” Long Beach City College Art Gallery, Long Beach, CA; “Adornment of Basic Space,” Susanne Vielmetter Los Angeles Projects, Los Angeles, CA; “Mind is a Pure Expanse of Space,” Anthony Meier Fine Arts, San Francisco, CA; “Luminosity,” Cohan and Leslie, New York, NY; “Tam Van Tran: Psychonaut,” Blaffer Gallery, The Art Museum of the University of Houston, Houston, TX; and an exhibition at the Knoxville Museum of Art, Knoxville, TN.',
    UserId:4
  },
  {
    title: 'Tracy Miller',
    LocationId:20,
    opening: '2017-02-16',
    closing: '2017-03-18',
    price: 'Free',
    featuredArtist: 'Tracy Miller',
    description: 'TRACY MILLER (b. 1966 in Storm Lake, IA) received her Bachelor of Fine Arts degree in 1989 from The University of Iowa, Iowa City, IA, and received her Master of Fine Arts degree in 1993 from The University of California at Berkeley, Berkeley, CA. Miller also spent 1992 studying at the Skowhegan School of Painting and Sculpture in Skowhegan, ME. Her still life paintings have been included in numerous solo and group exhibitions which include the American University Museum, Washington DC, Feature Inc., New York, NY, Hampden Gallery, University of Massachusetts, Amherst, MA, Work Gallery, University of Michigan, Ann Arbor, MI, Islip Art Museum, East Islip, NY and The University Art Museum, UC Berkeley, Berkeley, CA.',
    UserId:4
  },
  {
    title: 'Annabeth Rosen: Tie Me to the Mast',
    LocationId:21,
    opening: '2017-02-16',
    closing: '2017-03-25',
    price: 'Free',
    featuredArtist: 'Annabeth Rosen',
    description: 'P.P.O.W is pleased to present Tie Me to the Mast, a solo exhibition by Annabeth Rosen, a distinguished sculptor in the community of West Coast ceramicists. Her work explores the fundamental properties of ceramics by directly confronting the aesthetic and chemical relationships between sculptural form and painterly surface. Rosen’s formally intuitive process is enabled by a complex understanding of historical conventions, composite materials, and chemical properties, placing her work in the tradition of experimental ceramicists including Peter Voulkos, Betty Woodman, Linda Benglis, and Martin Puryear.',
    UserId:4
  },
   {
    title: 'Construction and Contemplation: Noa Charuvi, Li Gang',
    LocationId:22,
    opening: '2017-02-16',
    closing: '2017-03-31',
    price: 'Free',
    featuredArtist: 'Noa Charuvi, Li Gang',
    description: 'On February 16, the Art100 will open its second exhibition: “Construction and Contemplation” featuring two remarkable painters who have developed individuated, contemporary means of expressiveness that grow from distinct classical foundations: the Israeli artist Noa Charuvi , and Chinese artist Li Gang. Noa Charuvi’s work has its antecedents in landscape painting, but the paintings themselves reflect a special focus on her surroundings, and a very particular handling of color and composition. Li Gang’s work is rooted in Chinese ink painting, one of the world’s oldest continuous art forms. Li’s work evidences the precise motion and change and the “spirit resonance”- the flow of energy between artist, brush and paper - that are among ink painting’s basic principles.',
    UserId:4
  },
  {
    title: 'Hassan Massoudy: Words, Breath, Gesture',
    LocationId:23,
    opening: '2017-02-23',
    closing: '2017-03-25',
    price: 'Free',
    featuredArtist: 'Hassan Massoudy',
    description: 'Sundaram Tagore Chelsea is pleased to present the first New York solo exhibition of work by Hassan Massoudy, a celebrated Iraqi-born artist based in Paris. Classically trained in calligraphy, Massoudy inscribes oversized letters in vibrant color to create visually striking works which usher traditional Arabic script into a contemporary context. This exhibition features more than twenty-five works on paper alongside notable paintings on canvas. The opening reception will be held on Thursday, February 23, 2017 from 6pm to 8pm.',
    UserId:4
  },
  {
    title: 'Bertrand Meniel: Street Views',
    LocationId:24,
    opening: '2017-02-28',
    closing: '2017-04-01',
    price: 'Free',
    featuredArtist: 'Bertrand Meniel',
    description: 'Bertrand Meniel (b. 1961, Boulogne Billancourt, France) has embraced digital photographic technology perhaps more so than any other Photorealist. The compositions of his paintings are assembled from multiple photographs and incorporate a tremendous amount of detail. Despite working in fast-drying acrylics, Meniel is able to incorporate more information into each of his paintings than any other Photorealist to date. From a technical standpoint, he is unsurpassed. Meniel’s premiere exhibition in the United States was held at the Louis K. Meisel Gallery in 1999, and he continues to exhibit his paintings internationally; he is a self-taught artist. The opening reception will be held on Friday, March 3, 2017 from 6pm to 8pm.',
    UserId:4
  },
  {
    title: 'Barbara Earl Thomas: The Blood Catcher and Other Stories',
    LocationId:25,
    opening: '2017-03-02',
    closing: '2017-04-08',
    price: 'Free',
    featuredArtist: 'Barbara Earl Thomas',
    description: 'In Barbara Earl Thomas’ works of art, we are treated to a chaotic dream world, cross pollinated with fragments of bible stories, folklore and superstition brought forth from the artist’s ‘deep south’ childhood. Her personal history and current social narrative harmoniously coexist in these visual anthologies; there is never a single thread of delineation for the artist, as there a proliferation of concurrence in the world we all inhabit together. As Thomas’s grandmother often told her, we are all damned and redeemed every day. “Even if we cannot see it, there are amazing things going on around us at every moment” she says. The opening reception will be held on Thursday, March 2, 2017 from 7pm to 10pm.',
    UserId:5
  },
  {
    title: 'Between Blossoms',
    LocationId:26,
    opening: '2017-03-02',
    closing: '2017-04-22',
    price: 'Free',
    featuredArtist: 'Shen Wei',
    description: 'In his new photographic series Between Blossoms, New York-based Chinese photographer Shen Wei has taken a meditative journey across continents, from the United States to Europe and Asia. His seductive photographs capture a unifying sense of other-worldliness within the changing landscape, generating an abstracted sensation of place that he describes as “deeply connected to my inner melancholy, a dream-like state of mind.” The opening reception will be held on Thursday, March 2, 2017 from 6pm to 8pm.',
    UserId:5
  },
  {
    title: 'Alex Kanevsky: Some Paintings In No Particular Order',
    LocationId:27,
    opening: '2017-03-09',
    closing: '2017-04-08',
    price: 'Free',
    featuredArtist: 'Alex Kanevsky',
    description: 'Alex Kanevsky’s new works offer glimpses into exquisitely rendered spaces and hauntingly strange narratives. Their beautifully handled surfaces raise more questions than they answer, leaving ample room for interpretation. With these works, Kanevsky makes experimental forays into new stylistic territory but remains true to his signature focus on the figure in space.',
    UserId:5
  },
  {
    title: 'Siona Benjamin: Beyond Borders',
    LocationId:28,
    opening: '2017-03-09',
    closing: '2017-04-22',
    price: 'Free',
    featuredArtist: 'Siona Benjamin',
    description: 'Siona Benjamin’s first exhibition at ACA Galleries will feature her recent work from the Exodus Series. Currently on her second Fulbright Fellowship in Israel, her new work will be the subject of this show. Catalogue available. Born in Mumbai, India, Siona Benjamin grew up in a Jewish community among a complex montage of Eastern and Western religions. Informed by the world around her Siona Benjamin’s work is transcultural and transnational.',
    UserId:5
  },
  {
    title: 'Jane Hammond: Search Light',
    LocationId:29,
    opening: '2017-03-16',
    closing: '2017-04-22',
    price: 'Free',
    featuredArtist: 'Jane Hammond',
    description: 'Wit, meticulous craft, and surprising juxtapositions of meaning are hallmarks in the paintings, photographs, and mixed media works by Jane Hammond. Hammond incorporates an encyclopedic collection of images—from the past and present, history and fiction—to explore the fluidity of meaning as images shift, a process she has referred to as “recombinant DNA.” As Hammond’s work recontextualizes her found images through the marriage of the image and the materials, the question of what is fact and what is fiction crosses the viewer, and a new narrative is generated. Although each artistic technique of Hammond’s is varied, the work is unified through her ability to make each image something entirely new.',
    UserId:5
  },
  {
    title: 'A Room Behind a Room: Recent Trends in Video Art',
    LocationId:30,
    opening: '2017-02-12',
    closing: '2017-03-19',
    price: 'Free',
    featuredArtist: 'Alona Weiss, Ingrid Zhuang, Jung Hee Mun, Sarah Lasley',
    description: 'A Room Behind A Room: these windowless spaces or theaters which have for a century been portals to an expansive real world beyond or behind the room.  But now such portals lead us elsewhere. The ease in making motion graphics and visual effects allows many artists to move into realms of total fantasy circumventing the camera as a recording device, mixing animation with documentary footage. Even glossy images from mainstream media can be refit to poke holes at the stable and conventional images of the characters they seem to portray. The four film and video artists in this exhibition all explore the ways our sense of sight — and our bodies — have swerved in this new media environment. Opening reception is held on Sunday, February 12, 2017 from 6pm to 8pm.',
    UserId: 7
  },
  {
    title: 'Martin Scorsese',
    LocationId:31,
    opening: '2016-12-11',
    closing: '2017-04-23',
    price: '$15',
    featuredArtist: 'Martin Scorsese',
    description: 'Martin Scorsese is the iconic American film director. His wide-ranging body of work is at once distinctly personal and rooted in a profound understanding of the art and history of cinema. He is also a consummate New Yorker, and his movies capture the intensity and energy of his home city. Martin Scorsese, the first major exhibition about the director’s deeply intertwined career and life, explores Scorsese’s remarkable half-century of filmmaking within the context of his personal history and his love of cinema. Drawing extensively from Scorsese’s own collection, the exhibition includes production material from his key films, objects from his childhood, behind-the-scenes images, and large-scale projections of scenes from his work. It is organized thematically: Family, Brothers, Men and Women, Lonely Heroes, New York, Cinephile, Cinematography, Editing, and Music.',
    UserId: 6
  },
  {
    title: 'Joan Cornellà: Unsettled',
    LocationId: 32,
    opening: '2017-02-22',
    closing: '2017-03-06',
    price: 'Free',
    featuredArtist: 'Joan Cornellà',
    description: "Joan Cornellà Vázquez (born 11 January 1981, Barcelona) is a cartoonist and illustrator famous for his unsettling, surreal humor and black humorous comic strips as well as artwork. Cornellà’s work has often been described as disturbing or flat-out offensive. Through simplistic visual language, he is able to use satire to comment on the sinister and often bleak side of human nature through a myriad of unconventional scenarios. Everything from our unnatural connection to social media and masturbatory selfie culture to political topics such as abortion, addiction and gender issues - no subject is off limits. Cornellà’s work revels in its absurdity and impropriety.",
    UserId: 8
  }
];

module.exports = events;
