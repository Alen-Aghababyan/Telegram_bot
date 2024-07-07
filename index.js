const TelegramBot = require('node-telegram-bot-api')
const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const token = process.env.TOKEN

const bot = new TelegramBot(token, { polling: true })

class Book {
  constructor({ title, author, genres, pub_year, summary }) {
    this.title = title;
    this.author = author;
    this.genres = genres;
    this.pub_year = pub_year;
    this.summary = summary;
  }

  getBookInfo() {
    return `📖 Title: ${this.title}\n\n` +
      `✍️ Author: ${this.author}\n\n` +
      `🔖 Genre: ${this.genres}\n\n` +
      `📅 Publication Year: ${this.pub_year}\n\n` +
      `📝 Summary: ${this.summary}`;
  }
}


const book1 = new Book(
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genres: ["Fantasy"],
    pub_year: 1937,
    summary: "Bilbo Baggins embarks on an unexpected journey to reclaim a treasure guarded by the dragon Smaug."
  }
);

const book2 = new Book({
  title: "Harry Potter and the Sorcerer's Stone",
  author: "J.K. Rowling",
  genres: ["Fantasy"],
  pub_year: 1997,
  summary: "A young boy discovers he is a wizard and attends Hogwarts School of Witchcraft and Wizardry."
});

const book3 = new Book({
  title: "A Game of Thrones",
  author: "George R.R. Martin",
  genres: ["Fantasy"],
  pub_year: 1996,
  summary: "Noble families vie for control of the Iron Throne in the land of Westeros."
});

const book4 = new Book({
  title: "The Name of the Wind",
  author: "Patrick Rothfuss",
  genres: ["Fantasy"],
  pub_year: 2007,
  summary: "Kvothe, a legendary figure, recounts his life story from a gifted young student to a notorious magician."
});

const book5 = new Book({
  title: "Mistborn: The Final Empire",
  author: "Brandon Sanderson",
  genres: ["Fantasy"],
  pub_year: 2006,
  summary: "A young street urchin discovers she has powerful abilities that could change the world."
});

const book6 = new Book({
  title: "The Lies of Locke Lamora",
  author: "Scott Lynch",
  genres: ["Fantasy"],
  pub_year: 2006,
  summary: "A skilled thief and con artist leads his gang through daring heists in the city of Camorr."
});

const book7 = new Book({
  title: "The Way of Kings",
  author: "Brandon Sanderson",
  genres: ["Fantasy"],
  pub_year: 2010,
  summary: "In a world torn by storms and war, a soldier, a scholar, and a prince embark on separate paths."
});

const book8 = new Book({
  title: "The Priory of the Orange Tree",
  author: "Samantha Shannon",
  genres: ["Fantasy"],
  pub_year: 2019,
  summary: "A world divided by ancient enemies faces a new threat as a dragon queen rises."
});

const book9 = new Book({
  title: "The Night Circus",
  author: "Erin Morgenstern",
  genres: ["Fantasy"],
  pub_year: 2011,
  summary: "Celia and Marco, two young illusionists, are bound in a magical competition within a mysterious circus."
});

const book10 = new Book({
  title: "Jonathan Strange & Mr Norrell",
  author: "Susanna Clarke",
  genres: ["Fantasy"],
  pub_year: 2004,
  summary: "In an alternate 19th-century England, two magicians revive English magic and confront a mysterious prophecy."
});

const book11 = new Book({
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  genres: ["Fiction"],
  pub_year: 1960,
  summary: "Scout Finch and her brother Jem learn valuable lessons about justice and empathy from their father Atticus."
});

const book12 = new Book({
  title: "1984",
  author: "George Orwell",
  genres: ["Fiction"],
  pub_year: 1949,
  summary: "A dystopian novel set in a totalitarian society ruled by Big Brother."
});

const book13 = new Book({
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  genres: ["Fiction"],
  pub_year: 1925,
  summary: "The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan."
});

const book14 = new Book({
  title: "Pride and Prejudice",
  author: "Jane Austen",
  genres: ["Fiction"],
  pub_year: 1813,
  summary: "Elizabeth Bennet navigates issues of manners, upbringing, morality, and marriage in early 19th-century England."
});

const book15 = new Book({
  title: "The Catcher in the Rye",
  author: "J.D. Salinger",
  genres: ["Fiction"],
  pub_year: 1951,
  summary: "Holden Caulfield, a teenager from New York City, recounts his experiences after being expelled from prep school."
});

const book16 = new Book({
  title: "The Road",
  author: "Cormac McCarthy",
  genres: ["Fiction"],
  pub_year: 2006,
  summary: "A father and son journey through a post-apocalyptic landscape, struggling to survive."
});

const book17 = new Book({
  title: "Life of Pi",
  author: "Yann Martel",
  genres: ["Fiction"],
  pub_year: 2001,
  summary: "Pi Patel survives a shipwreck and shares a lifeboat with a Bengal tiger, leading to an extraordinary tale of survival."
});

const book18 = new Book({
  title: "The Kite Runner",
  author: "Khaled Hosseini",
  genres: ["Fiction"],
  pub_year: 2003,
  summary: "A story of friendship and redemption, set against the backdrop of a changing Afghanistan."
});

const book19 = new Book({
  title: "The Goldfinch",
  author: "Donna Tartt",
  genres: ["Fiction"],
  pub_year: 2013,
  summary: "Theo Decker's life is shattered by an explosion at an art museum, leading him on a journey through loss, crime, and obsession."
});

const book20 = new Book({
  title: "A Little Life",
  author: "Hanya Yanagihara",
  genres: ["Fiction"],
  pub_year: 2015,
  summary: "Four college friends navigate the complexities of life and the enduring impact of trauma, centering on the enigmatic Jude St. Francis."
});

const book21 = new Book({
  title: "Sapiens: A Brief History of Humankind",
  author: "Yuval Noah Harari",
  genres: ["Non-fiction"],
  pub_year: 2011,
  summary: "An exploration of the history and impact of Homo sapiens, from the Stone Age to the present."
});

