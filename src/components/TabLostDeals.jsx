import React, { useState, useMemo } from 'react'
import { fmtM } from './utils'
import {
  BarChart, Bar, ComposedChart, Area, LineChart, Line, PieChart, Pie,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell,
  ResponsiveContainer, LabelList, ReferenceLine
} from 'recharts'

// ── YTD 2026 — sourced live from Salesforce (Loss_Reason_1__c, Feedback__c) ──
const LOST_2026 = [
  // Jan
  {month:'Jan',rep:'Other',         account:'General Motors',           name:'T1XX-2 WSW Module',                          amount:150000,  lr:'Customer Delayed',              fb:'PO will come as a spot buy later this year.'},
  {month:'Jan',rep:'Other',         account:'General Motors',           name:'MAC45533 Hood Asm Rack',                     amount:150000,  lr:'Price',                         fb:'We were 25% higher than the low bid.'},
  {month:'Jan',rep:'Jake Heinecke', account:'Kroger/Ralphs',            name:"DC6/LL's Ralphs Kroger",                     amount:77049,   lr:'Customer Delayed',              fb:'Pushed to RFP'},
  {month:'Jan',rep:'Matt Olsen',    account:'RIVIAN P3',                name:'R2 SOP Steel Bins',                          amount:2088491, lr:'Price',                         fb:'Price was 42% higher than others on average.'},
  {month:'Jan',rep:'Matt Olsen',    account:'RIVIAN P3',                name:'R2 Center Console Rack',                     amount:1158906, lr:'Price',                         fb:'Price was 35% higher than others on average.'},
  {month:'Jan',rep:'Matt Olsen',    account:'RIVIAN P3',                name:'EDV 2026 Rack Rebuy RFQ',                    amount:989970,  lr:'Price',                         fb:'Price not provided yet — follow up needed.'},
  {month:'Jan',rep:'Matt Olsen',    account:'RIVIAN P3',                name:'R2 SOP Finished Goods Rack',                 amount:973317,  lr:'Price',                         fb:'Price was 43% higher than others on average.'},
  {month:'Jan',rep:'Matt Olsen',    account:'RIVIAN P3',                name:'R2 Body/Stamping Rack',                      amount:474921,  lr:'Price',                         fb:'Price was 30% higher than others on average.'},
  {month:'Jan',rep:'Matt Olsen',    account:'RIVIAN P3',                name:'R2 SOP Cantilever Racks',                    amount:118191,  lr:'Price',                         fb:'Price was 35% higher than others on average.'},
  {month:'Jan',rep:'Matt Olsen',    account:'TESLA',                    name:'RFQ 66991 W68 Turtle Platform',              amount:6876,    lr:'Price',                         fb:'Assuming price related. No specific details provided.'},
  {month:'Jan',rep:'Matt Olsen',    account:'TESLA',                    name:'RFQ 66037 Stator Inverter Assy',             amount:359412,  lr:'Customer Non-Responsive',       fb:'Adil confirmed awarded to incumbent Shuert.'},
  {month:'Jan',rep:'Matt Olsen',    account:'Lucid Motors - P3',        name:'Current Collector Assy A/B',                 amount:250000,  lr:'No KFI Product Solution',       fb:'Not feasible — floor warp concern on thin gauge/extended length.'},
  {month:'Jan',rep:'Jake Heinecke', account:'Wakefern Food',            name:'Wakefern GS MVP Pallet 10 Rod',              amount:1600000, lr:'No KFI Activity',               fb:null},
  {month:'Jan',rep:'Other',         account:'Penda Aftermarket',        name:'Duraliner Rhinohide Body Armor Jeep',        amount:3000000, lr:'Customer Non-Responsive',       fb:'Customers not buying this product — closing for now.'},
  {month:'Jan',rep:'Other',         account:'Penda Aftermarket',        name:'Duraliner Rhinohide Body Armor Bronco',      amount:3000000, lr:'Customer Non-Responsive',       fb:'No response from customers to purchase this product.'},
  {month:'Jan',rep:'Other',         account:'PowerCo Saltzgitter',      name:'PowerCo Can-Lid Stack Fixation Trays',       amount:3344970, lr:'No KFI Activity',               fb:null},
  {month:'Jan',rep:'Other',         account:'PowerCo Saltzgitter',      name:'PowerCo Can-Lid Cell Type C48T1',            amount:1378202, lr:'No KFI Activity',               fb:null},
  {month:'Jan',rep:'Other',         account:'Skeleton Technologies',    name:'Skeleton Tech Supercapacitor Clamshell',     amount:950000,  lr:'KFI Design Rejected',           fb:'Went with wood/EPP concept. Will reopen when UN certification required.'},
  {month:'Jan',rep:'Other',         account:'Haas Automation',          name:'Haas Automation',                            amount:1250000, lr:'Customer Delayed',              fb:null},
  {month:'Jan',rep:'Other',         account:'Oxford Global Resources',  name:'Oxford Global Resources Bloomsburg',         amount:448000,  lr:'Unable to Meet Specs',          fb:'End user changed job description last second — sent all workers home.'},
  {month:'Jan',rep:'Rebecca Krueger',account:'Volkswagen Group',        name:'VW Cockpit Trim Rack',                       amount:265000,  lr:'Customer Delayed',              fb:'Removed from the bid.'},
  {month:'Jan',rep:'Other',         account:'Cummins Inc.',             name:'Cummins Brake Tray',                         amount:120000,  lr:'Customer Delayed',              fb:null},
  {month:'Jan',rep:'Mariano Lobos', account:'Groways Mexico',           name:'DC0 Ultralite 4048',                         amount:960000,  lr:'Price',                         fb:'End user hesitant to replace wood with plastic.'},
  {month:'Jan',rep:'Mariano Lobos', account:'DeRemate Mexico',          name:'Manga Duplo + Sleeve Dividers',              amount:79448,   lr:'No Customer Budget',            fb:'Resolved with existing sleeve.'},
  // Feb
  {month:'Feb',rep:'Other',         account:'PowerCo St. Thomas',       name:'PowerCo St Thomas Thermoformed Trays',       amount:1000000, lr:'Customer Delayed',              fb:'On hold — waiting for direction from Canadian team.'},
  {month:'Feb',rep:'Other',         account:'PowerCo Saltzgitter',      name:'PowerCo Project Electra Stainless Rack',     amount:400000,  lr:'No KFI Activity',               fb:null},
  {month:'Feb',rep:'Other',         account:'PowerCo Saltzgitter',      name:'PowerCo Stopper Frame',                      amount:101557,  lr:'No KFI Activity',               fb:null},
  {month:'Feb',rep:'Matt Olsen',    account:'TESLA',                    name:'Tesla 4680 TF Short Sleeve',                 amount:223190,  lr:'Contract or Terms',             fb:'Tesla opted to use tall sleeve — no need for shorter ones.'},
  {month:'Feb',rep:'Matt Olsen',    account:'TESLA',                    name:'Tesla MY Battery Pack Thermoformed',         amount:2330000, lr:'Price',                         fb:'Awarded to VANTAGE. Best price received was $378. Short lead time.'},
  {month:'Feb',rep:'Matt Olsen',    account:'Kyoho Toyotsu',            name:'Kyoho Toyotsu Stampings',                    amount:275000,  lr:'Customer Non-Responsive',       fb:'Luz Martinez: project shut down internally.'},
  {month:'Feb',rep:'Other',         account:'American Vanguard Company',name:'American Vanguard Company',                  amount:1280000, lr:'Customer Non-Responsive',       fb:null},
  {month:'Feb',rep:'Jake Heinecke', account:'Winco Boise ID',           name:'Winco HQ Nestable Pallet Automation',        amount:1000000, lr:'No KFI Activity',               fb:'No updates or sales activity in 6 months other than date pushes.'},
  {month:'Feb',rep:'Other',         account:'Magna Powertrain USA',     name:'BMW Facia Racks',                            amount:764601,  lr:'Price',                         fb:'Could not get specifics.'},
  {month:'Feb',rep:'Vonn McQuiston',account:'Terrafix Geo Canada',      name:'Urban Systems Kamloops 24in Trap',           amount:52621,   lr:'Price',                         fb:'Too high priced — found another alternative.'},
  {month:'Feb',rep:'Rebecca Krueger',account:'Volkswagen Group',        name:'VW Plenum Panel Cover Rack',                 amount:412000,  lr:'Price',                         fb:null},
  // Mar
  {month:'Mar',rep:'Jake Heinecke', account:'Ross Dress for Less',      name:'Greystone 3-Runner Pallet',                  amount:40000000,lr:'No KFI Activity',               fb:'No updates since July 2025 other than pushing dates out.'},
  {month:'Mar',rep:'Jack Subel',    account:'Daimler Trucks NA',        name:'Daimler 47E M2 3-Part Bumper',               amount:7500000, lr:'No Customer Budget',            fb:null},
  {month:'Mar',rep:'Other',         account:'EKPO Fuel Cell Technologies',name:'Finished Bipolarplate Traypack EKPO',     amount:5300000, lr:'No Customer Budget',            fb:'Project cancelled by GM.'},
  {month:'Mar',rep:'Other',         account:'BMW Manufacturing LLC',    name:'BMW AESC Battery Pack',                      amount:5000000, lr:'KFI Technical Capabilities',    fb:'No Low Pressure Injection Molding capability.'},
  {month:'Mar',rep:'Other',         account:'PowerCo St. Thomas Canada',name:'PowerCo Stopper Frame Lid KLT',              amount:1179036, lr:'Price',                         fb:null},
  {month:'Mar',rep:'Geoff Petrangelo',account:'Ford FCSD',              name:'Ford P833 BEV PUP Truck Exterior Bed Mat',   amount:960000,  lr:'KFI Design Rejected',           fb:null},
  {month:'Mar',rep:'Jake Heinecke', account:'Niagara Bottling',         name:'Niagara 12oz 68.1mm WIP Tray',               amount:380000,  lr:'Customer Delayed',              fb:'Customer delayed.'},
  {month:'Mar',rep:'Jake Heinecke', account:'Niagara Bottling',         name:'Niagara LAN 15.2oz',                         amount:325000,  lr:'Tooling - Lead Time',           fb:'Unable to meet timeline — unreasonable.'},
  {month:'Mar',rep:'Matt Olsen',    account:'Brose Querétaro',          name:'Brose U71X 2nd Row Outer & Central',         amount:361200,  lr:'Customer Non-Responsive',       fb:'Customer is non-responsive.'},
  {month:'Mar',rep:'Matt Olsen',    account:'RIVIAN P3',                name:'Rivian Assembly Access PNL Rack',            amount:140000,  lr:'Customer Non-Responsive',       fb:'Needed additional info on hanging bag dunnage — never received it.'},
  {month:'Mar',rep:'Geoff Petrangelo',account:'Ford FCSD',              name:'Ford P758 Maverick P703 Ranger Bedliner',    amount:502200,  lr:'Customer Delayed',              fb:null},
  {month:'Mar',rep:'Mariano Lobos', account:'DeRemate Mexico',          name:'Rackable Pallet + Manguito + Brazil RFID',   amount:138000,  lr:'No Customer Budget',            fb:'Not moving forward.'},
  {month:'Mar',rep:'Mariano Lobos', account:'DeRemate Mexico',          name:'Rolling Rack for Gaylords',                  amount:492590,  lr:'Customer Non-Responsive',       fb:'Cannot get hold of new decision maker.'},
  {month:'Mar',rep:'Mariano Lobos', account:'HIPERPACK SA DE CV',       name:'Whirlpool Packs 66x46 + BP1200800',          amount:376719,  lr:'Customer Non-Responsive',       fb:'Whirlpool not giving feedback to HP.'},
  {month:'Mar',rep:'Mariano Lobos', account:'Baoding Lizhong Wheel',    name:'Lizhong Auto 17/20 Wheel Packs',             amount:125000,  lr:'Price',                         fb:'Purchased from WI supplier — 30% lower.'},
  // Apr
  {month:'Apr',rep:'Matt Olsen',    account:'TESLA',                    name:'Mirror & Rear Hanger Rack',                  amount:144518,  lr:'Price',                         fb:'Uncompetitive price per Adil.'},
  {month:'Apr',rep:'Matt Olsen',    account:'TESLA',                    name:'RFQ 70503 Rear Subframe Rework',             amount:116147,  lr:'Poor Customer Relationship',    fb:'Pause at GFTX due to quality concerns — CASE 1039.'},
  {month:'Apr',rep:'Matt Olsen',    account:'TESLA',                    name:'ETG1A89 PW3 Enclosure Starter Tray',         amount:100000,  lr:'Unable to Meet Specs',          fb:'No-quote — drawing calls out wall thickness risks.'},
  {month:'Apr',rep:'Matt Olsen',    account:'RIVIAN P3',                name:'Rivian LH/RH Headlamp Racks',                amount:300000,  lr:'Slow to Quote',                 fb:'Quote due 3/20. Never quoted. Will stay on top in future.'},
  {month:'Apr',rep:'Matt Olsen',    account:'RIVIAN P3',                name:'Rivian RPV 700 Bolster + B Pillar',          amount:200000,  lr:'Price',                         fb:'We were 20-30% higher than current incumbent.'},
  {month:'Apr',rep:'Matt Olsen',    account:'Forvia Automotive MX',     name:'Forvia BP 800x1200x840mm + Sleeves',         amount:526372,  lr:'Customer Non-Responsive',       fb:'Closed/lost. Customer is non-responsive.'},
  {month:'Apr',rep:'Rebecca Krueger',account:'Volkswagen Group',        name:'VW Thermoform Trays',                        amount:250000,  lr:'Below Acceptable Volume',       fb:'TPU / ABS tray — volume not a great fit.'},
  {month:'Apr',rep:'Other',         account:'HUSCO International',      name:'HUSCO Transition Valve Pump Pack',           amount:515625,  lr:'No Customer Budget',            fb:'GM volume did not meet estimates — used expendable packaging.'},
  {month:'Apr',rep:'Other',         account:'General Motors',           name:'GM CVT REMAN CONTAINERS FOR MEXICO',         amount:1750000, lr:'Unable to Meet Specs',          fb:'Plant rejected — decided to use production containers instead.'},
  {month:'Apr',rep:'Vonn McQuiston',account:'Waste Connections',        name:'Waste Connections Steel Replacement Bottoms',amount:28000,   lr:'Price',                         fb:'Too high compared to current vendor.'},
  {month:'Apr',rep:'Vonn McQuiston',account:'WSP',                      name:'WSP Alaska Hwy Drainage Repair',             amount:17096,   lr:'Customer Non-Responsive',       fb:'No feedback.'},
  {month:'Apr',rep:'Jake Heinecke', account:'Albertsons',               name:'Albertsons Jewel Osco Chicago + Denver',     amount:74800,   lr:'No KFI Activity',               fb:'Duplicated opp — order was received on separate record.'},
  {month:'Apr',rep:'Jake Heinecke', account:'Rigali Packaging',         name:'Rigali Packaging DC6',                       amount:30000,   lr:'No KFI Activity',               fb:'No real updates other than pushing dates out.'},
  {month:'Apr',rep:'Mariano Lobos', account:'DeRemate Mexico',          name:'RFQ Steel Carts Mercado Mexico',             amount:1000000, lr:'Price',                         fb:'Ricardo informed lots assigned to existing suppliers.'},
  {month:'Apr',rep:'Mariano Lobos', account:'HIPERPACK SA DE CV',       name:'BP 4048 SP + International Pallet',          amount:22600,   lr:'No Customer Budget',            fb:'End customer decided not to use this size.'},
  {month:'Apr',rep:'Other',         account:"Furmano's",                name:"Furmano's Northumberland PA",                amount:739024,  lr:'No KFI Product Solution',       fb:'Job requires 0 skill — low wage, not willing to raise pay.'},
  // May
  {month:'May',rep:'Matt Olsen',    account:'TESLA',                    name:'Tesla RGFT175/176 Trays TOP COV',            amount:200000,  lr:'Slow to Quote',                 fb:'ENG assigned 5/5. Quote due date was 4/27.'},
  {month:'May',rep:'Matt Olsen',    account:'TESLA',                    name:'Tesla RFQ 74957 3PH PCH Trays',              amount:215000,  lr:'Unable to Meet Specs',          fb:'ENG did not approve of the Tesla design provided.'},
  {month:'May',rep:'Rebecca Krueger',account:'Volkswagen Group',        name:'VW BZI TPU ABS Tray',                        amount:160000,  lr:'KFI Technical Capabilities',    fb:'TPU / ABS material — outside our capability.'},
  {month:'May',rep:'Rebecca Krueger',account:'Volkswagen Group',        name:'VW Radiator Rack',                           amount:570000,  lr:'Production Lead Time',          fb:'Too tight of lead time on these bag racks.'},
  {month:'May',rep:'Jake Heinecke', account:'Niagara Bottling',         name:'Niagara 20oz Powerade WIP Tray',             amount:847600,  lr:'Customer Delayed',              fb:'Niagara combining Powerade and Body Armor 20oz trays into one.'},
  {month:'May',rep:'Jake Heinecke', account:'Albertsons Denver',        name:'Albertsons DC6 Denver',                      amount:51390,   lr:'No Customer Budget',            fb:'Went to RFP.'},
  {month:'May',rep:'Vonn McQuiston',account:'Rep Masters',              name:'Rep Masters 24 Inch Trap Wright Water',      amount:128466,  lr:'Price',                         fb:'Price too high for customer.'},
  {month:'May',rep:'Other',         account:"Shearer's Foods",          name:"Shearer's Foods Perham MN",                  amount:1687344, lr:'Customer Delayed',              fb:'Delayed to Q2/Q3. Turnover low but expects higher volume later.'},
  {month:'May',rep:'Mariano Lobos', account:'GEORG UTZ / Schoeller',    name:'GSE4840 + Manga Duplo 1 Gate',               amount:29379,   lr:'Price',                         fb:'Lost due to pricing.'},
  // Jun
  {month:'Jun',rep:'Rebecca Krueger',account:'Magna Powertrain USA',    name:'Magna Chassis Rear Rail Rack',               amount:1415000, lr:'Customer Non-Responsive',       fb:'Assumption until speaking with Brandon.'},
  {month:'Jun',rep:'Rebecca Krueger',account:'Volkswagen Mexico',       name:'Cell Pack NAR Loop',                         amount:2000000, lr:'Customer Delayed',              fb:'On hold — waiting for EU direction.'},
  {month:'Jun',rep:'Rebecca Krueger',account:'Fixx Energy (AESC)',      name:'AESC Mercedes Project Castle',               amount:2000000, lr:'Customer Delayed',              fb:null},
  {month:'Jun',rep:'Rebecca Krueger',account:'Scout Motors - P3',       name:'Scout Motors Steering Column Trays',         amount:250000,  lr:'Customer Delayed',              fb:null},
  {month:'Jun',rep:'Rebecca Krueger',account:'Meritor',                 name:'MERITOR Cummins Brake Tray',                 amount:120000,  lr:'Customer Delayed',              fb:null},
  {month:'Jun',rep:'Rebecca Krueger',account:'Cummins Inc.',            name:'Cummins Universal Container',                amount:50000,   lr:'Customer Delayed',              fb:null},
  {month:'Jun',rep:'Rebecca Krueger',account:'Benteler - P3',           name:'Benteler 27 Mustang Manifold',               amount:100000,  lr:'Customer Delayed',              fb:null},
  {month:'Jun',rep:'Jake Heinecke', account:'Aldi - HQ',                name:'Aldi HQ Mobile Metal Cart',                  amount:4000000, lr:'Price',                         fb:null},
  {month:'Jun',rep:'Jake Heinecke', account:'Niagara Bottling',         name:'Niagara 0.5L Vitamin Water WIP Tray',        amount:507387,  lr:'Customer Delayed',              fb:null},
  {month:'Jun',rep:'Mariano Lobos', account:'DeRemate Mexico',          name:'Manga Duplo New Design 2 Gates',             amount:618350,  lr:'Customer Non-Responsive',       fb:null},
  {month:'Jun',rep:'Mariano Lobos', account:'Unilever Mexico',          name:'GS 4840 6R3',                                amount:650000,  lr:'Price',                         fb:'Lost due to pricing.'},
  {month:'Jun',rep:'Mariano Lobos', account:'Schoeller Allibert Mexico',name:'GS 4456',                                    amount:510000,  lr:'Price',                         fb:null},
  {month:'Jun',rep:'Matt Olsen',    account:'TESLA',                    name:'PCS Tesla Tray Reorder',                     amount:59276,   lr:'Customer Non-Responsive',       fb:null},
  {month:'Jun',rep:'Jack Subel',    account:'Satellite Industries A4',  name:'Sanitrax Tech Module Redesign',              amount:1000000, lr:'Customer Delayed',              fb:'Customer finalizing product inputs — no engineering deliverables foreseeable.'},
  {month:'Jun',rep:'Vonn McQuiston',account:'EWMI',                     name:'Smart Ditch Drainage Restoration',           amount:19807,   lr:'Customer Non-Responsive',       fb:null},
  {month:'Jun',rep:'Other',         account:'Sonaca North America',     name:'Sonaca North America 20+',                   amount:1187222, lr:'Customer Non-Responsive',       fb:null},
  {month:'Jun',rep:'Other',         account:'Back Cove Yachts',         name:'Back Cove Yachts Rockland ME',               amount:1400000, lr:'Customer Delayed',              fb:'Jason delayed — found luck in hiring. Will reopen 2H if needed.'},
  {month:'Jun',rep:'Other',         account:'Phoenix Packaging',        name:'Phoenix Packaging Greencastle IN',           amount:1000000, lr:'Customer Non-Responsive',       fb:null},
  {month:'Jun',rep:'Other',         account:'Bosch',                    name:'Bosch Export Tray Loop',                     amount:1000000, lr:'Customer Non-Responsive',       fb:'Reached out for update. No response.'},
  // Jul
  {month:'Jul',rep:'Matt Olsen',    account:'TESLA',                    name:'Tesla RFQ 82003 NE42 Mount Front Racks',     amount:39847,   lr:'Customer Non-Responsive',       fb:'Awarded to another vendor without reason. Still pressing for feedback.'},
  {month:'Jul',rep:'Matt Olsen',    account:'TESLA',                    name:'Tesla RFQ 81999 PW3 Full Shot Racks',        amount:76742,   lr:'Customer Non-Responsive',       fb:'Awarded to another vendor without reason. Still pressing for feedback.'},
  {month:'Jul',rep:'Matt Olsen',    account:'Lucid Motors - P3',        name:'Lucid P21 IP Upper Gravity 32x70 Pallet',    amount:277992,  lr:'Price',                         fb:'Awarded to another for better pricing on proto. Production RFQ coming.'},
  {month:'Jul',rep:'Rebecca Krueger',account:'Magna Powertrain USA',    name:'Magna P708 Upfit Racks',                     amount:300000,  lr:'Customer Non-Responsive',       fb:'Assumption until speaking with Brandon.'},
  {month:'Jul',rep:'Other',         account:'REHAU',                    name:'BMW Grille Tray Pack Tall',                  amount:100000,  lr:'Customer Delayed',              fb:'Combined back to common tray into existing PJ number.'},
  {month:'Jul',rep:'Other',         account:'Fytertech',                name:'Fytertech Non-Wovens DePere WI',             amount:1100000, lr:'Customer Non-Responsive',       fb:null},
  {month:'Jul',rep:'Other',         account:'Menzner Lumber',           name:'Menzner Lumber Marathon City WI',            amount:1809887, lr:'Customer Non-Responsive',       fb:'Ghosted after tour and pricing proposal. Likely to return in 6-12 months.'},
  {month:'Jul',rep:'Other',         account:'General Motors',           name:'T1XX FENDER REBUY',                          amount:16000,   lr:'No Customer Budget',            fb:null},
  // Aug
  {month:'Aug',rep:'Matt Olsen', account:'TESLA', name:'RFQ 88069 W68 Endbell DU Tray', amount:97470, lr:'Production Lead Time', fb:'We opted to no-quote. Timing unrealistic for new Tray and TPU tooling.'},
  {month:'Aug',rep:'Vonn McQuiston', account:'PRT Plastic Recovery Technologies', name:'Compactor Power Unit Tanks', amount:650000, lr:'Customer Delayed', fb:'No longer interested in outsourcing'},
  {month:'Aug',rep:'Jake Heinecke', account:'Santa Monica Seafood', name:'DC1 NLT SM Seafood', amount:10467, lr:'Price', fb:null},
  {month:'Aug',rep:'Matt Olsen', account:'TESLA', name:'RFQ 86187 Bluebird Rotor Racks', amount:122010, lr:'Customer Non-Responsive', fb:'No reply from Krishna. Closed as Customer Non-responsive.'},
  {month:'Aug',rep:'Matt Olsen', account:'Elevated Materials Inc.', name:'Lithium Film Roll Pack', amount:193885, lr:'KFI Design Rejected', fb:'Unless proposal contains all film roll variety in one clam shell design, investment not viable.'},
  {month:'Aug',rep:'Matt Olsen', account:'TESLA', name:'Coyote M3Y 2170 Battery Pack', amount:2245000, lr:'Tooling Lead Time', fb:'Tesla opted to award to incumbent because of tight timing.'},
  {month:'Aug',rep:'Matt Olsen', account:'RIVIAN P3', name:'Rivian GS4845 Pallets and Top Caps', amount:75000, lr:'KFI Design Rejected', fb:'Lost — pallet ~10 lbs heavier than competition; cover did not fit GS4548 pallet.'},
  {month:'Aug',rep:'Vonn McQuiston', account:'Rep Masters DBA Utility Gas Oil', name:'Zion National Park 1200 lf Smart Ditch', amount:24734, lr:'No Customer Budget', fb:'No budget for what they want to do.'},
  {month:'Aug',rep:'Vonn McQuiston', account:'GHD', name:'GHD 5200 ft 24 Inch Smart Ditch', amount:158000, lr:'No Customer Budget', fb:'Too expensive.'},
  {month:'Aug',rep:'Vonn McQuiston', account:'White Cap Supply Canada Inc', name:'400M 12 inch Trap WID', amount:24000, lr:'Customer Non-Responsive', fb:'No response to emails and calls.'},
  {month:'Aug',rep:'Rebecca Krueger', account:'Scout Motors - P3', name:'Scout Motors Wishbone Tray', amount:125000, lr:'Customer Non-Responsive', fb:'Working on getting feedback from customer.'},
  {month:'Aug',rep:'Rebecca Krueger', account:'Enkei America Inc.', name:'Enkei PC Wheel Trays', amount:30000, lr:'Customer Delayed', fb:'On hold for now.'},
  {month:'Aug',rep:'Rebecca Krueger', account:'J.T. Morton & Associates', name:'CH Wheel Packs JT Morton', amount:375000, lr:'Customer Delayed', fb:'Waiting on Ford.'},
  {month:'Aug',rep:'Rebecca Krueger', account:'Cummins Inc.', name:'Actuator Tray 10659', amount:150000, lr:'No Customer Budget', fb:'Customer doesn\'t want to invest.'},
  {month:'Aug',rep:'Vonn McQuiston', account:'Crane Payment Innovations', name:'BP 32X44 Pallet', amount:22765, lr:'No Customer Budget', fb:'Not moving forward at this time.'},
  {month:'Aug',rep:'Rebecca Krueger', account:'TriEnda Holdings', name:'22 VDA Wheel Tray', amount:165000, lr:'No Customer Budget', fb:'Superior opted to use what they have on hand.'},
  {month:'Aug',rep:'Rebecca Krueger', account:'Bosch', name:'Bosch Export Tray Loop', amount:1000000, lr:'Customer Non-Responsive', fb:'Reached out for update.'},
  {month:'Aug',rep:'Rebecca Krueger', account:'Timken Company', name:'Timken Hub Tray Loop', amount:250000, lr:'Customer Non-Responsive', fb:null},
  {month:'Aug',rep:'Rebecca Krueger', account:'Magna Powertrain USA', name:'Magna M0189456 Housing ASM Gearbox', amount:150000, lr:'Customer Non-Responsive', fb:null},
  {month:'Aug',rep:'Rebecca Krueger', account:'Magna Powertrain USA', name:'Magna Inverter Pack', amount:75000, lr:'Customer Non-Responsive', fb:null},
  {month:'Aug',rep:'Kent Buckingham', account:'Penda Automotive Aftermarket', name:'2022 Nissan Frontier 5ft Bedliner', amount:230000, lr:'KFI Design Rejected', fb:null},
  {month:'Aug',rep:'Rebecca Krueger', account:'Toyota Motor Manufacturing Kentucky', name:'Toyota Pallet', amount:500000, lr:'Price', fb:'Confirmed they went with another supplier.'},
  {month:'Aug',rep:'Jake Heinecke', account:'Albertsons/Safeway - Denver CO', name:'DC1 Pallet Albertsons Denver', amount:54600, lr:'KFI Design Rejected', fb:'Pallet too light.'},
  {month:'Aug',rep:'Vonn McQuiston', account:'The Nelson Company', name:'DC1 or DC4 Pallets', amount:40000, lr:'Customer Non-Responsive', fb:'Distributor customer non-responsive.'},
  {month:'Aug',rep:'Kent Buckingham', account:'Hertz Global', name:'Hertz AFM Bedliners', amount:300000, lr:'Customer Non-Responsive', fb:null},
  {month:'Aug',rep:'Kent Buckingham', account:'Enterprise - College Park', name:'Enterprise College Park', amount:300000, lr:'No KFI Product Solution', fb:null},
  {month:'Aug',rep:'Kent Buckingham', account:'Enterprise - Dallas Truck Ctr', name:'Enterprise Dallas', amount:270000, lr:'No KFI Product Solution', fb:null},
  {month:'Aug',rep:'Kent Buckingham', account:'Enterprise - Sherwood', name:'Enterprise Sherwood', amount:350000, lr:'No KFI Product Solution', fb:null},
  {month:'Aug',rep:'Rebecca Krueger', account:'REHAU', name:'C Pillar Tray Pallet Pack', amount:50000, lr:'No Customer Budget', fb:null},
  {month:'Aug',rep:'Mariano Lobos', account:'DeRemate.com de Mexico', name:'CROQUETA Sleeves', amount:23950, lr:'Price', fb:'Could not get approval for our pricing.'},
  {month:'Aug',rep:'Rebecca Krueger', account:'Metalsa Structural Products', name:'Dunnage Fork Tube', amount:800000, lr:'KFI Design Rejected', fb:'Volvo decided to move forward with existing suppliers.'},
  {month:'Aug',rep:'Mariano Lobos', account:'Forvia Automotive Seating MX Trienda', name:'BP 48x63x50 Pallets', amount:73651, lr:'Customer Non-Responsive', fb:'Customer non-responsive.'},
  {month:'Aug',rep:'Mariano Lobos', account:'Forvia Automotive Seating MX Trienda', name:'BP 45x48x37 Pallets', amount:32314, lr:'Customer Non-Responsive', fb:'Customer non-responsive.'},
  {month:'Aug',rep:'Mariano Lobos', account:'Forvia Automotive Seating MX Trienda', name:'GS4845 + Lid', amount:13515, lr:'Customer Non-Responsive', fb:'Customer non-responsive.'},
  {month:'Aug',rep:'Vonn McQuiston', account:'Gersen Group', name:'Smart Ditch 12 Inch Dry Creek Landfill', amount:232314, lr:'No Customer Budget', fb:'Too high priced.'},
  {month:'Aug',rep:'Mariano Lobos', account:'DeRemate.com de Mexico', name:'PALLETS FOR HEAVY LOADS CROSS DOCKS', amount:10000, lr:'No Customer Budget', fb:'Funds were not approved.'},
  {month:'Aug',rep:'Mariano Lobos', account:'HIPERPACK SA DE CV - SUB 31', name:'BP 4048 SG Orange Stripe', amount:73088, lr:'KFI Design Rejected', fb:'O-Reilly decided to stick with Robinson pallets.'},
  {month:'Aug',rep:'Rebecca Krueger', account:'Benteler - P3', name:'PL-25-0127 RH LH Control Arm Tray', amount:500000, lr:'Tooling Lead Time', fb:'Could not meet their dates.'},
  {month:'Aug',rep:'Rebecca Krueger', account:'PackIQ - P3', name:'61.5x49.5 Steel Pallet w Runners', amount:1400000, lr:'Price', fb:'Price too high.'},
  {month:'Aug',rep:'Mariano Lobos', account:'GLOBAL SELLING LLC', name:'Putaway Picking Carts ML San Antonio', amount:61756, lr:'Price', fb:'Mercado purchased from supplier in Mexico.'},
  {month:'Aug',rep:'Rebecca Krueger', account:'PackIQ - P3', name:'SR200501 Racks', amount:50000, lr:'Customer Delayed', fb:'PackIQ was not awarded this business.'},
  {month:'Aug',rep:'Mariano Lobos', account:'Gestamp NA Division', name:'RACKS OEM BMW Gestamp', amount:1000000, lr:'No KFI Product Solution', fb:'No quote by engineering.'},
  {month:'Aug',rep:'Matt Olsen', account:'TESLA', name:'RFQ 88177 4DU NE FE Trays', amount:1747200, lr:'Customer Non-Responsive', fb:'Closed/lost. Customer non-responsive.'},
  {month:'Aug',rep:'Mariano Lobos', account:'Volkswagen Mexico', name:'VWMX 2026 000986', amount:100000, lr:'Below Vol/Profitability', fb:'Very low volume for a NPD project.'},
  {month:'Aug',rep:'Vonn McQuiston', account:'The Nelson Company', name:'20K DC4', amount:880600, lr:'KFI Design Rejected', fb:'Lost — no fire retardant additive available.'},
  // Sep
  {month:'Sep',rep:'Mariano Lobos', account:'Multimatic Inmetmatic Mexico', name:'KM LB Bundle Toe Link', amount:47494, lr:'Slow to Quote', fb:'Came in late with our quote.'},
  {month:'Sep',rep:'Mariano Lobos', account:'Multimatic Inmetmatic Mexico', name:'KM LB Bundle Camber Link', amount:40331, lr:'Slow to Quote', fb:null},
  {month:'Sep',rep:'Mariano Lobos', account:'Multimatic Inmetmatic Mexico', name:'KM LB Bundle Compression RR SUP', amount:54711, lr:'Slow to Quote', fb:'Came in late with our quote.'},
  {month:'Sep',rep:'Mariano Lobos', account:'Multimatic Inmetmatic Mexico', name:'KM LB Bundle Tension Link', amount:46176, lr:'Slow to Quote', fb:'Came in late with our quote.'},
  {month:'Sep',rep:'Vonn McQuiston', account:'The Nelson Company', name:'DC 4 4048 TP Standard Duty DH', amount:5000, lr:'Customer Non-Responsive', fb:'Customer did not receive feedback from their customer.'},
  {month:'Sep',rep:'Vonn McQuiston', account:'International Precision Components', name:'BP 4848W SP', amount:100000, lr:'Customer Non-Responsive', fb:'Attempted 4 times to get samples ordered.'},
  {month:'Sep',rep:'Kent Buckingham', account:'Avis Budget Group', name:'Avis AFM Bedliners', amount:450000, lr:'No KFI Product Solution', fb:null},
  {month:'Sep',rep:'Vonn McQuiston', account:'Green Processing', name:'T 4548 ID Pallet', amount:27000, lr:'No Customer Budget', fb:'Customer did not want to spend the money.'},
  {month:'Sep',rep:'Rebecca Krueger', account:'TriEnda Holdings', name:'21 VDA Wheel Tray', amount:184800, lr:'High Freight Cost', fb:null},
  {month:'Sep',rep:'Kent Buckingham', account:'The Nelson Company', name:'43x43 Heavy Duty Bulk Bag Pallet', amount:8000, lr:'Customer Non-Responsive', fb:'No response on moving forward.'},
  {month:'Sep',rep:'Rebecca Krueger', account:'Central Motor Wheel of America', name:'PC10 PALLETS', amount:68904, lr:'Below Vol/Profitability', fb:null},
  {month:'Sep',rep:'Matt Olsen', account:'Thyssenkrupp Mexico Sub 31', name:'J4U Tray', amount:424842, lr:'Customer Delayed', fb:'Project still on-hold, no idea when it will happen.'},
  {month:'Sep',rep:'Matt Olsen', account:'RIVIAN P3', name:'R2 644 JPD Steel Bin', amount:1004250, lr:'High Freight Cost', fb:'Excessive freight costs to IL and MI.'},
  {month:'Sep',rep:'Matt Olsen', account:'RIVIAN P3', name:'R2 644 JPD Lockdown Rack', amount:1004250, lr:'High Freight Cost', fb:'Incumbent suppliers closer to GA and Aguascalientes.'},
  {month:'Sep',rep:'Matt Olsen', account:'RIVIAN P3', name:'2nd Shift Ramp Finished Good Racks', amount:1893000, lr:'High Freight Cost', fb:'Excessive freights make KFI uncompetitive.'},
  {month:'Sep',rep:'Matt Olsen', account:'RIVIAN P3', name:'R2 644 JPD Tower Rack Bases', amount:250000, lr:'High Freight Cost', fb:'Incumbent supplier closer to OH and MI.'},
  {month:'Sep',rep:'Mariano Lobos', account:'Mercado Libre Chile', name:'CHILE BP4048 wRFID labels', amount:520880, lr:'Price', fb:'ML purchased packs from Brazil at lower price.'},
  {month:'Sep',rep:'Rebecca Krueger', account:'Dana Inc.', name:'Spindle and Gear Tray', amount:100000, lr:'Customer Delayed', fb:'Program on hold.'},
  {month:'Sep',rep:'Mariano Lobos', account:'DeRemate.com de Mexico', name:'MERCADO LIBRE NEW OPENINGS', amount:100000, lr:'Customer Non-Responsive', fb:'Mercado Argentina not responding.'},
  {month:'Sep',rep:'Rebecca Krueger', account:'HONDA CANADA', name:'Honda AP2 Block Pallet', amount:96000, lr:'Customer Non-Responsive', fb:null},
  {month:'Sep',rep:'Rebecca Krueger', account:'Form Energy', name:'Form Energy Battery Divider Tray Pack', amount:200000, lr:'Customer Non-Responsive', fb:'Closing — customer unresponsive.'},
  {month:'Sep',rep:'Vonn McQuiston', account:'Caterpillar Inc', name:'50 MT IMT Tray', amount:69840, lr:'Customer Non-Responsive', fb:'Tried several times, completely stopped responding.'},
  {month:'Sep',rep:'Mariano Lobos', account:'DeRemate.com de Mexico', name:'CAGES LARGE PARCELS', amount:195975, lr:'No Customer Budget', fb:'Funds not approved.'},
  {month:'Sep',rep:'Mariano Lobos', account:'Zinc Nacional', name:'DC1 4048 NLT', amount:3936, lr:'Customer Non-Responsive', fb:'Customer not picking up samples.'},
  {month:'Sep',rep:'Mariano Lobos', account:'FORM', name:'Thermo Sleeves 48x64x50', amount:270288, lr:'Customer Delayed', fb:'Not a priority for 2026, revisit 2027.'},
  {month:'Sep',rep:'Mariano Lobos', account:'DeRemate.com de Mexico', name:'BP 4048 Orange Stripe 2nd line', amount:1419600, lr:'Customer Delayed', fb:'No progress heard.'},
  {month:'Sep',rep:'Mariano Lobos', account:'Webasto Convertibles Mexico', name:'PLASTIC PADS', amount:10000, lr:'Customer Non-Responsive', fb:'Customer does not provide feedback on quote.'},
  {month:'Sep',rep:'Rebecca Krueger', account:'Cummins Inc.', name:'A075H896 Twin Sheet Emission Parts 4 Tray', amount:75000, lr:'Customer Delayed', fb:'Customer still might move tooling but closing until decision made.'},
  {month:'Sep',rep:'Rebecca Krueger', account:'PackIQ - P3', name:'Long and Short Coil Rack', amount:1900000, lr:'Price', fb:'$525 per rack higher than competitors.'},
  {month:'Sep',rep:'Kent Buckingham', account:'G&W Electric', name:'G&W Electric DC1 Pallets', amount:40000, lr:'Customer Non-Responsive', fb:null},
  {month:'Sep',rep:'Rebecca Krueger', account:'PackIQ - P3', name:'AG FACEBAR C256667A-01', amount:100000, lr:'No Customer Budget', fb:'PackIQ was not awarded the work.'},
  {month:'Sep',rep:'Rebecca Krueger', account:'Toyota Motor Manufacturing Kentucky', name:'6441 TPR Cylinder Liner Tray', amount:275000, lr:'Customer Non-Responsive', fb:'No reply from Tim.'},
  {month:'Sep',rep:'Rebecca Krueger', account:'PackIQ - P3', name:'Front Fascia MSP MOLD WIP', amount:300000, lr:'No Customer Budget', fb:'PackIQ not awarded work.'},
  {month:'Sep',rep:'Mariano Lobos', account:'AVOCARBON MEXICO - SUB 31', name:'623x423x45 mm trays', amount:150000, lr:'Customer Non-Responsive', fb:'Customer went silent.'},
  {month:'Sep',rep:'Mariano Lobos', account:'MM PACKAGING GUAYNABO', name:'DC1 4048 and DC0 4048', amount:53922, lr:'No Customer Budget', fb:'Customer does not have funds yet.'},
  {month:'Sep',rep:'Mariano Lobos', account:'DeRemate.com de Mexico', name:'COLOMBIA BP 4048 Orange Stripe', amount:13091, lr:'Price', fb:'Mercado can get these packs locally.'},
  {month:'Sep',rep:'Jack Subel', account:'Cameron International Corporation - SLB Group', name:'SLB PANEL FRAME ASSEMBLY', amount:248614, lr:'KFI Technical Capabilities', fb:'Package included processes not suited for us.'},
  {month:'Sep',rep:'Mariano Lobos', account:'Aumovio', name:'BP3032 SG', amount:27000, lr:'Customer Non-Responsive', fb:'Customer non-responsive.'},
  {month:'Sep',rep:'Jack Subel', account:'Cameron International Corporation - SLB Group', name:'SLB Project Frost V1 META', amount:1, lr:'No KFI Product Solution', fb:'Site in Canada, closing.'},
  {month:'Sep',rep:'Jack Subel', account:'Satellite Industries Inc. P5', name:'Satellite Floor Package', amount:200000, lr:'Contract or Terms', fb:null},
  {month:'Sep',rep:'Jack Subel', account:'Satellite Industries Inc. P5', name:'Satellite Fronts Doors', amount:570000, lr:'Contract or Terms', fb:null},
  {month:'Sep',rep:'Mariano Lobos', account:'Nemak SAB - Sub 31', name:'BENTLER ZF PACKS OE BMW', amount:341954, lr:'Customer Non-Responsive', fb:'Customer not providing status.'},
  {month:'Sep',rep:'Mariano Lobos', account:'DeRemate.com de Mexico', name:'200 MANGUITOS', amount:22466, lr:'No Customer Budget', fb:'No funds approved.'},
  // Oct
  {month:'Oct',rep:'Rebecca Krueger', account:'HUSCO International', name:'Cougar Tray', amount:40000, lr:'Customer Non-Responsive', fb:'Customer not responding.'},
  {month:'Oct',rep:'Jake Heinecke', account:'Albertsons Companies HQ', name:'DC6 Albertsons HQ', amount:2000000, lr:'Price', fb:'Expecting to still get a portion.'},
  {month:'Oct',rep:'Vonn McQuiston', account:'Waste Connections-Pflugerville', name:'Steel Replacement Bottoms Pflugerville', amount:20000, lr:'Price', fb:'Priced too high.'},
  {month:'Oct',rep:'Matt Olsen', account:'TESLA', name:'RFQ 91767 YGFT169 Wheel Tire Rack Spares', amount:116595, lr:'Customer Non-Responsive', fb:'Customer non-responsive. No reply from Krishna.'},
  {month:'Oct',rep:'Jake Heinecke', account:'Scheels Sports - HQ', name:'DC6 Scheels', amount:36238, lr:'Price', fb:null},
  {month:'Oct',rep:'Jake Heinecke', account:'PFS Reinhart-Twin Cities MN', name:'DC6 Pallet PFG Rogers MN', amount:48735, lr:'Unable to Meet Specs', fb:'Want Grommets.'},
  {month:'Oct',rep:'Matt Olsen', account:'Thyssenkrupp Multi Tracks Trienda', name:'BP 484534 and BP 654834 Pallets', amount:76200, lr:'No Customer Budget', fb:'Customer decided to continue with expendable packaging.'},
  {month:'Oct',rep:'Matt Olsen', account:'TESLA', name:'82x51 Custom Dolly', amount:20000, lr:'Below Vol/Profitability', fb:'No quote. Only 20 dollies.'},
  {month:'Oct',rep:'Matt Olsen', account:'Thyssenkrupp Mexico Sub 31', name:'HONDA SBW WIP TK MX US', amount:150000, lr:'Customer Delayed', fb:'Project shut down by Honda. Follow up Q1-2027.'},
  {month:'Oct',rep:'Jake Heinecke', account:'Albertsons - North Salt Lake UT', name:'DC6 Pallet Albertsons SLC', amount:32899, lr:'Customer Delayed', fb:null},
  {month:'Oct',rep:'Mariano Lobos', account:'Mercado Libre Argentina', name:'BIG PACKS 4048 Argentina', amount:1077440, lr:'Customer Non-Responsive', fb:'Customer not picking up samples.'},
  {month:'Oct',rep:'Jack Subel', account:'Satellite Industries Inc. P5', name:'Satellite Roof Package', amount:3000000, lr:'Contract or Terms', fb:null},
  {month:'Oct',rep:'Rebecca Krueger', account:'Kontane Logistics', name:'Tire and Wheel Rack Cart', amount:150000, lr:'KFI Design Rejected', fb:'Customer unable to provide enough information to quote.'},
  {month:'Oct',rep:'Rebecca Krueger', account:'PackIQ - P3', name:'NMD Door Pad Rack SR200279', amount:765476, lr:'Customer Delayed', fb:'Project moved to 2027.'},
  {month:'Oct',rep:'Rebecca Krueger', account:'DO NOT USE Honda of America Mfg', name:'28M CRV Front Knuckle Tray', amount:100000, lr:'Production Lead Time', fb:'Tooling and production lead time unacceptable.'},
  {month:'Oct',rep:'Rebecca Krueger', account:'DO NOT USE Honda of America Mfg', name:'6MA Crankshaft Forging Tray 28M CRV', amount:150000, lr:'Production Lead Time', fb:'Production lead time unacceptable.'},
  {month:'Oct',rep:'Rebecca Krueger', account:'Dana Inc.', name:'5917 Dana Pinion Tray 7447', amount:20000, lr:'Below Vol/Profitability', fb:'Tooling returned to customer.'},
  {month:'Oct',rep:'Mariano Lobos', account:'Marelli Mexico - Sub 31', name:'rfq 25575 Additional P33C Steel Racks', amount:1040000, lr:'Contract or Terms', fb:'Cannot match the payment they request.'},
  // Nov
  {month:'Nov',rep:'Vonn McQuiston', account:'American Woodmark Corp', name:'Opti-Pack BP4848W SP4 WHITE-NDH', amount:50000, lr:'Customer Non-Responsive', fb:'Main contact left the company.'},
  {month:'Nov',rep:'Matt Olsen', account:'Moment Energy', name:'ME Battery Pack', amount:296700, lr:'Customer Non-Responsive', fb:'Customer non-responsive to calls, emails, and texts.'},
  {month:'Nov',rep:'Vonn McQuiston', account:'American Woodmark Corp', name:'BP 48x96', amount:64050, lr:'Customer Non-Responsive', fb:'Customer non-responsive. Main contact left company.'},
  {month:'Nov',rep:'Matt Olsen', account:'Redwood Materials', name:'DDR Battery Pack', amount:493929, lr:'Customer Delayed', fb:'Project delayed until 2027. No update until after new year.'},
  {month:'Nov',rep:'Vonn McQuiston', account:'Innovex Inc.', name:'Innovex Mega Ditch 4250m', amount:4015372, lr:'Price', fb:'Project not going forward because of expense.'},
  {month:'Nov',rep:'Mariano Lobos', account:'FORM', name:'CBB RACKS', amount:2860624, lr:'Price', fb:'Not competitive. If customer gives chance to requote will reopen.'},
  {month:'Nov',rep:'Rebecca Krueger', account:'PackIQ - P3', name:'Auxiliary Axle Rack SR200214', amount:90000, lr:'Price', fb:'$25k (~4.5%) too high.'},
  {month:'Nov',rep:'Rebecca Krueger', account:'4G North America Ingenieria', name:'Automotive Steel Rack Modification', amount:30000, lr:'Below Vol/Profitability', fb:'Cannot meet December delivery date and not worth our time.'},
]

