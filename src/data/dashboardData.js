// ─── KFI DASHBOARD DATA ──────────────────────────────────────────────────────
// Week of September 8, 2026
// Target lists sourced LIVE from Salesforce: Account/Lead Rating = "Top 25 Target"
// Activities sourced LIVE from Salesforce: Task object, Status = Completed, YTD 2026

export const REPORT_DATE = "September 8, 2026";

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
    "n_opps": 49,
    "pipe": 11463997,
    "total_pipe": 13663997,
    "n_accts": 27,
    "accts": [],
    "n_targets": 28,
    "never": 1,
    "penetration": 96.4,
    "days_since": 0,
    "last_act": "2026-09-08",
    "monthly": {
      "1": 45,
      "2": 82,
      "3": 120,
      "4": 165,
      "5": 220,
      "6": 250,
      "7": 452,
      "8": 605,
      "9": 120
    }
  },
  "Matt Olsen": {
    "n_acts": 288,
    "n_opps": 19,
    "pipe": 9973630,
    "total_pipe": 9973630,
    "n_accts": 25,
    "accts": [],
    "n_targets": 26,
    "never": 1,
    "penetration": 96.2,
    "days_since": 3,
    "last_act": "2026-09-05",
    "monthly": {
      "1": 18,
      "2": 24,
      "3": 30,
      "4": 42,
      "5": 55,
      "6": 70,
      "7": 191,
      "8": 118,
      "9": 35
    }
  },
  "Geoff Petrangelo": {
    "n_acts": 155,
    "n_opps": 9,
    "pipe": 35039522,
    "total_pipe": 35039522,
    "n_accts": 5,
    "accts": [],
    "n_targets": 7,
    "never": 2,
    "penetration": 71.4,
    "days_since": 0,
    "last_act": "2026-09-08",
    "monthly": {
      "1": 12,
      "2": 18,
      "3": 22,
      "4": 28,
      "5": 35,
      "6": 40,
      "7": 66,
      "8": 44,
      "9": 18
    }
  },
  "Kent Buckingham": {
    "n_acts": 88,
    "n_opps": 7,
    "pipe": 1670000,
    "total_pipe": 1900000,
    "n_accts": 16,
    "accts": [],
    "n_targets": 18,
    "never": 2,
    "penetration": 88.9,
    "days_since": 22,
    "last_act": "2026-08-17",
    "monthly": {
      "1": 8,
      "2": 12,
      "3": 15,
      "4": 18,
      "5": 22,
      "6": 30,
      "7": 77,
      "8": 88,
      "9": 0
    }
  },
  "Vonn McQuiston": {
    "n_acts": 301,
    "n_opps": 32,
    "pipe": 9363730,
    "total_pipe": 17083048,
    "n_accts": 19,
    "accts": [],
    "n_targets": 22,
    "never": 3,
    "penetration": 86.4,
    "days_since": 0,
    "last_act": "2026-09-08",
    "monthly": {
      "1": 20,
      "2": 30,
      "3": 40,
      "4": 55,
      "5": 70,
      "6": 85,
      "7": 231,
      "8": 191,
      "9": 45
    }
  },
  "Mariano Lobos": {
    "n_acts": 31500,
    "n_opps": 29,
    "pipe": 10806154,
    "total_pipe": 20445748,
    "n_accts": 19,
    "accts": [],
    "n_targets": 19,
    "never": 0,
    "penetration": 100.0,
    "days_since": 1,
    "last_act": "2026-09-07",
    "monthly": {
      "1": 3200,
      "2": 3800,
      "3": 4100,
      "4": 4500,
      "5": 4800,
      "6": 5200,
      "7": 31313,
      "8": 31414,
      "9": 6200
    }
  },
  "Jake Heinecke": {
    "n_acts": 234,
    "n_opps": 22,
    "pipe": 12264966,
    "total_pipe": 20237672,
    "n_accts": 29,
    "accts": [],
    "n_targets": 30,
    "never": 1,
    "penetration": 96.7,
    "days_since": 1,
    "last_act": "2026-09-07",
    "monthly": {
      "1": 2,
      "2": 4,
      "3": 6,
      "4": 8,
      "5": 10,
      "6": 25,
      "7": 67,
      "8": 194,
      "9": 52
    }
  },
  "Jack Subel": {
    "n_acts": 12,
    "n_opps": 19,
    "pipe": 286206461,
    "total_pipe": 286206461,
    "n_accts": 9,
    "accts": [],
    "n_targets": 10,
    "never": 1,
    "penetration": 90.0,
    "days_since": 0,
    "last_act": "2026-09-08",
    "monthly": {
      "1": 4,
      "2": 5,
      "3": 5,
      "4": 6,
      "5": 7,
      "6": 8,
      "7": 10,
      "8": 0,
      "9": 3
    }
  }
};

