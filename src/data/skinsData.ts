export enum Champions {
    Androxus = "Androxus",
    Ash = "Ash",
    Atlas = "Atlas",
    Azaan = "Azaan",
    Barik = "Barik",
    Betty = "Betty La Bomba",
    BombKing = "Bomb King",
    Buck = "Buck",
    Caspian = "Caspian",
    Cassie = "Cassie",
    Corvus = "Corvus",
    Dredge = "Dredge",
    Drogoz = "Drogoz",
    Evie = "Evie",
    Fernando = "Fernando",
    Furia = "Furia",
    Grohk = "Grohk",
    Grover = "Grover",
    Imani = "Imani",
    Inara = "Inara",
    Io = "Io",
    Jenos = "Jenos",
    Kasumi = "Kasumi",
    Khan = "Khan",
    Kinessa = "Kinessa",
    Koga = "Koga",
    Lex = "Lex",
    Lian = "Lian",
    Lillith = "Lillith",
    Maeve = "Maeve",
    Makoa = "Makoa",
    MalDamba = "Mal'Damba",
    Moji = "Moji",
    Nyx = "Nyx",
    Octavia = "Octavia",
    Omen = "Omen",
    Pip = "Pip",
    Raum = "Raum",
    Rei = "Rei",
    Ruckus = "Ruckus",
    Saati = "Saati",
    Seris = "Seris",
    ShaLin = "Sha Lin",
    Skye = "Skye",
    Strix = "Strix",
    Talus = "Talus",
    Terminus = "Terminus",
    Tiberius = "Tiberius",
    Torvald = "Torvald",
    Tyra = "Tyra",
    Vatu = "Vatu",
    VII = "VII",
    Viktor = "Viktor",
    Vivian = "Vivian",
    Vora = "Vora",
    Willo = "Willo",
    Yagorath = "Yagorath",
    Ying = "Ying",
    Zhin = "Zhin"
}

export enum SkinType {
    default = "default",
    recolor = "recolor", //includes recolors for old models
    special = "sepecial", //exlusive ones, like XBox Andro or TF2 Barik, that are not available to buy but require something to do
    hat = "hat", //the skins that are just base skins with diffrent hat
    cosmic = "cosmic",
    obsidian = "obsidian",
    golden = "golden",
    other = "other"
}

export enum Availability {
    standard = "standard",
    mastery = "mastery",
    exclusive = "exclusive",
    unlimited = "unlimited",
    limited = "limited"
}

export enum Rarity {
    common = "common",
    uncommon = "uncommon",
    rare = "rare",
    epic = "epic",
    legendary = "legendary"
}

export type Skin = {
    name: string;
    champion: Champions;
    fileName?: string;
    releaseDate?: Date;
    type: SkinType;
    availability: Availability,
    rarity: Rarity
}