const book22 = new Book({
  title: "Educated",
  author: "Tara Westover",
  genres: ["Non-fiction"],
  pub_year: 2018,
  summary: "A memoir about a woman who grows up in a strict and abusive household in rural Idaho but eventually escapes to learn about the wider world through education."
});

const book23 = new Book({
  title: "Becoming",
  author: "Michelle Obama",
  genres: ["Non-fiction"],
  pub_year: 2018,
  summary: "The memoir of former First Lady of the United States Michelle Obama, chronicling her life from childhood through her years in the White House."
});

const book24 = new Book({
  title: "The Immortal Life of Henrietta Lacks",
  author: "Rebecca Skloot",
  genres: ["Non-fiction"],
  pub_year: 2010,
  summary: "The story of Henrietta Lacks and the immortal cell line, known as HeLa, that came from Lacks' cervical cancer cells in 1951."
});

const book25 = new Book({
  title: "The Wright Brothers",
  author: "David McCullough",
  genres: ["Non-fiction"],
  pub_year: 2015,
  summary: "The story of the Wright brothers and their invention of the first successful airplane."
});

const book26 = new Book({
  title: "Into the Wild",
  author: "Jon Krakauer",
  genres: ["Non-fiction"],
  pub_year: 1996,
  summary: "The true story of Christopher McCandless, who abandoned his possessions and journeyed into the Alaskan wilderness."
});

const book27 = new Book({
  title: "Unbroken: A World War II Story of Survival, Resilience, and Redemption",
  author: "Laura Hillenbrand",
  genres: ["Non-fiction"],
  pub_year: 2010,
  summary: "The story of Louis Zamperini, an Olympic runner who became a World War II bombardier and a Japanese POW."
});

const book28 = new Book({
  title: "The Glass Castle",
  author: "Jeannette Walls",
  genres: ["Non-fiction"],
  pub_year: 2005,
  summary: "A memoir of the author's troubled childhood and her family's struggle with poverty and instability."
});

const book29 = new Book({
  title: "Steve Jobs",
  author: "Walter Isaacson",
  genres: ["Non-fiction"],
  pub_year: 2011,
  summary: "The biography of Steve Jobs, co-founder of Apple Inc., based on interviews with Jobs and those who knew him."
});

const book30 = new Book({
  title: "Outliers: The Story of Success",
  author: "Malcolm Gladwell",
  genres: ["Non-fiction"],
  pub_year: 2008,
  summary: "An examination of the factors that contribute to high levels of success, exploring the role of environment, upbringing, and cultural influences."
});

const book31 = new Book({
  title: "The Girl with the Dragon Tattoo",
  author: "Stieg Larsson",
  genres: ["Mystery"],
  pub_year: 2005,
  summary: "Journalist Mikael Blomkvist and hacker Lisbeth Salander investigate a wealthy family's dark secrets."
});

const book32 = new Book({
  title: "Gone Girl",
  author: "Gillian Flynn",
  genres: ["Mystery"],
  pub_year: 2012,
  summary: "A psychological thriller about the disappearance of Amy Dunne and the subsequent investigation into her husband Nick."
});

const book33 = new Book({
  title: "The Da Vinci Code",
  author: "Dan Brown",
  genres: ["Mystery"],
  pub_year: 2003,
  summary: "Symbologist Robert Langdon unravels a complex mystery involving secret societies and religious relics."
});

const book34 = new Book({
  title: "Big Little Lies",
  author: "Liane Moriarty",
  genres: ["Mystery"],
  pub_year: 2014,
  summary: "Three women in a seemingly perfect suburban town become embroiled in a murder investigation."
});

const book35 = new Book({
  title: "In the Woods",
  author: "Tana French",
  genres: ["Mystery"],
  pub_year: 2007,
  summary: "Detective Rob Ryan investigates a murder that may be connected to his own traumatic childhood experience."
});

const book36 = new Book({
  title: "The Secret History",
  author: "Donna Tartt",
  genres: ["Mystery"],
  pub_year: 1992,
  summary: "A group of elite college students become entangled in a murder and its aftermath."
});

const book37 = new Book({
  title: "The Cuckoo's Calling",
  author: "Robert Galbraith (J.K. Rowling)",
  genres: ["Mystery"],
  pub_year: 2013,
  summary: "Private investigator Cormoran Strike investigates the suspicious death of a supermodel."
});

const book38 = new Book({
  title: "Rebecca",
  author: "Daphne du Maurier",
  genres: ["Mystery"],
  pub_year: 1938,
  summary: "A young bride is haunted by the memory of her husband's first wife, Rebecca, at their estate."
});

const book39 = new Book({
  title: "The Woman in White",
  author: "Wilkie Collins",
  genres: ["Mystery"],
  pub_year: 1859,
  summary: "A mysterious woman in white leads a young man into a complex web of intrigue and deception."
});

const book40 = new Book({
  title: "The Thirteenth Tale",
  author: "Diane Setterfield",
  genres: ["Mystery"],
  pub_year: 2006,
  summary: "A biographer uncovers the dark secrets of a famous reclusive author."
});

const book41 = new Book({
  title: "The Adventures of Sherlock Holmes",
  author: "Arthur Conan Doyle",
  genres: ["Detective"],
  pub_year: 1892,
  summary: "A collection of twelve short stories featuring the legendary detective Sherlock Holmes."
});

const book42 = new Book({
  title: "The Hound of the Baskervilles",
  author: "Arthur Conan Doyle",
  genres: ["Detective"],
  pub_year: 1902,
  summary: "Sherlock Holmes investigates the legend of a supernatural hound that terrorizes a noble family."
});

const book43 = new Book({
  title: "The Maltese Falcon",
  author: "Dashiell Hammett",
  genres: ["Detective"],
  pub_year: 1930,
  summary: "Private detective Sam Spade becomes embroiled in a dangerous quest for a priceless statuette."
});

const book44 = new Book({
  title: "Murder on the Orient Express",
  author: "Agatha Christie",
  genres: ["Detective"],
  pub_year: 1934,
  summary: "Detective Hercule Poirot investigates a murder on a luxury train traveling through Europe."
});

