// ─── KFI DASHBOARD DATA ─────────────────────────────────────────
// To update: replace repData and reportDate with new values.
// Run update_dashboard.py with new Salesforce files to auto-generate.

export const REPORT_DATE = "June 1, 2026";

export const REPS = [
  "Jacob Hacker",
  "Kyle Turner",
  "Matt Olsen",
  "Geoff Petrangelo",
  "Kent Buckingham",
  "Vonn McQuiston",
  "Mark Holmes",
  "Mariano Lobos",
  "Jake Heinecke",
  "Jack Subel"
];

export const REP_DATA = {
  "Jacob Hacker": {
    "n_acts": 127,
    "n_opps": 65,
    "pipe": 18024640.0,
    "n_accts": 9,
    "accts": [
      "Cummins Inc.",
      "Forvia",
      "Motherson Group",
      "Takeda",
      "PACCAR",
      "Cummins",
      "Toyota Motor Sales USA",
      "GF Linamar",
      "Linamar"
    ],
    "days_since": 4,
    "last_act": "2026-05-28",
    "monthly": {
      "1": 0,
      "2": 0,
      "3": 48,
      "4": 53,
      "5": 26,
      "6": 0
    },
    "opps": [
      {
        "name": "BMW AESC Battery Pack",
        "account": "Bmw Manufacturing, Llc",
        "stage": "Closed/Lost",
        "amount": 5000000.0,
        "prob": 0.0,
        "created": "2026-02-20"
      },
      {
        "name": "VW Powerco Can Tray Pack",
        "account": "Volkswagen Group of America",
        "stage": "Business Case",
        "amount": 2000000.0,
        "prob": 0.0,
        "created": "2026-05-01"
      },
      {
        "name": "DR\u00c4XLMAIER XNF DP IM carrier front & G65 rear Racks",
        "account": "DR\u00c4XLMAIER Group Companies",
        "stage": "Closed/Lost",
        "amount": 1000000.0,
        "prob": 0.0,
        "created": "2026-03-04"
      },
      {
        "name": "Cummins Ring Gear Medium Tray",
        "account": "Cummins Inc.",
        "stage": "Business Case",
        "amount": 500000.0,
        "prob": 0.0,
        "created": "2026-04-07"
      },
      {
        "name": "Toyota Pallet",
        "account": "Toyota Motor Manufacturing Kentucky",
        "stage": "Business Case",
        "amount": 500000.0,
        "prob": 0.0,
        "created": "2026-04-03"
      },
      {
        "name": "Cummins Ring Gear Small Tray",
        "account": "Cummins Inc.",
        "stage": "Business Case",
        "amount": 500000.0,
        "prob": 0.0,
        "created": "2026-04-07"
      },
      {
        "name": "Cummins Pinion Tray Small",
        "account": "Meritor",
        "stage": "Business Case",
        "amount": 400000.0,
        "prob": 0.0,
        "created": "2026-05-07"
      },
      {
        "name": "Cummins Gear & Pinion Set Small Dunnage",
        "account": "Cummins Inc.",
        "stage": "Business Case",
        "amount": 400000.0,
        "prob": 0.0,
        "created": "2026-04-07"
      },
      {
        "name": "Cummins Gear & Pinion Set Medium Dunnage",
        "account": "Meritor",
        "stage": "Business Case",
        "amount": 400000.0,
        "prob": 0.0,
        "created": "2026-04-07"
      },
      {
        "name": "Scout Motors Body Panel Protection",
        "account": "Scout Motors - P3",
        "stage": "Business Case",
        "amount": 400000.0,
        "prob": 0.0,
        "created": "2026-04-28"
      }
    ],
    "recent_acts": [
      {
        "date": "2026-05-28",
        "company": "Cummins Inc.",
        "subject": "Email: RE: Burrs on plastic trays",
        "days_ago": 4
      },
      {
        "date": "2026-05-22",
        "company": "Cummins Inc.",
        "subject": "Email: RE: Tray designs",
        "days_ago": 10
      },
      {
        "date": "2026-05-22",
        "company": "Cummins Inc.",
        "subject": "Email: RE: Burrs on plastic trays",
        "days_ago": 10
      },
      {
        "date": "2026-05-22",
        "company": "Cummins Inc.",
        "subject": "Email: RE: Burrs on plastic trays",
        "days_ago": 10
      },
      {
        "date": "2026-05-22",
        "company": "Cummins Inc.",
        "subject": "Email: Re: Burrs on plastic trays",
        "days_ago": 10
      },
      {
        "date": "2026-05-22",
        "company": "Cummins Inc.",
        "subject": "Email: FW: Burrs on plastic trays",
        "days_ago": 10
      },
      {
        "date": "2026-05-22",
        "company": "Cummins Inc.",
        "subject": "Email: FW: Burrs on plastic trays",
        "days_ago": 10
      },
      {
        "date": "2026-05-21",
        "company": "Cummins Inc.",
        "subject": "Email: RE: Introduction - Jacob hacker (TriEnda)",
        "days_ago": 11
      },
      {
        "date": "2026-05-21",
        "company": "Cummins Inc.",
        "subject": "Email: RE: Introduction - Jacob hacker (TriEnda)",
        "days_ago": 11
      },
      {
        "date": "2026-05-21",
        "company": "Cummins Inc.",
        "subject": "Email: RE: Introduction - Jacob hacker (TriEnda)",
        "days_ago": 11
      },
      {
        "date": "2026-05-21",
        "company": "Cummins Inc.",
        "subject": "Email: FW: Introduction - Jacob hacker (TriEnda)",
        "days_ago": 11
      },
      {
        "date": "2026-05-21",
        "company": "Cummins Inc.",
        "subject": "Email: Re: Introduction - Jacob hacker (TriEnda)",
        "days_ago": 11
      }
    ],
    "conv": 722.2
  },
  "Kyle Turner": {
    "n_acts": 28,
    "n_opps": 2,
    "pipe": 130000.0,
    "n_accts": 7,
    "accts": [
      "JTEKT Column Systems NA",
      "Kawasaki Motors Manufacturing",
      "Magna International",
      "BorgWarner",
      "Nemak",
      "Benteler",
      "Whirlpool"
    ],
    "days_since": 6,
    "last_act": "2026-05-26",
    "monthly": {
      "1": 0,
      "2": 0,
      "3": 3,
      "4": 12,
      "5": 13,
      "6": 0
    },
    "opps": [
      {
        "name": "Maxion Wheels - Sedalia, MO - 18\" Wheel Tray Sets",
        "account": "Maxion Wheels - AMS Sub P3",
        "stage": "Closed/Lost",
        "amount": 80000.0,
        "prob": 0.0,
        "created": "2026-03-22"
      },
      {
        "name": "Superior Industries - 16\" Tray and Lid RFQ",
        "account": "Superior Industries Int'L",
        "stage": "Purchase Order / Awarded",
        "amount": 50000.0,
        "prob": 100.0,
        "created": "2026-02-19"
      }
    ],
    "recent_acts": [
      {
        "date": "2026-05-26",
        "company": "Benteler",
        "subject": "Email: RE: Quote QUO4520",
        "days_ago": 6
      },
      {
        "date": "2026-05-22",
        "company": "Benteler",
        "subject": "Email: Quote QUO4520",
        "days_ago": 10
      },
      {
        "date": "2026-05-08",
        "company": "Benteler",
        "subject": "Email: RE: Trienda Concept Review - Mustang",
        "days_ago": 24
      },
      {
        "date": "2026-05-05",
        "company": "Whirlpool",
        "subject": "Email: Trienda - Thermoforming and Steel Racks",
        "days_ago": 27
      },
      {
        "date": "2026-05-05",
        "company": "Magna International",
        "subject": "Email: RE: Trienda - Thermoforming, Plastic Pallets, and Sleeve P",
        "days_ago": 27
      },
      {
        "date": "2026-05-05",
        "company": "Magna International",
        "subject": "Email: RE: Trienda - Thermoforming, Plastic Pallets, and Sleeve P",
        "days_ago": 27
      },
      {
        "date": "2026-05-05",
        "company": "Benteler",
        "subject": "Email: RE: Trienda Concept Review - Mustang",
        "days_ago": 27
      },
      {
        "date": "2026-05-05",
        "company": "Benteler",
        "subject": "Email: Re: Trienda Concept Review - Mustang",
        "days_ago": 27
      },
      {
        "date": "2026-05-04",
        "company": "Benteler",
        "subject": "Email: RE: Trienda Concept Review - Mustang",
        "days_ago": 28
      },
      {
        "date": "2026-05-01",
        "company": "Benteler",
        "subject": "Email: RE: Trienda Concept Review - Mustang",
        "days_ago": 31
      },
      {
        "date": "2026-05-01",
        "company": "Magna International",
        "subject": "Email: RE: Trienda - Thermoforming, Plastic Pallets, and Sleeve P",
        "days_ago": 31
      },
      {
        "date": "2026-05-01",
        "company": "Magna International",
        "subject": "Email: RE: Trienda - Thermoforming, Plastic Pallets, and Sleeve P",
        "days_ago": 31
      }
    ],
    "conv": 28.6
  },
  "Matt Olsen": {
    "n_acts": 35,
    "n_opps": 47,
    "pipe": 6863007.210000001,
    "n_accts": 2,
    "accts": [
      "Brose Quer\u00e9taro S.A. de C.V.",
      "Jatco Mexico"
    ],
    "days_since": 5,
    "last_act": "2026-05-27",
    "monthly": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 1,
      "5": 34,
      "6": 0
    },
    "opps": [
      {
        "name": "RFQ 68925: MY Battery Pack - Thermoformed",
        "account": "TESLA",
        "stage": "Closed/Lost",
        "amount": 2330000.0,
        "prob": 0.0,
        "created": "2026-02-10"
      },
      {
        "name": "2170 Battery Cell Pack",
        "account": "Lucid Motors - P3",
        "stage": "Concept",
        "amount": 720000.0,
        "prob": 1.0,
        "created": "2026-05-19"
      },
      {
        "name": "PC18 Wheel Packs",
        "account": "Prime Wheel",
        "stage": "Closed/Lost",
        "amount": 302900.0,
        "prob": 0.0,
        "created": "2026-03-06"
      },
      {
        "name": "Rivian - LH/RH Headlamp Racks",
        "account": "RIVIAN P3",
        "stage": "Closed/Lost",
        "amount": 300000.0,
        "prob": 0.0,
        "created": "2026-02-27"
      },
      {
        "name": "P21 IP Upper Gravity 32x70 Pallet",
        "account": "Lucid Motors - P3",
        "stage": "Concept",
        "amount": 291325.32,
        "prob": 1.0,
        "created": "2026-04-20"
      },
      {
        "name": "DDR Battery Pack",
        "account": "Redwood Materials",
        "stage": "Concept",
        "amount": 240000.0,
        "prob": 1.0,
        "created": "2026-04-30"
      },
      {
        "name": "RFQ 74957 3PH PCH Trays & Pallets",
        "account": "TESLA",
        "stage": "Closed/Lost",
        "amount": 215000.0,
        "prob": 0.0,
        "created": "2026-04-22"
      },
      {
        "name": "RGFT175/RGFT176 - TRAYS for TOP COV&PLATTER Racks",
        "account": "TESLA",
        "stage": "Closed/Lost",
        "amount": 200000.0,
        "prob": 0.0,
        "created": "2026-04-22"
      },
      {
        "name": "Lithium Film Roll Pack",
        "account": "Elevated Materials Inc.",
        "stage": "Concept",
        "amount": 193885.0,
        "prob": 1.0,
        "created": "2026-03-11"
      },
      {
        "name": "SEMI Dolly Risers Components",
        "account": "TESLA",
        "stage": "Purchase Order / Awarded",
        "amount": 169520.88,
        "prob": 100.0,
        "created": "2026-02-02"
      }
    ],
    "recent_acts": [
      {
        "date": "2026-05-27",
        "company": "Jatco Mexico",
        "subject": "Email: Undeliverable: TriEnda/Durakon de Lerma, Edo. MEX",
        "days_ago": 5
      },
      {
        "date": "2026-05-27",
        "company": "Jatco Mexico",
        "subject": "Email: TriEnda/Durakon de Lerma, Edo. MEX",
        "days_ago": 5
      },
      {
        "date": "2026-05-27",
        "company": "Jatco Mexico",
        "subject": "Call - Voicemail",
        "days_ago": 5
      },
      {
        "date": "2026-05-20",
        "company": "Jatco Mexico",
        "subject": "Email: TriEnda/Durakon de Lerma, Edo. MEX",
        "days_ago": 12
      },
      {
        "date": "2026-05-20",
        "company": "Jatco Mexico",
        "subject": "Email: TriEnda/Durakon de Lerma, Edo. MEX",
        "days_ago": 12
      },
      {
        "date": "2026-05-20",
        "company": "Jatco Mexico",
        "subject": "Email: TriEnda/Durakon de Lerma, Edo. MEX",
        "days_ago": 12
      },
      {
        "date": "2026-05-20",
        "company": "Jatco Mexico",
        "subject": "Email: TriEnda/Durakon de Lerma, Edo. MEX",
        "days_ago": 12
      },
      {
        "date": "2026-05-20",
        "company": "Jatco Mexico",
        "subject": "Email: TriEnda/Durakon de Lerma, Edo. MEX",
        "days_ago": 12
      },
      {
        "date": "2026-05-20",
        "company": "Jatco Mexico",
        "subject": "Email: TriEnda/Durakon de Lerma, Edo. MEX",
        "days_ago": 12
      },
      {
        "date": "2026-05-20",
        "company": "Jatco Mexico",
        "subject": "Email: TriEnda/Durakon de Lerma, Edo. MEX",
        "days_ago": 12
      },
      {
        "date": "2026-05-20",
        "company": "Jatco Mexico",
        "subject": "Email: TriEnda/Durakon de Lerma, Edo. MEX",
        "days_ago": 12
      },
      {
        "date": "2026-05-20",
        "company": "Jatco Mexico",
        "subject": "Email: TriEnda/Durakon de Lerma, Edo. MEX",
        "days_ago": 12
      }
    ],
    "conv": 2350.0
  },
  "Geoff Petrangelo": {
    "n_acts": 116,
    "n_opps": 5,
    "pipe": 15400000.0,
    "n_accts": 9,
    "accts": [
      "Ford Customer Service Division - FCSD",
      "Nissan Motor Corporation P5",
      "Osiris Group",
      "Toyota",
      "Honda Development & Manufacturing of America, LLC",
      "Toyota Motor Corporation",
      "Oshkosh Corporation",
      "Flex-N-Gate",
      "Ford Motor Company"
    ],
    "days_since": 0,
    "last_act": "2026-06-01",
    "monthly": {
      "1": 0,
      "2": 0,
      "3": 16,
      "4": 32,
      "5": 65,
      "6": 3
    },
    "opps": [
      {
        "name": "Ford P758 Maverick - Standard Option",
        "account": "Ford Customer Service Division - FCSD",
        "stage": "Request for Information",
        "amount": 7200000.0,
        "prob": 1.0,
        "created": "2026-02-03"
      },
      {
        "name": "Ford P736 F-150 - Rear Wheel Well Liner",
        "account": "Ford Customer Service Division - FCSD",
        "stage": "Business Case",
        "amount": 3500000.0,
        "prob": 0.0,
        "created": "2026-05-20"
      },
      {
        "name": "Nissan H60E NA Frontier - Bed Protection",
        "account": "Nissan Motor Corporation P5",
        "stage": "Request for Information",
        "amount": 1950000.0,
        "prob": 1.0,
        "created": "2026-02-03"
      },
      {
        "name": "Ford P736 F-150 - Front Wheel Well Liner",
        "account": "Ford Customer Service Division - FCSD",
        "stage": "Business Case",
        "amount": 1750000.0,
        "prob": 20.0,
        "created": "2026-05-20"
      },
      {
        "name": "Scout SM517 PUP - Accessories",
        "account": "Scout Motors",
        "stage": "Request for Information",
        "amount": 1000000.0,
        "prob": 1.0,
        "created": "2026-02-03"
      }
    ],
    "recent_acts": [
      {
        "date": "2026-06-01",
        "company": "Nissan Motor Corporation P5",
        "subject": "Email: RE: Nissan Weekly Sync w/Rugged Liner",
        "days_ago": 0
      },
      {
        "date": "2026-06-01",
        "company": "Nissan Motor Corporation P5",
        "subject": "Email: RE: Nissan Weekly Sync w/Rugged Liner",
        "days_ago": 0
      },
      {
        "date": "2026-06-01",
        "company": "Honda Development & Manufacturing of America, LLC",
        "subject": "Email: RE: KFI - Penda/Duraliner/Trienda",
        "days_ago": 0
      },
      {
        "date": "2026-05-30",
        "company": "Toyota",
        "subject": "Email: Re: KFI - Penda/Duraliner/Trienda",
        "days_ago": 2
      },
      {
        "date": "2026-05-30",
        "company": "Toyota",
        "subject": "Email: Re: KFI - Penda/Duraliner/Trienda",
        "days_ago": 2
      },
      {
        "date": "2026-05-28",
        "company": "Ford Customer Service Division - FCSD",
        "subject": "Email: RE: ML3Z9900038C",
        "days_ago": 4
      },
      {
        "date": "2026-05-27",
        "company": "Ford Customer Service Division - FCSD",
        "subject": "Email: Re: 27MY F150 WAL Incremental Volume Inquiry (production)",
        "days_ago": 5
      },
      {
        "date": "2026-05-27",
        "company": "Ford Customer Service Division - FCSD",
        "subject": "Email: RE: message",
        "days_ago": 5
      },
      {
        "date": "2026-05-27",
        "company": "Ford Customer Service Division - FCSD",
        "subject": "Email: P736 - DIBL - External Testing Cost",
        "days_ago": 5
      },
      {
        "date": "2026-05-27",
        "company": "Ford Customer Service Division - FCSD",
        "subject": "Email: RE: 27MY F150 WAL Incremental Volume Inquiry (production)",
        "days_ago": 5
      },
      {
        "date": "2026-05-27",
        "company": "Ford Customer Service Division - FCSD",
        "subject": "Email: RE: Outstanding Topics - Resin/Canada/Racks - Penda (Follo",
        "days_ago": 5
      },
      {
        "date": "2026-05-27",
        "company": "Ford Customer Service Division - FCSD",
        "subject": "Email: RE: message",
        "days_ago": 5
      }
    ],
    "conv": 55.6
  },
  "Kent Buckingham": {
    "n_acts": 31,
    "n_opps": 3,
    "pipe": 530000.0,
    "n_accts": 12,
    "accts": [
      "Avis Budget Group",
      "Enterprise - College Park",
      "Valley Van & Sport Utilities",
      "Nobile Brothers Truck Accessories",
      "The AAM Group",
      "Enterprise - Dallas Truck Ctr",
      "Enterprise - Sherwood",
      "DFW Camper Corral",
      "Enterprise - Scott Depot, WV",
      "AutoPort",
      "Competition Specialties, Inc.",
      "Tractor Supply"
    ],
    "days_since": 0,
    "last_act": "2026-06-01",
    "monthly": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 29,
      "6": 2
    },
    "opps": [
      {
        "name": "2026 RAM 2500 8' Power Outlet",
        "account": "Penda Automotive Aftermarket Opportuni",
        "stage": "Production",
        "amount": 300000.0,
        "prob": 20.0,
        "created": "2026-01-05"
      },
      {
        "name": "2022 Nissan Frontier 5'0\" bedliner",
        "account": "Penda Automotive Aftermarket Opportuni",
        "stage": "Business Case",
        "amount": 230000.0,
        "prob": 0.0,
        "created": "2026-03-03"
      },
      {
        "name": "Nobile Truck Accessory Centers-",
        "account": "Nobile Truck Accessory Centers",
        "stage": "Request for Information",
        "amount": 0.0,
        "prob": 0.0,
        "created": "2026-05-27"
      }
    ],
    "recent_acts": [
      {
        "date": "2026-06-01",
        "company": "Enterprise - Dallas Truck Ctr",
        "subject": "Email: Duraliner bedliners",
        "days_ago": 0
      },
      {
        "date": "2026-06-01",
        "company": "Enterprise - Dallas Truck Ctr",
        "subject": "Email: Duraliner bedliners",
        "days_ago": 0
      },
      {
        "date": "2026-05-28",
        "company": "DFW Camper Corral",
        "subject": "Call",
        "days_ago": 4
      },
      {
        "date": "2026-05-27",
        "company": "Avis Budget Group",
        "subject": "Call",
        "days_ago": 5
      },
      {
        "date": "2026-05-26",
        "company": "Avis Budget Group",
        "subject": "In-Person Meeting",
        "days_ago": 6
      },
      {
        "date": "2026-05-19",
        "company": "AutoPort",
        "subject": "Email: RE: Duraliner bedliners",
        "days_ago": 13
      },
      {
        "date": "2026-05-19",
        "company": "AutoPort",
        "subject": "Email: RE: Duraliner bedliners",
        "days_ago": 13
      },
      {
        "date": "2026-05-19",
        "company": "AutoPort",
        "subject": "Email: RE: Duraliner bedliners",
        "days_ago": 13
      },
      {
        "date": "2026-05-19",
        "company": "AutoPort",
        "subject": "Email: RE: Duraliner bedliners",
        "days_ago": 13
      },
      {
        "date": "2026-05-18",
        "company": "Enterprise - Scott Depot, WV",
        "subject": "Call",
        "days_ago": 14
      },
      {
        "date": "2026-05-18",
        "company": "The AAM Group",
        "subject": "Email: Duraliner products",
        "days_ago": 14
      },
      {
        "date": "2026-05-18",
        "company": "Tractor Supply",
        "subject": "Email: Duraliner products",
        "days_ago": 14
      }
    ],
    "conv": 25.0
  },
  "Vonn McQuiston": {
    "n_acts": 23,
    "n_opps": 11,
    "pipe": 7019554.659999999,
    "n_accts": 3,
    "accts": [
      "Waste Connections",
      "FEMA",
      "Mustang Extreme Environmental Services"
    ],
    "days_since": 5,
    "last_act": "2026-05-27",
    "monthly": {
      "1": 8,
      "2": 4,
      "3": 0,
      "4": 3,
      "5": 8,
      "6": 0
    },
    "opps": [
      {
        "name": "Innovex Mega Ditch 4250 m",
        "account": "Innovex Inc.",
        "stage": "Request for Information",
        "amount": 4015372.28,
        "prob": 1.0,
        "created": "2026-03-27"
      },
      {
        "name": "24 Inch Smart Ditch - Cibecue AZ Project",
        "account": "Rep Masters DBA Utility, Gas & Oil Res",
        "stage": "Request for Information",
        "amount": 1609371.0,
        "prob": 1.0,
        "created": "2026-01-20"
      },
      {
        "name": "Compactor Power Unit Tanks",
        "account": "PRT Plastic Recovery Technologies",
        "stage": "Business Case",
        "amount": 650000.0,
        "prob": 0.0,
        "created": "2026-02-03"
      },
      {
        "name": "Getsco - NC Solar Farm",
        "account": "Getsco inc",
        "stage": "Request for Information",
        "amount": 242555.0,
        "prob": 1.0,
        "created": "2026-02-27"
      },
      {
        "name": "Smart Ditch 12 Inch - Dry Creek Landfill -Medford OR",
        "account": "Gersen Group",
        "stage": "Quote",
        "amount": 232314.0,
        "prob": 10.0,
        "created": "2026-01-20"
      },
      {
        "name": "35G, 65G and 95G Bear Proof Lids for Residential Carts",
        "account": "Rehrig Pacific Company",
        "stage": "Business Case",
        "amount": 210000.0,
        "prob": 0.0,
        "created": "2026-03-05"
      },
      {
        "name": "Steel Replacement Bottoms",
        "account": "Texas Disposal Systems",
        "stage": "Purchase Order / Awarded",
        "amount": 21942.38,
        "prob": 100.0,
        "created": "2026-02-19"
      },
      {
        "name": "Steel Replacement Bottoms",
        "account": "Waste Connections-Pflugerville",
        "stage": "Quote",
        "amount": 10000.0,
        "prob": 20.0,
        "created": "2026-02-18"
      },
      {
        "name": "Steel Replacement Bottoms",
        "account": "Waste Connection-Mckinney",
        "stage": "Closed/Lost",
        "amount": 10000.0,
        "prob": 0.0,
        "created": "2026-02-18"
      },
      {
        "name": "Steel Replacement Bottoms",
        "account": "Waste Connections-Tuscaloosa",
        "stage": "Closed/Lost",
        "amount": 10000.0,
        "prob": 0.0,
        "created": "2026-02-18"
      }
    ],
    "recent_acts": [
      {
        "date": "2026-05-27",
        "company": "Mustang Extreme Environmental Services",
        "subject": "Email: Re: Composite Mats",
        "days_ago": 5
      },
      {
        "date": "2026-05-27",
        "company": "Mustang Extreme Environmental Services",
        "subject": "Email: RE: Composite Mats",
        "days_ago": 5
      },
      {
        "date": "2026-05-27",
        "company": "Mustang Extreme Environmental Services",
        "subject": "Email: Composite Mats",
        "days_ago": 5
      },
      {
        "date": "2026-05-13",
        "company": "Mustang Extreme Environmental Services",
        "subject": "Email: Re: Easy Installation Construction Mats",
        "days_ago": 19
      },
      {
        "date": "2026-05-08",
        "company": "Mustang Extreme Environmental Services",
        "subject": "Email: Re: Easy Installation Construction Mats",
        "days_ago": 24
      },
      {
        "date": "2026-05-08",
        "company": "Mustang Extreme Environmental Services",
        "subject": "Email: RE: Easy Installation Construction Mats",
        "days_ago": 24
      },
      {
        "date": "2026-05-08",
        "company": "Mustang Extreme Environmental Services",
        "subject": "Email: Easy Installation Construction Mats",
        "days_ago": 24
      },
      {
        "date": "2026-05-08",
        "company": "Mustang Extreme Environmental Services",
        "subject": "Email: Re: Easy Installation Construction Mats",
        "days_ago": 24
      },
      {
        "date": "2026-04-30",
        "company": "Mustang Extreme Environmental Services",
        "subject": "Call",
        "days_ago": 32
      },
      {
        "date": "2026-04-28",
        "company": "Mustang Extreme Environmental Services",
        "subject": "Email: Introduction ? Heavy-Duty Construction Mats for Reliable G",
        "days_ago": 34
      },
      {
        "date": "2026-04-28",
        "company": "Mustang Extreme Environmental Services",
        "subject": "Call",
        "days_ago": 34
      },
      {
        "date": "2026-02-26",
        "company": "FEMA",
        "subject": "Email: Emergency Response Beds",
        "days_ago": 95
      }
    ],
    "conv": 366.7
  },
  "Mark Holmes": {
    "n_acts": 20,
    "n_opps": 15,
    "pipe": 1010833.5,
    "n_accts": 4,
    "accts": [
      "Uline",
      "Veritiv",
      "Johnson & Johnson Services Inc",
      "Graham Packaging"
    ],
    "days_since": 6,
    "last_act": "2026-05-26",
    "monthly": {
      "1": 0,
      "2": 0,
      "3": 6,
      "4": 0,
      "5": 14,
      "6": 0
    },
    "opps": [
      {
        "name": "Cradle Tray Pack for Reels",
        "account": "Rea Magnet Wire",
        "stage": "Business Case",
        "amount": 180000.0,
        "prob": 0.0,
        "created": "2026-03-02"
      },
      {
        "name": "BP4559 SP Pallet",
        "account": "Kawasaki Motors MFG Corp USA P3",
        "stage": "Purchase Order / Awarded",
        "amount": 174550.0,
        "prob": 100.0,
        "created": "2026-01-21"
      },
      {
        "name": "Cheese Tray 40x48",
        "account": "Ornua Ingredients N.A.",
        "stage": "Request for Information",
        "amount": 132700.0,
        "prob": 1.0,
        "created": "2026-05-28"
      },
      {
        "name": "48x86 Prego Pallet",
        "account": "Plastipak Packaging Inc",
        "stage": "Purchase Order / Awarded",
        "amount": 104126.0,
        "prob": 100.0,
        "created": "2026-02-27"
      },
      {
        "name": "BP4676 SP Pallet",
        "account": "Kawasaki Motors MFG Corp USA P3",
        "stage": "Closed/Lost",
        "amount": 87300.0,
        "prob": 0.0,
        "created": "2026-01-21"
      },
      {
        "name": "BP4548B SP Pallet",
        "account": "Ockerlund Industries Inc",
        "stage": "Closed/Lost",
        "amount": 85500.0,
        "prob": 0.0,
        "created": "2026-01-29"
      },
      {
        "name": "50 MT IMT Tray",
        "account": "Caterpillar Inc",
        "stage": "Quote",
        "amount": 69840.0,
        "prob": 20.0,
        "created": "2026-05-06"
      },
      {
        "name": "Laguna Packaging - BP4048D Pallets and Covers",
        "account": "Laguna Packaging",
        "stage": "Request for Information",
        "amount": 51870.0,
        "prob": 1.0,
        "created": "2026-03-31"
      },
      {
        "name": "Old Systems 4848 Systems Pallet",
        "account": "Philip Morris Usa Inc.",
        "stage": "Purchase Order / Awarded",
        "amount": 45000.0,
        "prob": 100.0,
        "created": "2026-02-25"
      },
      {
        "name": "DC1 4048NLT Square Leg Pallet",
        "account": "Proctor & Gamble",
        "stage": "Purchase Order / Awarded",
        "amount": 32212.5,
        "prob": 100.0,
        "created": "2026-02-18"
      }
    ],
    "recent_acts": [
      {
        "date": "2026-05-26",
        "company": "Uline",
        "subject": "Email: Re: Pallet Pricing",
        "days_ago": 6
      },
      {
        "date": "2026-05-13",
        "company": "Uline",
        "subject": "Email: FW: Pallet Pricing",
        "days_ago": 19
      },
      {
        "date": "2026-05-13",
        "company": "Uline",
        "subject": "Email: RE: Pallet Pricing",
        "days_ago": 19
      },
      {
        "date": "2026-05-13",
        "company": "Uline",
        "subject": "Email: Re: Pallet Pricing",
        "days_ago": 19
      },
      {
        "date": "2026-05-13",
        "company": "Uline",
        "subject": "Email: RE: Pallet Pricing",
        "days_ago": 19
      },
      {
        "date": "2026-05-08",
        "company": "Graham Packaging",
        "subject": "Email: Undeliverable: Trienda Plastic Pallets",
        "days_ago": 24
      },
      {
        "date": "2026-05-08",
        "company": "Graham Packaging",
        "subject": "Email: Trienda Plastic Pallets",
        "days_ago": 24
      },
      {
        "date": "2026-05-08",
        "company": "Graham Packaging",
        "subject": "Email: Trienda Plastic Pallets",
        "days_ago": 24
      },
      {
        "date": "2026-05-08",
        "company": "Veritiv",
        "subject": "Email: Trienda Plastic Material Handling Pallets",
        "days_ago": 24
      },
      {
        "date": "2026-05-07",
        "company": "Johnson & Johnson Services Inc",
        "subject": "Email: Trienda Plastic Material Handling Pallets",
        "days_ago": 25
      },
      {
        "date": "2026-05-07",
        "company": "Veritiv",
        "subject": "Email: Trienda Plastic Material Handling Pallets",
        "days_ago": 25
      },
      {
        "date": "2026-05-07",
        "company": "Veritiv",
        "subject": "Email: Trienda Plastic Material Handling Pallets",
        "days_ago": 25
      }
    ],
    "conv": 375.0
  },
  "Mariano Lobos": {
    "n_acts": 320,
    "n_opps": 34,
    "pipe": 5209080.5600000005,
    "n_accts": 23,
    "accts": [
      "DeRemate.com de Mexico S. de R.L. de C.V.",
      "WestRock",
      "Unilever",
      "Smurfit",
      "Bacardi",
      "The Coca-Cola Company",
      "OXXO",
      "Grupo Comercial Chedraui",
      "Chedraui",
      "Grupo Lala",
      "Grupo Gondi",
      "grupo gondi",
      "Sigma Alimentos",
      "Grupo Bimbo",
      "GRUPO BIMBO",
      "Coca-Cola Company",
      "Ball",
      "Heineken Mexico",
      "Nestl\u00e9",
      "PepsiCo",
      "Gruma",
      "Heineken M\u00e9xico",
      "Amazon"
    ],
    "days_since": 0,
    "last_act": "2026-06-01",
    "monthly": {
      "1": 0,
      "2": 0,
      "3": 80,
      "4": 94,
      "5": 141,
      "6": 5
    },
    "opps": [
      {
        "name": "BIG PACKS 4048",
        "account": "Mercado Libre Argentina",
        "stage": "Request for Sample",
        "amount": 1077440.0,
        "prob": 3.0,
        "created": "2026-01-29"
      },
      {
        "name": "RFQ STEEL CARTS MERCADO MEXICO",
        "account": "DeRemate.com de Mexico S. de R.L. de C",
        "stage": "Closed/Lost",
        "amount": 1000000.0,
        "prob": 0.0,
        "created": "2026-02-10"
      },
      {
        "name": "GS 4840 6R3",
        "account": "Unilever Mexico",
        "stage": "Closed/Lost",
        "amount": 650000.0,
        "prob": 0.0,
        "created": "2026-04-24"
      },
      {
        "name": "GS 4840 6R3",
        "account": "Danone",
        "stage": "Quote",
        "amount": 512500.0,
        "prob": 10.0,
        "created": "2026-02-25"
      },
      {
        "name": "GS 4456",
        "account": "Schoeller Allibert International Mexic",
        "stage": "Closed/Lost",
        "amount": 510000.0,
        "prob": 0.0,
        "created": "2026-02-19"
      },
      {
        "name": "BP 4048 SG .320 DH .250 ORANGE STRIPE",
        "account": "DeRemate.com de Mexico S. de R.L. de C",
        "stage": "Purchase Order / Awarded",
        "amount": 498945.0,
        "prob": 100.0,
        "created": "2026-04-01"
      },
      {
        "name": "CAGES LARGE PARCELS",
        "account": "DeRemate.com de Mexico S. de R.L. de C",
        "stage": "Quote",
        "amount": 186822.0,
        "prob": 30.0,
        "created": "2026-05-25"
      },
      {
        "name": "4548 Pallet #7005",
        "account": "Regal Rexnord Mexico",
        "stage": "Closed/Lost",
        "amount": 144120.0,
        "prob": 0.0,
        "created": "2026-03-24"
      },
      {
        "name": "GS 4848",
        "account": "Schoeller Allibert International Mexic",
        "stage": "Closed/Lost",
        "amount": 100000.0,
        "prob": 2.0,
        "created": "2026-03-10"
      },
      {
        "name": "20? trays, pallets, covers and Euroflange tray",
        "account": "CENTRAL MOTOR WHEEL MEXICO SA DE CV",
        "stage": "Closed/Lost",
        "amount": 79465.25,
        "prob": 0.0,
        "created": "2026-02-05"
      }
    ],
    "recent_acts": [
      {
        "date": "2026-06-01",
        "company": "GRUPO BIMBO",
        "subject": "Email: Bimbo: Trienda Inc Fabricante de tarimas pl\u00e1sticas recicla",
        "days_ago": 0
      },
      {
        "date": "2026-06-01",
        "company": "GRUPO BIMBO",
        "subject": "Email: RE: Trienda Inc Fabricante de tarimas pl\u00e1sticas reciclable",
        "days_ago": 0
      },
      {
        "date": "2026-06-01",
        "company": "DeRemate.com de Mexico S. de R.L. de C.V.",
        "subject": "Email: Re: ENTREGAS MANGA PALLETS / TRIENDA",
        "days_ago": 0
      },
      {
        "date": "2026-06-01",
        "company": "Grupo Bimbo",
        "subject": "Email: Bimbo: Trienda Inc Fabricante de tarimas pl\u00e1sticas recicla",
        "days_ago": 0
      },
      {
        "date": "2026-06-01",
        "company": "Grupo Bimbo",
        "subject": "Email: RE: Trienda Inc Fabricante de tarimas pl\u00e1sticas reciclable",
        "days_ago": 0
      },
      {
        "date": "2026-05-30",
        "company": "Sigma Alimentos",
        "subject": "Email: Campofriog: Trienda Inc Fabricante de tarimas pl\u00e1sticas re",
        "days_ago": 2
      },
      {
        "date": "2026-05-30",
        "company": "Sigma Alimentos",
        "subject": "Email: RE: [Ext] - Trienda Inc Fabricante de tarimas pl\u00e1sticas re",
        "days_ago": 2
      },
      {
        "date": "2026-05-29",
        "company": "Unilever",
        "subject": "Email: Resposta autom\u00e1tica: [External] - Trienda Inc Fabricante d",
        "days_ago": 3
      },
      {
        "date": "2026-05-29",
        "company": "Grupo Comercial Chedraui",
        "subject": "Email: Respuesta autom\u00e1tica: Trienda Inc Fabricante de tarimas pl",
        "days_ago": 3
      },
      {
        "date": "2026-05-29",
        "company": "Grupo Bimbo",
        "subject": "Email: Respuesta autom\u00e1tica: Trienda Inc Fabricante de tarimas pl",
        "days_ago": 3
      },
      {
        "date": "2026-05-29",
        "company": "PepsiCo",
        "subject": "Email: Automatic reply: Trienda Inc Fabricante de tarimas pl\u00e1stic",
        "days_ago": 3
      },
      {
        "date": "2026-05-29",
        "company": "Chedraui",
        "subject": "Email: Respuesta autom\u00e1tica: Trienda Inc Fabricante de tarimas pl",
        "days_ago": 3
      }
    ],
    "conv": 147.8
  },
  "Jake Heinecke": {
    "n_acts": 0,
    "n_opps": 21,
    "pipe": 3868865.96,
    "n_accts": 0,
    "accts": [],
    "days_since": 999,
    "last_act": null,
    "monthly": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    "opps": [
      {
        "name": "TJXX DC6 Tall Lip",
        "account": "TJX Companies",
        "stage": "Purchase Order / Awarded",
        "amount": 920088.0,
        "prob": 100.0,
        "created": "2026-01-28"
      },
      {
        "name": "Niagara - 12oz 68.1mm WIP Tray",
        "account": "Niagara Bottling (HQ - Diamond Bar, CA",
        "stage": "Closed/Lost",
        "amount": 380000.0,
        "prob": 0.0,
        "created": "2026-01-06"
      },
      {
        "name": "Niagara - 22oz Square bottle WIP tray",
        "account": "Niagara Bottling (HQ - Diamond Bar, CA",
        "stage": "Business Case",
        "amount": 348000.0,
        "prob": 0.0,
        "created": "2026-03-17"
      },
      {
        "name": "Niagara - LAN 15.2oz",
        "account": "Niagara Bottling (HQ - Diamond Bar, CA",
        "stage": "Closed/Lost",
        "amount": 325000.0,
        "prob": 0.0,
        "created": "2026-02-12"
      },
      {
        "name": "DC4 42 X 48",
        "account": "Harris Teeter",
        "stage": "Quote",
        "amount": 301464.0,
        "prob": 20.0,
        "created": "2026-03-20"
      },
      {
        "name": "Niagara - NHF 16oz/12oz WIP Tray",
        "account": "Niagara Bottling (HQ - Diamond Bar, CA",
        "stage": "Business Case",
        "amount": 300000.0,
        "prob": 0.0,
        "created": "2026-04-01"
      },
      {
        "name": "Niagara - THF 20oz Wip Tray",
        "account": "Niagara Bottling (HQ - Diamond Bar, CA",
        "stage": "Business Case",
        "amount": 300000.0,
        "prob": 0.0,
        "created": "2026-04-01"
      },
      {
        "name": "DC6 UNFI - Joliet",
        "account": "UNFI - Joliet, IL",
        "stage": "Purchase Order / Awarded",
        "amount": 290600.0,
        "prob": 100.0,
        "created": "2026-02-04"
      },
      {
        "name": "UNFI DC6 Green",
        "account": "UNFI Corporate",
        "stage": "Purchase Order / Awarded",
        "amount": 217950.0,
        "prob": 100.0,
        "created": "2026-01-09"
      },
      {
        "name": "Niagara V3F Tray 12oz",
        "account": "Niagara Bottling (HQ - Diamond Bar, CA",
        "stage": "Request for Information",
        "amount": 123417.0,
        "prob": 2.0,
        "created": "2026-05-21"
      }
    ],
    "recent_acts": [],
    "conv": 2100.0
  },
  "Jack Subel": {
    "n_acts": 34,
    "n_opps": 12,
    "pipe": 25349805.0,
    "n_accts": 6,
    "accts": [
      "Satellite Industries, Inc. P5",
      "Club Car",
      "Daimler Trucks North America LLC",
      "Loose Plastics, Inc.",
      "Paccar",
      "Satellite Industries, Inc. A4"
    ],
    "days_since": 6,
    "last_act": "2026-05-26",
    "monthly": {
      "1": 0,
      "2": 0,
      "3": 11,
      "4": 18,
      "5": 5,
      "6": 0
    },
    "opps": [
      {
        "name": "Satellite - Prison Sanitrax Unit",
        "account": "Satellite Industries, Inc. A4",
        "stage": "Prototype",
        "amount": 5000000.0,
        "prob": 10.0,
        "created": "2026-01-13"
      },
      {
        "name": "ABS Recycled Material - Loose Plastics",
        "account": "Loose Plastics, Inc.",
        "stage": "Purchase Order / Awarded",
        "amount": 4810000.0,
        "prob": 100.0,
        "created": "2026-01-29"
      },
      {
        "name": "Global Panels",
        "account": "Satellite Industries, Inc. P5",
        "stage": "Business Case",
        "amount": 2800000.0,
        "prob": 0.0,
        "created": "2026-03-25"
      },
      {
        "name": "Aspen Panels",
        "account": "Satellite Industries, Inc. P5",
        "stage": "Business Case",
        "amount": 2800000.0,
        "prob": 0.0,
        "created": "2026-04-08"
      },
      {
        "name": "Liberty Panels",
        "account": "Satellite Industries, Inc. P5",
        "stage": "Business Case",
        "amount": 2800000.0,
        "prob": 0.0,
        "created": "2026-04-08"
      },
      {
        "name": "Maxim 3000 Panels",
        "account": "Satellite Industries, Inc. P5",
        "stage": "Business Case",
        "amount": 2800000.0,
        "prob": 0.0,
        "created": "2026-04-08"
      },
      {
        "name": "Freedom Panels",
        "account": "Satellite Industries, Inc. P5",
        "stage": "Business Case",
        "amount": 2800000.0,
        "prob": 0.0,
        "created": "2026-04-08"
      },
      {
        "name": "Sanitrax - Tech Module Redesign",
        "account": "Satellite Industries, Inc. A4",
        "stage": "Closed/Lost",
        "amount": 1000000.0,
        "prob": 0.0,
        "created": "2026-03-04"
      },
      {
        "name": "Sanitrax - ADA Frame",
        "account": "Satellite Industries, Inc. A4",
        "stage": "Design",
        "amount": 500000.0,
        "prob": 3.0,
        "created": "2026-03-25"
      },
      {
        "name": "Satellite 2K Tank",
        "account": "Satellite Industries, Inc. A4",
        "stage": "Business Case",
        "amount": 25000.0,
        "prob": 0.0,
        "created": "2026-04-10"
      }
    ],
    "recent_acts": [
      {
        "date": "2026-05-26",
        "company": "Satellite Industries, Inc. P5",
        "subject": "Email: Satellite Purchase Order is attached 314US-PO008698",
        "days_ago": 6
      },
      {
        "date": "2026-05-22",
        "company": "Loose Plastics, Inc.",
        "subject": "Email: Re: FW: blue in GRAY ABS",
        "days_ago": 10
      },
      {
        "date": "2026-05-21",
        "company": "Satellite Industries, Inc. P5",
        "subject": "Email: Sanitrax - T3 VAC Hose (EDPM)",
        "days_ago": 11
      },
      {
        "date": "2026-05-20",
        "company": "Loose Plastics, Inc.",
        "subject": "Email: FW: FW: blue in GRAY ABS",
        "days_ago": 12
      },
      {
        "date": "2026-05-18",
        "company": "Satellite Industries, Inc. P5",
        "subject": "Email: 314us-po007620",
        "days_ago": 14
      },
      {
        "date": "2026-04-29",
        "company": "Satellite Industries, Inc. A4",
        "subject": "Email: Re: Detention Grade Unit- Bill of Lading",
        "days_ago": 33
      },
      {
        "date": "2026-04-29",
        "company": "Satellite Industries, Inc. P5",
        "subject": "Email: Decals peeling off units (PENDA)",
        "days_ago": 33
      },
      {
        "date": "2026-04-27",
        "company": "Daimler Trucks North America LLC",
        "subject": "Call - Connected",
        "days_ago": 35
      },
      {
        "date": "2026-04-27",
        "company": "Satellite Industries, Inc. A4",
        "subject": "Virtual Meeting",
        "days_ago": 35
      },
      {
        "date": "2026-04-27",
        "company": "Paccar",
        "subject": "Call - Voicemail",
        "days_ago": 35
      },
      {
        "date": "2026-04-27",
        "company": "Loose Plastics, Inc.",
        "subject": "Virtual Meeting",
        "days_ago": 35
      },
      {
        "date": "2026-04-27",
        "company": "Daimler Trucks North America LLC",
        "subject": "Call - Connected",
        "days_ago": 35
      }
    ],
    "conv": 200.0
  }
};