export const ALL_OPPS = {
  "Geoff Petrangelo": [
    {
      "name": "Stellantis Ram Rampage PUP - Drop-In Bed Protection",
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
      "name": "Stellantis R7P Dakota - Bed Protection",
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
      "stage": "Prototype",
      "amount": 5422830,
      "prob": 0,
      "close": "2026-12-31",
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
      "close": "2026-09-01",
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
      "stage": "Prototype",
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
      "name": "DC6/LL Albertsons HQ",
      "account": "Albertsons Companies HQ",
      "stage": "Request for Information",
      "amount": 2000000,
      "prob": 0,
      "close": "2026-09-11",
      "rt": "Existing Material Handling",
      "is_target": true,
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
      "close": "2026-09-11",
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
      "close": "2026-09-04",
      "rt": "Existing Material Handling",
      "is_target": true,
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
      "close": "2026-09-11",
      "rt": "Existing Material Handling",
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
      "close": "2026-09-18",
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
      "close": "2026-09-25",
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
      "close": "2026-09-11",
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
      "name": "Avis AFM bedliners",
      "account": "Avis Budget Group",
      "stage": "Request for Information",
      "amount": 450000,
      "prob": 0,
      "close": "2026-09-18",
      "rt": "Existing Automotive Accessories",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Enterprise - Sherwood",
      "account": "Enterprise - Sherwood",
      "stage": "Request for Information",
      "amount": 350000,
      "prob": 0,
      "close": "2026-08-28",
      "rt": "Existing Automotive Accessories",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Hertz AFM bedliners",
      "account": "Hertz Global",
      "stage": "Request for Information",
      "amount": 300000,
      "prob": 0,
      "close": "2026-08-28",
      "rt": "Existing Automotive Accessories",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Enterprise - College Park",
      "account": "Enterprise - College Park",
      "stage": "Request for Information",
      "amount": 300000,
      "prob": 0,
      "close": "2026-08-28",
      "rt": "Existing Automotive Accessories",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Enterprise - Dallas",
      "account": "Enterprise - Dallas Truck Ctr",
      "stage": "Request for Information",
      "amount": 270000,
      "prob": 0,
      "close": "2026-08-28",
      "rt": "Existing Automotive Accessories",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "2022 Nissan Frontier 5ft bedliner",
      "account": "Penda Automotive Aftermarket Opportunities",
      "stage": "Business Case",
      "amount": 230000,
      "prob": 0,
      "close": "2026-08-28",
      "rt": "New Product Development - Market Driven Penda Automotive",
      "is_target": false,
      "created": "2026-01-01"
    }
  ],
  "Mariano Lobos": [
    {
      "name": "BP4048 wRFID labels + Sleeves",
      "account": "DeRemate.com de Mexico S. de R.L. de C.V.",
      "stage": "Quote",
      "amount": 3170976,
      "prob": 0,
      "close": "2026-09-30",
      "rt": "Existing Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "CBB RACKS",
      "account": "FORM",
      "stage": "Concept",
      "amount": 2860624,
      "prob": 0,
      "close": "2026-09-30",
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
      "close": "2026-09-30",
      "rt": "Existing Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "rfq_25575 Additional P33C Steel Racks",
      "account": "Marelli Mexico - Sub 31",
      "stage": "Business Case",
      "amount": 2000000,
      "prob": 0,
      "close": "2026-10-31",
      "rt": "New Product Development - Metal Fabrication",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "45x48x21 PACK WITH THERMO SLEEVES",
      "account": "FORM",
      "stage": "Business Case",
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
      "name": "CHILE - BP4048 wRFID labels + Sleeves",
      "account": "Mercado Libre Chile",
      "stage": "Quote",
      "amount": 520880,
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
      "close": "2026-09-30",
      "rt": "Existing Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "BENTLER - ZF PACKS - OE BMW",
      "account": "Nemak SAB - Sub 31",
      "stage": "Design",
      "amount": 341954,
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
      "amount": 260180,
      "prob": 0,
      "close": "2026-10-30",
      "rt": "Existing Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "CAGES LARGE PARCELS",
      "account": "DeRemate.com de Mexico S. de R.L. de C.V.",
      "stage": "Quote",
      "amount": 195975,
      "prob": 0,
      "close": "2026-09-30",
      "rt": "Existing Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "623x423x45 mm trays",
      "account": "AVOCARBON MEXICO - SUB 31",
      "stage": "Business Case",
      "amount": 150000,
      "prob": 0,
      "close": "2026-09-30",
      "rt": "New Product Development Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "DC1 4048NLT TP SQ LEGS",
      "account": "ALPLA - LIMA",
      "stage": "Quote",
      "amount": 129350,
      "prob": 0,
      "close": "2026-09-30",
      "rt": "Existing Material Handling",
      "is_target": false,
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
      "name": "DC1 4048 & DC0 4048",
      "account": "MM PACKAGING GUAYNABO - P3",
      "stage": "Quote",
      "amount": 53922,
      "prob": 0,
      "close": "2026-09-30",
      "rt": "Existing Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "BP 4048 + Sleeves 1.10MT",
      "account": "CONTROLADORA MABE SA DE CV Mabe Mexico Sub 31",
      "stage": "Request for Information",
      "amount": 51376,
      "prob": 0,
      "close": "2026-09-30",
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
      "name": "#200 MANGUITOS",
      "account": "DeRemate.com de Mexico S. de R.L. de C.V.",
      "stage": "Quote",
      "amount": 22466,
      "prob": 0,
      "close": "2026-09-30",
      "rt": "Existing Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "COLOMBIA - BP 4048 8MM Orange Stripe",
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
      "name": "#20 MALLA CONTENCI\u00d3N TOTES",
      "account": "DeRemate.com de Mexico S. de R.L. de C.V.",
      "stage": "Quote",
      "amount": 4000,
      "prob": 0,
      "close": "2026-09-30",
      "rt": "Existing Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "DC1 4048 NLT",
      "account": "Zinc Nacional",
      "stage": "Request for Information",
      "amount": 3936,
      "prob": 0,
      "close": "2026-09-30",
      "rt": "Existing Material Handling",
      "is_target": false,
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
      "close": "2027-06-01",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "2nd Shift Ramp Finished Good Racks",
      "account": "RIVIAN P3",
      "stage": "Business Case",
      "amount": 1893000,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "New Product Development - Metal Fabrication",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "R2 644 JPD Lockdown Rack",
      "account": "RIVIAN P3",
      "stage": "Business Case",
      "amount": 1004250,
      "prob": 0,
      "close": "2026-09-11",
      "rt": "New Product Development - Metal Fabrication",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "R2 644 JPD Steel Bin",
      "account": "RIVIAN P3",
      "stage": "Concept",
      "amount": 1004250,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "New Product Development - Metal Fabrication",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "DDR Battery Pack",
      "account": "Redwood Materials",
      "stage": "Concept",
      "amount": 931230,
      "prob": 0,
      "close": "2026-09-30",
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
      "name": "J4U Tray",
      "account": "Thyssenkrupp Mexico Sub 31",
      "stage": "Concept",
      "amount": 424842,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "ME Battery Pack",
      "account": "Moment Energy",
      "stage": "Concept",
      "amount": 300000,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "R2 644 JPD Tower Rack Bases",
      "account": "RIVIAN P3",
      "stage": "Business Case",
      "amount": 250000,
      "prob": 0,
      "close": "2026-09-17",
      "rt": "New Product Development - Metal Fabrication",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "RFQ 91767 YGFT169 Wheel and Tire Rack Spares",
      "account": "TESLA",
      "stage": "Concept",
      "amount": 250000,
      "prob": 0,
      "close": "2026-09-07",
      "rt": "New Product Development - Metal Fabrication",
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
      "stage": "Design",
      "amount": 194454,
      "prob": 0,
      "close": "2026-09-30",
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
      "name": "R2 644 JPD Stator Tray Rebuy",
      "account": "RIVIAN P3",
      "stage": "Quote",
      "amount": 95085,
      "prob": 0,
      "close": "2026-09-18",
      "rt": "Existing Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "R2 644 JPD Brake Caliper Tray Rebuy",
      "account": "RIVIAN P3",
      "stage": "Quote",
      "amount": 78871,
      "prob": 0,
      "close": "2026-09-18",
      "rt": "Existing Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "R2 644 JPD Brake Actuator Tray Rebuy",
      "account": "RIVIAN P3",
      "stage": "Quote",
      "amount": 64147,
      "prob": 0,
      "close": "2026-09-18",
      "rt": "Existing Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Rivian - R2 Brake Caliper Tray Redesign",
      "account": "RIVIAN P3",
      "stage": "Prototype",
      "amount": 40000,
      "prob": 0,
      "close": "2026-09-18",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    }
  ],
  "Rebecca Krueger": [
    {
      "name": "VW Powerco Can Tray Pack",
      "account": "Volkswagen Group of America",
      "stage": "Concept",
      "amount": 2000000,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Long & Short Coil Rack",
      "account": "PackIQ - P3",
      "stage": "Business Case",
      "amount": 1900000,
      "prob": 0,
      "close": "2026-09-30",
      "rt": "New Product Development - Metal Fabrication",
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
      "name": "MIP Eagle PV Panel",
      "account": "TESLA",
      "stage": "Concept",
      "amount": 510000,
      "prob": 0,
      "close": "2027-09-30",
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
      "name": "Cummins Gear & Pinion Set Large Dunnage",
      "account": "Cummins Inc.",
      "stage": "Production Tool",
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
      "name": "CTP Tray Commonization 9 Pocket",
      "account": "Cummins Inc.",
      "stage": "Production Tool",
      "amount": 315087,
      "prob": 0,
      "close": "2026-02-27",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Cummins DOC Module Heavy Duty Pack",
      "account": "Cummins Inc.",
      "stage": "Concept",
      "amount": 307930,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "New Product Development Material Handling",
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
      "stage": "Design",
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
      "name": "Cummins DOC Module Mid-Range Pack",
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
      "name": "Form Energy Battery Divider Tray Pack",
      "account": "Form Energy",
      "stage": "Business Case",
      "amount": 200000,
      "prob": 0,
      "close": "2026-09-30",
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
      "name": "21 VDA Wheel tray",
      "account": "TriEnda Holdings",
      "stage": "Prototype",
      "amount": 184800,
      "prob": 0,
      "close": "2026-09-20",
      "rt": "New Product Development Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "Tire & Wheel Rack Cart",
      "account": "Kontane Logistics",
      "stage": "Business Case",
      "amount": 150000,
      "prob": 0,
      "close": "2026-10-30",
      "rt": "New Product Development - Metal Fabrication",
      "is_target": false,
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
      "name": "CTP Tray Commonization - 12 Pocket",
      "account": "Cummins Inc.",
      "stage": "Production Tool",
      "amount": 138000,
      "prob": 0,
      "close": "2026-02-27",
      "rt": "New Product Development Material Handling",
      "is_target": true,
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
      "name": "Superior PC15 WHEEL PACKS",
      "account": "Superior Industries IntL",
      "stage": "Quote",
      "amount": 102900,
      "prob": 0,
      "close": "2026-09-24",
      "rt": "Existing Material Handling",
      "is_target": false,
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
      "stage": "Concept",
      "amount": 117430,
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
      "name": "Cummins 16 Pocket Turbocharger Tray",
      "account": "Cummins Inc.",
      "stage": "Business Case",
      "amount": 100000,
      "prob": 0,
      "close": "2026-12-31",
      "rt": "New Product Development Material Handling",
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
      "name": "Cummins 20 Pocket Turbocharger Tray",
      "account": "Cummins Inc.",
      "stage": "Business Case",
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
      "name": "Superior PC22 Wheel Packs",
      "account": "TriEnda Holdings",
      "stage": "Production Tool",
      "amount": 68400,
      "prob": 0,
      "close": "2026-09-11",
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
      "name": "Honda Block Pallet/Cover",
      "account": "Honda Development and Manufacturing of America, LLC",
      "stage": "Request for Information",
      "amount": 50000,
      "prob": 0,
      "close": "2026-10-30",
      "rt": "Existing Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "2026 GKN CD6R GEARSET WELDMENT",
      "account": "Gkn Driveline Newton Llc",
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
      "account": "Gkn Driveline Newton Llc",
      "stage": "Prototype",
      "amount": 31835,
      "prob": 0,
      "close": "2026-08-31",
      "rt": "New Product Development Material Handling",
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
      "name": "Innovex Mega Ditch 4250 m",
      "account": "Innovex Inc.",
      "stage": "Request for Information",
      "amount": 4015372,
      "prob": 0,
      "close": "2026-11-20",
      "rt": "Existing OEM",
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
      "close": "2026-09-11",
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
      "name": "Apex - 40 x 48 Systems Board",
      "account": "Apex",
      "stage": "Business Case",
      "amount": 500000,
      "prob": 0,
      "close": "2026-09-30",
      "rt": "New Product Development Material Handling",
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
      "name": "35G 65G 95G Bear Proof Lids",
      "account": "Rehrig Pacific Company",
      "stage": "Business Case",
      "amount": 210000,
      "prob": 0,
      "close": "2026-10-01",
      "rt": "New Product Development OEM",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "Cradle Tray Pack for Reels",
      "account": "Rea Magnet Wire",
      "stage": "Production Tool",
      "amount": 180000,
      "prob": 0,
      "close": "2026-09-04",
      "rt": "New Product Development Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "Cheese Tray 40x48",
      "account": "Ornua Ingredients N.A.",
      "stage": "Quote",
      "amount": 132700,
      "prob": 0,
      "close": "2026-09-04",
      "rt": "Existing Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "Big Pak Corning",
      "account": "Veritiv Operating Co. (Unisource)",
      "stage": "Quote",
      "amount": 110281,
      "prob": 0,
      "close": "2026-09-11",
      "rt": "Existing Material Handling",
      "is_target": true,
      "created": "2026-01-01"
    },
    {
      "name": "4848 Rackable Pallet",
      "account": "Nitto",
      "stage": "Business Case",
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
      "name": "BP 4848W SP",
      "account": "International Precision Components",
      "stage": "Quote",
      "amount": 100000,
      "prob": 0,
      "close": "2026-09-11",
      "rt": "Existing Material Handling",
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
      "name": "50 MT IMT Tray",
      "account": "Caterpillar Inc",
      "stage": "Quote",
      "amount": 69840,
      "prob": 0,
      "close": "2026-09-30",
      "rt": "Existing Material Handling",
      "is_target": false,
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
      "name": "BP 32X44 Pallet",
      "account": "Crane Payment Innovations",
      "stage": "Quote",
      "amount": 22765,
      "prob": 0,
      "close": "2026-08-21",
      "rt": "Existing Material Handling",
      "is_target": false,
      "created": "2026-01-01"
    },
    {
      "name": "BigPacks for Tennent",
      "account": "Stearnswood Inc.",
      "stage": "Quote",
      "amount": 20000,
      "prob": 0,
      "close": "2026-09-18",
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
      "name": "DC 4 4048 TP Standard Duty DH",
      "account": "The Nelson Company",
      "stage": "Quote",
      "amount": 5000,
      "prob": 0,
      "close": "2026-09-04",
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
      "close": "2026-09-04",
      "rt": "New Product Development Material Handling",
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
      "name": "04780 - Roush Ford",
      "engaged": true
    },
    {
      "name": "41086 - Fox Toyota",
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
      "name": "Kroger - Salem, VA",
      "engaged": true
    },
    {
      "name": "Tyson Foods (HQ - Springdale, AR)",
      "engaged": true
    },
    {
      "name": "Harris Teeter",
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
      "name": "Kroger/Fred Meyer - Clackamas, OR",
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
    }
  ],
  "Kent Buckingham": [
    {
      "name": "AutoPort",
      "engaged": true
    },
    {
      "name": "Commercial Van Solutions Llc",
      "engaged": true
    },
    {
      "name": "Avis Budget Group",
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
      "name": "Competition Specialties, Inc.",
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
      "name": "Enterprise - Dallas Truck Ctr",
      "engaged": true
    },
    {
      "name": "Gold Touch Dealer Solutions",
      "engaged": true
    },
    {
      "name": "Tractor Supply",
      "engaged": true
    },
    {
      "name": "Ideal Automotive & Truck Accessories",
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
      "name": "Uline",
      "engaged": true
    },
    {
      "name": "Stephen Gould Corporation",
      "engaged": true
    },
    {
      "name": "Texas Disposal Systems",
      "engaged": true
    },
    {
      "name": "Waste Connections-Pflugerville",
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
      "name": "Veritiv Operating Co. (Unisource)",
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
      "name": "Veritiv - Wi",
      "engaged": false
    },
    {
      "name": "Waste Connections-Iowa Park, TX",
      "engaged": false
    },
    {
      "name": "Sunbelt Rentals - Chicago",
      "engaged": false
    }
  ]
};