const book45 = new Book({
  title: "The Big Sleep",
  author: "Raymond Chandler",
  genres: ["Detective"],
  pub_year: 1939,
  summary: "Private detective Philip Marlowe delves into a complex web of crime and corruption in Los Angeles."
});

const book46 = new Book({
  title: "The Girl with the Dragon Tattoo",
  author: "Stieg Larsson",
  genres: ["Detective"],
  pub_year: 2005,
  summary: "Journalist Mikael Blomkvist and hacker Lisbeth Salander investigate a wealthy family's dark secrets."
});

const book47 = new Book({
  title: "The No. 1 Ladies' Detective Agency",
  author: "Alexander McCall Smith",
  genres: ["Detective"],
  pub_year: 1998,
  summary: "Precious Ramotswe sets up Botswana's first and only female-run detective agency."
});

const book48 = new Book({
  title: "The Moonstone",
  author: "Wilkie Collins",
  genres: ["Detective"],
  pub_year: 1868,
  summary: "A British country house is rocked by the theft of a valuable Indian diamond, leading to an intricate investigation."
});

const book49 = new Book({
  title: "In the Woods",
  author: "Tana French",
  genres: ["Detective"],
  pub_year: 2007,
  summary: "Detective Rob Ryan investigates a murder that may be connected to his own traumatic childhood experience."
});

const book50 = new Book({
  title: "The Cuckoo's Calling",
  author: "Robert Galbraith (J.K. Rowling)",
  genres: ["Detective"],
  pub_year: 2013,
  summary: "Private investigator Cormoran Strike investigates the suspicious death of a supermodel."
});

const book51 = new Book({
  title: "The Girl with the Dragon Tattoo",
  author: "Stieg Larsson",
  genres: ["Thriller"],
  pub_year: 2005,
  summary: "Journalist Mikael Blomkvist and hacker Lisbeth Salander investigate a wealthy family's dark secrets."
});

const book52 = new Book({
  title: "Gone Girl",
  author: "Gillian Flynn",
  genres: ["Thriller"],
  pub_year: 2012,
  summary: "A psychological thriller about the disappearance of Amy Dunne and the subsequent investigation into her husband Nick."
});

const book53 = new Book({
  title: "The Da Vinci Code",
  author: "Dan Brown",
  genres: ["Thriller"],
  pub_year: 2003,
  summary: "Symbologist Robert Langdon unravels a complex mystery involving secret societies and religious relics."
});

const book54 = new Book({
  title: "The Silent Patient",
  author: "Alex Michaelides",
  genres: ["Thriller"],
  pub_year: 2019,
  summary: "A psychotherapist tries to uncover the truth behind a woman's inexplicable silence after she is accused of murdering her husband."
});

const book55 = new Book({
  title: "The Girl on the Train",
  author: "Paula Hawkins",
  genres: ["Thriller"],
  pub_year: 2015,
  summary: "A woman becomes entangled in a missing persons investigation that sends shockwaves through her life."
});

const book56 = new Book({
  title: "The Woman in the Window",
  author: "A.J. Finn",
  genres: ["Thriller"],
  pub_year: 2018,
  summary: "An agoraphobic woman believes she has witnessed a crime in a neighboring house."
});

const book57 = new Book({
  title: "Before I Go to Sleep",
  author: "S.J. Watson",
  genres: ["Thriller"],
  pub_year: 2011,
  summary: "A woman wakes up every day with no memory of her life due to a traumatic injury, and she must piece together her past."
});

const book58 = new Book({
  title: "Shutter Island",
  author: "Dennis Lehane",
  genres: ["Thriller"],
  pub_year: 2003,
  summary: "A U.S. Marshal investigates the disappearance of a patient from a mental institution on a remote island."
});

const book59 = new Book({
  title: "The Reversal",
  author: "Michael Connelly",
  genres: ["Thriller"],
  pub_year: 2010,
  summary: "A defense attorney and a detective team up to re-examine a high-profile case."
});

const book60 = new Book({
  title: "Dark Places",
  author: "Gillian Flynn",
  genres: ["Thriller"],
  pub_year: 2009,
  summary: "A woman investigates the murders of her family members, uncovering dark secrets about her past."
});

const book61 = new Book({
  title: "The Shining",
  author: "Stephen King",
  genres: ["Horror"],
  pub_year: 1977,
  summary: "A family moves into an isolated hotel for the winter where an evil presence influences the father into violence."
});

const book62 = new Book({
  title: "Dracula",
  author: "Bram Stoker",
  genres: ["Horror"],
  pub_year: 1897,
  summary: "The classic tale of Count Dracula's attempt to move from Transylvania to England and the battle to stop him."
});

const book63 = new Book({
  title: "Frankenstein",
  author: "Mary Shelley",
  genres: ["Horror"],
  pub_year: 1818,
  summary: "The story of Victor Frankenstein, a scientist who creates a grotesque creature in an unorthodox scientific experiment."
});

const book64 = new Book({
  title: "It",
  author: "Stephen King",
  genres: ["Horror"],
  pub_year: 1986,
  summary: "A group of children are terrorized by an evil entity that takes the form of a clown named Pennywise."
});

const book65 = new Book({
  title: "The Haunting of Hill House",
  author: "Shirley Jackson",
  genres: ["Horror"],
  pub_year: 1959,
  summary: "Four people arrive at Hill House, a secluded mansion with a reputation for being haunted."
});

const book66 = new Book({
  title: "Bird Box",
  author: "Josh Malerman",
  genres: ["Horror"],
  pub_year: 2014,
  summary: "A mother and her two children must navigate a post-apocalyptic world while blindfolded to avoid supernatural entities."
});

const book67 = new Book({
  title: "The Exorcist",
  author: "William Peter Blatty",
  genres: ["Horror"],
  pub_year: 1971,
  summary: "A young girl is possessed by a demonic entity, and her mother seeks the help of two priests to save her."
});