export const FINDINGS = [
  {
    "sev": "CRITICAL",
    "rep": "Jake Heinecke",
    "finding": "ZERO activities logged. $3.87M pipeline (TJX $920K PO, Niagara $723K, Harris Teeter $301K) going cold \u2014 no contact in 40+ days.",
    "action": "Escalate to manager. Assign coverage for Niagara Bottling and Harris Teeter this week."
  },
  {
    "sev": "HIGH",
    "rep": "Kyle Turner",
    "finding": "Pipeline collapsed $1.28M \u2192 $130K. Rivian & Maxion all Closed/Lost. Only 2 opps remain. 7 active target accounts with no open pipeline.",
    "action": "Conduct loss review on Rivian. Create new opps for Nemak, BorgWarner, Benteler immediately."
  },
  {
    "sev": "HIGH",
    "rep": "Vonn McQuiston",
    "finding": "Only 3 target accounts engaged. Innovex $4M RFI + Smart Ditch $1.6M RFI = $5.6M stalling. Last activity May 27.",
    "action": "Push Innovex and Rep Masters to Quote stage. Expand beyond 3 engaged accounts \u2014 22 untouched."
  },
  {
    "sev": "POSITIVE",
    "rep": "Mariano Lobos",
    "finding": "320 activities \u2014 team high. 23 unique accounts engaged MX food/bev/retail. $5.2M pipeline, new CAGES LARGE PARCELS $187K Quote added.",
    "action": "Convert Danone Quote ($512K) and DeRemate BP4048 PO. Push Zinc Nacional as test order."
  },
  {
    "sev": "POSITIVE",
    "rep": "Geoff Petrangelo + Eric Cin",
    "finding": "116 combined activities (2nd highest). $15.4M pipeline: Ford P758 $7.2M, Ford P736 F-150 $5.25M, Nissan H60E $1.95M. Active June 1.",
    "action": "Advance Ford P758 to quote. Begin Honda formal qualification. Log Flex-N-Gate next steps."
  },
  {
    "sev": "POSITIVE",
    "rep": "Jacob Hacker",
    "finding": "127 activities, $18M pipeline, 65 opps (team high). New Enkei PC Wheel Trays $30K. Cummins cluster $2M+ in Business Case.",
    "action": "Advance Cummins Ring Gear trays to Quote. Follow up Toyota Motor Kentucky on pallet timeline."
  },
  {
    "sev": "POSITIVE",
    "rep": "Jack Subel",
    "finding": "$25.35M pipeline \u2014 team high. Loose Plastics $4.81M PO already awarded. Satellite panels cluster $14M in Business Case.",
    "action": "Confirm Loose Plastics delivery. Push Satellite ADA Frame to Prototype. Begin Kubota outreach."
  },
  {
    "sev": "MODERATE",
    "rep": "Kent Buckingham",
    "finding": "31 activities, 12 accounts engaged (best penetration %). New Nobile Truck RFI added. RAM Power Outlet $300K in Production stage.",
    "action": "Create opps for Valley Van, Enterprise cluster. Push Nobile and AAM to quote stage."
  },
  {
    "sev": "MODERATE",
    "rep": "Matt Olsen",
    "finding": "35 activities (34 in May burst). $6.86M pipeline, 47 opps. Lucid Motors EV battery packs $1M+ new direction. Tesla mostly Closed/Lost.",
    "action": "Qualify Lucid Motors to Business Case. Expand target outreach beyond Brose/Jatco."
  },
  {
    "sev": "MODERATE",
    "rep": "Mark Holmes",
    "finding": "20 activities, $1.01M pipeline. New Ornua Ingredients $132.7K RFI. Caterpillar 50 MT IMT Tray $69.8K Quote advancing.",
    "action": "Push Rea Magnet Wire to Quote. Follow up Caterpillar. Advance Ornua RFI to Business Case."
  }
];

