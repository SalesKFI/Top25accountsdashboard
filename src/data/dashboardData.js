// ─── KFI DASHBOARD DATA ──────────────────────────────────────────────────────
// Week of September 8, 2026
// Target lists sourced LIVE from Salesforce: Account/Lead Rating = "Top 25 Target"
// Activities sourced LIVE from Salesforce: Task object, Status = Completed, YTD 2026

export const REPORT_DATE = "October 26, 2026";

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
    "n_opps": 48,
    "pipe": 17476087,
    "total_pipe": 20976087,
    "n_accts": 29,
    "accts": [],
    "n_targets": 29,
    "never": 0,
    "penetration": 100.0,
    "days_since": 0,
    "last_act": "2026-10-26",
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
    "n_opps": 12,
    "pipe": 4689283,
    "total_pipe": 4689283,
    "n_accts": 31,
    "accts": [],
    "n_targets": 31,
    "never": 0,
    "penetration": 100.0,
    "days_since": 0,
    "last_act": "2026-10-26",
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
    "n_opps": 12,
    "pipe": 29636622,
    "total_pipe": 29636622,
    "n_accts": 3,
    "accts": [],
    "n_targets": 5,
    "never": 2,
    "penetration": 60.0,
    "days_since": 5,
    "last_act": "2026-10-21",
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
    "n_opps": 13,
    "pipe": 1520965,
    "total_pipe": 1520965,
    "n_accts": 10,
    "accts": [],
    "n_targets": 12,
    "never": 2,
    "penetration": 83.3,
    "days_since": 0,
    "last_act": "2026-10-26",
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
    "n_opps": 29,
    "pipe": 9398890,
    "total_pipe": 16398890,
    "n_accts": 9,
    "accts": [],
    "n_targets": 12,
    "never": 3,
    "penetration": 75.0,
    "days_since": 7,
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
    "n_opps": 17,
    "pipe": 5152900,
    "total_pipe": 12152900,
    "n_accts": 20,
    "accts": [],
    "n_targets": 20,
    "never": 0,
    "penetration": 100.0,
    "days_since": 0,
    "last_act": "2026-10-26",
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
    "last_act": "2026-10-26",
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
    "pipe": 211821418,
    "total_pipe": 211821418,
    "n_accts": 10,
    "accts": [],
    "n_targets": 10,
    "never": 0,
    "penetration": 100.0,
    "days_since": 0,
    "last_act": "2026-10-26",
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
      "amount": 10000000,
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
      "amount": 5821416,
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
      "name": "SLB MARS TITUS V2A MID & HIGH SEISMIC",
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
      "name": "SLB MARS TITUS 1.0 (AWS)",
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
      "name": "Supply Logistics & Procurement Services-",
      "account": "Supply Logistics & Procurement Services",
      "stage": "Request for Information",
      "amount": 0,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "Existing Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
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
      "name": "Schutz IBC",
      "account": "Schutz Container Systems",
      "stage": "Request for Information",
      "amount": 25000,
      "prob": 0,
      "close": "2026-11-20",
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
      "amount": 2202520,
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
      "stage": "Production Tool",
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
      "stage": "Request for Sample",
      "amount": 52466,
      "prob": 0,
      "close": "2026-10-30",
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
      "name": "#30 MALLAS CONTENCI\u00d3N TOTES",
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
      "close": "2026-10-30",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "45 x 48 Pallet (REF 6119711)",
      "account": "JATCO M\u00e9xico, SA de CV",
      "stage": "Quote",
      "amount": 206460,
      "prob": 0,
      "close": "2026-11-06",
      "rt": "Existing Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "P51-P90100-P55000 Stators",
      "account": "Lucid Motors - P3",
      "stage": "Production Tool",
      "amount": 204023,
      "prob": 0,
      "close": "2026-10-30",
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
      "name": "R2 Rear Brake Caliper Tray WIP Rack Rebuy",
      "account": "RIVIAN P3",
      "stage": "Quote",
      "amount": 6264,
      "prob": 0,
      "close": "2026-10-30",
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
      "name": "BMW Common Grille Tray Pack",
      "account": "REHAU",
      "stage": "Prototype",
      "amount": 260000,
      "prob": 0,
      "close": "2026-09-30",
      "rt": "New Product Development Material Handling",
      "is_target": false,
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
      "name": "JCI TWIN BATTERY PALLET #8283",
      "account": "Clarios, LLC",
      "stage": "Quote",
      "amount": 139800,
      "prob": 0,
      "close": "2026-10-30",
      "rt": "Existing Material Handling",
      "is_target": true,
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
      "name": "Cummins Gear & Pinion Set Medium Dunnage",
      "account": "Cummins Inc.",
      "stage": "Prototype",
      "amount": 120000,
      "prob": 0,
      "close": "2026-06-26",
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
      "name": "Auxiliary Axle Rack SR200214/-201",
      "account": "PackIQ - P3",
      "stage": "Business Case",
      "amount": 90000,
      "prob": 0,
      "close": "2026-11-30",
      "rt": "New Product Development - Metal Fabrication",
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
      "name": "Hyundai 1.6L CRANKSHAFT TRAY",
      "account": "International Crankshaft Inc",
      "stage": "Business Case",
      "amount": 75000,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "New Product Development Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "DT F16 Spoiler Racks",
      "account": "Flex-N-Gate",
      "stage": "Business Case",
      "amount": 75000,
      "prob": 0,
      "close": "2026-12-01",
      "rt": "New Product Development - Metal Fabrication",
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
      "stage": "Production Tool",
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
      "name": "SR200608 Fuel Tank Rack",
      "account": "PackIQ - P3",
      "stage": "Business Case",
      "amount": 25000,
      "prob": 0,
      "close": "2026-11-30",
      "rt": "New Product Development - Metal Fabrication",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Cummins Pinion Tray Large",
      "account": "Cummins Inc.",
      "stage": "Business Case",
      "amount": 20000,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "New Product Development Material Handling",
      "is_target": true,
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
    },
    {
      "name": "BP4048 Pallet",
      "account": "Kongsberg Automotive",
      "stage": "Quote",
      "amount": 15000,
      "prob": 0,
      "close": "2026-11-18",
      "rt": "Existing Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "MHE V280 Spar Carts",
      "account": "PackIQ - P3",
      "stage": "Business Case",
      "amount": 10000,
      "prob": 0,
      "close": "2026-11-30",
      "rt": "New Product Development - Metal Fabrication",
      "is_target": true,
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
      "name": "4848 Rackable Pallet",
      "account": "Nitto",
      "stage": "Prototype",
      "amount": 100000,
      "prob": 0,
      "close": "2026-10-30",
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
      "name": "BP 48x96",
      "account": "American Woodmark Corp",
      "stage": "Quote",
      "amount": 64050,
      "prob": 0,
      "close": "2026-11-16",
      "rt": "Existing Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "BP 48X63",
      "account": "American Woodmark Corp",
      "stage": "Quote",
      "amount": 47709,
      "prob": 0,
      "close": "2026-11-23",
      "rt": "Existing Material Handling",
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
      "engaged": true
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
    },
    {
      "name": "American Woodmark Corp",
      "engaged": false
    }
  ]
};

