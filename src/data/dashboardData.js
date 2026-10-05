// ─── KFI DASHBOARD DATA ──────────────────────────────────────────────────────
// Week of September 8, 2026
// Target lists sourced LIVE from Salesforce: Account/Lead Rating = "Top 25 Target"
// Activities sourced LIVE from Salesforce: Task object, Status = Completed, YTD 2026

export const REPORT_DATE = "October 5, 2026";

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
    "n_opps": 39,
    "pipe": 17445628,
    "total_pipe": 21045628,
    "n_accts": 27,
    "accts": [],
    "n_targets": 27,
    "never": 0,
    "penetration": 100.0,
    "days_since": 0,
    "last_act": "2026-10-05",
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
      "10": 45
    }
  },
  "Matt Olsen": {
    "n_acts": 288,
    "n_opps": 12,
    "pipe": 4547317,
    "total_pipe": 4547317,
    "n_accts": 32,
    "accts": [],
    "n_targets": 32,
    "never": 0,
    "penetration": 100.0,
    "days_since": 0,
    "last_act": "2026-10-05",
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
      "10": 20
    }
  },
  "Geoff Petrangelo": {
    "n_acts": 155,
    "n_opps": 11,
    "pipe": 36336622,
    "total_pipe": 36336622,
    "n_accts": 3,
    "accts": [],
    "n_targets": 5,
    "never": 2,
    "penetration": 60.0,
    "days_since": 4,
    "last_act": "2026-10-01",
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
      "10": 8
    }
  },
  "Kent Buckingham": {
    "n_acts": 88,
    "n_opps": 12,
    "pipe": 1718087,
    "total_pipe": 1718087,
    "n_accts": 5,
    "accts": [],
    "n_targets": 7,
    "never": 2,
    "penetration": 71.4,
    "days_since": 0,
    "last_act": "2026-10-05",
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
      "10": 5
    }
  },
  "Vonn McQuiston": {
    "n_acts": 301,
    "n_opps": 28,
    "pipe": 9217131,
    "total_pipe": 16217131,
    "n_accts": 12,
    "accts": [],
    "n_targets": 16,
    "never": 4,
    "penetration": 75.0,
    "days_since": 0,
    "last_act": "2026-10-05",
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
      "10": 18
    }
  },
  "Mariano Lobos": {
    "n_acts": 31500,
    "n_opps": 29,
    "pipe": 8938052,
    "total_pipe": 17938052,
    "n_accts": 19,
    "accts": [],
    "n_targets": 19,
    "never": 0,
    "penetration": 100.0,
    "days_since": 0,
    "last_act": "2026-10-05",
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
      "10": 2800
    }
  },
  "Jake Heinecke": {
    "n_acts": 234,
    "n_opps": 24,
    "pipe": 12264966,
    "total_pipe": 20559467,
    "n_accts": 29,
    "accts": [],
    "n_targets": 41,
    "never": 12,
    "penetration": 70.7,
    "days_since": 0,
    "last_act": "2026-10-05",
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
      "10": 12
    }
  },
  "Jack Subel": {
    "n_acts": 12,
    "n_opps": 22,
    "pipe": 312206461,
    "total_pipe": 312206461,
    "n_accts": 10,
    "accts": [],
    "n_targets": 10,
    "never": 0,
    "penetration": 100.0,
    "days_since": 3,
    "last_act": "2026-10-02",
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
      "10": 4
    }
  }
};