const book68 = new Book({
  title: "House of Leaves",
  author: "Mark Z. Danielewski",
  genres: ["Horror"],
  pub_year: 2000,
  summary: "A family discovers that their house is bigger on the inside than it is on the outside."
});

const book69 = new Book({
  title: "Pet Sematary",
  author: "Stephen King",
  genres: ["Horror"],
  pub_year: 1983,
  summary: "A family moves to a rural home where they discover a mysterious burial ground that has the power to bring things back to life."
});

const book70 = new Book({
  title: "The Silence of the Lambs",
  author: "Thomas Harris",
  genres: ["Horror"],
  pub_year: 1988,
  summary: "FBI trainee Clarice Starling seeks the help of imprisoned cannibal Dr. Hannibal Lecter to catch another serial killer."
});

const book71 = new Book({
  title: "Pride and Prejudice",
  author: "Jane Austen",
  genres: ["Romance"],
  pub_year: 1813,
  summary: "Elizabeth Bennet navigates issues of manners, upbringing, morality, and marriage in early 19th-century England."
});

const book72 = new Book({
  title: "Jane Eyre",
  author: "Charlotte Brontë",
  genres: ["Romance"],
  pub_year: 1847,
  summary: "An orphaned girl becomes a governess and falls in love with her mysterious employer, Mr. Rochester."
});

const book73 = new Book({
  title: "Outlander",
  author: "Diana Gabaldon",
  genres: ["Romance"],
  pub_year: 1991,
  summary: "A World War II nurse is transported back in time to 18th-century Scotland, where she falls in love with a Highland warrior."
});

const book74 = new Book({
  title: "The Notebook",
  author: "Nicholas Sparks",
  genres: ["Romance"],
  pub_year: 1996,
  summary: "A love story spanning decades, chronicling the romance between Noah Calhoun and Allie Nelson."
});

const book75 = new Book({
  title: "Gone with the Wind",
  author: "Margaret Mitchell",
  genres: ["Romance"],
  pub_year: 1936,
  summary: "The tumultuous romance between Scarlett O'Hara and Rhett Butler during the American Civil War and Reconstruction era."
});

const book76 = new Book({
  title: "Me Before You",
  author: "Jojo Moyes",
  genres: ["Romance"],
  pub_year: 2012,
  summary: "A young woman becomes a caregiver for a quadriplegic man, and their relationship changes both of their lives."
});

const book77 = new Book({
  title: "The Time Traveler's Wife",
  author: "Audrey Niffenegger",
  genres: ["Romance"],
  pub_year: 2003,
  summary: "The story of Clare and Henry, whose love is tested by Henry's genetic disorder that causes him to time travel unpredictably."
});

const book78 = new Book({
  title: "Twilight",
  author: "Stephenie Meyer",
  genres: ["Romance"],
  pub_year: 2005,
  summary: "A teenage girl falls in love with a vampire, leading to a complex and dangerous relationship."
});

const book79 = new Book({
  title: "Atonement",
  author: "Ian McEwan",
  genres: ["Romance"],
  pub_year: 2001,
  summary: "A young girl makes a terrible mistake that ruins lives and sets the stage for decades of remorse and a search for atonement."
});

const book80 = new Book({
  title: "The Fault in Our Stars",
  author: "John Green",
  genres: ["Romance"],
  pub_year: 2012,
  summary: "Two teenagers with cancer meet at a support group and fall in love, confronting their illness together."
});

const book81 = new Book({
  title: "All the Light We Cannot See",
  author: "Anthony Doerr",
  genres: ["Historical"],
  pub_year: 2014,
  summary: "The lives of a blind French girl and a German boy collide in occupied France during World War II."
});

const book82 = new Book({
  title: "The Book Thief",
  author: "Markus Zusak",
  genres: ["Historical"],
  pub_year: 2005,
  summary: "A young girl living in Nazi Germany steals books and shares them with her neighbors and the Jewish man hiding in her basement."
});

const book83 = new Book({
  title: "Wolf Hall",
  author: "Hilary Mantel",
  genres: ["Historical"],
  pub_year: 2009,
  summary: "The life of Thomas Cromwell, a powerful figure in the court of Henry VIII."
});

const book84 = new Book({
  title: "The Nightingale",
  author: "Kristin Hannah",
  genres: ["Historical"],
  pub_year: 2015,
  summary: "The story of two sisters in Nazi-occupied France during World War II."
});

const book85 = new Book({
  title: "The Pillars of the Earth",
  author: "Ken Follett",
  genres: ["Historical"],
  pub_year: 1989,
  summary: "A sweeping epic set in 12th-century England, focusing on the building of a cathedral and the lives of those involved."
});

const book86 = new Book({
  title: "The Other Boleyn Girl",
  author: "Philippa Gregory",
  genres: ["Historical"],
  pub_year: 2001,
  summary: "The story of Mary Boleyn, the sister of Anne Boleyn, and her involvement in the court of Henry VIII."
});

const book87 = new Book({
  title: "The Help",
  author: "Kathryn Stockett",
  genres: ["Historical"],
  pub_year: 2009,
  summary: "A young white woman and two black maids in 1960s Mississippi collaborate on a secret writing project."
});

const book88 = new Book({
  title: "The Paris Wife",
  author: "Paula McLain",
  genres: ["Historical"],
  pub_year: 2011,
  summary: "A fictionalized account of Ernest Hemingway's first marriage to Hadley Richardson."
});

const book89 = new Book({
  title: "A Tale of Two Cities",
  author: "Charles Dickens",
  genres: ["Historical"],
  pub_year: 1859,
  summary: "The story of the French Revolution, focusing on the struggles of the common people and the aristocracy."
});

const book90 = new Book({
  title: "Memoirs of a Geisha",
  author: "Arthur Golden",
  genres: ["Historical"],
  pub_year: 1997,
  summary: "The fictionalized story of a young girl sold to a geisha house in Kyoto, Japan, and her journey to become one of the most celebrated geishas."
});

