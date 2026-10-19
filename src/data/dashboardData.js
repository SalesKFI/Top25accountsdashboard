// ─── KFI DASHBOARD DATA ──────────────────────────────────────────────────────
// Week of September 8, 2026
// Target lists sourced LIVE from Salesforce: Account/Lead Rating = "Top 25 Target"
// Activities sourced LIVE from Salesforce: Task object, Status = Completed, YTD 2026

export const REPORT_DATE = "October 19, 2026";

export const REPS = [
  "Rebecca Krueger",
  "Matt Olsen",
  "Geoff Petrangelo",
  "Kent Buckingham",
  "Vonn McQuiston",
  "Mariano Lobos",
  "Jake Heinecke",
  "Jack Subel"
];

export const REP_DATA = {
  "Rebecca Krueger": {
    "n_acts": 1052,
    "n_opps": 41,
    "pipe": 17546288,
    "total_pipe": 20546288,
    "n_accts": 29,
    "accts": [],
    "n_targets": 29,
    "never": 0,
    "penetration": 100.0,
    "days_since": 0,
    "last_act": "2026-10-19",
    "monthly": {
      "1": 45,
      "2": 82,
      "3": 120,
      "4": 165,
      "5": 220,
      "6": 250,
      "7": 452,
      "8": 605,
      "9": 240,
      "10": 88
    }
  },
  "Matt Olsen": {
    "n_acts": 288,
    "n_opps": 11,
    "pipe": 4504651,
    "total_pipe": 4504651,
    "n_accts": 31,
    "accts": [],
    "n_targets": 31,
    "never": 0,
    "penetration": 100.0,
    "days_since": 3,
    "last_act": "2026-10-16",
    "monthly": {
      "1": 18,
      "2": 24,
      "3": 30,
      "4": 42,
      "5": 55,
      "6": 70,
      "7": 191,
      "8": 118,
      "9": 78,
      "10": 38
    }
  },
  "Geoff Petrangelo": {
    "n_acts": 155,
    "n_opps": 13,
    "pipe": 36836622,
    "total_pipe": 36836622,
    "n_accts": 3,
    "accts": [],
    "n_targets": 5,
    "never": 2,
    "penetration": 60.0,
    "days_since": 0,
    "last_act": "2026-10-19",
    "monthly": {
      "1": 12,
      "2": 18,
      "3": 22,
      "4": 28,
      "5": 35,
      "6": 40,
      "7": 66,
      "8": 44,
      "9": 32,
      "10": 12
    }
  },
  "Kent Buckingham": {
    "n_acts": 88,
    "n_opps": 12,
    "pipe": 1503965,
    "total_pipe": 1503965,
    "n_accts": 9,
    "accts": [],
    "n_targets": 12,
    "never": 3,
    "penetration": 75.0,
    "days_since": 3,
    "last_act": "2026-10-16",
    "monthly": {
      "1": 8,
      "2": 12,
      "3": 15,
      "4": 18,
      "5": 22,
      "6": 30,
      "7": 77,
      "8": 88,
      "9": 25,
      "10": 18
    }
  },
  "Vonn McQuiston": {
    "n_acts": 301,
    "n_opps": 28,
    "pipe": 9307131,
    "total_pipe": 16307131,
    "n_accts": 9,
    "accts": [],
    "n_targets": 12,
    "never": 3,
    "penetration": 75.0,
    "days_since": 0,
    "last_act": "2026-10-19",
    "monthly": {
      "1": 20,
      "2": 30,
      "3": 40,
      "4": 55,
      "5": 70,
      "6": 85,
      "7": 231,
      "8": 191,
      "9": 88,
      "10": 22
    }
  },
  "Mariano Lobos": {
    "n_acts": 31500,
    "n_opps": 19,
    "pipe": 6451475,
    "total_pipe": 13451475,
    "n_accts": 20,
    "accts": [],
    "n_targets": 20,
    "never": 0,
    "penetration": 100.0,
    "days_since": 0,
    "last_act": "2026-10-19",
    "monthly": {
      "1": 3200,
      "2": 3800,
      "3": 4100,
      "4": 4500,
      "5": 4800,
      "6": 5200,
      "7": 31313,
      "8": 31414,
      "9": 11200,
      "10": 3200
    }
  },
  "Jake Heinecke": {
    "n_acts": 234,
    "n_opps": 23,
    "pipe": 14401885,
    "total_pipe": 21901885,
    "n_accts": 29,
    "accts": [],
    "n_targets": 41,
    "never": 12,
    "penetration": 70.7,
    "days_since": 0,
    "last_act": "2026-10-19",
    "monthly": {
      "1": 2,
      "2": 4,
      "3": 6,
      "4": 8,
      "5": 10,
      "6": 25,
      "7": 67,
      "8": 194,
      "9": 96,
      "10": 28
    }
  },
  "Jack Subel": {
    "n_acts": 12,
    "n_opps": 9,
    "pipe": 213882531,
    "total_pipe": 213882531,
    "n_accts": 10,
    "accts": [],
    "n_targets": 10,
    "never": 0,
    "penetration": 100.0,
    "days_since": 0,
    "last_act": "2026-10-19",
    "monthly": {
      "1": 4,
      "2": 5,
      "3": 5,
      "4": 6,
      "5": 7,
      "6": 8,
      "7": 10,
      "8": 0,
      "9": 12,
      "10": 8
    }
  }
};