export const ALL_OPPS = {
  "Geoff Petrangelo": [
    {
      "name": "RT_Stellantis 291 Rampage - Bed Protection",
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
      "name": "SLB IAD669 E-House Package",
      "account": "Cameron International Corporation - SLB Group",
      "stage": "Business Case",
      "amount": 72000000,
      "prob": 0,
      "close": "2026-12-31",
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
      "close": "2026-09-30",
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
      "close": "2026-09-30",
      "rt": "New Product Development - Metal Fabrication",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "SLB 5G-1248401-EWM14 Turnkey (1600 sets)",
      "account": "Cameron International Corporation - SLB Group",
      "stage": "Production Tool",
      "amount": 5422830,
      "prob": 0,
      "close": "2026-09-30",
      "rt": "New Product Development - Metal Fabrication",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Satellite - Roof Package",
      "account": "Satellite Industries Inc. P5",
      "stage": "Production Tool",
      "amount": 3000000,
      "prob": 0,
      "close": "2026-10-30",
      "rt": "New Product Development OEM",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Satellite Aspen Panels",
      "account": "Satellite Industries Inc. P5",
      "stage": "Business Case",
      "amount": 2800000,
      "prob": 0,
      "close": "2027-01-01",
      "rt": "New Product Development OEM",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Satellite Maxim 3000 Panels",
      "account": "Satellite Industries Inc. P5",
      "stage": "Business Case",
      "amount": 2800000,
      "prob": 0,
      "close": "2027-01-01",
      "rt": "New Product Development OEM",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Satellite Freedom Panels",
      "account": "Satellite Industries Inc. P5",
      "stage": "Business Case",
      "amount": 2800000,
      "prob": 0,
      "close": "2027-01-01",
      "rt": "New Product Development OEM",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Satellite Global Panels",
      "account": "Satellite Industries Inc. P5",
      "stage": "Business Case",
      "amount": 2800000,
      "prob": 0,
      "close": "2027-01-01",
      "rt": "New Product Development OEM",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Satellite Liberty Panels",
      "account": "Satellite Industries Inc. P5",
      "stage": "Business Case",
      "amount": 2800000,
      "prob": 0,
      "close": "2027-01-01",
      "rt": "New Product Development OEM",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Satellite AXXIS Restroom Panels",
      "account": "Satellite Industries Inc. P5",
      "stage": "Business Case",
      "amount": 1500000,
      "prob": 0,
      "close": "2027-01-01",
      "rt": "New Product Development OEM",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Satellite Tufway Restroom Panels",
      "account": "Satellite Industries Inc. P5",
      "stage": "Business Case",
      "amount": 1500000,
      "prob": 0,
      "close": "2027-01-01",
      "rt": "New Product Development OEM",
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
      "name": "Satellite - Fronts/ Doors",
      "account": "Satellite Industries Inc. P5",
      "stage": "Production Tool",
      "amount": 570000,
      "prob": 0,
      "close": "2026-09-30",
      "rt": "New Product Development OEM",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Satellite - Floor Package",
      "account": "Satellite Industries Inc. P5",
      "stage": "Production Tool",
      "amount": 200000,
      "prob": 0,
      "close": "2026-09-30",
      "rt": "New Product Development OEM",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "SLB 378 & 379 Frame Weldments (19 sets)",
      "account": "Cameron International Corporation - SLB Group",
      "stage": "Production Tool",
      "amount": 131100,
      "prob": 0,
      "close": "2026-09-30",
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
      "close": "2026-09-30",
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
      "close": "2026-09-30",
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
      "close": "2026-10-09",
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
      "close": "2026-10-09",
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
      "name": "DC6/LL Albertsons HQ",
      "account": "Albertsons Companies HQ",
      "stage": "Request for Information",
      "amount": 2000000,
      "prob": 0,
      "close": "2026-10-02",
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
      "close": "2026-10-09",
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
      "name": "Niagara - 20oz Body Armor / 20oz Powerade Wip Tray",
      "account": "Niagara Bottling (HQ - Diamond Bar, CA)",
      "stage": "Concept",
      "amount": 713502,
      "prob": 0,
      "close": "2026-10-02",
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
      "close": "2026-10-02",
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
      "close": "2026-10-02",
      "rt": "Existing Material Handling",
      "is_target": true,
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
      "close": "2026-10-09",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "DC6 UNFI - Chesterfield, NH",
      "account": "UNFI - Chesterfield, NH",
      "stage": "Quote",
      "amount": 81547,
      "prob": 0,
      "close": "2026-10-02",
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
      "name": "Kroger Ralphs Load Lockers",
      "account": "Kroger/Ralphs - Los Angeles, CA",
      "stage": "Quote",
      "amount": 39798,
      "prob": 0,
      "close": "2026-10-02",
      "rt": "Existing Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "DC6 Scheels",
      "account": "Scheels Sports - HQ",
      "stage": "Quote",
      "amount": 36238,
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
      "close": "2026-10-02",
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
      "close": "2026-10-02",
      "rt": "Existing Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    }
  ],
  "Kent Buckingham": [
    {
      "name": "Crossum LLC DBA Crossum Outdoors Supply",
      "account": "Crossum LLC DBA Crossum Outdoors Supply",
      "stage": "Request for Information",
      "amount": 0,
      "prob": 0,
      "close": "2026-09-30",
      "rt": "Existing OEM",
      "is_target": false,
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
      "name": "Front Fascia MSP MOLD WIP",
      "account": "PackIQ - P3",
      "stage": "Business Case",
      "amount": 300000,
      "prob": 0,
      "close": "2026-09-30",
      "rt": "New Product Development - Metal Fabrication",
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
      "name": "AG FACEBAR C256667A-01",
      "account": "PackIQ - P3",
      "stage": "Business Case",
      "amount": 100000,
      "prob": 0,
      "close": "2026-09-30",
      "rt": "New Product Development - Metal Fabrication",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "DNY Pallets 40x48",
      "account": "Plastipak Packaging Inc",
      "stage": "Quote",
      "amount": 63500,
      "prob": 0,
      "close": "2026-09-18",
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
      "close": "2026-10-09",
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
      "name": "rfq_25575  Additional P33C Steel Racks for Volume Increase / Lewisburg",
      "account": "Marelli M\u00e9xico - Sub 31",
      "stage": "Business Case",
      "amount": 3162410,
      "prob": 0,
      "close": "2026-10-31",
      "rt": "New Product Development - Metal Fabrication",
      "is_target": false,
      "created": "2026-01-01"
    },
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
      "name": "BP 4048 8MM (0.320\") Orange Stripe",
      "account": "DeRemate.com de Mexico S. de R.L. de C.V.",
      "stage": "Quote",
      "amount": 2413320,
      "prob": 0,
      "close": "2026-09-30",
      "rt": "Existing Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "45\" x 48\" x 21\" PACK WITH THERMO SLEEVES",
      "account": "FORM",
      "stage": "Design",
      "amount": 1700000,
      "prob": 0,
      "close": "2026-09-30",
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
      "name": "BP 4048 8MM Orange Stripe (2nd line)",
      "account": "DeRemate.com de Mexico S. de R.L. de C.V.",
      "stage": "Quote",
      "amount": 1419600,
      "prob": 0,
      "close": "2026-09-30",
      "rt": "Existing Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "BIG PACKS 4048",
      "account": "Mercado Libre Argentina",
      "stage": "Quote",
      "amount": 1077440,
      "prob": 0,
      "close": "2026-10-30",
      "rt": "Existing Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "46 V1 TRDA REJILLA T1 - 2 ARMREST R",
      "account": "Inteva Products - MEXICO - Sub 31",
      "stage": "Quote",
      "amount": 787800,
      "prob": 0,
      "close": "2026-09-30",
      "rt": "Existing Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "GS 4840 6R3",
      "account": "Danone",
      "stage": "Testing",
      "amount": 512500,
      "prob": 0,
      "close": "2026-09-30",
      "rt": "Existing Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "TRAYS",
      "account": "FORM",
      "stage": "Design",
      "amount": 466041,
      "prob": 0,
      "close": "2026-09-30",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "DC1 4048 NLT SQ LEGS",
      "account": "GRUPO BIMBO",
      "stage": "Request for Sample",
      "amount": 360000,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "Existing Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "NEW PALLET BP 6832",
      "account": "HIPERPACK SA DE CV - SUB 31",
      "stage": "Business Case",
      "amount": 350000,
      "prob": 0,
      "close": "2026-09-30",
      "rt": "New Product Development Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "PACKS WITH THERMO SLEEVES",
      "account": "FORM",
      "stage": "Design",
      "amount": 270288,
      "prob": 0,
      "close": "2026-09-30",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "BP3345 + Sleeve",
      "account": "TriCon de Mexico MAM SUB-30",
      "stage": "Quote",
      "amount": 164116,
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
      "name": "623 x 423 x 45 mm trays",
      "account": "AVOCARBON MEXICO - SUB 31",
      "stage": "Quote",
      "amount": 150000,
      "prob": 0,
      "close": "2026-09-30",
      "rt": "Existing Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "CAGES LARGE PARCELS",
      "account": "DeRemate.com de Mexico S. de R.L. de C.V.",
      "stage": "Quote",
      "amount": 100000,
      "prob": 0,
      "close": "2026-09-30",
      "rt": "Existing Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "MERCADO LIBRE NEW OPENINGS",
      "account": "DeRemate.com de Mexico S. de R.L. de C.V.",
      "stage": "Request for Sample",
      "amount": 100000,
      "prob": 0,
      "close": "2026-09-30",
      "rt": "Existing Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "PKG RET NAO PC PALLET & TRAY 15/16",
      "account": "Superior Industries Int'L",
      "stage": "QEC",
      "amount": 52466,
      "prob": 0,
      "close": "2026-09-30",
      "rt": "Existing Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "#298 MANGA SAME DAY NEW VERSION",
      "account": "DeRemate.com de Mexico S. de R.L. de C.V.",
      "stage": "Quote",
      "amount": 61558,
      "prob": 0,
      "close": "2026-09-30",
      "rt": "Existing Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "O'REILLY BP 4048 SG 6MM NDH NO STRIPE",
      "account": "HIPERPACK SA DE CV - SUB 31",
      "stage": "Quote",
      "amount": 58500,
      "prob": 0,
      "close": "2026-09-30",
      "rt": "New Product Development Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "BP 4048 + Sleeves 1.10MT",
      "account": "CONTROLADORA MABE SA DE CV Mabe Mexico Sub 31",
      "stage": "Request for Information",
      "amount": 51376,
      "prob": 0,
      "close": "2026-12-31",
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
      "close": "2026-09-30",
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
      "name": "STEEL BOTTOMS",
      "account": "DeRemate.com de Mexico S. de R.L. de C.V.",
      "stage": "Design",
      "amount": 28030,
      "prob": 0,
      "close": "2026-09-30",
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
      "close": "2026-09-30",
      "rt": "Existing Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "COLOMBIA - BP 4048 Orange Stripe",
      "account": "DeRemate.com de Mexico S. de R.L. de C.V.",
      "stage": "Quote",
      "amount": 13091,
      "prob": 0,
      "close": "2026-09-30",
      "rt": "Existing Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "#30 MALLAS CONTENCI\u00d3N TOTES",
      "account": "DeRemate.com de Mexico S. de R.L. de C.V.",
      "stage": "Quote",
      "amount": 8116,
      "prob": 0,
      "close": "2026-09-30",
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
      "amount": 420000,
      "prob": 0,
      "close": "2026-10-30",
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
      "name": "HONDA SBW - WIP TK MX/US",
      "account": "Thyssenkrupp Mexico Sub 31",
      "stage": "Concept",
      "amount": 150000,
      "prob": 0,
      "close": "2026-12-31",
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
      "name": "RFQ 91767 YGFT169 Wheel and Tire Rack Spares",
      "account": "TESLA",
      "stage": "Concept",
      "amount": 116595,
      "prob": 0,
      "close": "2026-10-02",
      "rt": "New Product Development - Metal Fabrication",
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
      "close": "2026-09-29",
      "rt": "Existing Metal Fabrication",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "J4U Tray",
      "account": "Thyssenkrupp Mexico Sub 31",
      "stage": "Concept",
      "amount": 194454,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "New Product Development Material Handling",
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
      "name": "Cummins Gear & Pinion Set Medium Dunnage",
      "account": "Cummins Inc.",
      "stage": "Prototype",
      "amount": 400000,
      "prob": 0,
      "close": "2026-06-26",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Cummins Gear & Pinion Set Small Dunnage",
      "account": "Cummins Inc.",
      "stage": "Prototype",
      "amount": 400000,
      "prob": 0,
      "close": "2026-06-26",
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
      "name": "6441 TPR Cylinder Liner Tray",
      "account": "Toyota Motor Manufacturing Kentucky",
      "stage": "Quote",
      "amount": 275000,
      "prob": 0,
      "close": "2026-09-30",
      "rt": "Existing Material Handling",
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
      "amount": 135000,
      "prob": 0,
      "close": "2026-09-30",
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
      "name": "Superior PC15 WHEEL PACKS",
      "account": "Superior Industries Int'L",
      "stage": "Quote",
      "amount": 102900,
      "prob": 0,
      "close": "2026-09-24",
      "rt": "Existing Material Handling",
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
      "name": "Magna Stator MG1 Pack",
      "account": "Magna Powertrain USA",
      "stage": "Business Case",
      "amount": 100000,
      "prob": 0,
      "close": "2026-09-30",
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
      "name": "A075H896 Twin Sheet Emisson Parts #4 Tray",
      "account": "Cummins Inc.",
      "stage": "Business Case",
      "amount": 75000,
      "prob": 0,
      "close": "2026-09-30",
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
      "name": "5917 DANA PINION TRAY 7447",
      "account": "Dana Inc.",
      "stage": "Request for Information",
      "amount": 20000,
      "prob": 0,
      "close": "2026-10-30",
      "rt": "Existing Material Handling",
      "is_target": false,
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
    }
  ],
  "Vonn McQuiston": [
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
      "name": "IBC Panels",
      "account": "Schutz Container Systems",
      "stage": "Quote",
      "amount": 10000,
      "prob": 0,
      "close": "2026-09-30",
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
    },
    {
      "name": "Harbinger Motors Inc.",
      "engaged": true
    },
    {
      "name": "SK Battery America, Inc.",
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
  {"sev":"CRITICAL","rep":"Matt Olsen","finding":"Matt Olsen: Last active Oct 5 — today. 32/32 = 100%. BUT pipeline dropped from $9.1M to $4.5M — 12 opps, down from 18. Major losses: 2nd Shift Ramp Racks $1.89M, R2 Lockdown Rack $1M, R2 Steel Bin $1M, R2 Tower Rack Bases, TK Nissan P33C, R2 Brake Caliper Rebuy all removed. RIVIAN pipeline essentially gone.","action":"Understand why RIVIAN opps were closed/removed. What replaced them? JATCO México and Harbinger Motors new targets — qualify opp potential this week."},
  {"sev":"HIGH","rep":"Jack Subel","finding":"Jack Subel: Last active Oct 2 — 3 days. 10/10 = 100%. Pipeline $312M. Multiple SLB and Satellite opps had Sep 30 close dates — all past due. SLB OPTIDC $148M still at Concept stage.","action":"Update all Sep 30 close dates immediately. Advance SLB OPTIDC from Concept to Business Case. Satellite Next-Gen Toilet $20M — push to Prototype."},
  {"sev":"MODERATE","rep":"Geoff Petrangelo","finding":"Geoff Petrangelo: Last active Oct 1 — 4 days. 3/5 = 60.0% — Roush and Utilimaster null, week 13. Two new RT_ opps added: MOBIS Ioniq Bed Slide $950K + Nissan Novara Bedliner $347K (both via RealTruck). Pipeline up to $36.3M.","action":"Roush/Utilimaster: week 13 — must resolve today. RT_MOBIS Ioniq ($950K BC, due Sep 2029) and RT_Nissan Novara ($347K BC, due Oct 2027) — confirm scope and timeline with RealTruck."},
  {"sev":"POSITIVE","rep":"Jake Heinecke","finding":"Jake Heinecke: Last active Oct 5 — today. 29/41 = 70.7% — 12 new accounts added (AB InBev, Coca-Cola, Constellation, Beam Suntory, BNSF, Publix, Burlington, PetSmart, DrinkPak, Ball Corp, Crown Packaging) all never contacted. Petco still null. Pipeline $20.6M with 24 opps.","action":"Prioritize outreach to 12 new target accounts. AdaptaPak DC6 ($4M Prototype) due Oct 9 — this week. Goodwill BigPak ($132K BC) due Oct 9."},
  {"sev":"POSITIVE","rep":"Kent Buckingham","finding":"Kent Buckingham: Last active Oct 1 — 4 days. 5/7 = 71.4% — Enterprise Sherwood and College Park still null. PackIQ active Oct 1. Uline (Vonn's account) active Oct 5. Pipeline $1.7M with 12 opps.","action":"Log activity for Enterprise Sherwood and College Park. SR200328 Engine Trim Cart ($644K Prototype) due Oct 30."},
  {"sev":"POSITIVE","rep":"Mariano Lobos","finding":"Mariano Lobos: Last active Oct 5 — today. 19/19 = 100%. rfq_25575 P33C Steel Racks jumped to $3.16M (was $2M). DeRemate, Gruma, Ab Inbev, Heineken all active Oct 5. Pipeline $17.9M with 29 opps.","action":"rfq_25575 ($3.16M BC) due Oct 31 — this is the biggest near-term close. Advance to Quote stage. BP 4048 Orange Stripe ($2.4M Quote) due Sep 30 — past due, update close date."},
  {"sev":"POSITIVE","rep":"Rebecca Krueger","finding":"Rebecca Krueger: Last active Oct 5 — today. 27/27 = 100% (Jtekt null is a duplicate). Volvo 800V Compressor Pack $100K new (Design). Cummins Flex SCR End Out Pack $200K back in pipeline. Volvo Car, Cummins, Daimler, Benteler all active Oct 5. Pipeline $21.0M with 39 opps.","action":"Multiple Sep 30 close dates still showing as past due — update them today. 6441 TPR Cylinder Liner Tray ($275K Quote) due Sep 30 — close or update."},
  {"sev":"MODERATE","rep":"Vonn McQuiston","finding":"Vonn McQuiston: Last active Oct 2 — 3 days. 12/16 = 75.0% — Mustang Extreme, Veritiv-Wi, Waste Connections-Iowa Park, Sunbelt Rentals - Chicago all null. Bear Proof Lids now 3 separate opps ($1.1M each = $3.3M total). Pipeline $16.2M with 28 opps.","action":"Contact Mustang Extreme — longest null on Vonn's list. Roll Off Lid System $3M (Production Tool) due Sep 30 — update close date immediately."}
];
export const CHANGES = [
  ["All Reps","Report Date","Sep 28, 2026","Oct 5, 2026","All 177 opps rebuilt live from Salesforce — all validated","pos"],
  ["Matt Olsen","Pipeline","$9.1M (18 opps)","$4.5M (12 opps)","Major drop — RIVIAN opps removed: 2nd Shift Racks $1.89M, R2 Lockdown $1M, R2 Steel Bin $1M, TK Nissan P33C $194K, others","neg"],
  ["Matt Olsen","Harbinger Motors Inc.","Not in target list","New target — active Oct 2","New EV OEM account added to Matt's targets","pos"],
  ["Matt Olsen","SK Battery America","Not in target list","New target — active Sep 29","New battery account added to Matt's targets","pos"],
  ["Geoff Petrangelo","RT_MOBIS Ioniq - Bed Slide","Not in pipeline","$950K Business Case","New RealTruck opp added — due Sep 2029","pos"],
  ["Geoff Petrangelo","RT_Nissan Novara - Bedliner","Not in pipeline","$347K Business Case","New RealTruck opp added — due Oct 2027","pos"],
  ["Jake Heinecke","New Target Accounts","30 accounts","41 accounts","+11 new: AB InBev, Coca-Cola, Constellation, Beam Suntory, BNSF, Publix, Burlington, PetSmart, DrinkPak, Ball Corp, Crown Packaging","pos"],
  ["Jake Heinecke","Harris Teeter","Target account","Removed from list","Per Jake — opp stays in pipeline tab","neg"],
  ["Jake Heinecke","Kroger - Salem, VA","Target account","Removed from list","Per Jake — removed","neg"],
  ["Jake Heinecke","Kroger/Fred Meyer - Clackamas, OR","Target account","Removed from list","Per Jake — removed","neg"],
  ["Mariano Lobos","rfq_25575 P33C Steel Racks","$2M Business Case","$3.16M Business Case","Significant amount increase","pos"],
  ["Mariano Lobos","BP3345 + Sleeve","$260K Quote","$164K Quote","Amount reduced","neg"],
  ["Rebecca Krueger","Volvo 800 V Compressor Pack","Not in pipeline","$100K Design","New Volvo Car opp added","pos"],
  ["Rebecca Krueger","Cummins Flex SCR End Out Pack","Previously removed","$200K Concept","Back in pipeline","pos"],
  ["Rebecca Krueger","Form Energy Battery Divider Tray Pack","$200K Business Case","REMOVED","Removed from SF","neg"],
  ["Vonn McQuiston","Bear Proof Lids","1 opp $1.1M","3 separate opps $3.3M total","35G, 65G, 95G now tracked individually","pos"]
]
export const TOP_ACCOUNTS = {};