const book91 = new Book({
  title: "A Brief History of Time",
  author: "Stephen Hawking",
  genres: ["Science"],
  pub_year: 1988,
  summary: "An overview of cosmology and the nature of the universe, including the Big Bang, black holes, and the nature of time."
});

const book92 = new Book({
  title: "The Selfish Gene",
  author: "Richard Dawkins",
  genres: ["Science"],
  pub_year: 1976,
  summary: "An exploration of evolutionary biology and the idea that genes drive the evolution of life."
});

const book93 = new Book({
  title: "The Immortal Life of Henrietta Lacks",
  author: "Rebecca Skloot",
  genres: ["Science"],
  pub_year: 2010,
  summary: "The story of Henrietta Lacks, whose cells were used without her consent to create the first immortal cell line."
});

const book94 = new Book({
  title: "Sapiens: A Brief History of Humankind",
  author: "Yuval Noah Harari",
  genres: ["Science"],
  pub_year: 2011,
  summary: "An exploration of the history of humankind, from the emergence of Homo sapiens in Africa to the present day."
});

const book95 = new Book({
  title: "Astrophysics for People in a Hurry",
  author: "Neil deGrasse Tyson",
  genres: ["Science"],
  pub_year: 2017,
  summary: "A concise introduction to astrophysics, covering topics such as the nature of space and time, black holes, and the Big Bang."
});

const book96 = new Book({
  title: "The Elegant Universe",
  author: "Brian Greene",
  genres: ["Science"],
  pub_year: 1999,
  summary: "An exploration of string theory and its implications for our understanding of the universe."
});

const book97 = new Book({
  title: "The Gene: An Intimate History",
  author: "Siddhartha Mukherjee",
  genres: ["Science"],
  pub_year: 2016,
  summary: "A history of genetics, exploring the science of genes and their impact on heredity, disease, and evolution."
});

const book98 = new Book({
  title: "Guns, Germs, and Steel: The Fates of Human Societies",
  author: "Jared Diamond",
  genres: ["Science"],
  pub_year: 1997,
  summary: "An examination of the factors that have shaped human history, focusing on geography, biology, and economics."
});

const book99 = new Book({
  title: "The Structure of Scientific Revolutions",
  author: "Thomas S. Kuhn",
  genres: ["Science"],
  pub_year: 1962,
  summary: "An analysis of the history and philosophy of science, introducing the concept of paradigm shifts in scientific thought."
});

const book100 = new Book({
  title: "The Demon-Haunted World: Science as a Candle in the Dark",
  author: "Carl Sagan",
  genres: ["Science"],
  pub_year: 1995,
  summary: "A defense of scientific thinking and skepticism in the face of pseudoscience and superstition."
});

const book101 = new Book({
  title: "Steve Jobs",
  author: "Walter Isaacson",
  genres: ["Biography"],
  pub_year: 2011,
  summary: "A biography of Steve Jobs, co-founder of Apple Inc., based on numerous interviews with Jobs himself and those close to him."
});

const book102 = new Book({
  title: "The Diary of a Young Girl",
  author: "Anne Frank",
  genres: ["Biography"],
  pub_year: 1947,
  summary: "The diary of Anne Frank, a Jewish girl hiding from the Nazis during World War II, detailing her life in hiding."
});

const book103 = new Book({
  title: "Becoming",
  author: "Michelle Obama",
  genres: ["Biography"],
  pub_year: 2018,
  summary: "The memoir of Michelle Obama, from her childhood in Chicago to her years in the White House as First Lady of the United States."
});

const book104 = new Book({
  title: "Unbroken: A World War II Story of Survival, Resilience, and Redemption",
  author: "Laura Hillenbrand",
  genres: ["Biography"],
  pub_year: 2010,
  summary: "The biography of Louis Zamperini, an Olympic athlete and World War II bombardier who survived a plane crash, drifting at sea for weeks, and torture as a prisoner of war."
});

const book105 = new Book({
  title: "Long Walk to Freedom",
  author: "Nelson Mandela",
  genres: ["Biography"],
  pub_year: 1994,
  summary: "The autobiography of Nelson Mandela, chronicling his life, including his struggle against apartheid in South Africa and his years as president."
});

const book106 = new Book({
  title: "The Immortal Life of Henrietta Lacks",
  author: "Rebecca Skloot",
  genres: ["Biography", "Science"],
  pub_year: 2010,
  summary: "The story of Henrietta Lacks, whose cells were used without her consent to create the first immortal cell line."
});

const book107 = new Book({
  title: "Leonardo da Vinci",
  author: "Walter Isaacson",
  genres: ["Biography"],
  pub_year: 2017,
  summary: "A biography of Leonardo da Vinci, exploring his genius as a painter, inventor, and scientist."
});

const book108 = new Book({
  title: "The Professor and the Madman",
  author: "Simon Winchester",
  genres: ["Biography"],
  pub_year: 1998,
  summary: "The story of the creation of the Oxford English Dictionary and the collaboration between its editor and a mentally ill contributor."
});

const book109 = new Book({
  title: "Alexander Hamilton",
  author: "Ron Chernow",
  genres: ["Biography"],
  pub_year: 2004,
  summary: "A biography of Alexander Hamilton, one of America's Founding Fathers, tracing his life from his illegitimate birth in the Caribbean to his role in shaping the young nation."
});

const book110 = new Book({
  title: "Into the Wild",
  author: "Jon Krakauer",
  genres: ["Biography"],
  pub_year: 1996,
  summary: "The true story of Christopher McCandless, a young man who gave up everything to live in the wilds of Alaska, and his tragic journey."
});

const book111 = new Book({
  title: "The Adventures of Huckleberry Finn",
  author: "Mark Twain",
  genres: ["Adventure"],
  pub_year: 1884,
  summary: "The adventures of a boy and a runaway slave as they travel down the Mississippi River in the mid-19th century."
});

const book112 = new Book({
  title: "Treasure Island",
  author: "Robert Louis Stevenson",
  genres: ["Adventure"],
  pub_year: 1883,
  summary: "A tale of pirates, treasure maps, mutiny, and adventure on the high seas."
});