export const skins: Array<Skin> = [
    {
        champion: Champions.Androxus,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard,
        releaseDate: new Date(2016, 3, 11)
    },
    {
        champion: Champions.Androxus,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery,
        releaseDate: new Date(2017, 6, 28)
    },
    {
        champion: Champions.Androxus,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery,
        releaseDate: new Date(2017, 6, 28)
    },
    {
        champion: Champions.Androxus,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery,
        releaseDate: new Date(2019, 5, 22)
    },
    {
        champion: Champions.Androxus,
        name: "Wraith",
        type: SkinType.recolor,
        rarity: Rarity.common,
        availability: Availability.standard,
        releaseDate: new Date(2016, 9, 12)
    },
    {
        champion: Champions.Androxus,
        name: "Exalted",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.standard,
        releaseDate: new Date(2017, 3, 9)
    },
    {
        champion: Champions.Androxus,
        name: "Imperator",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.exclusive,
        releaseDate: new Date(2017, 12, 18)
    },
    {
        champion: Champions.Androxus,
        name: "X",
        type: SkinType.special,
        rarity: Rarity.rare,
        availability: Availability.exclusive,
        releaseDate: new Date(2017, 1, 16)
    },
    {
        champion: Champions.Androxus,
        name: "Stage 4",
        type: SkinType.special,
        rarity: Rarity.rare,
        availability: Availability.exclusive,
        releaseDate: new Date(2017, 1, 16)
    },
    {
        champion: Champions.Androxus,
        name: "Dasher's Antlers",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive,
        releaseDate: new Date(2016, 12, 7)
    },
    {
        champion: Champions.Androxus,
        name: "Screech",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive,
        releaseDate: new Date(2017, 10, 4)
    },
    {
        champion: Champions.Androxus,
        name: "Cangaceiro",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive,
        releaseDate: new Date(2017, 11, 8)
    },
    {
        champion: Champions.Androxus,
        name: "Huntsman",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2018, 4, 26)
    },
    {
        champion: Champions.Androxus,
        name: "Steam Demon",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2017, 6, 28)
    },
    {
        champion: Champions.Androxus,
        name: "Fallen",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2018, 6, 6)
    },
    {
        champion: Champions.Androxus,
        name: "Battlesuit Godslayer",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2019, 1, 16)
    },
    {
        champion: Champions.Androxus,
        name: "Steel Forged",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2019, 5, 22)
    },
    {
        champion: Champions.Androxus,
        name: "Dragon Forged",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited,
        releaseDate: new Date(2019, 5, 22)
    },
    {
        champion: Champions.Androxus,
        name: "Avatar",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2021, 3, 31)
    },
    {
        champion: Champions.Androxus,
        name: "Modded",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2021, 3, 31)
    },
    {
        champion: Champions.Androxus,
        name: "Eliminate",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2019, 5, 22)
    },
    {
        champion: Champions.Androxus,
        name: "Condemned Celebrant",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.unlimited
    },
    {
        champion: Champions.Ash,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard,
        releaseDate: new Date(2017, 6, 1)
    },
    {
        champion: Champions.Ash,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery,
        releaseDate: new Date(2018, 11, 14)
    },
    {
        champion: Champions.Ash,
        name: "Hellion",
        type: SkinType.recolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard,
        releaseDate: new Date(2017, 6, 1)
    },
    {
        champion: Champions.Ash,
        name: "Heirloom Crest",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive,
        releaseDate: new Date(2018, 1, 10)
    },
    {
        champion: Champions.Ash,
        name: "Ronin",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2017, 8, 9)
    },
    {
        champion: Champions.Ash,
        name: "Xeno-Buster",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard,
        releaseDate: new Date(2018, 9, 11)
    },
    {
        champion: Champions.Ash,
        name: "Street Style",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2019, 4, 1)
    },
    {
        champion: Champions.Ash,
        name: "Ska'drin",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2020, 1, 8)
    },
    {
        champion: Champions.Ash,
        name: "Scorned",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2020, 1, 8)
    },
    {
        champion: Champions.Ash,
        name: "Draconian Huntress",
        type: SkinType.other,
        rarity: Rarity.rare,
        availability: Availability.exclusive,
        releaseDate: new Date(2022, 11, 17)
    },
    {
        champion: Champions.Atlas,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard,
        releaseDate: new Date(2019, 3, 27)
    },
    {
        champion: Champions.Atlas,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery,
        releaseDate: new Date(2019, 3, 27)
    },
    {
        champion: Champions.Atlas,
        name: "Chronomancer",
        type: SkinType.recolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard,
        releaseDate: new Date(2019, 3, 27)
    },
    {
        champion: Champions.Atlas,
        name: "Last Hope",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.limited,
        releaseDate: new Date(2019, 3, 27)
    },
    {
        champion: Champions.Atlas,
        name: "Legionnaire",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2019, 4, 24)
    },
    {
        champion: Champions.Atlas,
        name: "Corrupted",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2022, 5, 11)
    },
    {
        champion: Champions.Atlas,
        name: "Vile",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2022, 5, 11)
    },
    {
        champion: Champions.Azaan,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard,
        releaseDate: new Date(2021, 11, 10)
    },
    {
        champion: Champions.Azaan,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery,
        releaseDate: new Date(2021, 11, 10)
    },
    {
        champion: Champions.Azaan,
        name: "Kingdom's End",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.standard,
        releaseDate: new Date(2021, 11, 10)
    },
    {
        champion: Champions.Azaan,
        name: "Forgemaster",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.limited,
        releaseDate: new Date(2021, 11, 10)
    },
    {
        champion: Champions.Azaan,
        name: "Dark Drake",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2022, 1, 26)
    },
    {
        champion: Champions.Barik,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Barik,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery
    },
    {
        champion: Champions.Barik,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery
    },
    {
        champion: Champions.Barik,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Barik,
        name: "Foreman",
        type: SkinType.recolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Barik,
        name: "Stone-Cut",
        type: SkinType.other,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: Champions.Barik,
        name: "Hi-Tek",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: Champions.Barik,
        name: "Team Fortress 2",
        type: SkinType.special,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Barik,
        name: "Swashbuckler",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Barik,
        name: "Steel Forged",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Barik,
        name: "Dragon Forged",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: Champions.Betty,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Betty,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Betty,
        name: "Royal Explosive",
        type: SkinType.recolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: Champions.Betty,
        name: "Queen of Diamonds",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.limited
    },
    {
        champion: Champions.Betty,
        name: "Dragonette",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.BombKing,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.BombKing,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery
    },
    {
        champion: Champions.BombKing,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery
    },
    {
        champion: Champions.BombKing,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.BombKing,
        name: "Monarch",
        type: SkinType.recolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: Champions.BombKing,
        name: "Biz-King",
        type: SkinType.other,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: Champions.BombKing,
        name: "Pumpking",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.BombKing,
        name: "A-bomb-inable",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.BombKing,
        name: "Twitch Prime King",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: Champions.BombKing,
        name: "Love Machine",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard
    },
    {
        champion: Champions.BombKing,
        name: "Digitized",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.BombKing,
        name: "Honey King",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.BombKing,
        name: "Polar Bear",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.BombKing,
        name: "Crash King 47",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.BombKing,
        name: "Crash King 48",
        type: SkinType.other,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Buck,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Buck,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery
    },
    {
        champion: Champions.Buck,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery
    },
    {
        champion: Champions.Buck,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Buck,
        name: "Summit",
        type: SkinType.recolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Buck,
        name: "Commando",
        type: SkinType.other,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: Champions.Buck,
        name: "Brawler",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: Champions.Buck,
        name: "Envy",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: Champions.Buck,
        name: "Triggerman",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard
    },
    {
        champion: Champions.Buck,
        name: "Kingpin",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard
    },
    {
        champion: Champions.Buck,
        name: "Buck Wild",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard
    },
    {
        champion: Champions.Buck,
        name: "Buckules",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Buck,
        name: "Ripjaw",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Buck,
        name: "Great Orange",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Caspian,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
        
    },
    {
        champion: Champions.Caspian,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Caspian,
        name: "Free Spirit",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Caspian,
        name: "Change of Heart",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.limited
    },
    {
        champion: Champions.Caspian,
        name: "Skull and Bones",
        type: SkinType.other,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Caspian,
        name: "Pride of the Realm",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Caspian,
        name: "Long Live the King",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Cassie,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
        
    },
    {
        champion: Champions.Cassie,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery
    },
    {
        champion: Champions.Cassie,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery
    },
    {
        champion: Champions.Cassie,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Cassie,
        name: "Coral",
        type: SkinType.recolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Cassie,
        name: "Northern Watch",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: Champions.Cassie,
        name: "Timber",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: Champions.Cassie,
        name: "Tinder",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: Champions.Cassie,
        name: "Night Bane",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Cassie,
        name: "Blood Moon",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Cassie,
        name: "Sun Kissed",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Cassie,
        name: "Copacabana",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Cassie,
        name: "Dune Crawler",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Cassie,
        name: "Dragoncaller",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Cassie,
        name: "WHIPPED CREAM",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Corvus,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
        
    },
    {
        champion: Champions.Corvus,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Corvus,
        name: "Exemplar",
        type: SkinType.recolor,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Corvus,
        name: "Abyssal Acolyte",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.limited
    },
    {
        champion: Champions.Corvus,
        name: "Pyre-Lord Magnus",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Corvus,
        name: "Count",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Corvus,
        name: "Midnight Royal",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Corvus,
        name: "Qrow Branwen",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Corvus,
        name: "Crimson Crow",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Corvus,
        name: "Eternal Waltz",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Dredge,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
        
    },
    {
        champion: Champions.Dredge,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Dredge,
        name: "Buccaneer",
        type: SkinType.recolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: Champions.Dredge,
        name: "Merrymaker",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Dredge,
        name: "Omega",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Dredge,
        name: "Bare Bones",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Drogoz,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
        
    },
    {
        champion: Champions.Drogoz,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery
    },
    {
        champion: Champions.Drogoz,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery
    },
    {
        champion: Champions.Drogoz,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Drogoz,
        name: "Tyrant",
        type: SkinType.recolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: Champions.Drogoz,
        name: "HRX 2018",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.limited
    },
    {
        champion: Champions.Drogoz,
        name: "Dreadhunter",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard
    },
    {
        champion: Champions.Drogoz,
        name: "Terrormorph",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: Champions.Drogoz,
        name: "DZ-03 Draco",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Drogoz,
        name: "Abyssal Lord",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: Champions.Drogoz,
        name: "Pyre Warrior",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Drogoz,
        name: "Freegle",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Evie,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
        
    },
    {
        champion: Champions.Evie,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery
    },
    {
        champion: Champions.Evie,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery
    },
    {
        champion: Champions.Evie,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Evie,
        name: "Evocation",
        type: SkinType.recolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Evie,
        name: "Black Ice",
        type: SkinType.other,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: Champions.Evie,
        name: "Star Glam",
        type: SkinType.other,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: Champions.Evie,
        name: "Troublemaker",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard
    },
    {
        champion: Champions.Evie,
        name: "Merrymaker",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Evie,
        name: "Bewitching",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Evie,
        name: "Sweet Shop",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: Champions.Evie,
        name: "Toothache",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Fernando,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
        
    },
    {
        champion: Champions.Fernando,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery
    },
    {
        champion: Champions.Fernando,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery
    },
    {
        champion: Champions.Fernando,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Fernando,
        name: "Daring",
        type: SkinType.recolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Fernando,
        name: "Onslaught",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: Champions.Fernando,
        name: "Old Glory",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Fernando,
        name: "Tough Cookie",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Fernando,
        name: "Invitational",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.limited
    },
    {
        champion: Champions.Fernando,
        name: "FN-01 Helios",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Fernando,
        name: "FN-01 Erebos",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Fernando,
        name: "God of War",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: Champions.Fernando,
        name: "Enforcer",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: Champions.Fernando,
        name: "Knightmare",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Fernando,
        name: "Sanguine",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: Champions.Fernando,
        name: "Digitized",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Fernando,
        name: "Shore Patrol",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Fernando,
        name: "Beach Bash",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: Champions.Furia,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
        
    },
    {
        champion: Champions.Furia,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Furia,
        name: "Iron Maiden",
        type: SkinType.recolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: Champions.Furia,
        name: "Coldsnap",
        type: SkinType.special,
        rarity: Rarity.rare,
        availability: Availability.limited
    },
    {
        champion: Champions.Furia,
        name: "Aurora",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Furia,
        name: "Battlesuit Angel",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Furia,
        name: "Solfire",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Furia,
        name: "Dragonslayer",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: Champions.Furia,
        name: "Soul-Stealer",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: Champions.Furia,
        name: "Weiss Schnee",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Grohk,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
        
    },
    {
        champion: Champions.Grohk,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery
    },
    {
        champion: Champions.Grohk,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery
    },
    {
        champion: Champions.Grohk,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Grohk,
        name: "Beast",
        type: SkinType.recolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: Champions.Grohk,
        name: "Tribesman",
        type: SkinType.other,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: Champions.Grohk,
        name: "Lobster",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Grohk,
        name: "Brimstone",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Grohk,
        name: "Neon Demon",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Grohk,
        name: "Chieftain",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: Champions.Grover,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
        
    },
    {
        champion: Champions.Grover,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Grover,
        name: "Autumn",
        type: SkinType.recolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Grover,
        name: "Blightbark",
        type: SkinType.other,
        rarity: Rarity.uncommon,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Grover,
        name: "Winter",
        type: SkinType.other,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: Champions.Grover,
        name: "Rosebud Canopy",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Grover,
        name: "Frosty Foliage",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Grover,
        name: "Doom Shroom",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Grover,
        name: "GR0B0T",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Grover,
        name: "Soul Briar",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Grover,
        name: "Seeping Corruption",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Imani,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
        
    },
    {
        champion: Champions.Imani,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Imani,
        name: "Warder",
        type: SkinType.recolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: Champions.Imani,
        name: "Snowdrift",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.limited
    },
    {
        champion: Champions.Imani,
        name: "Omega",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.unlimited
    },
    {
        champion: Champions.Imani,
        name: "Steel Forged",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Imani,
        name: "Dragon Forged",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: Champions.Imani,
        name: "Stellar Sorceress",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Imani,
        name: "E-Mani",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Imani,
        name: "Genesis",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Imani,
        name: "Yang Xiao Long",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Inara,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
        
    },
    {
        champion: Champions.Inara,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery
    },
    {
        champion: Champions.Inara,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery
    },
    {
        champion: Champions.Inara,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Inara,
        name: "Sunstone",
        type: SkinType.recolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: Champions.Inara,
        name: "Ice Walker",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Inara,
        name: "Iron Madam",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Inara,
        name: "Digitized",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Inara,
        name: "Stellar Sentinel",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Inara,
        name: "Lady Liberty",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Inara,
        name: "Defragged",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Io,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
        
    },
    {
        champion: Champions.Io,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Io,
        name: "Feral",
        type: SkinType.recolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: Champions.Io,
        name: "Starfall",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.limited
    },
    {
        champion: Champions.Io,
        name: "Pirate's Treasure",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Io,
        name: "Eight Oceans",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: Champions.Io,
        name: "Stellar Protector",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Io,
        name: "Salt",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Io,
        name: "Corrupted",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Io,
        name: "Frozen Moon",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Jenos,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
        
    },
    {
        champion: Champions.Jenos,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Jenos,
        name: "Millennium",
        type: SkinType.recolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: Champions.Jenos,
        name: "Resplendent",
        type: SkinType.special,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Jenos,
        name: "Eclipse",
        type: SkinType.other,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Jenos,
        name: "Ghoulish Goalie",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Jenos,
        name: "Squidbert",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Jenos,
        name: "Exarch",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Jenos,
        name: "Gentleman",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Jenos,
        name: "Soul Eater",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: Champions.Jenos,
        name: "Remix",
        type: SkinType.other,
        rarity: Rarity.legendary,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Jenos,
        name: "Mernos",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Jenos,
        name: "Eternal Fervor",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Jenos,
        name: "Dark Fervor",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Jenos,
        name: "Aspirant",
        type: SkinType.special,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Kasumi,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
        
    },
    {
        champion: Champions.Kasumi,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Kasumi,
        name: "Evil Spirit",
        type: SkinType.recolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: Champions.Kasumi,
        name: "Spirited",
        type: SkinType.recolor,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Kasumi,
        name: "Lovestruck",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Khan,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
        
    },
    {
        champion: Champions.Khan,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Khan,
        name: "Royal Guard",
        type: SkinType.recolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: Champions.Khan,
        name: "Ameri-Khan",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Khan,
        name: "Overlord",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard
    },
    {
        champion: Champions.Khan,
        name: "Mixer",
        type: SkinType.special,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: Champions.Khan,
        name: "Safecracker",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Khan,
        name: "Saboteur",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: Champions.Khan,
        name: "Draconic Enforcer",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Khan,
        name: "Ironscale",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Khan,
        name: "Eternal Guardian",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Khan,
        name: "Dark Guardian",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Khan,
        name: "Justin OH",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Khan,
        name: "VIP Justin OH",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Kinessa,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
        
    },
    {
        champion: Champions.Kinessa,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Kinessa,
        name: "Atomic",
        type: SkinType.recolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: Champions.Kinessa,
        name: "Cutthroat",
        type: SkinType.other,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: Champions.Kinessa,
        name: "Chillweave Beanie Hat",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Kinessa,
        name: "Viking",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Kinessa,
        name: "Nova Strike",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Kinessa,
        name: "Star Silver",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard
    },
    {
        champion: Champions.Kinessa,
        name: "Battlesuit Eagle Eye",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Kinessa,
        name: "Shore Patrol",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Kinessa,
        name: "Beach Bash",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: Champions.Kinessa,
        name: "Valentina",
        type: SkinType.other,
        rarity: Rarity.legendary,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Kinessa,
        name: "Dunestrider",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Kinessa,
        name: "Sandstrider",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Koga,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
        
    },
    {
        champion: Champions.Koga,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Koga,
        name: "Exile",
        type: SkinType.recolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: Champions.Koga,
        name: "Prototype",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Koga,
        name: "Omega",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Koga,
        name: "Shore Patrol",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Koga,
        name: "Beach Bash",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: Champions.Koga,
        name: "Eternal Retribution",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Koga,
        name: "Dark Retribution",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Koga,
        name: "Bossfight",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Koga,
        name: "Bloody Bakemono",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Lex,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
        
    },
    {
        champion: Champions.Lex,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery
    },
    {
        champion: Champions.Lex,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery
    },
    {
        champion: Champions.Lex,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Lex,
        name: "Lawbringer",
        type: SkinType.recolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Lex,
        name: "Croakie",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Lex,
        name: "Longboard",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Lex,
        name: "Sarrada",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Lex,
        name: "L-Exo Suit",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Lex,
        name: "Renegade",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Lex,
        name: "Covert Ops",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Lex,
        name: "Bounty Hunter",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Lex,
        name: "Headhunter",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: Champions.Lex,
        name: "Yasamin",
        type: SkinType.other,
        rarity: Rarity.legendary,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Lian,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
        
    },
    {
        champion: Champions.Lian,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Lian,
        name: "Dusk",
        type: SkinType.recolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: Champions.Lian,
        name: "Goddess",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard
    },
    {
        champion: Champions.Lian,
        name: "High Elf",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Lian,
        name: "Galactic Scion",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Lian,
        name: "Merrymaker",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Lian,
        name: "Shore Patrol",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Lian,
        name: "Beach Bash",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: Champions.Lian,
        name: "Dark Monarch",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Lian,
        name: "Death-Goddess",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: Champions.Lian,
        name: "Eternal Conflict",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Lian,
        name: "Dark Conflict",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Lian,
        name: "Soulweaver",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Lian,
        name: "Death Mage",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Lillith,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Lillith,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Lillith,
        name: "Wicked Hex",
        type: SkinType.recolor,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Lillith,
        name: "Sun Born",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.limited
    },
    {
        champion: Champions.Lillith,
        name: "Stellar Witch",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Lillith,
        name: "Heartless Pharaoh",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Lillith,
        name: "Weaver Reborn",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Maeve,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Maeve,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery
    },
    {
        champion: Champions.Maeve,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery
    },
    {
        champion: Champions.Maeve,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Maeve,
        name: "Vagrant",
        type: SkinType.recolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Maeve,
        name: "Alley Cat",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: Champions.Maeve,
        name: "Dreamhack",
        type: SkinType.special,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Maeve,
        name: "Strike",
        type: SkinType.special,
        rarity: Rarity.rare,
        availability: Availability.limited
    },
    {
        champion: Champions.Maeve,
        name: "Demonette",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Maeve,
        name: "Street Style",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Maeve,
        name: "Merrymaker",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.unlimited
    },
    {
        champion: Champions.Maeve,
        name: "Raeve",
        type: SkinType.other,
        rarity: Rarity.legendary,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Maeve,
        name: "Pirate's Treasure",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Maeve,
        name: "Eight Oceans",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: Champions.Maeve,
        name: "Emerald Bandit",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Maeve,
        name: "Temple Raider",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: Champions.Maeve,
        name: "Cammie",
        type: SkinType.other,
        rarity: Rarity.legendary,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Maeve,
        name: "Schoolyard",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Maeve,
        name: "Study Hall",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Maeve,
        name: "Celebrant Cat Burglar",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Makoa,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Makoa,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery
    },
    {
        champion: Champions.Makoa,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery
    },
    {
        champion: Champions.Makoa,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Makoa,
        name: "Montego",
        type: SkinType.recolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Makoa,
        name: "Barrier Wreath",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Makoa,
        name: "Plushy",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Makoa,
        name: "Cuddly",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Makoa,
        name: "Volcanic",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: Champions.Makoa,
        name: "Dutchman",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Makoa,
        name: "Prosperous",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Makoa,
        name: "Akuma",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Makoa,
        name: "Omega",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Makoa,
        name: "Crocfather",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Makoa,
        name: "Cold Blooded",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.MalDamba,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.MalDamba,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery
    },
    {
        champion: Champions.MalDamba,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery
    },
    {
        champion: Champions.MalDamba,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.MalDamba,
        name: "Cursed",
        type: SkinType.recolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.MalDamba,
        name: "Defiler",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: Champions.MalDamba,
        name: "Na'Vi",
        type: SkinType.other,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: Champions.MalDamba,
        name: "Prickly",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: Champions.MalDamba,
        name: "Chancellor",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.MalDamba,
        name: "Wickerman",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard
    },
    {
        champion: Champions.MalDamba,
        name: "Shadow Lord",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.MalDamba,
        name: "Steel Forged",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.MalDamba,
        name: "Dragon Forged",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: Champions.MalDamba,
        name: "Shiro",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Moji,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Moji,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Moji,
        name: "Plum",
        type: SkinType.recolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: Champions.Moji,
        name: "Dragonborn",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Moji,
        name: "Cuddly",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Moji,
        name: "PEEKABOO",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Nyx,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Nyx,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Nyx,
        name: "Crimson Queen",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Nyx,
        name: "Divine Matriarch",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Octavia,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Octavia,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Octavia,
        name: "Commander",
        type: SkinType.recolor,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Octavia,
        name: "Maverick",
        type: SkinType.recolor,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: Champions.Octavia,
        name: "Beachside",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Octavia,
        name: "Freedom Fighter",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Omen,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Omen,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Omen,
        name: "Sonej",
        type: SkinType.recolor,
        rarity: Rarity.common,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Omen,
        name: "Carrion",
        type: SkinType.recolor,
        rarity: Rarity.common,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Pip,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Pip,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery
    },
    {
        champion: Champions.Pip,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery
    },
    {
        champion: Champions.Pip,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Pip,
        name: "Sulfur",
        type: SkinType.recolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Pip,
        name: "Tactical",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: Champions.Pip,
        name: "Pandamonium",
        type: SkinType.other,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: Champions.Pip,
        name: "Raider",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Pip,
        name: "Love Specs",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Pip,
        name: "Arctic",
        type: SkinType.other,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Pip,
        name: "Invader",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard
    },
    {
        champion: Champions.Pip,
        name: "Mad Scientist",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Pip,
        name: "Remix",
        type: SkinType.other,
        rarity: Rarity.legendary,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Pip,
        name: "Inventor",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: Champions.Raum,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Raum,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Raum,
        name: "Subjugator",
        type: SkinType.recolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: Champions.Raum,
        name: "Abyssal Lord",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.limited
    },
    {
        champion: Champions.Raum,
        name: "Crypt Guardian",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Raum,
        name: "Undead Colossus",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Raum,
        name: "Kraumpus",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Raum,
        name: "R.O.M.",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Raum,
        name: "Heatsink",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Raum,
        name: "The Harlequin",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Raum,
        name: "Eternal Devilry",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Rei,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Rei,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Rei,
        name: "Harvest",
        type: SkinType.recolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: Champions.Rei,
        name: "Beach Bunny",
        type: SkinType.recolor,
        rarity: Rarity.uncommon,
        availability: Availability.limited
    },
    {
        champion: Champions.Rei,
        name: "Pumpkin Patch",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Rei,
        name: "Class President",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Rei,
        name: "Valedictorian",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Ruckus,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Ruckus,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Ruckus,
        name: "Sprocket",
        type: SkinType.recolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Ruckus,
        name: "B.E.T.A.",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: Champions.Ruckus,
        name: "H.A.W.K.",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: Champions.Ruckus,
        name: "Lil'Andy",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Ruckus,
        name: "Robo Force",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Ruckus,
        name: "Star Slayer",
        type: SkinType.other,
        rarity: Rarity.legendary,
        availability: Availability.standard
    },
    {
        champion: Champions.Ruckus,
        name: "Pirate's Treasure",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Ruckus,
        name: "Eight Oceans",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: Champions.Saati,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Saati,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Saati,
        name: "Hot Shot",
        type: SkinType.recolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: Champions.Saati,
        name: "Iced Out",
        type: SkinType.recolor,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: Champions.Saati,
        name: "Sea Queen",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Saati,
        name: "Crimson Tide",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Saati,
        name: "Blake Belladonna",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Saati,
        name: "Wings of Darkness",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Saati,
        name: "Wings of Carnage",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Seris,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Seris,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery
    },
    {
        champion: Champions.Seris,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery
    },
    {
        champion: Champions.Seris,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Seris,
        name: "Taboo",
        type: SkinType.recolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Seris,
        name: "Parasite",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Seris,
        name: "Infernal",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard
    },
    {
        champion: Champions.Seris,
        name: "Divine",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Seris,
        name: "Madame",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Seris,
        name: "Jade Priestess",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Seris,
        name: "Cottontail",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Seris,
        name: "Expo 2018",
        type: SkinType.recolor,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: Champions.Seris,
        name: "Remix",
        type: SkinType.other,
        rarity: Rarity.legendary,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Seris,
        name: "Stellar Mender",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Seris,
        name: "Salem",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Seris,
        name: "Doom Bringer",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Seris,
        name: "Flame Bringer",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Seris,
        name: "Celebrant Soothsayer",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.ShaLin,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.ShaLin,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.ShaLin,
        name: "Bravado",
        type: SkinType.recolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.ShaLin,
        name: "Burrito",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.limited
    },
    {
        champion: Champions.ShaLin,
        name: "In the Bag",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: Champions.ShaLin,
        name: "Vigilante",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard
    },
    {
        champion: Champions.ShaLin,
        name: "Guardian",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard
    },
    {
        champion: Champions.ShaLin,
        name: "Crime Fighter",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.ShaLin,
        name: "Outlaw",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard
    },
    {
        champion: Champions.ShaLin,
        name: "Omega",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Skye,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Skye,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery
    },
    {
        champion: Champions.Skye,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery
    },
    {
        champion: Champions.Skye,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Skye,
        name: "Guild",
        type: SkinType.recolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: Champions.Skye,
        name: "Pilot Suit",
        type: SkinType.recolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: Champions.Skye,
        name: "Twilight",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: Champions.Skye,
        name: "Operative",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: Champions.Skye,
        name: "Chrome",
        type: SkinType.other,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: Champions.Skye,
        name: "Heartbreaker",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Skye,
        name: "Kunoichi",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Skye,
        name: "Academic",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Skye,
        name: "Street Style",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Skye,
        name: "Temptress",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Skye,
        name: "Devilish",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Skye,
        name: "GG Magree",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Skye,
        name: "VIP GG Magree",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Strix,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Strix,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Strix,
        name: "Phoenix",
        type: SkinType.recolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: Champions.Strix,
        name: "Raven",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: Champions.Strix,
        name: "Coldsnap",
        type: SkinType.special,
        rarity: Rarity.rare,
        availability: Availability.limited
    },
    {
        champion: Champions.Strix,
        name: "Bad Mother Clucker",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Strix,
        name: "Switch",
        type: SkinType.special,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Strix,
        name: "Infiltrator",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Strix,
        name: "Mercenary",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Strix,
        name: "Remix",
        type: SkinType.other,
        rarity: Rarity.legendary,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Strix,
        name: "Redux",
        type: SkinType.other,
        rarity: Rarity.legendary,
        availability: Availability.limited
    },
    {
        champion: Champions.Strix,
        name: "Hustler",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Strix,
        name: "Swindler",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: Champions.Strix,
        name: "Scalebane",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Strix,
        name: "Dragonsbane",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Talus,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Talus,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Talus,
        name: "Geist",
        type: SkinType.recolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: Champions.Talus,
        name: "Oni",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Talus,
        name: "Trick or Treat",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Talus,
        name: "Wukong",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Talus,
        name: "Monkey-King",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Terminus,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Terminus,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Terminus,
        name: "Monolith",
        type: SkinType.recolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: Champions.Terminus,
        name: "Jotunn",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Terminus,
        name: "Abominable",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Terminus,
        name: "Omega",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Terminus,
        name: "Steel Forged",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Terminus,
        name: "Cosmic Titan",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Terminus,
        name: "Super Nova",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Tiberius,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Tiberius,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Tiberius,
        name: "Beast Slayer",
        type: SkinType.recolor,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Tiberius,
        name: "Nightstalker",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.limited
    },
    {
        champion: Champions.Tiberius,
        name: "Tomb Keeper",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.unlimited
    },
    {
        champion: Champions.Tiberius,
        name: "Sphinx Soldier",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Tiberius,
        name: "Lifeguard",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Tiberius,
        name: "Aka Oni",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Tiberius,
        name: "Aoi Oni",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Torvald,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Torvald,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery
    },
    {
        champion: Champions.Torvald,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery
    },
    {
        champion: Champions.Torvald,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Torvald,
        name: "Arcanist",
        type: SkinType.recolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Torvald,
        name: "Grave-robber's Spoils",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Torvald,
        name: "Clockwork",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Torvald,
        name: "Dark Lord",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Torvald,
        name: "Berserker",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Torvald,
        name: "Revenant",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Tyra,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Tyra,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery
    },
    {
        champion: Champions.Tyra,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery
    },
    {
        champion: Champions.Tyra,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Tyra,
        name: "Alluvial",
        type: SkinType.recolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Tyra,
        name: "Baroness",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Tyra,
        name: "Lotus",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Tyra,
        name: "Dire Wolf",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Tyra,
        name: "Red Winter",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Tyra,
        name: "Drakefire",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Tyra,
        name: "Archangel",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Tyra,
        name: "Heartbreaker",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Tyra,
        name: "Gunslinger",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Tyra,
        name: "Bandit",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: Champions.Tyra,
        name: "Firebrand",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Tyra,
        name: "Frostbrand",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Tyra,
        name: "Marauder",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Tyra,
        name: "Royal Mark",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Tyra,
        name: "Eternal Emissary",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Tyra,
        name: "Deathless Emissary",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Tyra,
        name: "Daisy Dukes",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Tyra,
        name: "Get Served",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.VII,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.VII,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.VII,
        name: "Crimson Guard",
        type: SkinType.recolor,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.VII,
        name: "Ivy Sentinel",
        type: SkinType.recolor,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.VII,
        name: "Death Orchid",
        type: SkinType.recolor,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: Champions.VII,
        name: "Biting Wind",
        type: SkinType.recolor,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.VII,
        name: "Deadly Pallor",
        type: SkinType.recolor,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: Champions.VII,
        name: "Pandemonium",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Vatu,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Vatu,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Vatu,
        name: "Sorrow",
        type: SkinType.recolor,
        rarity: Rarity.uncommon,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Vatu,
        name: "Duty",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.limited
    },
    {
        champion: Champions.Vatu,
        name: "Mayhem",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Vatu,
        name: "Abyss Cultist",
        type: SkinType.other,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
     {
        champion: Champions.Viktor,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard,
        releaseDate: new Date(2016, 6, 30)
    },
    {
        champion: Champions.Viktor,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery,
        releaseDate: new Date(2017, 6, 1)
    },
    {
        champion: Champions.Viktor,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery,
        releaseDate: new Date(2017, 6, 1)
    },
    {
        champion: Champions.Viktor,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery,
        releaseDate: new Date(2022, 8, 17)
    },
    {
        champion: Champions.Viktor,
        name: "Khaki",
        type: SkinType.recolor,
        rarity: Rarity.common,
        availability: Availability.standard,
        releaseDate: new Date(2016, 6, 30)
    },
    {
        champion: Champions.Viktor,
        name: "Ushanka",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive,
        releaseDate: new Date(2017, 11, 1)
    },
    {
        champion: Champions.Viktor,
        name: "Lone Heart Patch",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive,
        releaseDate: new Date(2017, 2, 8)
    },
    {
        champion: Champions.Viktor,
        name: "Charcoal",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.exclusive,
        releaseDate: new Date(2016, 7, 14)
    },
    {
        champion: Champions.Viktor,
        name: "Invitational",
        type: SkinType.special,
        rarity: Rarity.rare,
        availability: Availability.limited,
        releaseDate: new Date(2016, 12, 20)
    },
    {
        champion: Champions.Viktor,
        name: "Soldier +",
        type: SkinType.special,
        rarity: Rarity.rare,
        availability: Availability.exclusive,
        releaseDate: new Date(2017, 5, 3)
    },
    {
        champion: Champions.Viktor,
        name: "Code Green Trooper",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2017, 1, 25)
    },
    {
        champion: Champions.Viktor,
        name: "Code Green Grenadier",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2017, 1, 25)
    },
    {
        champion: Champions.Viktor,
        name: "Code Green Bandolier",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2017, 1, 25)
    },
    {
        champion: Champions.Viktor,
        name: "Code Green Comms",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2017, 1, 25)
    },
    {
        champion: Champions.Viktor,
        name: "V1-KTOR",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard,
        releaseDate: new Date(2017, 8, 23)
    },
    {
        champion: Champions.Viktor,
        name: "Reaver",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2018, 2, 21)
    },
    {
        champion: Champions.Viktor,
        name: "Full Moon",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.unlimited,
        releaseDate: new Date(2018, 9, 27)
    },
    {
        champion: Champions.Viktor,
        name: "Legionnaire",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited,
        releaseDate: new Date(2019, 1, 16)
    },
    {
        champion: Champions.Viktor,
        name: "Draconic Fighter",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.unlimited,
        releaseDate: new Date(2020, 4, 29)
    },
    {
        champion: Champions.Viktor,
        name: "Hunter's Bane",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2020, 4, 29)
    },
    {
        champion: Champions.Viktor,
        name: "Chase",
        type: SkinType.other,
        rarity: Rarity.legendary,
        availability: Availability.exclusive,
        releaseDate: new Date(2021, 7, 21)
    },
    {
        champion: Champions.Viktor,
        name: "Rambo",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2022, 2, 11)
    },
    {
        champion: Champions.Viktor,
        name: "Celebrant Soldier",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2022, 2, 11)
    },
    {
        champion: Champions.Vivian,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard,
        releaseDate: new Date(2017, 11, 15)
    },
    {
        champion: Champions.Vivian,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery,
        releaseDate: new Date(2019, 4, 24)
    },
    {
        champion: Champions.Vivian,
        name: "Manipulator",
        type: SkinType.recolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard,
        releaseDate: new Date(2018, 3, 28)
    },
    {
        champion: Champions.Vivian,
        name: "Silvertongue",
        type: SkinType.recolor,
        rarity: Rarity.uncommon,
        availability: Availability.limited,
        releaseDate: new Date(2017, 11, 15)
    },
    {
        champion: Champions.Vivian,
        name: "Full Throttle",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited,
        releaseDate: new Date(2018, 3, 28)
    },
    {
        champion: Champions.Vivian,
        name: "Day Walker",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2018, 9, 27)
    },
    {
        champion: Champions.Vivian,
        name: "Contessa",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited,
        releaseDate: new Date(2018, 9, 27)
    },
    {
        champion: Champions.Vivian,
        name: "Omega",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2019, 3, 27)
    },
    {
        champion: Champions.Vivian,
        name: "Student of Magic",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2020, 10, 28)
    },
    {
        champion: Champions.Vivian,
        name: "Novice",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2020, 10, 28)
    },
    {
        champion: Champions.Vivian,
        name: "Sigma",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2021, 12, 24)
    },
    {
        champion: Champions.Vivian,
        name: "Retro",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2023, 2, 23)
    },
    {
        champion: Champions.Vora,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard,
        releaseDate: new Date(2020, 10, 28)
    },
    {
        champion: Champions.Vora,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery,
        releaseDate: new Date(2020, 10, 28)
    },
    {
        champion: Champions.Vora,
        name: "Herald",
        type: SkinType.recolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard,
        releaseDate: new Date(2020, 10, 28)
    },
    {
        champion: Champions.Vora,
        name: "Seal Guardian",
        type: SkinType.recolor,
        rarity: Rarity.epic,
        availability: Availability.limited,
        releaseDate: new Date(2020, 10, 28)
    },
    {
        champion: Champions.Vora,
        name: "Honor Guard",
        type: SkinType.recolor,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2020, 10, 28)
    },
    {
        champion: Champions.Vora,
        name: "Galactic Conqueror",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2020, 11, 25)
    },
    {
        champion: Champions.Vora,
        name: "Ruby Rose",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2022, 6, 29)
    },
    {
        champion: Champions.Vora,
        name: "Danse Macabre",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Vora,
        name: "Patchwork Assassin",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Willo,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard,
        releaseDate: new Date(2017, 5, 3)
    },
    {
        champion: Champions.Willo,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery,
        releaseDate: new Date(2017, 6, 28)
    },
    {
        champion: Champions.Willo,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery,
        releaseDate: new Date(2017, 6, 28)
    },
    {
        champion: Champions.Willo,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery,
        releaseDate: new Date(2022, 5, 11)
    },
    {
        champion: Champions.Willo,
        name: "Bluebell",
        type: SkinType.recolor,
        rarity: Rarity.common,
        availability: Availability.standard,
        releaseDate: new Date(2017, 5, 3)
    },
    {
        champion: Champions.Willo,
        name: "Viceroy",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.standard,
        releaseDate: new Date(2017, 6, 14)
    },
    {
        champion: Champions.Willo,
        name: "Jolly Holly",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive,
        releaseDate: new Date(2017, 12, 18)
    },
    {
        champion: Champions.Willo,
        name: "Hemlock",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard,
        releaseDate: new Date(2017, 7, 26)
    },
    {
        champion: Champions.Willo,
        name: "Firecracker",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard,
        releaseDate: new Date(2018, 1, 10)
    },
    {
        champion: Champions.Willo,
        name: "Sugar Plum",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard,
        releaseDate: new Date(2018, 12, 10)
    },
    {
        champion: Champions.Willo,
        name: "Will.0",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited,
        releaseDate: new Date(2022, 1, 26)
    },
    {
        champion: Champions.Willo,
        name: "Yellow Jacket",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2022, 9, 30)
    },
    {
        champion: Champions.Yagorath,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard,
        releaseDate: new Date(2021, 2, 3)
    },
    {
        champion: Champions.Yagorath,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery,
        releaseDate: new Date(2021, 2, 3)
    },
    {
        champion: Champions.Yagorath,
        name: "Grave Worm",
        type: SkinType.recolor,
        rarity: Rarity.uncommon,
        availability: Availability.exclusive,
        releaseDate: new Date(2021, 2, 3)
    },
    {
        champion: Champions.Yagorath,
        name: "Caustic",
        type: SkinType.recolor,
        rarity: Rarity.epic,
        availability: Availability.limited,
        releaseDate: new Date(2021, 2, 3)
    },
    {
        champion: Champions.Yagorath,
        name: "Leviathan",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2021, 11, 10)
    },
    {
        champion: Champions.Yagorath,
        name: "Cuddly",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2022, 8, 17)
    },
    {
        champion: Champions.Ying,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard,
        releaseDate: new Date(2016, 4, 7)
    },
    {
        champion: Champions.Ying,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery,
        releaseDate: new Date(2017, 7, 17)
    },
    {
        champion: Champions.Ying,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery,
        releaseDate: new Date(2017, 7, 26)
    },
    {
        champion: Champions.Ying,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery,
        releaseDate: new Date(2021, 5, 26)
    },
    {
        champion: Champions.Ying,
        name: "Seer",
        type: SkinType.recolor,
        rarity: Rarity.common,
        availability: Availability.standard,
        releaseDate: new Date(2016, 10, 13)
    },
    {
        champion: Champions.Ying,
        name: "Snapdragon",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.standard,
        releaseDate: new Date(2016, 5, 5)
    },
    {
        champion: Champions.Ying,
        name: "Quicksilver",
        type: SkinType.special,
        rarity: Rarity.rare,
        availability: Availability.limited,
        releaseDate: new Date(2017, 6, 14)
    },
    {
        champion: Champions.Ying,
        name: "Convention 2017",
        type: SkinType.special,
        rarity: Rarity.rare,
        availability: Availability.limited,
        releaseDate: new Date(2017, 6, 14)
    },
    {
        champion: Champions.Ying,
        name: "Genie",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2017, 1, 16)
    },
    {
        champion: Champions.Ying,
        name: "Replicant",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard,
        releaseDate: new Date(2017, 6, 14)
    },
    {
        champion: Champions.Ying,
        name: "Carnival",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard,
        releaseDate: new Date(2018, 4, 12)
    },
    {
        champion: Champions.Ying,
        name: "Death Speaker",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard,
        releaseDate: new Date(2018, 9, 27)
    },
    {
        champion: Champions.Ying,
        name: "Banshee",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited,
        releaseDate: new Date(2018, 9, 27)
    },
    {
        champion: Champions.Ying,
        name: "Street Style",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.unlimited,
        releaseDate: new Date(2019, 4, 24)
    },
    {
        champion: Champions.Ying,
        name: "Mermaid",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2019, 9, 11)
    },
    {
        champion: Champions.Ying,
        name: "Siren",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited,
        releaseDate: new Date(2019, 9, 11)
    },
    {
        champion: Champions.Ying,
        name: "Divine Daughter",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2020, 3, 4)
    },
    {
        champion: Champions.Ying,
        name: "High Priestess",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2020, 3, 4)
    },
    {
        champion: Champions.Ying,
        name: "Full Dive",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2021, 3, 31)
    },
    {
        champion: Champions.Ying,
        name: "Rezzed",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2021, 3, 31)
    },
    {
        champion: Champions.Ying,
        name: "Jurassic",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2022, 1, 26)
    },
    {
        champion: Champions.Ying,
        name: "Celebrant Spellcaster",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2022, 1, 26)
    },
    {
        champion: Champions.Zhin,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard,
        releaseDate: new Date(2017, 6, 14)
    },
    {
        champion: Champions.Zhin,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery,
        releaseDate: new Date(2023, 3, 29)
    },
    {
        champion: Champions.Zhin,
        name: "Nomad",
        type: SkinType.recolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard,
        releaseDate: new Date(2017, 6, 14)
    },
    {
        champion: Champions.Zhin,
        name: "Ebon Star",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2017, 12, 18)
    },
    {
        champion: Champions.Zhin,
        name: "Demon Slayer",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2018, 3, 28)
    },
    {
        champion: Champions.Zhin,
        name: "Conqueror",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited,
        releaseDate: new Date(2017, 9, 7)
    },
    {
        champion: Champions.Zhin,
        name: "Omega",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2019, 3, 27)
    },
    {
        champion: Champions.Zhin,
        name: "Underkeeper",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2020, 10, 28)
    },
    {
        champion: Champions.Zhin,
        name: "Forest Stalker",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited,
        releaseDate: new Date(2020, 10, 28)
    },
    {
        champion: Champions.Zhin,
        name: "Kazu",
        type: SkinType.other,
        rarity: Rarity.legendary,
        availability: Availability.exclusive,
        releaseDate: new Date(2021, 7, 21)
    },
    {
        champion: Champions.Zhin,
        name: "Mei",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2022, 8, 17)
    },
    {
        champion: Champions.Zhin,
        name: "Nova Mei",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2022, 8, 17)
    }
]