export const FINDINGS = [
  {"sev":"CRITICAL","rep":"Jack Subel","finding":"Jack Subel: Last active Oct 26 — today. 10/10 = 100%. Pipeline continues dropping: $213.9M → $211.8M. SLB Lifting Skids dropped again $7.88M→$5.82M. SLB OPTIDC $148M, SLB WBT $24M, Satellite Next-Gen Toilet $20M remain as top opps. All satellite panels still absent since Oct 19.","action":"Get status on SLB IAD669 ($72M) — closed won or lost? Same for all satellite panel opps removed Oct 19. SLB Lifting Skids reduction needs explanation."},
  {"sev":"HIGH","rep":"Geoff Petrangelo","finding":"Geoff Petrangelo: Last active Oct 21 — 5 days. 3/5 = 60.0% — Roush and Utilimaster null, week 17. RT_Stellantis R4P Rampage ($10M) gone for 2nd week. Ford P758 Maverick amount updated to $10M. Pipeline $29.6M (12 opps).","action":"Roush/Utilimaster: week 17 — must resolve or remove. Confirm Ford P758 Maverick scope change ($7.2M→$10M). RT_Stellantis R4P Rampage still missing — lost or paused?"},
  {"sev":"POSITIVE","rep":"Jake Heinecke","finding":"Jake Heinecke: Last active Oct 26 — today. 29/41 = 70.7% — 12 new accounts still never contacted. Niagara active Oct 26, PepsiCo/General Mills Oct 23, CHEP/TJX-Canada Oct 22. Pipeline $21.9M with 23 opps.","action":"Contact 12 new target accounts. WIP 17oz CSD Bottle Tray ($3M BC) due Nov 20 — advance. TJXX DC6 Tall Lip ($4.9M RFI) due Nov 27."},
  {"sev":"POSITIVE","rep":"Kent Buckingham","finding":"Kent Buckingham: Last active Oct 26 — today. 10/12 = 83.3% — Packaging Corp of America and Veritiv-Wi still null. Berlin Packaging now active (Oct 26) — great progress. +Supply Logistics $0 RFI (new opp) + Schutz IBC $25K RFI. Pipeline $1.5M with 13 opps.","action":"Contact Packaging Corp of America. Nordstrom $719.8K Quote due Nov 13 — confirm order status."},
  {"sev":"POSITIVE","rep":"Mariano Lobos","finding":"Mariano Lobos: Last active Oct 26 — today. 20/20 = 100%. DeRemate active Oct 26, Gruma/Heineken Oct 23, Danone Oct 22. BP4048 Orange Stripe dropped $2.41M→$2.20M. TRAYS advanced to Production Tool. Pipeline $12.2M with 17 opps.","action":"CBB RACKS ($2.86M Design) due Mar 2027 — no urgency. BP3345 + Sleeve ($260K Quote) due Oct 30 — this week. SUPERIOR PC21&22 ($220K Quote) due Oct 31."},
  {"sev":"POSITIVE","rep":"Matt Olsen","finding":"Matt Olsen: Last active Oct 26 — today. 31/31 = 100%. Two new opps: JATCO 45x48 Pallet $206K Quote (due Nov 6) + R2 Rear Brake Caliper Rebuy $6.3K Quote. Tesla and Thyssenkrupp active Oct 26. Pipeline $4.7M with 12 opps.","action":"JATCO 45x48 Pallet $206K Quote due Nov 6 — confirm order. P51 Rotor/Stators production tools due Oct 30 — update close dates."},
  {"sev":"POSITIVE","rep":"Rebecca Krueger","finding":"Rebecca Krueger: Last active Oct 26 — today. 29/29 = 100% (Jtekt null is duplicate). Major opp expansion: 48 opps total. New this week: JCI Twin Battery $139.8K Quote, Aux Axle Rack $90K BC, Hyundai Crankshaft $75K BC, DT F16 Spoiler Racks $75K BC, SR200608 Fuel Tank Rack $25K BC, MHE V280 Spar Carts $10K, BP4048 Kongsberg $15K. BMW Grille back. GKN opps back. Pipeline $21.0M.","action":"SR200328 Engine Trim Cart $644K Prototype due Oct 30 — close this week. JCI Twin $139.8K Quote due Oct 30 — confirm. Nordstrom opp has moved to Kent."},
  {"sev":"MODERATE","rep":"Vonn McQuiston","finding":"Vonn McQuiston: Last active Oct 19 — 7 days. 9/12 = 75.0% — Mustang Extreme, Sunbelt, Waste Connections-Iowa Park still null. Two new American Woodmark opps: BP 48x96 $64K + BP 48x63 $47.7K. 4848 Rackable moved to Prototype. Pipeline $16.4M with 29 opps.","action":"Contact Mustang Extreme Environmental Services. Roll Off Lid System $3M Production Tool — close date Sep 30 now very past due, update immediately."}
];
export const CHANGES = [
  ["All Reps","Report Date","Oct 19, 2026","Oct 26, 2026","All 163 opps rebuilt live from Salesforce — all validated","pos"],
  ["Jack Subel","SLB Lifting Skids","$7.88M Concept","$5.82M Concept","Amount dropped again this week","neg"],
  ["Geoff Petrangelo","RT_Stellantis R4P Rampage","$10M BC","Still absent (2nd week)","Not in SF pipeline — confirm status","neg"],
  ["Geoff Petrangelo","Ford P758 Maverick","$7.2M RFI","$10M RFI","Amount updated in SF","pos"],
  ["Kent Buckingham","Supply Logistics & Procurement Services","Not in pipeline","$0 RFI (new opp)","New opp added","pos"],
  ["Kent Buckingham","Schutz IBC","Not in pipeline","$25K RFI","New Schutz opp added","pos"],
  ["Kent Buckingham","Berlin Packaging","Never contacted","Now active Oct 26","First activity logged — great progress","pos"],
  ["Mariano Lobos","BP4048 Orange Stripe","$2.41M Quote","$2.20M Quote","Amount reduced","neg"],
  ["Mariano Lobos","TRAYS","Prototype","Production Tool","Stage advanced","pos"],
  ["Matt Olsen","JATCO 45x48 Pallet","Not in pipeline","$206K Quote","New opp — due Nov 6","pos"],
  ["Matt Olsen","R2 Rear Brake Caliper Rebuy","Not in pipeline","$6.3K Quote","New Rivian rebuy opp","pos"],
  ["Rebecca Krueger","JCI Twin Battery Pallet #8283","Previously removed","$139.8K Quote","Back in pipeline","pos"],
  ["Rebecca Krueger","Auxiliary Axle Rack SR200214","Not in pipeline","$90K Business Case","New PackIQ opp","pos"],
  ["Rebecca Krueger","Hyundai 1.6L Crankshaft Tray","Not in pipeline","$75K Business Case","New opp","pos"],
  ["Rebecca Krueger","DT F16 Spoiler Racks","Not in pipeline","$75K Business Case","New Flex-N-Gate opp","pos"],
  ["Rebecca Krueger","SR200608 Fuel Tank Rack","Not in pipeline","$25K Business Case","New PackIQ opp","pos"],
  ["Rebecca Krueger","MHE V280 Spar Carts","Not in pipeline","$10K Business Case","New PackIQ opp","pos"],
  ["Rebecca Krueger","BP4048 Kongsberg Automotive","Not in pipeline","$15K Quote","New opp","pos"],
  ["Rebecca Krueger","BMW Common Grille Tray Pack","Previously removed","$260K Prototype","Back in pipeline","pos"],
  ["Rebecca Krueger","GKN CD6R/V363 opps","Previously removed","Back in pipeline","GKN opps restored","pos"],
  ["Vonn McQuiston","BP 48x96 American Woodmark","Not in pipeline","$64K Quote","New account + opp","pos"],
  ["Vonn McQuiston","BP 48X63 American Woodmark","Not in pipeline","$47.7K Quote","New opp same account","pos"]
]
export const TOP_ACCOUNTS = {};