const book113 = new Book({
  title: "Jurassic Park",
  author: "Michael Crichton",
  genres: ["Adventure", "Science Fiction"],
  pub_year: 1990,
  summary: "Scientists and tourists visit a remote island theme park populated by dinosaurs created from prehistoric DNA."
});

const book114 = new Book({
  title: "The Count of Monte Cristo",
  author: "Alexandre Dumas",
  genres: ["Adventure"],
  pub_year: 1844,
  summary: "A story of betrayal, revenge, and redemption, following Edmond Dantès as he escapes from prison to exact vengeance on those who wronged him."
});

const book115 = new Book({
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  genres: ["Adventure", "Fantasy"],
  pub_year: 1937,
  summary: "Bilbo Baggins, a hobbit, embarks on a quest with Gandalf the wizard and a group of dwarves to reclaim their homeland from the dragon Smaug."
});

const book116 = new Book({
  title: "Around the World in Eighty Days",
  author: "Jules Verne",
  genres: ["Adventure"],
  pub_year: 1873,
  summary: "Phileas Fogg makes a bet that he can circumnavigate the globe in eighty days, embarking on a journey full of adventures and challenges."
});

const book117 = new Book({
  title: "Robinson Crusoe",
  author: "Daniel Defoe",
  genres: ["Adventure"],
  pub_year: 1719,
  summary: "The story of a mariner who spends years on a deserted island, surviving against all odds."
});

const book118 = new Book({
  title: "The Call of the Wild",
  author: "Jack London",
  genres: ["Adventure"],
  pub_year: 1903,
  summary: "The story of Buck, a domesticated dog who is stolen from his comfortable California home and sold as a sled dog in the Yukon."
});

const book119 = new Book({
  title: "Moby-Dick",
  author: "Herman Melville",
  genres: ["Adventure"],
  pub_year: 1851,
  summary: "The epic tale of Captain Ahab's obsessive quest to kill Moby Dick, a giant white sperm whale."
});

const book120 = new Book({
  title: "Life of Pi",
  author: "Yann Martel",
  genres: ["Adventure", "Fantasy"],
  pub_year: 2001,
  summary: "The story of Pi Patel, a boy who survives a shipwreck and is stranded on a lifeboat with a Bengal tiger."
});

const book121 = new Book({
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  genres: ["Drama"],
  pub_year: 1960,
  summary: "The story of Atticus Finch, a lawyer in the racially divided Alabama town of Maycomb during the 1930s, and his children Scout and Jem."
});

const book122 = new Book({
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  genres: ["Drama"],
  pub_year: 1925,
  summary: "The story of Jay Gatsby, a wealthy and mysterious businessman, and his passionate obsession with the beautiful Daisy Buchanan."
});

const book123 = new Book({
  title: "1984",
  author: "George Orwell",
  genres: ["Drama", "Science Fiction"],
  pub_year: 1949,
  summary: "A dystopian novel set in a totalitarian society, where a man named Winston Smith struggles against the oppressive regime."
});

const book124 = new Book({
  title: "One Hundred Years of Solitude",
  author: "Gabriel García Márquez",
  genres: ["Drama", "Magical Realism"],
  pub_year: 1967,
  summary: "The multi-generational story of the Buendía family, set in the fictional town of Macondo in Colombia."
});

const book125 = new Book({
  title: "The Catcher in the Rye",
  author: "J.D. Salinger",
  genres: ["Drama"],
  pub_year: 1951,
  summary: "The story of Holden Caulfield, a teenage boy navigating the challenges of adolescence and the adult world."
});

const book126 = new Book({
  title: "The Kite Runner",
  author: "Khaled Hosseini",
  genres: ["Drama"],
  pub_year: 2003,
  summary: "The story of Amir, a young boy from Kabul, and his journey to find redemption for past sins against his friend Hassan."
});

const book127 = new Book({
  title: "A Streetcar Named Desire",
  author: "Tennessee Williams",
  genres: ["Drama"],
  pub_year: 1947,
  summary: "The story of Blanche DuBois, a Southern belle who moves in with her sister and brother-in-law in New Orleans, and her tragic descent into madness."
});

const book128 = new Book({
  title: "Death of a Salesman",
  author: "Arthur Miller",
  genres: ["Drama"],
  pub_year: 1949,
  summary: "The story of Willy Loman, a failing salesman, and his struggles with the American Dream and his family relationships."
});

const book129 = new Book({
  title: "The Bell Jar",
  author: "Sylvia Plath",
  genres: ["Drama"],
  pub_year: 1963,
  summary: "The semi-autobiographical novel of a young woman's mental breakdown and struggle with identity."
});

const book130 = new Book({
  title: "The Color Purple",
  author: "Alice Walker",
  genres: ["Drama"],
  pub_year: 1982,
  summary: "The story of Celie, an African-American woman in the early 20th century South, and her journey to self-discovery and empowerment."
});

const book131 = new Book({
  title: "Catch-22",
  author: "Joseph Heller",
  genres: ["Comedy"],
  pub_year: 1961,
  summary: "A satirical novel set during World War II, following Captain John Yossarian and his attempts to maintain his sanity amid the absurdity of war."
});

const book132 = new Book({
  title: "Good Omens",
  author: "Neil Gaiman & Terry Pratchett",
  genres: ["Comedy", "Fantasy"],
  pub_year: 1990,
  summary: "An angel and a demon team up to prevent the apocalypse, but they soon realize they've grown fond of life on Earth."
});

const book133 = new Book({
  title: "The Hitchhiker's Guide to the Galaxy",
  author: "Douglas Adams",
  genres: ["Comedy", "Science Fiction"],
  pub_year: 1979,
  summary: "Arthur Dent is swept off Earth just before it's destroyed to make way for a hyperspace bypass, embarking on a series of intergalactic misadventures."
});

