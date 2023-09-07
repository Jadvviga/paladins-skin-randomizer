enum Champions {
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
    Makoa = Makoa,
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
    VII = "VII",
    Vatu = "Vatu",
    Viktor = "Viktor",
    Vivian = "Vivian",
    Vora = "Vora",
    Willo = "Willo",
    Yagorath = "Yagorath",
    Ying = "Ying",
    Zhin = "Zhin"





}

enum SkinType {
    default = "default",
    recolor = "recolor", //includes recolors for old models
    special = "sepecial", //exlusive ones, like XBox Andro or TF2 Barik, that are not available to buy but require something to do
    hat = "hat", //the skins that are just base skins with diffrent hat
    cosmic = "cosmic",
    obsidian = "obsidian",
    golden = "golden",
    other = "other"
}

enum Availability {
    standard = "standard",
    mastery = "mastery",
    exclusive = "exclusive",
    unlimited = "unlimited",
    limited = "limited"
}

enum Rarity {
    common = "common",
    uncommon = "uncommon",
    rare = "rare",
    epic = "epic",
    legendary = "legendary"
}

type Skin = {
    name: string;
    champion: Champions;
    fileName?: string;
    type: SkinType;
    availability: Availability,
    rarity: Rarity
}

const skins: Array<Skin> = [
    {
        champion: Champions.Androxus,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
        
    },
    {
        champion: Champions.Androxus,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery
    },
    {
        champion: Champions.Androxus,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery
    },
    {
        champion: Champions.Androxus,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Androxus,
        name: "Wraith",
        type: SkinType.recolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Androxus,
        name: "Exalted",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: Champions.Androxus,
        name: "Imperator",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Androxus,
        name: "X",
        type: SkinType.special,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Androxus,
        name: "Stage 4",
        type: SkinType.special,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Androxus,
        name: "Dasher's Antlers",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Androxus,
        name: "Screech",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Androxus,
        name: "Cangaceiro",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Androxus,
        name: "Huntsman",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Androxus,
        name: "Steam Demon",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Androxus,
        name: "Fallen",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Androxus,
        name: "Battlesuit Godslayer",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Androxus,
        name: "Steel Forged",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Androxus,
        name: "Dragon Forged",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: Champions.Androxus,
        name: "Avatar",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Androxus,
        name: "Modded",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Androxus,
        name: "Eliminate",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Androxus,  //CHECK
        name: "Grave Danger",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Ash,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Ash,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Ash,
        name: "Hellion",
        type: SkinType.recolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: Champions.Ash,
        name: "Heirloom Crest",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Ash,
        name: "Ronin",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Ash,
        name: "Xeno-Buster",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard
    },
    {
        champion: Champions.Ash,
        name: "Street Style",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Ash,
        name: "Ska'drin",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Ash,
        name: "Scorned",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Ash,
        name: "Draconian Huntress",
        type: SkinType.other,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Atlas,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Atlas,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Atlas,
        name: "Chronomancer",
        type: SkinType.recolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: Champions.Atlas,
        name: "Last Hope",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.limited
    },
    {
        champion: Champions.Atlas,
        name: "Legionnaire",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Atlas,
        name: "Corrupted",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Atlas,
        name: "Vile",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Azaan,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: Champions.Azaan,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: Champions.Azaan,
        name: "Kingdom's End",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: Champions.Azaan,
        name: "Forgemaster",
        type: SkinType.recolor,
        rarity: Rarity.rare,
        availability: Availability.limited
    },
    {
        champion: Champions.Azaan,
        name: "Dark Drake",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
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
        champion: Champions.Corvus, // CHECK
        name: "Crimson Crow",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Corvus, // CHECK
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
        availability: Availability.exclusive
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
        name: "Grohk Lobster",
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
        name: "Frosty Doom Shroom",
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
        champion: Champions.Kinessa, //CHECK
        name: "Dunestrider 2",
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
        champion: Champions.Vora, // CHECK
        name: "Danse Macabre",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: Champions.Vora, // CHECK
        name: "Patchwork Assassin",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },


]