const EIGHT_REPS = ["Rebecca Krueger","Matt Olsen","Geoff Petrangelo","Kent Buckingham","Vonn McQuiston","Mariano Lobos","Jake Heinecke","Jack Subel"]
const ALL_REPS   = [...EIGHT_REPS, 'Other']
const MONTHS     = ['Jan','Feb','Mar','Apr','May','Jun','Jul']
const MONTH_NUM  = {Jan:1,Feb:2,Mar:3,Apr:4,May:5,Jun:6,Jul:7}
const MONTH_FULL = {Jan:'January',Feb:'February',Mar:'March',Apr:'April',May:'May',Jun:'June',Jul:'July'}

const REP_COLORS = {
  'Rebecca Krueger':'#19315b','Matt Olsen':'#2d6bb5','Geoff Petrangelo':'#5b4fb5',
  'Kent Buckingham':'#0e8a8a','Vonn McQuiston':'#1a7a4a','Mariano Lobos':'#c47a00',
  'Jake Heinecke':'#b52d2d','Jack Subel':'#8b2d6b','Other':'#9ca3af',
}
const LR_COLORS = {
  'Price':                      '#dc2626',
  'Customer Non-Responsive':    '#f97316',
  'Customer Delayed':           '#fbbf24',
  'No KFI Activity':            '#6366f1',
  'No Customer Budget':         '#8b5cf6',
  'Unable to Meet Specs':       '#ec4899',
  'KFI Technical Capabilities': '#06b6d4',
  'KFI Design Rejected':        '#84cc16',
  'No KFI Product Solution':    '#14b8a6',
  'Slow to Quote':               '#f43f5e',
  'Contract or Terms':          '#64748b',
  'Tooling - Lead Time':        '#78716c',
  'Poor Customer Relationship': '#b91c1c',
  'Below Acceptable Volume':    '#ca8a04',
  'Production Lead Time':       '#0891b2',
}
const sn = r => r === 'Other' ? 'Other' : r.split(' ')[0][0]+'. '+r.split(' ').slice(-1)[0]