const book134 = new Book({
  title: "Bridget Jones's Diary",
  author: "Helen Fielding",
  genres: ["Comedy"],
  pub_year: 1996,
  summary: "Bridget Jones navigates life as a single woman in London, documenting her experiences in a diary filled with humor and self-deprecation."
});

const book135 = new Book({
  title: "Pride and Prejudice",
  author: "Jane Austen",
  genres: ["Comedy", "Romance"],
  pub_year: 1813,
  summary: "Elizabeth Bennet and Mr. Darcy navigate misunderstandings and societal expectations in this classic tale of love and manners."
});

const book136 = new Book({
  title: "A Confederacy of Dunces",
  author: "John Kennedy Toole",
  genres: ["Comedy"],
  pub_year: 1980,
  summary: "Ignatius J. Reilly, an eccentric and misanthropic man, navigates life in New Orleans, encountering a cast of eccentric characters."
});

const book137 = new Book({
  title: "Lamb: The Gospel According to Biff, Christ's Childhood Pal",
  author: "Christopher Moore",
  genres: ["Comedy", "Fantasy"],
  pub_year: 2002,
  summary: "The comedic story of Jesus Christ's childhood, told from the perspective of his best friend Biff."
});

const book138 = new Book({
  title: "The Importance of Being Earnest",
  author: "Oscar Wilde",
  genres: ["Comedy", "Drama"],
  pub_year: 1895,
  summary: "A satire of Victorian social norms and manners, revolving around mistaken identities and romantic entanglements."
});

const book139 = new Book({
  title: "Don Quixote",
  author: "Miguel de Cervantes",
  genres: ["Comedy"],
  pub_year: 1605,
  summary: "The story of a delusional knight and his loyal squire, Sancho Panza, as they embark on misadventures across medieval Spain."
});

const book140 = new Book({
  title: "Three Men in a Boat",
  author: "Jerome K. Jerome",
  genres: ["Comedy"],
  pub_year: 1889,
  summary: "Three friends and a dog embark on a boating holiday along the Thames, encountering comedic mishaps along the way."
});


const fantasy = [book1, book2, book3, book4, book5, book6, book7, book8, book9, book10];
const fiction = [book11, book12, book13, book14, book15, book16, book17, book18, book19, book20];
const non_fiction = [book21, book22, book23, book24, book25, book26, book27, book28, book29, book30];
const mystery = [book31, book32, book33, book34, book35, book36, book37, book38, book39, book40];
const detective = [book41, book42, book43, book44, book45, book46, book47, book48, book49, book50];
const thriller = [book51, book52, book53, book54, book55, book56, book57, book58, book59, book60];
const horror = [book61, book62, book63, book64, book65, book66, book67, book68, book69, book70];
const romance = [book71, book72, book73, book74, book75, book76, book77, book78, book79, book80];
const historical = [book81, book82, book83, book84, book85, book86, book87, book88, book89, book90];
const science = [book91, book92, book93, book94, book95, book96, book97, book98, book99, book100];
const biography = [book101, book102, book103, book104, book105, book106, book107, book108, book109, book110];
const adventure = [book111, book112, book113, book114, book115, book116, book117, book118, book119, book120];
const drama = [book121, book122, book123, book124, book125, book126, book127, book128, book129, book130];
const comedy = [book131, book132, book133, book134, book135, book136, book137, book138, book139, book140];

const genres_arr = [fantasy, fiction, non_fiction, mystery, detective, thriller, horror, science, biography, historical, romance, adventure, drama, comedy]

const commands = [
  {
    command: "start",
    description: "Start interacting with BookBuddy"
  },
  {
    command: "genres",
    description: "Explore available genres and discover books you love.Use /genres to see a list of genres you can explore for book recommendations."
  },
  {
    command: "random",
    description: "Discover a surprise book recommendation! Use /random to get a randomly selected book suggestion that you might enjoy."
  },
  {
    command: "help",
    description: "Need assistance? Use /help to get information on how to use this bot. Find commands, learn about features, and get tips for discovering great books!"
  }
]

bot.setMyCommands(commands)

const book_keys = [
  ["Fantasy", "Historical"],
  ["Fiction", "Non-fiction"],
  ["Mystery", "Detective"],
  ["Thriller", "Horror"],
  ["Romance", "Adventure"],
  ["Science", "Biography"],
  ["Drama", "Comedy"]
]

const options = [
  ["✅Mark As Read✅"],
  ["🛒Put In Book List🛒"],
]

function getRandomBookInfo(genreArray) {
  const randomIndex = Math.floor(Math.random() * 10);
  const randomBook = genreArray[randomIndex];
  return randomBook.getBookInfo();
}