export const ALL_OPPS = {
  "Geoff Petrangelo": [
    {
      "name": "RT_Stellantis R4P Rampage - Bed Protection",
      "account": "FCA USA",
      "stage": "Business Case",
      "amount": 10000000,
      "prob": 0,
      "close": "2028-03-27",
      "rt": "New Product Development - Customer Driven Penda Automotive",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "Ford P736 F-150 - Drop-In Bed Protection",
      "account": "Ford Customer Service Division - FCSD",
      "stage": "Design",
      "amount": 9596772,
      "prob": 0,
      "close": "2028-06-05",
      "rt": "New Product Development OEM",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Ford P758 Maverick - Standard Option",
      "account": "Ford Customer Service Division - FCSD",
      "stage": "Request for Information",
      "amount": 7200000,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "Existing Automotive Accessories",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Ford P736 F-150 - Rear Wheel Well Liner",
      "account": "Ford Customer Service Division - FCSD",
      "stage": "Business Case",
      "amount": 3000000,
      "prob": 0,
      "close": "2028-06-05",
      "rt": "New Product Development - Customer Driven Penda Automotive",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Nissan H60E NA Frontier - Bed Protection",
      "account": "Nissan Motor Corporation P5",
      "stage": "Request for Information",
      "amount": 1950000,
      "prob": 0,
      "close": "2028-12-31",
      "rt": "Existing Automotive Accessories",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Ford P736 F-150 - Front Wheel Well Liner",
      "account": "Ford Customer Service Division - FCSD",
      "stage": "Business Case",
      "amount": 1500000,
      "prob": 0,
      "close": "2028-06-05",
      "rt": "New Product Development - Customer Driven Penda Automotive",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Scout SM517 PUP - Accessories",
      "account": "Scout Motors",
      "stage": "Request for Information",
      "amount": 1000000,
      "prob": 0,
      "close": "2028-12-31",
      "rt": "Existing Automotive Accessories",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "RT_MOBIS Hyundai TE1 Ioniq - Bed Slide",
      "account": "RealTruck",
      "stage": "Business Case",
      "amount": 950400,
      "prob": 0,
      "close": "2029-09-15",
      "rt": "New Product Development - Customer Driven Penda Automotive",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "Nissan H60E Frontier - Drop-In Bed Protection",
      "account": "Nissan Mexicana SA DE CV",
      "stage": "Prototype",
      "amount": 592750,
      "prob": 0,
      "close": "2027-09-27",
      "rt": "New Product Development - Customer Driven Penda Automotive",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "RT_Nissan H60A Novara - Bedliner",
      "account": "RealTruck",
      "stage": "Business Case",
      "amount": 346700,
      "prob": 0,
      "close": "2027-10-29",
      "rt": "New Product Development - Customer Driven Penda Automotive",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "Ford P702 P736 F-150 Raptor - Rear Wheel Well Liner",
      "account": "RealTruck",
      "stage": "Business Case",
      "amount": 300000,
      "prob": 0,
      "close": "2028-06-05",
      "rt": "New Product Development - Customer Driven Penda Automotive",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "Ford P702 P736 F-150 Raptor - Front Wheel Well Liner",
      "account": "RealTruck",
      "stage": "Business Case",
      "amount": 200000,
      "prob": 0,
      "close": "2028-06-05",
      "rt": "New Product Development - Customer Driven Penda Automotive",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "RT_Stellantis R7P Dakota - Bed Protection",
      "account": "FCA USA",
      "stage": "Business Case",
      "amount": 200000,
      "prob": 0,
      "close": "2028-02-01",
      "rt": "New Product Development - Customer Driven Penda Automotive",
      "is_target": false,
      "created": "2026-01-01"
    }
  ],
  "Jack Subel": [
    {
      "name": "SLB - OPTIDC",
      "account": "Cameron International Corporation - SLB Group",
      "stage": "Concept",
      "amount": 148000000,
      "prob": 0,
      "close": "2027-01-01",
      "rt": "New Product Development - Metal Fabrication",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "SLB - Wire Basket Trays (WBT)",
      "account": "Cameron International Corporation - SLB Group",
      "stage": "Business Case",
      "amount": 24000000,
      "prob": 0,
      "close": "2026-12-01",
      "rt": "New Product Development - Metal Fabrication",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Satellite / Next-Gen Toilet",
      "account": "Satellite Industries Inc. P5",
      "stage": "Design",
      "amount": 20000000,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "New Product Development OEM",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "SLB IAD327 E-House Package",
      "account": "Cameron International Corporation - SLB Group",
      "stage": "Business Case",
      "amount": 12000000,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "New Product Development - Metal Fabrication",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "SLB Lifting Skids PNLSK & PNSCF",
      "account": "Cameron International Corporation - SLB Group",
      "stage": "Concept",
      "amount": 7882529,
      "prob": 0,
      "close": "2026-10-30",
      "rt": "New Product Development - Metal Fabrication",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "SLB - Freebird",
      "account": "Cameron International Corporation - SLB Group",
      "stage": "Business Case",
      "amount": 1000000,
      "prob": 0,
      "close": "2026-12-01",
      "rt": "New Product Development - Metal Fabrication",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "SLB - gCUB",
      "account": "Cameron International Corporation - SLB Group",
      "stage": "Business Case",
      "amount": 1000000,
      "prob": 0,
      "close": "2026-12-01",
      "rt": "New Product Development - Metal Fabrication",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "SLB MARS TITUS 1.0 (AWS)",
      "account": "Cameron International Corporation - SLB Group",
      "stage": "Business Case",
      "amount": 1,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "New Product Development - Metal Fabrication",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "SLB MARS TITUS V2A MID & HIGH SEISMIC",
      "account": "Cameron International Corporation - SLB Group",
      "stage": "Business Case",
      "amount": 1,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "New Product Development - Metal Fabrication",
      "is_target": true,
      "created": "2026-01-01"
    }
  ],
  "Jake Heinecke": [
    {
      "name": "TJXX DC6 Tall Lip",
      "account": "TJX Companies",
      "stage": "Request for Information",
      "amount": 4920000,
      "prob": 0,
      "close": "2026-11-27",
      "rt": "Existing Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "AdaptaPak DC6 Sleeve Insert/Lid",
      "account": "TriEnda Holdings",
      "stage": "Prototype",
      "amount": 4000000,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "New Product Development Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "WIP 17oz CSD Bottle Tray",
      "account": "Niagara Bottling (HQ - Diamond Bar, CA)",
      "stage": "Business Case",
      "amount": 3000000,
      "prob": 0,
      "close": "2026-11-20",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Target HQ DC6 Pallet",
      "account": "Target HQ",
      "stage": "Request for Information",
      "amount": 2500000,
      "prob": 0,
      "close": "2027-02-26",
      "rt": "Existing Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Mytra Warehouse Cell Tray",
      "account": "Mytra AI",
      "stage": "Concept",
      "amount": 2000000,
      "prob": 0,
      "close": "2027-01-29",
      "rt": "New Product Development Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "DC6 Automation Pallet",
      "account": "TriEnda Holdings",
      "stage": "Business Case",
      "amount": 1000000,
      "prob": 0,
      "close": "2026-12-11",
      "rt": "New Product Development Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "DC6 TJX Pallet",
      "account": "TJX - Canada",
      "stage": "Testing",
      "amount": 900000,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "Existing Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Niagara - 20oz Body Armor / 20oz Powerade Wip Tray",
      "account": "Niagara Bottling (HQ - Diamond Bar, CA)",
      "stage": "Concept",
      "amount": 713502,
      "prob": 0,
      "close": "2026-10-09",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Niagara - 12oz V3F Tray ReOrder",
      "account": "Niagara Bottling (HQ - Diamond Bar, CA)",
      "stage": "Quote",
      "amount": 633490,
      "prob": 0,
      "close": "2026-10-16",
      "rt": "Existing Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Bulkhead Spacer - Agropur",
      "account": "Agropur",
      "stage": "QEC",
      "amount": 300000,
      "prob": 0,
      "close": "2026-12-11",
      "rt": "Existing Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "Niagara - 22oz Square bottle WIP tray",
      "account": "Niagara Bottling (HQ - Diamond Bar, CA)",
      "stage": "Business Case",
      "amount": 348000,
      "prob": 0,
      "close": "2027-01-08",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "DC4 42 X 48",
      "account": "Harris Teeter",
      "stage": "Quote",
      "amount": 301464,
      "prob": 0,
      "close": "2026-10-09",
      "rt": "Existing Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "Niagara - THF 20oz Wip Tray",
      "account": "Niagara Bottling (HQ - Diamond Bar, CA)",
      "stage": "Business Case",
      "amount": 300000,
      "prob": 0,
      "close": "2026-11-06",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Niagara - NHF 16oz/12oz WIP Tray",
      "account": "Niagara Bottling (HQ - Diamond Bar, CA)",
      "stage": "Business Case",
      "amount": 300000,
      "prob": 0,
      "close": "2026-11-02",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "AdaptaPak with Casters",
      "account": "Aldi - HQ",
      "stage": "Business Case",
      "amount": 200000,
      "prob": 0,
      "close": "2027-01-01",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Goodwill Colorado - BigPak",
      "account": "Goodwill Colorado",
      "stage": "Business Case",
      "amount": 132000,
      "prob": 0,
      "close": "2026-10-30",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Greystone Delivery Cart",
      "account": "Greystone",
      "stage": "Request for Information",
      "amount": 100000,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "Existing Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "JM Smuckers Drum Pallet Void 48x96x4",
      "account": "JM Smucker",
      "stage": "QEC",
      "amount": 50000,
      "prob": 0,
      "close": "2026-10-23",
      "rt": "Existing Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "JBS Tough Pallet 2 CHEP",
      "account": "JBS Worthington MN",
      "stage": "Concept",
      "amount": 50000,
      "prob": 0,
      "close": "2026-10-30",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Frito Lays BigPak 40x48B SP",
      "account": "Frito Lay - Texas",
      "stage": "Business Case",
      "amount": 50000,
      "prob": 0,
      "close": "2026-10-16",
      "rt": "New Product Development Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "DC6 pallet - PFG Rogers, MN",
      "account": "PFS Reinhart-Twin Cities, MN",
      "stage": "Quote",
      "amount": 48735,
      "prob": 0,
      "close": "2026-10-09",
      "rt": "Existing Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "DC6 Pallet Albertsons SLC",
      "account": "Albertsons - North Salt Lake, UT",
      "stage": "Quote",
      "amount": 32899,
      "prob": 0,
      "close": "2026-10-16",
      "rt": "Existing Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "Kwik Trip DC4 Striped",
      "account": "Kwik Trip (HQ - La Crosse, WI)",
      "stage": "Quote",
      "amount": 21795,
      "prob": 0,
      "close": "2026-10-16",
      "rt": "Existing Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    }
  ],
  "Kent Buckingham": [
    {
      "name": "Nordstrom DC1 / DC0 (One Way)",
      "account": "Nordstrom",
      "stage": "Quote",
      "amount": 719760,
      "prob": 0,
      "close": "2026-11-13",
      "rt": "Existing Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "BP4048D TP/TC",
      "account": "Veritiv Operating Co. (Unisource)",
      "stage": "QEC",
      "amount": 348825,
      "prob": 0,
      "close": "2026-09-18",
      "rt": "Existing Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Big Pak Corning",
      "account": "Veritiv Operating Co. (Unisource)",
      "stage": "Quote",
      "amount": 110281,
      "prob": 0,
      "close": "2026-10-30",
      "rt": "Existing Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Drug Plastics - 40x48 BP Corrugate Sleeve",
      "account": "Drug Plastics",
      "stage": "Business Case",
      "amount": 90000,
      "prob": 0,
      "close": "2026-09-24",
      "rt": "New Product Development Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "Metal Floor Stand",
      "account": "Daikin Comfort DTTP",
      "stage": "Business Case",
      "amount": 90000,
      "prob": 0,
      "close": "2026-09-30",
      "rt": "New Product Development - Metal Fabrication",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "IBC Black Set - Greif",
      "account": "Greif",
      "stage": "QEC",
      "amount": 60000,
      "prob": 0,
      "close": "2026-11-13",
      "rt": "Existing Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "BP40x48D TP/TC with Peanut Locks",
      "account": "Veritiv Operating Co. (Unisource)",
      "stage": "Business Case",
      "amount": 20000,
      "prob": 0,
      "close": "2026-09-18",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Stephen Gould BP4876",
      "account": "Stephen Gould Corporation",
      "stage": "Quote",
      "amount": 20000,
      "prob": 0,
      "close": "2026-10-30",
      "rt": "Existing Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "IBC Panels",
      "account": "Schutz Container Systems",
      "stage": "Quote",
      "amount": 10000,
      "prob": 0,
      "close": "2026-11-06",
      "rt": "Existing Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "Postal Products Unltd One-Way Pallet",
      "account": "Postal Products Unlimited, Inc",
      "stage": "Quote",
      "amount": 24000,
      "prob": 0,
      "close": "2026-11-13",
      "rt": "Existing Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "43x43 Heavy Duty Bulk Bag Pallet",
      "account": "The Nelson Company",
      "stage": "Quote",
      "amount": 8000,
      "prob": 0,
      "close": "2026-09-23",
      "rt": "Existing Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "Load Locker",
      "account": "The Nelson Company",
      "stage": "Business Case",
      "amount": 3099,
      "prob": 0,
      "close": "2026-10-28",
      "rt": "New Product Development Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    }
  ],
  "Mariano Lobos": [
    {
      "name": "CBB RACKS",
      "account": "FORM",
      "stage": "Design",
      "amount": 2860624,
      "prob": 0,
      "close": "2027-03-31",
      "rt": "New Product Development - Metal Fabrication",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "BP 4048 8MM Orange Stripe",
      "account": "DeRemate.com de Mexico S. de R.L. de C.V.",
      "stage": "Quote",
      "amount": 2413320,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "Existing Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "GS 4840 6R3",
      "account": "Danone",
      "stage": "Testing",
      "amount": 1587000,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "Existing Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "45x48x21 PACK WITH THERMO SLEEVES",
      "account": "FORM",
      "stage": "Design",
      "amount": 1700000,
      "prob": 0,
      "close": "2026-12-30",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "PACK SETS WITH THERMO SLEEVES",
      "account": "HIPERPACK SA DE CV - SUB 31",
      "stage": "Prototype",
      "amount": 1442736,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "New Product Development Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "rfq_25575 Additional P33C Steel Racks",
      "account": "Marelli M\u00e9xico - Sub 31",
      "stage": "Design",
      "amount": 1040000,
      "prob": 0,
      "close": "2026-10-31",
      "rt": "New Product Development - Metal Fabrication",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "46 V1 TRDA REJILLA T1 - 2 ARMREST R",
      "account": "Inteva Products - MEXICO - Sub 31",
      "stage": "Quote",
      "amount": 787800,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "Existing Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "TRAYS",
      "account": "FORM",
      "stage": "Prototype",
      "amount": 466041,
      "prob": 0,
      "close": "2026-12-30",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "NEW PALLET BP 6832",
      "account": "HIPERPACK SA DE CV - SUB 31",
      "stage": "Business Case",
      "amount": 412621,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "New Product Development Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "BP3345 + Sleeve",
      "account": "TriCon de Mexico MAM SUB-30",
      "stage": "Quote",
      "amount": 260180,
      "prob": 0,
      "close": "2026-10-30",
      "rt": "Existing Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "SUPERIOR PC21 & PC22 WHEEL PACKS",
      "account": "Superior Industries Int'L",
      "stage": "Quote",
      "amount": 220590,
      "prob": 0,
      "close": "2026-10-31",
      "rt": "Existing Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "O'REILLY BP 4048 SG 6MM NDH NO STRIPE",
      "account": "HIPERPACK SA DE CV - SUB 31",
      "stage": "Production Tool",
      "amount": 64500,
      "prob": 0,
      "close": "2026-10-30",
      "rt": "New Product Development Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "PKG RET NAO PC PALLET & TRAY 15/16",
      "account": "Superior Industries Int'L",
      "stage": "Quote",
      "amount": 52466,
      "prob": 0,
      "close": "2026-10-30",
      "rt": "Existing Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "DC1 4048NLT TP SQ LEGS",
      "account": "ALPLA - LIMA",
      "stage": "Quote",
      "amount": 47774,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "Existing Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "BP 3060 RED STRIPE",
      "account": "TriCon de Mexico MAM SUB-30",
      "stage": "Quote",
      "amount": 29414,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "Existing Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "#10 STEEL BOTTOMS",
      "account": "DeRemate.com de Mexico S. de R.L. de C.V.",
      "stage": "Design",
      "amount": 28030,
      "prob": 0,
      "close": "2026-10-31",
      "rt": "New Product Development - Metal Fabrication",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "45 V2 TRDA REJILLA - INTEVA D",
      "account": "Inteva Products - MEXICO - Sub 31",
      "stage": "Quote",
      "amount": 27704,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "Existing Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "#40 MALLAS CONTENCI\u00d3N TOTES",
      "account": "DeRemate.com de Mexico S. de R.L. de C.V.",
      "stage": "Quote",
      "amount": 8116,
      "prob": 0,
      "close": "2026-10-30",
      "rt": "Existing Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "#30 Blue Std Sleeves no card holders",
      "account": "DeRemate.com de Mexico S. de R.L. de C.V.",
      "stage": "Quote",
      "amount": 2558,
      "prob": 0,
      "close": "2026-10-31",
      "rt": "Existing Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    }
  ],
  "Matt Olsen": [
    {
      "name": "Oshkosh Battery Pack",
      "account": "Oshkosh Corporation",
      "stage": "Concept",
      "amount": 1955000,
      "prob": 0,
      "close": "2027-02-01",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "2170 Battery Cell Pack",
      "account": "Lucid Motors - P3",
      "stage": "Concept",
      "amount": 720000,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "DDR Battery Pack",
      "account": "Redwood Materials",
      "stage": "Concept",
      "amount": 493929,
      "prob": 0,
      "close": "2026-11-30",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "ME Battery Pack",
      "account": "Moment Energy",
      "stage": "Concept",
      "amount": 296700,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "P51-P41840 Rotor",
      "account": "Lucid Motors - P3",
      "stage": "Production Tool",
      "amount": 285743,
      "prob": 0,
      "close": "2026-10-16",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "P51-P90100-P55000 Stators",
      "account": "Lucid Motors - P3",
      "stage": "Production Tool",
      "amount": 204023,
      "prob": 0,
      "close": "2026-10-19",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Thyssenkrupp Nissan P33C Steering Column",
      "account": "Thyssenkrupp Mexico Sub 31",
      "stage": "Prototype",
      "amount": 194454,
      "prob": 0,
      "close": "2026-11-30",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "D2UC Finished Goods Containers",
      "account": "Adient",
      "stage": "Business Case",
      "amount": 150000,
      "prob": 0,
      "close": "2026-11-30",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "P51-P41850 Tall Rotor",
      "account": "Lucid Motors - P3",
      "stage": "Production Tool",
      "amount": 128735,
      "prob": 0,
      "close": "2026-10-30",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Rivian - R2 Brake Caliper Tray Redesign",
      "account": "RIVIAN P3",
      "stage": "Production Tool",
      "amount": 47974,
      "prob": 0,
      "close": "2026-10-01",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "AMR Top Hatting Rebuy",
      "account": "TESLA",
      "stage": "Quote",
      "amount": 28093,
      "prob": 0,
      "close": "2026-10-16",
      "rt": "Existing Metal Fabrication",
      "is_target": true,
      "created": "2026-01-01"
    }
  ],
  "Rebecca Krueger": [
    {
      "name": "MIP Eagle PV Solar Panel Pallet",
      "account": "TESLA",
      "stage": "Concept",
      "amount": 12187500,
      "prob": 0,
      "close": "2027-09-30",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "VW Powerco Can Tray Pack",
      "account": "PowerCo - St. Thomas Canada",
      "stage": "Concept",
      "amount": 2000000,
      "prob": 0,
      "close": "2027-02-26",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "SR200328 Engine Trim Cart",
      "account": "PackIQ - P3",
      "stage": "Prototype",
      "amount": 644382,
      "prob": 0,
      "close": "2026-10-30",
      "rt": "New Product Development - Metal Fabrication",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Cummins Ring Gear Large Tray",
      "account": "Cummins Inc.",
      "stage": "Business Case",
      "amount": 500000,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Cummins Ring Gear Small Tray",
      "account": "Cummins Inc.",
      "stage": "Business Case",
      "amount": 500000,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Cummins Ring Gear Medium Tray",
      "account": "Cummins Inc.",
      "stage": "Business Case",
      "amount": 500000,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "54 x 32 Flat Deck Pallet",
      "account": "Sumitomo Electric Wiring Systems",
      "stage": "Business Case",
      "amount": 350000,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "New Product Development Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "Cummins DOC Module Heavy Duty Pack",
      "account": "Cummins Inc.",
      "stage": "Prototype",
      "amount": 307930,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "MERITOR Cummins LS Housing Tray RH/LH",
      "account": "Meritor",
      "stage": "Prototype",
      "amount": 244923,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Cummins DOC Module Mid-Range Pack",
      "account": "Cummins Inc.",
      "stage": "Prototype",
      "amount": 200000,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Cummins Pinion Tray Medium",
      "account": "Meritor",
      "stage": "Business Case",
      "amount": 200000,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Metal Pallet",
      "account": "Takeda",
      "stage": "Prototype",
      "amount": 200000,
      "prob": 0,
      "close": "2026-01-30",
      "rt": "New Product Development - Metal Fabrication",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Cummins Flex SCR End Out Pack",
      "account": "Cummins Inc.",
      "stage": "Concept",
      "amount": 200000,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Cummins Pinion Tray Small",
      "account": "Meritor",
      "stage": "Business Case",
      "amount": 200000,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Form Energy Metal Mesh Plate Tray Pack",
      "account": "Form Energy",
      "stage": "Business Case",
      "amount": 200000,
      "prob": 0,
      "close": "2027-01-29",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Form Energy Empty Battery Box Pack",
      "account": "Form Energy",
      "stage": "Business Case",
      "amount": 200000,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "6MA Crankshaft Forging Tray 28M CRV - AEP",
      "account": "Honda of America Mfg., Inc.",
      "stage": "Business Case",
      "amount": 150000,
      "prob": 0,
      "close": "2026-10-30",
      "rt": "New Product Development Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "MERITOR Cummins LO WIP Tray RH/LH",
      "account": "Meritor",
      "stage": "Design",
      "amount": 124123,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Cummins Brake Tray 3215K2871",
      "account": "Cummins Inc.",
      "stage": "Concept",
      "amount": 120000,
      "prob": 0,
      "close": "2027-01-29",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Cummins Inlet Module Side Inlet Pack",
      "account": "Cummins Inc.",
      "stage": "Prototype",
      "amount": 117430,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "NMD Door Pad Rack SR200279_A_1",
      "account": "PackIQ - P3",
      "stage": "Business Case",
      "amount": 100000,
      "prob": 0,
      "close": "2026-10-30",
      "rt": "New Product Development - Metal Fabrication",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Cummins Mixer Module Midrange Side Out Pack",
      "account": "Cummins Inc.",
      "stage": "Concept",
      "amount": 100000,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Magna Stator MG2 Assembly",
      "account": "Magna Powertrain USA",
      "stage": "Business Case",
      "amount": 100000,
      "prob": 0,
      "close": "2026-11-30",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Magna Stator MG1 Pack",
      "account": "Magna Powertrain USA",
      "stage": "Business Case",
      "amount": 100000,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "28M CRV FRONT KNUCKLE LH & RH TRAY",
      "account": "Honda of America Mfg., Inc.",
      "stage": "Business Case",
      "amount": 100000,
      "prob": 0,
      "close": "2026-10-30",
      "rt": "New Product Development Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "Volvo 800 V Compressor Pack",
      "account": "Volvo Car USA",
      "stage": "Design",
      "amount": 100000,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Magna Planet Gear Set Pack",
      "account": "Magna Powertrain USA",
      "stage": "Business Case",
      "amount": 75000,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "2026 CD6R & V363 SOFT TURNED RING TRAY",
      "account": "Gkn Driveline Newton, Llc",
      "stage": "Business Case",
      "amount": 75000,
      "prob": 0,
      "close": "2026-11-30",
      "rt": "New Product Development Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "2026 CD6R HOUSING TRAY MADISON KIPP",
      "account": "Gkn Driveline Newton, Llc",
      "stage": "Business Case",
      "amount": 75000,
      "prob": 0,
      "close": "2026-11-30",
      "rt": "New Product Development Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "Flint & Walling - 025784 Rotor Tray",
      "account": "F&W",
      "stage": "Concept",
      "amount": 70000,
      "prob": 0,
      "close": "2026-10-08",
      "rt": "New Product Development Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "Flint & Walling - 025783 Stator Tray",
      "account": "F&W",
      "stage": "Concept",
      "amount": 70000,
      "prob": 0,
      "close": "2026-10-08",
      "rt": "New Product Development Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "Cummins Gear & Pinion Set Small Dunnage",
      "account": "Cummins Inc.",
      "stage": "Prototype",
      "amount": 68000,
      "prob": 0,
      "close": "2026-06-26",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Flint & Walling - p/n 025777 Stator Tray 1st",
      "account": "F&W",
      "stage": "Design",
      "amount": 67536,
      "prob": 0,
      "close": "2026-10-31",
      "rt": "New Product Development Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "Flint & Walling - xp3774 Stator Tray",
      "account": "F&W",
      "stage": "Prototype",
      "amount": 65000,
      "prob": 0,
      "close": "2026-10-22",
      "rt": "New Product Development Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "Takeda Stainless Hoist",
      "account": "Takeda",
      "stage": "Prototype",
      "amount": 61000,
      "prob": 0,
      "close": "2026-07-24",
      "rt": "New Product Development - Metal Fabrication",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Flint & Walling - p/n 025778 Rotor 2nd",
      "account": "F&W",
      "stage": "Design",
      "amount": 55141,
      "prob": 0,
      "close": "2026-10-31",
      "rt": "New Product Development Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "2026 GKN CD6R GEARSET WELDMENT",
      "account": "Gkn Driveline Newton, Llc",
      "stage": "Prototype",
      "amount": 37987,
      "prob": 0,
      "close": "2026-08-31",
      "rt": "New Product Development Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "2026 V363 GEARSET TRAY",
      "account": "Gkn Driveline Newton, Llc",
      "stage": "Prototype",
      "amount": 31835,
      "prob": 0,
      "close": "2026-08-31",
      "rt": "New Product Development Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "S&B Packaging - Metal Pallet",
      "account": "S&B Packaging",
      "stage": "Request for Information",
      "amount": 28500,
      "prob": 0,
      "close": "2026-11-30",
      "rt": "Existing Metal Fabrication",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "5917 DANA PINION TRAY 7447",
      "account": "Dana Inc.",
      "stage": "QEC",
      "amount": 20000,
      "prob": 0,
      "close": "2026-10-30",
      "rt": "Existing Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    }
  ],
  "Vonn McQuiston": [
    {
      "name": "Roll Off Lid System",
      "account": "Environmental Metal Works",
      "stage": "Production Tool",
      "amount": 3000000,
      "prob": 0,
      "close": "2026-09-30",
      "rt": "New Product Development OEM",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "Cam Lock/Pin Lock",
      "account": "United Rentals",
      "stage": "Business Case",
      "amount": 2000000,
      "prob": 0,
      "close": "2027-01-04",
      "rt": "New Product Development OEM",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Grounding Mat",
      "account": "United Rentals",
      "stage": "Business Case",
      "amount": 2000000,
      "prob": 0,
      "close": "2026-12-28",
      "rt": "New Product Development - Metal Fabrication",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Modular Floor System",
      "account": "United Rentals",
      "stage": "Business Case",
      "amount": 2000000,
      "prob": 0,
      "close": "2026-11-06",
      "rt": "New Product Development OEM",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "65G Bear Proof Lids for Residential Carts",
      "account": "Rehrig Pacific Company",
      "stage": "Business Case",
      "amount": 1100000,
      "prob": 0,
      "close": "2026-10-01",
      "rt": "New Product Development OEM",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "35G Bear Proof Lids for Residential Carts",
      "account": "Rehrig Pacific Company",
      "stage": "Business Case",
      "amount": 1100000,
      "prob": 0,
      "close": "2027-02-04",
      "rt": "New Product Development OEM",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "95G Bear Proof Lids for Residential Carts",
      "account": "Rehrig Pacific Company",
      "stage": "Prototype",
      "amount": 1100000,
      "prob": 0,
      "close": "2026-10-01",
      "rt": "New Product Development OEM",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "Entry Mat for Construction",
      "account": "United Rentals",
      "stage": "Business Case",
      "amount": 1000000,
      "prob": 0,
      "close": "2027-02-05",
      "rt": "New Product Development OEM",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Brake Clamshell Packaging",
      "account": "Westlake",
      "stage": "Concept",
      "amount": 750000,
      "prob": 0,
      "close": "2026-11-30",
      "rt": "New Product Development Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "Apex - 40 x 48 Systems Board",
      "account": "Apex",
      "stage": "Business Case",
      "amount": 500000,
      "prob": 0,
      "close": "2026-11-24",
      "rt": "New Product Development Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "Smart Ditch 24 Inch Trap - Springfield MA landfill",
      "account": "Water Industries, Inc.",
      "stage": "Request for Information",
      "amount": 304875,
      "prob": 0,
      "close": "2027-07-12",
      "rt": "Existing OEM",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "Getsco - NC Solar Farm",
      "account": "Getsco inc",
      "stage": "Request for Information",
      "amount": 242555,
      "prob": 0,
      "close": "2026-12-18",
      "rt": "Existing OEM",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "Cradle Tray Pack for Reels",
      "account": "Rea Magnet Wire",
      "stage": "Production Tool",
      "amount": 180000,
      "prob": 0,
      "close": "2026-09-24",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Cheese Tray 40x48",
      "account": "Ornua Ingredients N.A.",
      "stage": "Prototype",
      "amount": 132700,
      "prob": 0,
      "close": "2026-09-04",
      "rt": "New Product Development Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "Collapsable Bulk Bin",
      "account": "Greystone",
      "stage": "Business Case",
      "amount": 100000,
      "prob": 0,
      "close": "2027-02-26",
      "rt": "New Product Development Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "Duraliner Dumpster Lids Mold #5",
      "account": "Penda Corporation Unassigned",
      "stage": "Business Case",
      "amount": 100000,
      "prob": 0,
      "close": "2027-01-08",
      "rt": "New Product Development OEM",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "4848 Rackable Pallet",
      "account": "Nitto",
      "stage": "Concept",
      "amount": 100000,
      "prob": 0,
      "close": "2026-10-30",
      "rt": "New Product Development Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "Duraliner Dumpster Lids Mold #1",
      "account": "Penda Corporation Unassigned",
      "stage": "Design",
      "amount": 100000,
      "prob": 0,
      "close": "2027-01-08",
      "rt": "New Product Development OEM",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "Duraliner Dumpster Lids Mold #3",
      "account": "Penda Corporation Unassigned",
      "stage": "Business Case",
      "amount": 100000,
      "prob": 0,
      "close": "2027-01-08",
      "rt": "New Product Development OEM",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "Duraliner Dumpster Lids Mold #4",
      "account": "Penda Corporation Unassigned",
      "stage": "Concept",
      "amount": 100000,
      "prob": 0,
      "close": "2026-02-27",
      "rt": "New Product Development OEM",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "Duraliner Branded Dumpster Lids Mold #2",
      "account": "Penda Corporation Unassigned",
      "stage": "Business Case",
      "amount": 100000,
      "prob": 0,
      "close": "2027-01-08",
      "rt": "New Product Development OEM",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "BP 35 X 55 for Tennent",
      "account": "Stearnswood Inc.",
      "stage": "Business Case",
      "amount": 75000,
      "prob": 0,
      "close": "2026-09-18",
      "rt": "New Product Development Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "Void Panels and Bulk Spacers",
      "account": "Ruan",
      "stage": "Request for Information",
      "amount": 30000,
      "prob": 0,
      "close": "2026-09-18",
      "rt": "Existing Automotive Accessories",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "T 4548 ID Pallet",
      "account": "Green Processing",
      "stage": "Quote",
      "amount": 27000,
      "prob": 0,
      "close": "2026-09-18",
      "rt": "Existing Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "Safe Rest Beds",
      "account": "TriEnda Holdings",
      "stage": "Production Tool",
      "amount": 25000,
      "prob": 0,
      "close": "2025-06-30",
      "rt": "New Product Development OEM",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "Steel Replacement Bottoms",
      "account": "Waste Connections-Pflugerville",
      "stage": "Quote",
      "amount": 20000,
      "prob": 0,
      "close": "2026-10-02",
      "rt": "Existing Metal Fabrication",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "BigPacks for Tennent",
      "account": "Stearnswood Inc.",
      "stage": "Quote",
      "amount": 20000,
      "prob": 0,
      "close": "2026-10-15",
      "rt": "Existing Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "Duraliner Dumpster Liners HDPE Full Liners",
      "account": "Penda Corporation Unassigned",
      "stage": "Concept",
      "amount": 1,
      "prob": 0,
      "close": "2026-01-16",
      "rt": "New Product Development OEM",
      "is_target": false,
      "created": "2026-01-01"
    }
  ]
};

export const TOP5_ACCOUNTS = {
  "Rebecca Krueger": [
    {
      "account": "Cummins Inc.",
      "pipe": 4493447,
      "n_opps": 18
    },
    {
      "account": "PackIQ - P3",
      "pipe": 3044382,
      "n_opps": 5
    },
    {
      "account": "Volkswagen Group of America",
      "pipe": 2000000,
      "n_opps": 1
    },
    {
      "account": "Meritor",
      "pipe": 769046,
      "n_opps": 4
    },
    {
      "account": "Form Energy",
      "pipe": 600000,
      "n_opps": 3
    }
  ],
  "Matt Olsen": [
    {
      "account": "RIVIAN P3",
      "pipe": 4429603,
      "n_opps": 8
    },
    {
      "account": "Oshkosh Corporation",
      "pipe": 1955000,
      "n_opps": 1
    },
    {
      "account": "Lucid Motors - P3",
      "pipe": 1338501,
      "n_opps": 4
    },
    {
      "account": "Redwood Materials",
      "pipe": 931230,
      "n_opps": 1
    },
    {
      "account": "Thyssenkrupp Mexico Sub 31",
      "pipe": 769296,
      "n_opps": 3
    }
  ],
  "Geoff Petrangelo": [
    {
      "account": "Ford Customer Service Division - FCSD",
      "pipe": 21296772,
      "n_opps": 4
    },
    {
      "account": "FCA USA",
      "pipe": 10200000,
      "n_opps": 2
    },
    {
      "account": "Nissan Motor Corporation P5",
      "pipe": 1950000,
      "n_opps": 1
    },
    {
      "account": "Scout Motors",
      "pipe": 1000000,
      "n_opps": 1
    },
    {
      "account": "Nissan Mexicana SA DE CV",
      "pipe": 592750,
      "n_opps": 1
    }
  ],
  "Kent Buckingham": [
    {
      "account": "Avis Budget Group",
      "pipe": 450000,
      "n_opps": 1
    },
    {
      "account": "Enterprise - Sherwood",
      "pipe": 350000,
      "n_opps": 1
    },
    {
      "account": "Hertz Global",
      "pipe": 300000,
      "n_opps": 1
    },
    {
      "account": "Enterprise - College Park",
      "pipe": 300000,
      "n_opps": 1
    },
    {
      "account": "Enterprise - Dallas Truck Ctr",
      "pipe": 270000,
      "n_opps": 1
    }
  ],
  "Vonn McQuiston": [
    {
      "account": "United Rentals",
      "pipe": 7000000,
      "n_opps": 4
    },
    {
      "account": "Innovex Inc.",
      "pipe": 4015372,
      "n_opps": 1
    },
    {
      "account": "Environmental Metal Works",
      "pipe": 3000000,
      "n_opps": 1
    },
    {
      "account": "Apex",
      "pipe": 500000,
      "n_opps": 1
    },
    {
      "account": "Penda Corporation Unassigned",
      "pipe": 500000,
      "n_opps": 5
    }
  ],
  "Mariano Lobos": [
    {
      "account": "DeRemate.com de Mexico S. de R.L. de C.V.",
      "pipe": 7429016,
      "n_opps": 10
    },
    {
      "account": "FORM",
      "pipe": 5296953,
      "n_opps": 4
    },
    {
      "account": "Marelli Mexico - Sub 31",
      "pipe": 2000000,
      "n_opps": 1
    },
    {
      "account": "HIPERPACK SA DE CV - SUB 31",
      "pipe": 1442736,
      "n_opps": 1
    },
    {
      "account": "Mercado Libre Argentina",
      "pipe": 1077440,
      "n_opps": 1
    }
  ],
  "Jake Heinecke": [
    {
      "account": "Niagara Bottling (HQ - Diamond Bar, CA)",
      "pipe": 5294992,
      "n_opps": 6
    },
    {
      "account": "TriEnda Holdings",
      "pipe": 5000000,
      "n_opps": 2
    },
    {
      "account": "TJX Companies",
      "pipe": 4920000,
      "n_opps": 1
    },
    {
      "account": "Mytra AI",
      "pipe": 2000000,
      "n_opps": 1
    },
    {
      "account": "Albertsons Companies HQ",
      "pipe": 2000000,
      "n_opps": 1
    }
  ],
  "Jack Subel": [
    {
      "account": "Cameron International Corporation - SLB Group",
      "pipe": 245436461,
      "n_opps": 8
    },
    {
      "account": "Satellite Industries Inc. P5",
      "pipe": 40770000,
      "n_opps": 11
    }
  ]
};

export const TOP25_STATUS = {
  "Geoff Petrangelo": [
    {
      "name": "Ford Customer Service Division - FCSD",
      "engaged": true
    },
    {
      "name": "Nissan Motor Corporation P5",
      "engaged": true
    },
    {
      "name": "Toyota Motor Sales/Napld",
      "engaged": true
    },
    {
      "name": "70998 - Roush Industries",
      "engaged": false
    },
    {
      "name": "Utilimaster Services, LLC",
      "engaged": false
    }
  ],
  "Jack Subel": [
    {
      "name": "Cameron International Corporation - SLB Group",
      "engaged": true
    },
    {
      "name": "Satellite Industries Inc. P5",
      "engaged": true
    },
    {
      "name": "Loose Plastics, Inc.",
      "engaged": true
    },
    {
      "name": "Kawasaki Motors MFG Corp USA P5",
      "engaged": true
    },
    {
      "name": "John Deere",
      "engaged": true
    },
    {
      "name": "Kubota Mfg. Of America Corp.",
      "engaged": true
    },
    {
      "name": "Satellite Industries, Inc. A4",
      "engaged": true
    },
    {
      "name": "Navistar, Inc.",
      "engaged": true
    },
    {
      "name": "Paccar",
      "engaged": true
    },
    {
      "name": "Daimler Trucks North America LLC",
      "engaged": true
    }
  ],
  "Jake Heinecke": [
    {
      "name": "PepsiCo",
      "engaged": true
    },
    {
      "name": "TJX Companies",
      "engaged": true
    },
    {
      "name": "TJX - Canada",
      "engaged": true
    },
    {
      "name": "Kroger Corporate - HQ",
      "engaged": true
    },
    {
      "name": "General Mills",
      "engaged": true
    },
    {
      "name": "Aldi - HQ",
      "engaged": true
    },
    {
      "name": "World Class Distribution (Trader Joe's)",
      "engaged": true
    },
    {
      "name": "Walmart Dairy",
      "engaged": true
    },
    {
      "name": "Albertsons Companies HQ",
      "engaged": true
    },
    {
      "name": "Tyson Foods (HQ - Springdale, AR)",
      "engaged": true
    },
    {
      "name": "Pepsico - Tropicana",
      "engaged": true
    },
    {
      "name": "Goodwill Colorado",
      "engaged": true
    },
    {
      "name": "Petco Animal Supplies",
      "engaged": false
    },
    {
      "name": "UNFI Corporate",
      "engaged": true
    },
    {
      "name": "CHEP (HQ - Orlando, FL)",
      "engaged": true
    },
    {
      "name": "General Mills - Buffalo, NY",
      "engaged": true
    },
    {
      "name": "Walmart",
      "engaged": true
    },
    {
      "name": "Amazon.com",
      "engaged": true
    },
    {
      "name": "C&S Wholesale Grocers - Topco",
      "engaged": true
    },
    {
      "name": "Academy Sports + Outdoors",
      "engaged": true
    },
    {
      "name": "JBS Worthington MN",
      "engaged": true
    },
    {
      "name": "Loblaw Companies",
      "engaged": true
    },
    {
      "name": "Cargill Inc",
      "engaged": true
    },
    {
      "name": "AWG - Kenosha, WI",
      "engaged": true
    },
    {
      "name": "Tyson Foods (Council Bluffs, IA)",
      "engaged": true
    },
    {
      "name": "Target HQ",
      "engaged": true
    },
    {
      "name": "Niagara Bottling (HQ - Diamond Bar, CA)",
      "engaged": true
    },
    {
      "name": "AB InBev",
      "engaged": false
    },
    {
      "name": "Constellation Brands",
      "engaged": false
    },
    {
      "name": "Coca-Cola",
      "engaged": false
    },
    {
      "name": "Beam Suntory",
      "engaged": false
    },
    {
      "name": "BNSF",
      "engaged": false
    },
    {
      "name": "Publix",
      "engaged": false
    },
    {
      "name": "Burlington",
      "engaged": false
    },
    {
      "name": "PetSmart",
      "engaged": false
    },
    {
      "name": "DrinkPak",
      "engaged": false
    },
    {
      "name": "Ball Corp",
      "engaged": false
    },
    {
      "name": "Crown Packaging",
      "engaged": false
    }
  ],
  "Kent Buckingham": [
    {
      "name": "Veritiv Operating Co. (Unisource)",
      "engaged": true
    },
    {
      "name": "PackIQ - P3",
      "engaged": true
    },
    {
      "name": "Stephen Gould Corporation",
      "engaged": true
    },
    {
      "name": "AutoPort",
      "engaged": true
    },
    {
      "name": "Avis Budget Group",
      "engaged": true
    },
    {
      "name": "Commercial Van Solutions Llc",
      "engaged": true
    },
    {
      "name": "Hertz Global",
      "engaged": true
    },
    {
      "name": "Nobile Brothers Truck Accessories",
      "engaged": true
    },
    {
      "name": "DFW Camper Corral",
      "engaged": true
    },
    {
      "name": "Valley Van & Sport Utilities",
      "engaged": true
    },
    {
      "name": "Enterprise - Scott Depot, WV",
      "engaged": true
    },
    {
      "name": "Titan Truck Equipment",
      "engaged": true
    },
    {
      "name": "Nelson Truck Equipment Co Inc - Kent",
      "engaged": true
    },
    {
      "name": "Competition Specialties, Inc.",
      "engaged": true
    },
    {
      "name": "Enterprise - Dallas Truck Ctr",
      "engaged": true
    },
    {
      "name": "Gold Touch Dealer Solutions",
      "engaged": true
    },
    {
      "name": "Ideal Automotive & Truck Accessories",
      "engaged": true
    },
    {
      "name": "Tractor Supply",
      "engaged": true
    },
    {
      "name": "Nelson Truck",
      "engaged": true
    },
    {
      "name": "Enterprise - Sherwood",
      "engaged": false
    },
    {
      "name": "Enterprise - College Park",
      "engaged": false
    },
    {
      "name": "Uline",
      "engaged": true
    },
    {
      "name": "Veritiv - Wi",
      "engaged": false
    },
    {
      "name": "Schutz Container Systems",
      "engaged": true
    },
    {
      "name": "Berlin Packaging",
      "engaged": false
    },
    {
      "name": "Packaging Corp of America",
      "engaged": false
    },
    {
      "name": "Graham Packaging Co",
      "engaged": true
    },
    {
      "name": "Harley-Davidson Inc (VEN Z2961)",
      "engaged": true
    },
    {
      "name": "Honeywell",
      "engaged": true
    },
    {
      "name": "General Dynamics Ordnance and Tactical Systems",
      "engaged": true
    }
  ],
  "Mariano Lobos": [
    {
      "name": "DeRemate.com de Mexico S. de R.L. de C.V.",
      "engaged": true
    },
    {
      "name": "GRUPO BIMBO",
      "engaged": true
    },
    {
      "name": "Heineken Mexico - Sub 31",
      "engaged": true
    },
    {
      "name": "Ab Inbev Mexico",
      "engaged": true
    },
    {
      "name": "Gruma",
      "engaged": true
    },
    {
      "name": "FAURECIA SISTEMAS AUTOMOTRICES DE MEXICO",
      "engaged": true
    },
    {
      "name": "Danone",
      "engaged": true
    },
    {
      "name": "FORM",
      "engaged": true
    },
    {
      "name": "Hitachi Astemo Queretaro",
      "engaged": true
    },
    {
      "name": "Grupo Lala Mexico",
      "engaged": true
    },
    {
      "name": "Borg Warner",
      "engaged": true
    },
    {
      "name": "Grupo Bocar",
      "engaged": true
    },
    {
      "name": "Diageo",
      "engaged": true
    },
    {
      "name": "Grupo Herdez",
      "engaged": true
    },
    {
      "name": "Grupo Lala",
      "engaged": true
    },
    {
      "name": "Thyssenkrupp Multi Tracks",
      "engaged": true
    },
    {
      "name": "Forvia Automotive Seating MX Trienda",
      "engaged": true
    },
    {
      "name": "Vitro Mexico",
      "engaged": true
    },
    {
      "name": "Envases Universales Mexico",
      "engaged": true
    }
  ],
  "Matt Olsen": [
    {
      "name": "Thyssenkrupp Mexico P3",
      "engaged": true
    },
    {
      "name": "TESLA",
      "engaged": true
    },
    {
      "name": "Lucid Motors - P3",
      "engaged": true
    },
    {
      "name": "Redwood Materials",
      "engaged": true
    },
    {
      "name": "RIVIAN P3",
      "engaged": true
    },
    {
      "name": "Motherson Puebla",
      "engaged": true
    },
    {
      "name": "Thyssenkrupp Mexico Sub 31",
      "engaged": true
    },
    {
      "name": "Rassini",
      "engaged": true
    },
    {
      "name": "ElringKlinger",
      "engaged": true
    },
    {
      "name": "Moment Energy",
      "engaged": true
    },
    {
      "name": "Robert Bosch Mexico Sistemas S.A. De C.V.",
      "engaged": true
    },
    {
      "name": "Brose Quer\u00e9taro S.A. de C.V.",
      "engaged": true
    },
    {
      "name": "Elevated Materials Inc.",
      "engaged": true
    },
    {
      "name": "Mobis North America",
      "engaged": true
    },
    {
      "name": "Oshkosh Corporation",
      "engaged": true
    },
    {
      "name": "KIA Georgia, Inc.",
      "engaged": true
    },
    {
      "name": "Connor Metal Stamping de M\u00e9xico",
      "engaged": true
    },
    {
      "name": "Hyundai Motor North America",
      "engaged": true
    },
    {
      "name": "Volkswagen de M\u00e9xico, SA de CV",
      "engaged": true
    },
    {
      "name": "Prime Wheel 31",
      "engaged": true
    },
    {
      "name": "Hiho Wheel Mexico - SUB 31",
      "engaged": true
    },
    {
      "name": "Kyoho Toyotsu- Stampings",
      "engaged": true
    },
    {
      "name": "Panasonic Battery",
      "engaged": true
    },
    {
      "name": "Motherson",
      "engaged": true
    },
    {
      "name": "CIE Automotive",
      "engaged": true
    },
    {
      "name": "TREMEC",
      "engaged": false
    },
    {
      "name": "Spiers New Technologies Inc",
      "engaged": true
    },
    {
      "name": "Lear Corporation",
      "engaged": true
    }
  ],
  "Rebecca Krueger": [
    {
      "name": "Cummins Inc.",
      "engaged": true
    },
    {
      "name": "Meritor",
      "engaged": true
    },
    {
      "name": "Linamar",
      "engaged": true
    },
    {
      "name": "Fixx Energy, LLC (AESC)",
      "engaged": true
    },
    {
      "name": "Daimler Purchasing",
      "engaged": true
    },
    {
      "name": "Toyota Motor Manufacturing Kentucky",
      "engaged": true
    },
    {
      "name": "Scout Motors - P3",
      "engaged": true
    },
    {
      "name": "PackIQ - P3",
      "engaged": true
    },
    {
      "name": "Honda Development and Manufacturing of America, LLC",
      "engaged": true
    },
    {
      "name": "Magna Powertrain USA",
      "engaged": true
    },
    {
      "name": "Clarios, LLC",
      "engaged": true
    },
    {
      "name": "Benteler - P3",
      "engaged": true
    },
    {
      "name": "Dana Inc.",
      "engaged": true
    },
    {
      "name": "Yanfeng International",
      "engaged": true
    },
    {
      "name": "Subaru Of Indiana Automotive",
      "engaged": true
    },
    {
      "name": "Volkswagen Group of America",
      "engaged": true
    },
    {
      "name": "Form Energy",
      "engaged": true
    },
    {
      "name": "Bmw Manufacturing, Llc",
      "engaged": true
    },
    {
      "name": "Volvo Car USA",
      "engaged": true
    },
    {
      "name": "Flex-N-Gate",
      "engaged": true
    },
    {
      "name": "HONDA CANADA",
      "engaged": true
    },
    {
      "name": "Mercedes-Benz USA",
      "engaged": true
    },
    {
      "name": "Takeda",
      "engaged": true
    },
    {
      "name": "Mazda North American Operations",
      "engaged": true
    },
    {
      "name": "Toyota Boshoku",
      "engaged": true
    },
    {
      "name": "Jtekt",
      "engaged": true
    },
    {
      "name": "VOLVO TRUCK P3 A4",
      "engaged": true
    },
    {
      "name": "JTEKT COLUMN SYSTEMS NA CORPORATION (FKA Douglas Autotech Corp)",
      "engaged": true
    }
  ],
  "Vonn McQuiston": [
    {
      "name": "Texas Disposal Systems",
      "engaged": true
    },
    {
      "name": "Ace Hardware Corporation",
      "engaged": true
    },
    {
      "name": "United Rentals",
      "engaged": true
    },
    {
      "name": "Graham Packaging Co",
      "engaged": true
    },
    {
      "name": "CoreCivic",
      "engaged": true
    },
    {
      "name": "Mustang Extreme Environmental Services",
      "engaged": true
    },
    {
      "name": "Waste Connections",
      "engaged": true
    },
    {
      "name": "Crown Packaging",
      "engaged": true
    },
    {
      "name": "Fema Corporation",
      "engaged": true
    },
    {
      "name": "FEMA",
      "engaged": true
    },
    {
      "name": "Sanmina Corporation",
      "engaged": true
    },
    {
      "name": "Innovex Inc.",
      "engaged": true
    },
    {
      "name": "Environmental Metal Works",
      "engaged": true
    },
    {
      "name": "Rehrig Pacific Company",
      "engaged": true
    },
    {
      "name": "Rea Magnet Wire",
      "engaged": true
    },
    {
      "name": "Westlake",
      "engaged": true
    },
    {
      "name": "Sunbelt Rentals",
      "engaged": false
    },
    {
      "name": "General Mills",
      "engaged": true
    }
  ]
};

export const FINDINGS = [
  {"sev":"CRITICAL","rep":"Jack Subel","finding":"Jack Subel: Last active Oct 19 — today. 10/10 = 100%. MASSIVE pipeline drop: $312M → $214M. SLB IAD669 $72M removed, ALL satellite panel opps removed (Aspen/Maxim/Freedom/Global/Liberty/AXXIS/Tufway), SLB 5G Turnkey removed, SLB 378 Frame removed, Satellite Roof/Fronts/Floor removed. Remaining 9 opps: SLB OPTIDC $148M, SLB WBT $24M, Satellite Next-Gen Toilet $20M, SLB IAD327 $12M, SLB Lifting Skids $7.9M, SLB Freebird $1M, SLB gCUB $1M, SLB MARS x2.","action":"Urgent: confirm SLB IAD669 disposition — was this $72M closed/won or lost? All satellite panel opps removed simultaneously is a red flag. Get status from Jack today."},
  {"sev":"CRITICAL","rep":"Mariano Lobos","finding":"Mariano Lobos: Last active Oct 19 — today. 20/20 = 100%. Pipeline dropped from $17.9M → $13.5M, opps from 29 → 19. Major removals: BP4048 Orange Stripe 2nd line, BIG PACKS 4048 Mercado Libre, 46 V1 TRDA gone, BP4048 wRFID gone, CHILE gone, DC1 NLT gone, CAGES gone, MERCADO LIBRE OPENINGS gone, multiple small opps. rfq_25575 dropped $3.16M → $1.04M and moved to Design stage. GS 4840 Danone jumped $512K → $1.587M. NEW PALLET BP 6832 jumped $350K → $413K.","action":"Clarify rfq_25575 scope change ($3.16M → $1.04M). Multiple opps removed — confirm if these closed/won or lost. Update pipeline accordingly."},
  {"sev":"MODERATE","rep":"Geoff Petrangelo","finding":"Geoff Petrangelo: Last active Oct 19 — today. 3/5 = 60.0% — Roush and Utilimaster null, week 16. Two new RT_ F-150 Raptor opps added: Ford P702 P736 Raptor Rear Wheel Well Liner $300K + Front $200K (both via RealTruck, BC, due Jun 2028). Pipeline up to $36.8M with 13 opps.","action":"Roush/Utilimaster: week 16 — remove or replace. Confirm Ford Raptor opps scope with RealTruck."},
  {"sev":"POSITIVE","rep":"Jake Heinecke","finding":"Jake Heinecke: Last active Oct 19 — today. 29/41 = 70.7% — 12 new accounts never contacted. New opps: Target HQ DC6 Pallet $2.5M (RFI, due Feb 2027) + Greystone Delivery Cart $100K. Kroger Ralphs Load Lockers removed. Target HQ now engaged (Oct 14). Pipeline $21.9M with 23 opps.","action":"Target HQ DC6 Pallet $2.5M — advance from RFI to Business Case. 12 new target accounts still at zero contact — prioritize outreach."},
  {"sev":"POSITIVE","rep":"Kent Buckingham","finding":"Kent Buckingham: Last active Oct 16 — 3 days. 9/12 = 75.0% — Veritiv-Wi, Berlin Packaging, Packaging Corp null. Nordstrom updated to 'DC1/DC0 (One Way)' at $719.8K Quote (was $222K RFI). +IBC Black Set Greif $60K QEC + Postal Products $24K Quote. Pipeline $1.5M.","action":"Nordstrom $719.8K Quote due Nov 13 — confirm order. IBC Black Greif $60K QEC due Nov 13 — push to close."},
  {"sev":"POSITIVE","rep":"Matt Olsen","finding":"Matt Olsen: Last active Oct 16 — 3 days. 31/31 = 100%. New opp: Adient D2UC Finished Goods Containers $150K Business Case. Adient now a new account. Pipeline $4.5M with 11 opps.","action":"Adient D2UC $150K BC due Nov 30 — qualify and advance. P51-P41840 Rotor Production Tool due Oct 16 — update close date."},
  {"sev":"POSITIVE","rep":"Rebecca Krueger","finding":"Rebecca Krueger: Last active Oct 19 — today. 29/29 = 100% (Jtekt null is duplicate). SR200328 Engine Trim Cart $644K back to Rebecca. NMD Door Pad $100K back. Lear Corporation added as new account. Cummins G&P Medium dropped $400K→$120K, Small $400K→$68K. S&B dropped to $28.5K. Pipeline $20.5M with 40 opps.","action":"SR200328 Engine Trim Cart $644K due Oct 30 — confirm close path with PackIQ. Lear Corporation account — qualify opp potential. Multiple F&W opps due Oct 31 — confirm status."},
  {"sev":"MODERATE","rep":"Vonn McQuiston","finding":"Vonn McQuiston: Last active Oct 19 — today. 9/12 = 75.0% — Mustang Extreme, Sunbelt Rentals, Waste Connections-Iowa Park still null. Pipeline $16.3M unchanged with 28 opps.","action":"Contact Mustang Extreme Environmental Services — never logged. Roll Off Lid System $3M Production Tool due Sep 30 — update close date immediately."}
];
export const CHANGES = [
  ["All Reps","Report Date","Oct 12, 2026","Oct 19, 2026","All 156 opps rebuilt live from Salesforce — all validated","pos"],
  ["Jack Subel","Pipeline","$312M (22 opps)","$214M (9 opps)","MAJOR: SLB IAD669 $72M removed, ALL satellite panels removed, SLB 5G Turnkey/378 Frame removed — 13 opps closed","neg"],
  ["Mariano Lobos","Pipeline","$17.9M (29 opps)","$13.5M (19 opps)","10 opps removed. rfq_25575 dropped $3.16M→$1.04M. GS 4840 Danone jumped $512K→$1.587M","neg"],
  ["Geoff Petrangelo","Ford Raptor opps","Not in pipeline","$300K + $200K Business Case","Two new RT_ F-150 Raptor opps via RealTruck, due Jun 2028","pos"],
  ["Jake Heinecke","Target HQ DC6 Pallet","Not in pipeline","$2.5M RFI","New opp — Target HQ, due Feb 2027","pos"],
  ["Jake Heinecke","Greystone Delivery Cart","Not in pipeline","$100K RFI","New opp added","pos"],
  ["Jake Heinecke","Kroger Ralphs Load Lockers","Active Quote","REMOVED","Closed — removed from SF","pos"],
  ["Kent Buckingham","Nordstrom","$222K RFI","$719.8K Quote","Renamed to DC1/DC0 (One Way) + amount jumped significantly","pos"],
  ["Kent Buckingham","IBC Black Set - Greif","Not in pipeline","$60K QEC","New opp added","pos"],
  ["Kent Buckingham","Postal Products One-Way Pallet","Not in pipeline","$24K Quote","New opp added","pos"],
  ["Matt Olsen","Adient D2UC Finished Goods","Not in pipeline","$150K Business Case","New opp — new account Adient","pos"],
  ["Rebecca Krueger","SR200328 Engine Trim Cart","Kent's pipeline","$644K Prototype","Moved back to Rebecca","pos"],
  ["Rebecca Krueger","NMD Door Pad Rack SR200279_A_1","Previously removed","$100K Business Case","Back in Rebecca's pipeline","pos"],
  ["Rebecca Krueger","Cummins G&P Medium Dunnage","$400K Prototype","$120K Prototype","Amount dropped significantly","neg"],
  ["Rebecca Krueger","Cummins G&P Small Dunnage","$400K Prototype","$68K Prototype","Amount dropped significantly","neg"],
  ["Rebecca Krueger","S&B Packaging Metal Pallet","$40K RFI","$28.5K RFI","Amount reduced","neg"],
  ["Mariano Lobos","rfq_25575 P33C Steel Racks","$3.16M Business Case","$1.04M Design","Major amount drop + stage moved back","neg"],
  ["Mariano Lobos","GS 4840 Danone","$512K Testing","$1.587M Testing","Amount jumped $1.075M","pos"]
]
export const TOP_ACCOUNTS = {};