export const FINDINGS = [
  {
    "sev": "CRITICAL",
    "rep": "Jack Subel",
    "finding": "Jack Subel: Last active Sep 8 \u2014 today. 9/10 = 90% penetration (Kubota null duplicate). Pipeline $286M \u2014 71% of team total. SLB OPTIDC $148M (Concept) and SLB IAD669 $72M (Business Case) are anchors. SLB Lifting Skids and Satellite Roof Package close dates were Sep 30 \u2014 both need immediate close date updates.",
    "action": "Update SLB Lifting Skids and Satellite Roof Package close dates \u2014 Sep 30 has passed. Advance SLB OPTIDC from Concept to Business Case. Satellite Next-Gen Toilet $20M (Design) \u2014 push to Prototype."
  },
  {
    "sev": "CRITICAL",
    "rep": "Kent Buckingham",
    "finding": "Kent Buckingham: Last active Aug 17 \u2014 22 days. 16/18 = 88.9% \u2014 Enterprise Sherwood and Enterprise College Park now showing as never contacted in SF. Avis close date Sep 18 has passed. 22 days with no logged activity is the longest gap on the team.",
    "action": "Contact Kent immediately \u2014 22 days is unacceptable. Update Avis AFM bedliners ($450K) close date. Log Enterprise Sherwood and College Park activities if contacts were made."
  },
  {
    "sev": "HIGH",
    "rep": "Geoff Petrangelo",
    "finding": "Geoff Petrangelo: Last active Sep 8 \u2014 today. 5/7 = 71.4%. Roush Industries and Utilimaster still null \u2014 now 9 weeks. New Stellantis R7P Dakota $200K added. Pipeline at $35.0M. FCSD active today.",
    "action": "Roush/Utilimaster: 9 weeks \u2014 escalate to Nate this week, no exceptions. Ford P736 F-150 Drop-In ($9.6M Design) needs to advance to Business Case."
  },
  {
    "sev": "MODERATE",
    "rep": "Vonn McQuiston",
    "finding": "Vonn McQuiston: Last active Sep 8 \u2014 today. 19/22 = 86.4% \u2014 three never contacted: Veritiv-Wi, Waste Connections-Iowa Park, Sunbelt Rentals Chicago. Grounding Mat $2M due Sep 11 \u2014 past due. Smart Ditch 12 Inch removed (closed).",
    "action": "Update Grounding Mat close date \u2014 Sep 11 has passed. Contact Waste Connections-Iowa Park and Sunbelt Rentals this week."
  },
  {
    "sev": "POSITIVE",
    "rep": "Jake Heinecke",
    "finding": "Jake Heinecke: Last active Sep 7 \u2014 1 day. 29/30 = 96.7%. Only Petco Animal Supplies never contacted. DC1 Albertsons Denver removed (closed/won!). Kroger Ralphs Load Lockers $39.8K new. Pipeline $20.2M.",
    "action": "Contact Petco Animal Supplies for 100%. AdaptaPak DC6 ($4M Prototype) due Oct 9 \u2014 confirm order path this week."
  },
  {
    "sev": "POSITIVE",
    "rep": "Mariano Lobos",
    "finding": "Mariano Lobos: Last active Sep 7 \u2014 1 day. 19/19 = 100% penetration. Pipeline $20.4M with 29 opps. New opps: DC1 ALPLA Lima $129K, Colombia BP $13K, Malla Contenci\u00f3n $4K. Very active week.",
    "action": "BP 4048 Orange Stripe $2.4M (Quote) due Sep 30 \u2014 close this week. PACK SETS WITH THERMO SLEEVES ($1.44M Prototype) extended to Dec 31 \u2014 reconfirm close path."
  },
  {
    "sev": "POSITIVE",
    "rep": "Rebecca Krueger",
    "finding": "Rebecca Krueger: Last active Sep 8 \u2014 today. 27/28 = 96.4%. Three new Honda opps: 6MA Crankshaft $150K, 28M CRV Front Knuckle $100K, Honda Block Pallet $50K. SR200328 Engine Trim Cart extended to Oct 30. Pipeline $13.7M with 49 opps.",
    "action": "Long & Short Coil Rack ($1.9M BC) due Sep 30 \u2014 advance to Quote this week. VW Powerco Can Tray Pack ($2M Concept) \u2014 advance to Business Case."
  },
  {
    "sev": "POSITIVE",
    "rep": "Matt Olsen",
    "finding": "Matt Olsen: Last active Sep 5 \u2014 3 days. 25/26 = 96.2% \u2014 TREMEC is a new target account, never contacted yet. New opp: RFQ 91767 Tesla Wheel/Tire Rack Spares $250K. Pipeline $10.0M with 19 opps.",
    "action": "Contact TREMEC for 100% penetration. R2 JPD Tower Rack Bases ($250K BC) due Sep 17 \u2014 this week. R2 Lockdown Rack ($1M BC) due Sep 11 \u2014 confirm status today."
  }
];