bot.on('text', (msg) => {
  const chatId = msg.chat.id

  if (msg.text === "/start") {
    bot.sendMessage(chatId, "📚 Welcome to BookBuddy! I'm here to help you discover new books and find your next great read. \n\n Explore books by genre, get random recommendations, search by author, and more.\n To get started, type /genres to see available genres or use /random for a surprise book suggestion. \n\n Type /help anytime if you need assistance or have questions.\n\n Enjoy exploring books with BookBuddy! 📖✨")
  } else if (msg.text === "/genres") {
    bot.sendMessage(chatId, "Choose a genre from keyboard to explore:", { reply_markup: { keyboard: book_keys, one_time_keyboard: true } })
  } else if (msg.text === "/random") {
    const randGenreIdx = Math.floor(Math.random() * genres_arr.length)
    const randBookIdx = Math.floor(Math.random() * genres_arr[randGenreIdx].length)
    const randBook = genres_arr[randGenreIdx][randBookIdx]

    bot.sendMessage(chatId, randBook.getBookInfo())
    bot.sendMessage(chatId, "What would you like to do next?\n\n\n Already Read: Mark this book as read.\n\n Put in Book List: Add this book to your reading list.\n", 
    {reply_markup: 
      { keyboard: options }})

  } else if(msg.text === "/help"){
    bot.sendMessage(chatId, "📚 BookBuddy Help Guide 📚\n\n Welcome to BookBuddy! Here are the commands you can use to explore and manage your book recommendations:\n\n Commands:\n /start - Begin your BookBuddy journey with a warm welcome and overview.\n /genres - View and select from available book genres.\n /random - Get a surprise book recommendation.\n /help - Display this help message.\n\n\nInteractions:\n\nWhen you receive a book recommendation, you can:\n\n   Already Read: Mark the book as read.\n   Put in Book List: Add the book to your reading list.\n\n\nIf you have any questions or need further assistance, feel free to reach out!\n\nHappy Reading! 📖✨")
  } else if (msg.text === "✅Mark As Read✅") {
    bot.sendMessage(chatId, "This book has been added to your already readen books list!")
  } else if (msg.text === "🛒Put In Book List🛒") {
    bot.sendMessage(chatId, "This book has been added to your books list!")
  }


  switch (msg.text) {
    case "Fantasy":
      bot.sendMessage(chatId, getRandomBookInfo(fantasy))
      bot.sendMessage(chatId, "What would you like to do next?\n\n\n Already Read: Mark this book as read.\n\n Put in Book List: Add this book to your reading list.\n\n Other Book: Get another recommendation.",
        {
          reply_markup:
            { keyboard: options }
        }
      )
      break;
    case "Historical":
      bot.sendMessage(chatId, getRandomBookInfo(historical))
      bot.sendMessage(chatId, "What would you like to do next?\n\n\n Already Read: Mark this book as read.\n\n Put in Book List: Add this book to your reading list.\n\n Other Book: Get another recommendation.",
        {
          reply_markup:
            { keyboard: options }
        }
      )
      break;
    case "Fiction":
      bot.sendMessage(chatId, getRandomBookInfo(randBook))
      bot.sendMessage(chatId, "What would you like to do next?\n\n\n Already Read: Mark this book as read.\n\n Put in Book List: Add this book to your reading list.\n\n Other Book: Get another recommendation.",
        {
          reply_markup:
            { keyboard: options }
        }
      )
      break
    case "Non-fiction":
      bot.sendMessage(chatId, getRandomBookInfo(non_fiction))
      bot.sendMessage(chatId, "What would you like to do next?\n\n\n Already Read: Mark this book as read.\n\n Put in Book List: Add this book to your reading list.\n\n Other Book: Get another recommendation.",
        {
          reply_markup:
            { keyboard: options }
        }
      )
      break;
    case "Mystery":
      bot.sendMessage(chatId, getRandomBookInfo(mystery))
      bot.sendMessage(chatId, "What would you like to do next?\n\n\n Already Read: Mark this book as read.\n\n Put in Book List: Add this book to your reading list.\n\n Other Book: Get another recommendation.",
        {
          reply_markup:
            { keyboard: options }
        }
      )
      break;
    case "Detective":
      bot.sendMessage(chatId, getRandomBookInfo(detective))
      bot.sendMessage(chatId, "What would you like to do next?\n\n\n Already Read: Mark this book as read.\n\n Put in Book List: Add this book to your reading list.\n\n Other Book: Get another recommendation.",
        {
          reply_markup:
            { keyboard: options }
        }
      )
      break;
    case "Thriller":
      bot.sendMessage(chatId, getRandomBookInfo(thriller))
      bot.sendMessage(chatId, "What would you like to do next?\n\n\n Already Read: Mark this book as read.\n\n Put in Book List: Add this book to your reading list.\n\n Other Book: Get another recommendation.",
        {
          reply_markup:
            { keyboard: options }
        }
      )
      break
    case "Horror":
      bot.sendMessage(chatId, getRandomBookInfo(horror))
      bot.sendMessage(chatId, "What would you like to do next?\n\n\n Already Read: Mark this book as read.\n\n Put in Book List: Add this book to your reading list.\n\n Other Book: Get another recommendation.",
        {
          reply_markup:
            { keyboard: options }
        }
      )
      break;
    case "Romance":
      bot.sendMessage(chatId, getRandomBookInfo(romance))
      bot.sendMessage(chatId, "What would you like to do next?\n\n\n Already Read: Mark this book as read.\n\n Put in Book List: Add this book to your reading list.\n\n Other Book: Get another recommendation.",
        {
          reply_markup:
            { keyboard: options }
        }
      )
      break;
    case "Adventure":
      bot.sendMessage(chatId, getRandomBookInfo(adventure))
      bot.sendMessage(chatId, "What would you like to do next?\n\n\n Already Read: Mark this book as read.\n\n Put in Book List: Add this book to your reading list.\n\n Other Book: Get another recommendation.",
        {
          reply_markup:
            { keyboard: options }
        }
      )
      break;
    case "Science":
      bot.sendMessage(chatId, getRandomBookInfo(science))
      bot.sendMessage(chatId, "What would you like to do next?\n\n\n Already Read: Mark this book as read.\n\n Put in Book List: Add this book to your reading list.\n\n Other Book: Get another recommendation.",
        {
          reply_markup:
            { keyboard: options }
        }
      )
      break
    case "Biography":
      bot.sendMessage(chatId, getRandomBookInfo(biography))
      bot.sendMessage(chatId, "What would you like to do next?\n\n\n Already Read: Mark this book as read.\n\n Put in Book List: Add this book to your reading list.\n\n Other Book: Get another recommendation.",
        {
          reply_markup:
            { keyboard: options }
        }
      )
      break;
    case "Drama":
      bot.sendMessage(chatId, getRandomBookInfo(drama))
      bot.sendMessage(chatId, "What would you like to do next?\n\n\n Already Read: Mark this book as read.\n\n Put in Book List: Add this book to your reading list.\n\n Other Book: Get another recommendation.",
        {
          reply_markup:
            { keyboard: options }
        }
      )
      break;
    case "Comedy":
      bot.sendMessage(chatId, getRandomBookInfo(comedy))
      bot.sendMessage(chatId, "What would you like to do next?\n\n\n Already Read: Mark this book as read.\n\n Put in Book List: Add this book to your reading list.\n\n Other Book: Get another recommendation.",
        {
          reply_markup:
            { keyboard: options }
        }
      )
      break;
  }
})