const TABS = [
  { id:'overview',  label:'Overview'       },
  { id:'trends',    label:'Trends'         },
  { id:'reasons',   label:'Loss Reasons'   },
  { id:'reps',      label:'By Rep'         },
  { id:'accounts',  label:'Top Accounts'   },
  { id:'patterns',  label:'Win/Loss Intel' },
  { id:'deals',     label:'All Deals'      },
  {month:'Nov',rep:'Jack Subel', account:'Cameron International Corporation - SLB Group', name:'SLB IAD669 E-House Package', amount:72000000, lr:'KFI Technical Capabilities', fb:'Package included processes and products not suited for KFI.'},
]

export default function TabLostDeals() {
  const [tab, setTab]             = useState('overview')
  const [filterRep, setFilterRep] = useState('All')
  const [drillMonth, setDrillMonth] = useState(null)
  const [sortCol, setSortCol]     = useState('value')

  const filtered   = filterRep === 'All' ? LOST_2026 : LOST_2026.filter(o => o.rep === filterRep)
  const totalVal   = filtered.reduce((s,o) => s+o.amount, 0)
  const totalCt    = filtered.length
  const avgDeal    = totalCt > 0 ? Math.round(totalVal/totalCt) : 0
  const biggestDeal = [...filtered].sort((a,b)=>b.amount-a.amount)[0]
  const worstMonth  = MONTHS.map(m => ({m, v:filtered.filter(o=>o.month===m).reduce((s,o)=>s+o.amount,0)})).sort((a,b)=>b.v-a.v)[0]
  const medianDeal  = useMemo(() => {
    const sorted = [...filtered].map(o=>o.amount).sort((a,b)=>a-b)
    return sorted.length ? sorted[Math.floor(sorted.length/2)] : 0
  }, [filtered])

  // Loss reason aggregate
  const lrAgg = useMemo(() => {
    const m = {}
    filtered.forEach(o => {
      if (!o.lr) return
      if (!m[o.lr]) m[o.lr] = {lr:o.lr, count:0, value:0}
      m[o.lr].count++
      m[o.lr].value += o.amount
    })
    return Object.values(m).sort((a,b)=>b.count-a.count)
  }, [filtered])

  const lrPieData = lrAgg.map(r => ({name:r.lr, value:r.count, amt:r.value}))

  const monthlyData = useMemo(() => {
    let running = 0
    return MONTHS.map(m => {
      const opps = filtered.filter(o => o.month === m)
      const val  = opps.reduce((s,o) => s+o.amount, 0)
      running += val
      return { month:m, count:opps.length, value:+(val/1e6).toFixed(2), running:+(running/1e6).toFixed(2), opps }
    })
  }, [filtered])

  const repData = useMemo(() => ALL_REPS.map(rep => {
    const opps = filtered.filter(o => o.rep === rep)
    const val  = opps.reduce((s,o) => s+o.amount, 0)
    const avg  = opps.length ? Math.round(val/opps.length) : 0
    const biggest = opps.length ? [...opps].sort((a,b)=>b.amount-a.amount)[0] : null
    const monthly = MONTHS.map(m => opps.filter(o=>o.month===m).reduce((s,o)=>s+o.amount,0))
    return { rep, name:sn(rep), count:opps.length, value:val, valueM:+(val/1e6).toFixed(2),
             avg, biggest, monthly, opps }
  }).filter(r=>r.count>0).sort((a,b)=>{
    if (sortCol==='count') return b.count-a.count
    if (sortCol==='avg')   return b.avg-a.avg
    return b.value-a.value
  }), [filtered, sortCol])

  const acctMap = useMemo(() => {
    const m = {}
    filtered.forEach(o => {
      if (!m[o.account]) m[o.account] = {account:o.account, rep:o.rep, count:0, value:0, deals:[]}
      m[o.account].count++; m[o.account].value += o.amount; m[o.account].deals.push(o)
    })
    return Object.values(m).sort((a,b)=>b.value-a.value)
  }, [filtered])

  const stackedData = MONTHS.map(m => {
    const row = {month:m}
    ALL_REPS.forEach(rep => {
      const v = LOST_2026.filter(o=>o.month===m&&o.rep===rep).reduce((s,o)=>s+o.amount,0)
      if (v>0) row[sn(rep)] = +(v/1e6).toFixed(2)
    })
    return row
  })
  const stackKeys = ALL_REPS.filter(r=>LOST_2026.some(o=>o.rep===r)).map(sn)

  // Loss reason by month (for stacked bar)
  const lrMonthly = MONTHS.map(m => {
    const row = {month:m}
    const opps = filtered.filter(o=>o.month===m)
    const lrs = [...new Set(opps.map(o=>o.lr).filter(Boolean))]
    lrs.forEach(lr => { row[lr] = opps.filter(o=>o.lr===lr).length })
    return row
  })
  const allLrs = [...new Set(filtered.map(o=>o.lr).filter(Boolean))]

  const ZEROLOSE = EIGHT_REPS.filter(r => !LOST_2026.some(o => o.rep === r))
  const drillData = drillMonth ? filtered.filter(o=>o.month===drillMonth).sort((a,b)=>b.amount-a.amount) : null
  const drillLr = drillData ? (() => {
    const m = {}
    drillData.forEach(o => { if (!m[o.lr]) m[o.lr]={lr:o.lr,count:0,value:0}; m[o.lr].count++; m[o.lr].value+=o.amount })
    return Object.values(m).sort((a,b)=>b.value-a.value)
  })() : null

  return (
    <div className="p-4 md:p-6 w-full">

      {/* Hero */}
      <div className="bg-kfi-navy text-white p-5 mb-5 border-l-4 border-red-500">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            {label:'Pipeline Lost YTD',   value:fmtM(totalVal),         red:true,  sub:totalCt+' deals'},
            {label:'Avg Deal Lost',        value:fmtM(avgDeal),                     sub:'per opportunity'},
            {label:'Median Deal Size',     value:fmtM(medianDeal),                  sub:'50th percentile'},
            {label:'Worst Month',          value:worstMonth?.m||'—',     amber:true, sub:fmtM(worstMonth?.v||0)},
            {label:'#1 Loss Reason',       value:lrAgg[0]?.lr.split(' ')[0]||'—',  sub:(lrAgg[0]?.count||0)+' deals · '+fmtM(lrAgg[0]?.value||0)},
            {label:'Largest Loss',         value:biggestDeal?fmtM(biggestDeal.amount):'—', sub:biggestDeal?.account||''},
          ].map((k,i)=>(
            <div key={i}>
              <div className="font-label text-[8px] uppercase tracking-widest text-white/50 mb-1">{k.label}</div>
              <div className={`font-headline text-2xl font-bold leading-none ${k.red?'text-red-400':k.amber?'text-amber-400':'text-white'}`}>{k.value}</div>
              <div className="font-label text-[9px] text-white/40 mt-0.5 truncate">{k.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Zero-loss callout */}
      {ZEROLOSE.length > 0 && filterRep === 'All' && (
        <div className="flex items-start gap-3 bg-green-50 border border-green-200 border-l-4 border-l-green-500 p-3 mb-5">
          <span className="text-green-600 flex-shrink-0">✓</span>
          <div className="font-label text-[10px] text-green-800">
            <strong>No Lost Deals YTD:</strong> {ZEROLOSE.map(r=>sn(r)).join(', ')} — zero closed/lost opportunities logged in Salesforce for 2026.
          </div>
        </div>
      )}

      {/* Filters + Tabs */}
      <div className="flex flex-col gap-3 mb-5">
        <div className="flex flex-wrap gap-1.5">
          {['All',...ALL_REPS].filter(r=>r==='All'||LOST_2026.some(o=>o.rep===r)).map(r=>(
            <button key={r} onClick={()=>setFilterRep(r)}
              className={`font-label text-[9px] uppercase tracking-wider px-3 py-1.5 border transition-colors ${filterRep===r?'text-white border-transparent':'bg-white text-kfi-mgray border-kfi-lgray hover:border-kfi-navy'}`}
              style={filterRep===r?{background:filterRep==='All'?'#19315b':REP_COLORS[r]||'#19315b',borderColor:'transparent'}:{}}>
              {r==='All'?'All Reps':sn(r)}
            </button>
          ))}
        </div>
        <div className="flex border border-kfi-lgray overflow-x-auto w-fit">
          {TABS.map(t=>(
            <button key={t.id} onClick={()=>setTab(t.id)}
              className={`font-label text-[9px] uppercase tracking-wider px-4 py-2 whitespace-nowrap transition-colors border-r border-kfi-lgray last:border-r-0 ${tab===t.id?'bg-kfi-navy text-white':'bg-white text-kfi-mgray hover:bg-kfi-lgray'}`}>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── OVERVIEW ─────────────────────────────────────────────────────── */}
      {tab === 'overview' && (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <div className="bg-white p-4 border-t-[3px] border-red-500">
              <h3 className="font-headline text-sm text-kfi-navy font-medium mb-1">Monthly Lost Deal Value</h3>
              <p className="font-label text-[9px] text-kfi-mgray uppercase tracking-wider mb-3">Click any bar to drill into that month</p>
              <ResponsiveContainer width="100%" height={210}>
                <BarChart data={monthlyData} onClick={d=>d?.activeLabel&&setDrillMonth(drillMonth===d.activeLabel?null:d.activeLabel)} margin={{left:-5}}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/>
                  <XAxis dataKey="month" tick={{fontSize:9}}/>
                  <YAxis tickFormatter={v=>'$'+v+'M'} tick={{fontSize:9}}/>
                  <Tooltip formatter={v=>['$'+v+'M','Lost']} labelFormatter={l=>`${l} — click to drill`}/>
                  <Bar dataKey="value" name="Lost" cursor="pointer" radius={[2,2,0,0]}>
                    {monthlyData.map((d,i)=>(
                      <Cell key={i} fill={drillMonth===d.month?'#dc2626':d.value>=10?'#dc2626':d.value>=3?'#f97316':'#fbbf24'}
                        fillOpacity={drillMonth&&drillMonth!==d.month?0.35:1}/>
                    ))}
                    <LabelList dataKey="count" position="top" style={{fontSize:9,fill:'#666'}} formatter={v=>v>0?v+'x':''}/>
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* YTD Loss Reason Pie */}
            <div className="bg-white p-4 border-t-[3px] border-kfi-navy">
              <h3 className="font-headline text-sm text-kfi-navy font-medium mb-1">Loss Reasons — YTD by Count</h3>
              <p className="font-label text-[9px] text-kfi-mgray uppercase tracking-wider mb-2">Source: Salesforce Loss_Reason_1__c field</p>
              <div className="flex items-center">
                <ResponsiveContainer width="55%" height={200}>
                  <PieChart>
                    <Pie data={lrPieData} cx="50%" cy="50%" innerRadius={45} outerRadius={80} dataKey="value" paddingAngle={2}>
                      {lrPieData.map((e,i)=><Cell key={i} fill={LR_COLORS[e.name]||'#9ca3af'}/>)}
                    </Pie>
                    <Tooltip formatter={(v,n,p)=>[`${v} deals · ${fmtM(p.payload.amt)}`,p.payload.name]}/>
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex-1 space-y-1">
                  {lrPieData.slice(0,8).map((d,i)=>(
                    <div key={i} className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-sm flex-shrink-0" style={{background:LR_COLORS[d.name]||'#9ca3af'}}/>
                      <span className="font-label text-[8px] text-kfi-navy truncate flex-1">{d.name}</span>
                      <span className="font-label text-[8px] font-bold text-kfi-navy">{d.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Drill */}
          {drillData && (
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px bg-kfi-lgray flex-1"/>
                <h2 className="font-headline text-sm font-medium text-kfi-navy whitespace-nowrap">
                  {MONTH_FULL[drillMonth]} 2026 — {drillData.length} deals · {fmtM(drillData.reduce((s,o)=>s+o.amount,0))}
                </h2>
                <div className="h-px bg-kfi-lgray flex-1"/>
                <button onClick={()=>setDrillMonth(null)} className="font-label text-[9px] uppercase text-kfi-mgray hover:text-kfi-navy flex-shrink-0">✕ close</button>
              </div>
              {/* Drill pie */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-3">
                <div className="bg-white p-3 border-t-[3px] border-red-400 col-span-1">
                  <div className="font-label text-[9px] text-kfi-mgray uppercase mb-2">Loss Reasons — {drillMonth}</div>
                  <ResponsiveContainer width="100%" height={150}>
                    <PieChart>
                      <Pie data={drillLr.map(r=>({name:r.lr,value:r.count,amt:r.value}))} cx="50%" cy="50%" outerRadius={60} dataKey="value" paddingAngle={2}>
                        {drillLr.map((e,i)=><Cell key={i} fill={LR_COLORS[e.lr]||'#9ca3af'}/>)}
                      </Pie>
                      <Tooltip formatter={(v,n,p)=>[`${v} deals`,p.payload.name]}/>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="col-span-2">
                  <table className="w-full border-collapse">
                    <thead><tr><th className="kfi-th">Reason</th><th className="kfi-th text-center">Deals</th><th className="kfi-th text-right">Value</th></tr></thead>
                    <tbody>
                      {drillLr.map((r,i)=>(
                        <tr key={i} className={i%2===0?'':'bg-[#f7f7f7]'}>
                          <td className="kfi-td">
                            <div className="flex items-center gap-1.5">
                              <div className="w-2 h-2 rounded-sm flex-shrink-0" style={{background:LR_COLORS[r.lr]||'#9ca3af'}}/>
                              <span className="font-label text-[10px]">{r.lr}</span>
                            </div>
                          </td>
                          <td className="kfi-td text-center font-bold text-red-600">{r.count}</td>
                          <td className="kfi-td text-right font-medium text-kfi-navy">{fmtM(r.value)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="bg-white overflow-x-auto border-t-[3px] border-red-500">
                <table className="w-full border-collapse">
                  <thead><tr>{['Rep','Account','Opportunity','Amount','Loss Reason','Feedback'].map(h=><th key={h} className="kfi-th">{h}</th>)}</tr></thead>
                  <tbody>
                    {drillData.map((o,i)=>(
                      <tr key={i} className={i%2===0?'bg-red-50/40':'bg-red-50/70'}>
                        <td className="kfi-td text-[11px] font-medium whitespace-nowrap" style={{color:REP_COLORS[o.rep]||'#555'}}>{sn(o.rep)}</td>
                        <td className="kfi-td text-[11px] font-medium text-kfi-navy max-w-[120px]"><div className="truncate">{o.account}</div></td>
                        <td className="kfi-td text-[11px] max-w-[180px]"><div className="truncate">{o.name}</div></td>
                        <td className="kfi-td font-headline text-sm text-red-600 whitespace-nowrap">{fmtM(o.amount)}</td>
                        <td className="kfi-td max-w-[110px]">
                          {o.lr && <span className="font-label text-[8px] uppercase px-1 py-0.5 whitespace-nowrap" style={{background:LR_COLORS[o.lr]+'22',color:LR_COLORS[o.lr]||'#555'}}>{o.lr}</span>}
                        </td>
                        <td className="kfi-td text-[10px] text-kfi-mgray max-w-[200px]"><div className="line-clamp-2">{o.fb||'—'}</div></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Stacked by rep */}
          <div className="bg-white p-4 border-t-[3px] border-kfi-navy mb-4">
            <h3 className="font-headline text-sm text-kfi-navy font-medium mb-1">Lost Value by Rep — Monthly Stack</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={stackedData} margin={{left:-5}}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/>
                <XAxis dataKey="month" tick={{fontSize:9}}/>
                <YAxis tickFormatter={v=>'$'+v+'M'} tick={{fontSize:9}}/>
                <Tooltip formatter={v=>['$'+v+'M']}/>
                <Legend wrapperStyle={{fontSize:9}}/>
                {stackKeys.map(k=>{const full=ALL_REPS.find(r=>sn(r)===k)||k; return <Bar key={k} dataKey={k} stackId="a" fill={REP_COLORS[full]||'#9ca3af'}/>})}
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* ── TRENDS ───────────────────────────────────────────────────────── */}
      {tab === 'trends' && (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <div className="bg-white p-4 border-t-[3px] border-kfi-navy">
              <h3 className="font-headline text-sm text-kfi-navy font-medium mb-1">Avg Lost Deal Size — Monthly</h3>
              <ResponsiveContainer width="100%" height={210}>
                <ComposedChart data={monthlyData.map(d=>({...d,avg:d.count>0?Math.round(d.value*1e6/d.count/1000):0}))} margin={{left:-5}}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/>
                  <XAxis dataKey="month" tick={{fontSize:9}}/>
                  <YAxis tickFormatter={v=>'$'+v+'K'} tick={{fontSize:9}}/>
                  <Tooltip formatter={v=>['$'+v+'K','Avg deal']}/>
                  <ReferenceLine y={Math.round(avgDeal/1000)} stroke="#dc2626" strokeDasharray="4 4" label={{value:'YTD avg',fontSize:8,fill:'#dc2626'}}/>
                  <Bar dataKey="avg" fill="#fecaca" opacity={0.8} name="Avg $K"/>
                  <Line type="monotone" dataKey="avg" stroke="#dc2626" strokeWidth={2} dot={{r:4,fill:'#dc2626'}}/>
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white p-4 border-t-[3px] border-kfi-navy">
              <h3 className="font-headline text-sm text-kfi-navy font-medium mb-1">Deal Count — Monthly</h3>
              <ResponsiveContainer width="100%" height={210}>
                <ComposedChart data={monthlyData} margin={{left:-10}}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/>
                  <XAxis dataKey="month" tick={{fontSize:9}}/>
                  <YAxis tick={{fontSize:9}}/>
                  <Tooltip/>
                  <ReferenceLine y={Math.round(totalCt/MONTHS.length)} stroke="#19315b" strokeDasharray="4 4" label={{value:'avg/mo',fontSize:8,fill:'#19315b'}}/>
                  <Bar dataKey="count" fill="#19315b" radius={[2,2,0,0]} name="Deals Lost">
                    <LabelList dataKey="count" position="top" style={{fontSize:9,fill:'#555'}}/>
                  </Bar>
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
          {/* Loss reason by month stacked */}
          <div className="bg-white p-4 border-t-[3px] border-red-400 mb-4">
            <h3 className="font-headline text-sm text-kfi-navy font-medium mb-1">Loss Reasons by Month — Count</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={lrMonthly} margin={{left:-5}}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/>
                <XAxis dataKey="month" tick={{fontSize:9}}/>
                <YAxis tick={{fontSize:9}}/>
                <Tooltip/>
                <Legend wrapperStyle={{fontSize:8}}/>
                {allLrs.map(lr=><Bar key={lr} dataKey={lr} stackId="a" fill={LR_COLORS[lr]||'#9ca3af'}/>)}
              </BarChart>
            </ResponsiveContainer>
          </div>
          {/* MoM table */}
          <div className="bg-white overflow-x-auto border-t-[3px] border-kfi-navy">
            <table className="w-full border-collapse">
              <thead><tr>{['Month','Deals','Value','Avg Deal','vs Prior Month','Top Reason','Running'].map(h=><th key={h} className="kfi-th">{h}</th>)}</tr></thead>
              <tbody>
                {[...monthlyData].reverse().map((d,i,arr)=>{
                  const prev = arr[i+1]
                  const valDelta = prev ? d.value - prev.value : null
                  const mo = LOST_2026.filter(o=>o.month===d.month)
                  const topLr = (() => {
                    const c = {}; mo.forEach(o=>{if(o.lr){c[o.lr]=(c[o.lr]||0)+1}})
                    return Object.entries(c).sort((a,b)=>b[1]-a[1])[0]
                  })()
                  return (
                    <tr key={i} className={i===0?'bg-amber-50 font-medium':i%2===0?'':'bg-[#f7f7f7]'}>
                      <td className="kfi-td font-label text-[10px] font-medium">{d.month}{i===0&&<span className="ml-1 text-[8px] text-kfi-orange">← latest</span>}</td>
                      <td className="kfi-td text-center font-bold text-red-600">{d.count}</td>
                      <td className="kfi-td font-headline text-sm text-red-700">${d.value}M</td>
                      <td className="kfi-td text-[11px] text-kfi-mgray">{d.count>0?fmtM(d.value*1e6/d.count):'—'}</td>
                      <td className="kfi-td">
                        {valDelta !== null && (
                          <span className={`font-label text-[10px] font-medium ${valDelta>0?'text-red-600':'text-green-700'}`}>
                            {valDelta>0?'▲':'▼'} ${Math.abs(valDelta).toFixed(2)}M
                          </span>
                        )}
                      </td>
                      <td className="kfi-td">
                        {topLr && <span className="font-label text-[8px] px-1 py-0.5" style={{background:(LR_COLORS[topLr[0]]||'#9ca3af')+'22',color:LR_COLORS[topLr[0]]||'#555'}}>{topLr[0]} ({topLr[1]})</span>}
                      </td>
                      <td className="kfi-td font-medium text-kfi-navy">${d.running}M</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ── LOSS REASONS ─────────────────────────────────────────────────── */}
      {tab === 'reasons' && (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-5 border-t-[3px] border-red-500">
              <h3 className="font-headline text-sm text-kfi-navy font-medium mb-1">Loss Reasons — YTD by Count</h3>
              <p className="font-label text-[9px] text-kfi-mgray mb-4">Source: Salesforce <code className="text-[8px] bg-gray-100 px-1">Loss_Reason_1__c</code> field</p>
              <ResponsiveContainer width="100%" height={260}>
                <PieChart>
                  <Pie data={lrPieData} cx="50%" cy="50%" innerRadius={55} outerRadius={100} dataKey="value" paddingAngle={2}
                    label={({name,value})=>`${name.split(' ')[0]} (${value})`} labelLine={false}>
                    {lrPieData.map((e,i)=><Cell key={i} fill={LR_COLORS[e.name]||'#9ca3af'}/>)}
                  </Pie>
                  <Tooltip formatter={(v,n,p)=>[`${v} deals · ${fmtM(p.payload.amt)}`,p.payload.name]}/>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white overflow-x-auto border-t-[3px] border-kfi-navy">
              <table className="w-full border-collapse">
                <thead><tr>{['Loss Reason','Deals','% of Total','Pipeline Lost','Avg Deal'].map(h=><th key={h} className="kfi-th">{h}</th>)}</tr></thead>
                <tbody>
                  {lrAgg.map((r,i)=>(
                    <tr key={i} className={i%2===0?'':'bg-[#f7f7f7]'}>
                      <td className="kfi-td">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2 h-2 rounded-sm flex-shrink-0" style={{background:LR_COLORS[r.lr]||'#9ca3af'}}/>
                          <span className="font-label text-[10px]">{r.lr}</span>
                        </div>
                      </td>
                      <td className="kfi-td text-center font-bold text-red-600">{r.count}</td>
                      <td className="kfi-td text-center text-[11px]">{Math.round(r.count/totalCt*100)}%</td>
                      <td className="kfi-td font-headline text-sm text-red-700">{fmtM(r.value)}</td>
                      <td className="kfi-td text-[11px] text-kfi-mgray">{fmtM(Math.round(r.value/r.count))}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* Loss reason bar chart */}
          <div className="bg-white p-4 border-t-[3px] border-kfi-navy mb-4">
            <h3 className="font-headline text-sm text-kfi-navy font-medium mb-3">Pipeline Value Lost by Reason</h3>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={[...lrAgg].sort((a,b)=>b.value-a.value).map(r=>({...r,valueM:+(r.value/1e6).toFixed(2),nameShort:r.lr.split(' ').slice(0,3).join(' ')}))} layout="vertical" margin={{left:5,right:60}}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/>
                <XAxis type="number" tickFormatter={v=>'$'+v+'M'} tick={{fontSize:8}}/>
                <YAxis type="category" dataKey="nameShort" tick={{fontSize:8}} width={130}/>
                <Tooltip formatter={(v,n,p)=>[`${fmtM(v*1e6)} (${p.payload.count} deals)`,'Value Lost']}/>
                <Bar dataKey="valueM" name="Value Lost" radius={[0,2,2,0]}>
                  {lrAgg.map((r,i)=><Cell key={i} fill={LR_COLORS[r.lr]||'#9ca3af'}/>)}
                  <LabelList dataKey="count" position="right" style={{fontSize:9,fill:'#666'}} formatter={v=>v+'x'}/>
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          {/* Key insight callout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              {color:'#dc2626', label:'Competitive', reasons:['Price','Slow to Quote','Tooling - Lead Time'],
               note:'30%+ of losses are competitive execution issues — pricing and responsiveness.'},
              {color:'#f97316', label:'Customer-side', reasons:['Customer Non-Responsive','Customer Delayed','No Customer Budget'],
               note:'50%+ are customer-side — delayed projects, unresponsive contacts, or cancelled budgets.'},
              {color:'#6366f1', label:'KFI Internal', reasons:['No KFI Activity','KFI Design Rejected','KFI Technical Capabilities','No KFI Product Solution'],
               note:'~15% are internal gaps — no activity logged, design rejected, or capability miss.'},
            ].map((c,i)=>(
              <div key={i} className="bg-white p-4 border-t-[3px]" style={{borderTopColor:c.color}}>
                <div className="font-label text-[9px] uppercase tracking-wider mb-1" style={{color:c.color}}>{c.label} Issues</div>
                <div className="font-headline text-2xl font-bold text-kfi-navy mb-1">
                  {lrAgg.filter(r=>c.reasons.includes(r.lr)).reduce((s,r)=>s+r.count,0)}
                </div>
                <div className="font-label text-[10px] text-kfi-mgray mb-2">{fmtM(lrAgg.filter(r=>c.reasons.includes(r.lr)).reduce((s,r)=>s+r.value,0))}</div>
                <div className="font-label text-[9px] text-kfi-mgray leading-relaxed">{c.note}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── BY REP ───────────────────────────────────────────────────────── */}
      {tab === 'reps' && (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 border-t-[3px] border-kfi-navy">
              <h3 className="font-headline text-sm text-kfi-navy font-medium mb-3">Lost Value by Rep</h3>
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={repData} layout="vertical" margin={{left:5,right:50}}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/>
                  <XAxis type="number" tickFormatter={v=>'$'+v+'M'} tick={{fontSize:8}}/>
                  <YAxis type="category" dataKey="name" tick={{fontSize:9}} width={55}/>
                  <Tooltip formatter={v=>[fmtM(v*1e6),'Lost']}/>
                  <Bar dataKey="valueM" name="Value Lost" radius={[0,2,2,0]}>
                    {repData.map((r,i)=><Cell key={i} fill={REP_COLORS[r.rep]||'#9ca3af'}/>)}
                    <LabelList dataKey="count" position="right" style={{fontSize:9,fill:'#666'}} formatter={v=>v+'x'}/>
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white overflow-x-auto border-t-[3px] border-kfi-navy">
              <table className="w-full border-collapse">
                <thead><tr>
                  {['Rep','Deals','Value','Avg','Biggest Loss'].map(h=><th key={h} className="kfi-th">{h}</th>)}
                  <div className="absolute right-2 top-1 flex gap-1">
                    {[['value','$'],['count','#'],['avg','avg']].map(([col,lbl])=>(
                      <button key={col} onClick={()=>setSortCol(col)}
                        className={`font-label text-[7px] uppercase px-1 py-0.5 ${sortCol===col?'bg-kfi-navy text-white':'bg-kfi-lgray text-kfi-mgray'}`}>{lbl}</button>
                    ))}
                  </div>
                </tr></thead>
                <tbody>
                  {repData.map((r,i)=>(
                    <tr key={i} className={i%2===0?'':'bg-[#f7f7f7]'}>
                      <td className="kfi-td font-medium text-[11px]" style={{color:REP_COLORS[r.rep]||'#555'}}>{r.name}</td>
                      <td className="kfi-td text-center font-bold text-red-600">{r.count}</td>
                      <td className="kfi-td font-headline text-sm text-red-700">{fmtM(r.value)}</td>
                      <td className="kfi-td text-[11px] text-kfi-mgray">{fmtM(r.avg)}</td>
                      <td className="kfi-td text-[11px] max-w-[160px]"><div className="truncate">{r.biggest?`${fmtM(r.biggest.amount)} — ${r.biggest.account}`:''}</div></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* Heat matrix */}
          <div className="bg-white overflow-auto border-t-[3px] border-kfi-navy">
            <div className="p-3 border-b border-kfi-lgray"><h3 className="font-headline text-sm text-kfi-navy font-medium">Rep × Month Heat Matrix</h3></div>
            <table className="w-full border-collapse">
              <thead><tr><th className="kfi-th w-20">Rep</th>{MONTHS.map(m=><th key={m} className="kfi-th text-center">{m}</th>)}<th className="kfi-th text-right">Total</th></tr></thead>
              <tbody>
                {repData.map((r,i)=>{
                  const rowMax = Math.max(1,...r.monthly)
                  return (
                    <tr key={i} className={i%2===0?'':'bg-[#f7f7f7]'}>
                      <td className="kfi-td font-medium text-[11px]" style={{color:REP_COLORS[r.rep]||'#555'}}>{r.name}</td>
                      {r.monthly.map((val,mi)=>(
                        <td key={mi} className="kfi-td text-center p-1">
                          {val > 0 ? (
                            <div className="inline-flex flex-col items-center px-1 py-0.5 rounded-sm min-w-[40px]"
                              style={{background:`rgba(220,38,38,${0.07+val/rowMax*0.55})`}}>
                              <span className="font-headline text-[9px] font-medium text-red-800">{fmtM(val)}</span>
                            </div>
                          ) : <span className="text-kfi-lgray text-[10px]">—</span>}
                        </td>
                      ))}
                      <td className="kfi-td text-right font-bold text-red-700">{fmtM(r.value)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ── TOP ACCOUNTS ─────────────────────────────────────────────────── */}
      {tab === 'accounts' && (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <div className="bg-white p-4 border-t-[3px] border-red-500">
              <h3 className="font-headline text-sm text-kfi-navy font-medium mb-3">Top 15 Accounts by Pipeline Lost</h3>
              <ResponsiveContainer width="100%" height={320}>
                <BarChart data={acctMap.slice(0,15).map(a=>({...a,valueM:+(a.value/1e6).toFixed(2),name:a.account.length>22?a.account.slice(0,22)+'…':a.account}))} layout="vertical" margin={{left:5,right:40}}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/>
                  <XAxis type="number" tickFormatter={v=>'$'+v+'M'} tick={{fontSize:8}}/>
                  <YAxis type="category" dataKey="name" tick={{fontSize:8}} width={130}/>
                  <Tooltip formatter={v=>[fmtM(v*1e6),'Lost']}/>
                  <Bar dataKey="valueM" name="Value Lost" radius={[0,2,2,0]}>
                    {acctMap.slice(0,15).map((a,i)=><Cell key={i} fill={REP_COLORS[a.rep]||'#9ca3af'}/>)}
                    <LabelList dataKey="count" position="right" style={{fontSize:9,fill:'#555'}} formatter={v=>v+'x'}/>
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white overflow-x-auto border-t-[3px] border-kfi-navy">
              <table className="w-full border-collapse">
                <thead><tr>{['Account','Rep','Lost','Total','Avg'].map(h=><th key={h} className="kfi-th">{h}</th>)}</tr></thead>
                <tbody>
                  {acctMap.slice(0,15).map((a,i)=>(
                    <tr key={i} className={i%2===0?'':'bg-[#f7f7f7]'}>
                      <td className="kfi-td font-medium text-kfi-navy text-[11px] max-w-[160px]"><div className="truncate">{a.account}</div></td>
                      <td className="kfi-td text-[11px] font-medium whitespace-nowrap" style={{color:REP_COLORS[a.rep]||'#555'}}>{sn(a.rep)}</td>
                      <td className="kfi-td text-center font-bold text-red-600">{a.count}</td>
                      <td className="kfi-td font-headline text-sm text-red-700">{fmtM(a.value)}</td>
                      <td className="kfi-td text-[11px] text-kfi-mgray">{fmtM(Math.round(a.value/a.count))}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ── WIN/LOSS INTEL ────────────────────────────────────────────────── */}
      {tab === 'patterns' && (
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {[
              {label:'Total Deals Lost',    value:totalCt,              sub:'YTD 2026'},
              {label:'Total Value Lost',    value:fmtM(totalVal),       sub:'Pipeline removed', red:true},
              {label:'Avg Deal Size',       value:fmtM(avgDeal),        sub:'Mean loss'},
              {label:'Median Deal Size',    value:fmtM(medianDeal),     sub:'50th percentile'},
              {label:'#1 Reason by Count',  value:lrAgg[0]?.lr.split(' ')[0]||'—', sub:(lrAgg[0]?.count||0)+' deals'},
              {label:'#1 Reason by Value',  value:[...lrAgg].sort((a,b)=>b.value-a.value)[0]?.lr.split(' ')[0]||'—',
               sub:fmtM([...lrAgg].sort((a,b)=>b.value-a.value)[0]?.value||0)},
              {label:'Losses > $1M',        value:filtered.filter(o=>o.amount>=1000000).length, sub:fmtM(filtered.filter(o=>o.amount>=1000000).reduce((s,o)=>s+o.amount,0))},
              {label:'Avg Losses/Month',    value:(totalCt/MONTHS.length).toFixed(1), sub:'Jan–Jul pace'},
            ].map((k,i)=>(
              <div key={i} className={`bg-white p-3 border-t-2 ${k.red?'border-red-400':'border-kfi-navy'}`}>
                <div className="font-label text-[8px] uppercase tracking-widest text-kfi-mgray mb-1">{k.label}</div>
                <div className={`font-headline text-xl font-bold ${k.red?'text-red-600':'text-kfi-navy'}`}>{k.value}</div>
                <div className="font-label text-[9px] text-kfi-mgray truncate">{k.sub}</div>
              </div>
            ))}
          </div>
          {/* Repeat losses */}
          <div className="bg-white overflow-x-auto border-t-[3px] border-red-400 mb-4">
            <div className="p-3 border-b border-kfi-lgray">
              <h3 className="font-headline text-sm text-kfi-navy font-medium">Repeat Loss Accounts — 2+ Deals</h3>
            </div>
            <table className="w-full border-collapse">
              <thead><tr>{['Account','Rep','# Losses','Value','Months','Most Common Reason'].map(h=><th key={h} className="kfi-th">{h}</th>)}</tr></thead>
              <tbody>
                {acctMap.filter(a=>a.count>=2).map((a,i)=>{
                  const months = [...new Set(a.deals.map(d=>d.month))]
                  const lrC = {}; a.deals.forEach(d=>{if(d.lr)lrC[d.lr]=(lrC[d.lr]||0)+1})
                  const topLr = Object.entries(lrC).sort((a,b)=>b[1]-a[1])[0]
                  return (
                    <tr key={i} className="bg-red-50/30">
                      <td className="kfi-td font-medium text-kfi-navy text-[11px] max-w-[160px]"><div className="truncate">{a.account}</div></td>
                      <td className="kfi-td text-[11px] font-medium whitespace-nowrap" style={{color:REP_COLORS[a.rep]||'#555'}}>{sn(a.rep)}</td>
                      <td className="kfi-td text-center font-bold text-red-600">{a.count}</td>
                      <td className="kfi-td font-headline text-sm text-red-700">{fmtM(a.value)}</td>
                      <td className="kfi-td text-[11px] text-kfi-mgray">{months.join(', ')}</td>
                      <td className="kfi-td">
                        {topLr && <span className="font-label text-[8px] px-1 py-0.5" style={{background:(LR_COLORS[topLr[0]]||'#9ca3af')+'22',color:LR_COLORS[topLr[0]]||'#555'}}>{topLr[0]}</span>}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ── ALL DEALS ────────────────────────────────────────────────────── */}
      {tab === 'deals' && (
        <div>
          <div className="font-label text-[9px] uppercase tracking-wider text-kfi-mgray mb-3">{filtered.length} deals · {fmtM(totalVal)} total</div>
          <div className="bg-white overflow-x-auto border-t-[3px] border-red-500">
            <table className="w-full border-collapse">
              <thead><tr>{['Month','Rep','Account','Opportunity','Amount','Loss Reason','Feedback'].map(h=><th key={h} className="kfi-th">{h}</th>)}</tr></thead>
              <tbody>
                {filtered.sort((a,b)=>MONTH_NUM[b.month]-MONTH_NUM[a.month]||b.amount-a.amount).map((o,i)=>(
                  <tr key={i} className={i%2===0?'bg-red-50/20':'bg-red-50/40'}>
                    <td className="kfi-td font-label text-[10px] text-kfi-mgray whitespace-nowrap">{o.month} '26</td>
                    <td className="kfi-td text-[11px] font-medium whitespace-nowrap" style={{color:REP_COLORS[o.rep]||'#555'}}>{sn(o.rep)}</td>
                    <td className="kfi-td text-[11px] font-medium text-kfi-navy max-w-[120px]"><div className="truncate">{o.account}</div></td>
                    <td className="kfi-td text-[11px] max-w-[180px]"><div className="truncate">{o.name}</div></td>
                    <td className="kfi-td font-headline text-sm text-red-600 whitespace-nowrap">{fmtM(o.amount)}</td>
                    <td className="kfi-td max-w-[110px]">
                      {o.lr && <span className="font-label text-[8px] px-1 py-0.5 whitespace-nowrap block truncate" style={{background:(LR_COLORS[o.lr]||'#9ca3af')+'22',color:LR_COLORS[o.lr]||'#555'}}>{o.lr}</span>}
                    </td>
                    <td className="kfi-td text-[10px] text-kfi-mgray max-w-[220px]"><div className="line-clamp-2">{o.fb||'—'}</div></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