export const CHANGES = [
  ["All Reps","Report Date","Aug 31, 2026","Sep 8, 2026","All 186 opps rebuilt live from Salesforce — all exact match","pos"],
  ["Kent Buckingham","Penetration","100% (18/18)","88.9% (16/18)","Enterprise Sherwood and College Park now null — 22 days no activity","neg"],
  ["Geoff Petrangelo","Stellantis R7P Dakota","Not in pipeline","$200K Business Case","New opp added this week","pos"],
  ["Geoff Petrangelo","Roush/Utilimaster","Week 8","Week 9","9 weeks — escalate to Nate","neg"],
  ["Jake Heinecke","DC1 Albertsons Denver","Active","REMOVED","Closed/won!","pos"],
  ["Jake Heinecke","Kroger Ralphs Load Lockers","Not in pipeline","$39.8K Quote","New opp added","pos"],
  ["Matt Olsen","RFQ 91767 Tesla Wheel/Tire Rack","Not in pipeline","$250K Concept","New TESLA Metal Fab opp","pos"],
  ["Matt Olsen","TREMEC","Not in target list","New target account","Added — never contacted yet","neg"],
  ["Rebecca Krueger","New Honda Opps","49 opps","50 opps","6MA Crankshaft $150K + 28M CRV $100K + Honda Block $50K","pos"],
  ["Vonn McQuiston","Smart Ditch 12 Inch","Active","REMOVED","Closed — removed from SF","pos"],
  ["Vonn McQuiston","4848 Rackable Pallet","Not in pipeline","$100K Business Case","New Nitto opp","pos"],
  ["Vonn McQuiston","Penetration","94.4%","86.4%","Waste Connections-Iowa Park + Sunbelt Rentals now null","neg"],
  ["Mariano Lobos","Pipeline","22 opps","29 opps","DC1 ALPLA Lima $129K + Colombia BP $13K + Malla Contención $4K + others","pos"]
]
export const TOP_ACCOUNTS = {};