export const CHANGES = [
  [
    "Jacob Hacker",
    "Pipeline",
    "$17.5M",
    "$18.0M",
    "+$476K",
    "pos"
  ],
  [
    "Jacob Hacker",
    "Opps",
    "60",
    "65",
    "+5 new opps",
    "pos"
  ],
  [
    "Kyle Turner",
    "Pipeline",
    "$1.28M",
    "$130K",
    "\u25bc -$1.15M",
    "neg"
  ],
  [
    "Kyle Turner",
    "Opps",
    "18",
    "2",
    "\u25bc -16 lost",
    "neg"
  ],
  [
    "Matt Olsen",
    "Pipeline",
    "$5.93M",
    "$6.86M",
    "+$930K",
    "pos"
  ],
  [
    "Matt Olsen",
    "Opps",
    "34",
    "47",
    "+13 opps",
    "pos"
  ],
  [
    "Geoff Petrangelo",
    "Activities",
    "104",
    "116",
    "+12",
    "pos"
  ],
  [
    "Kent Buckingham",
    "Last Activity",
    "May 19",
    "Jun 1",
    "Active today",
    "pos"
  ],
  [
    "Mariano Lobos",
    "Activities",
    "22",
    "320",
    "+298 full history",
    "pos"
  ],
  [
    "Mark Holmes",
    "Pipeline",
    "$878K",
    "$1.01M",
    "+$132K",
    "pos"
  ],
  [
    "Jake Heinecke",
    "Activities",
    "0",
    "0",
    "\ud83d\udd34 Still ZERO",
    "neg"
  ],
  [
    "Jack Subel",
    "Pipeline",
    "$25.3M",
    "$25.35M",
    "Steady",
    "neu"
  ]
];
