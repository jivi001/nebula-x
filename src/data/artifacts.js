export const artifacts = [
  // MOON - Apollo Descent Stages
  {
    id: 'apollo11_eagle',
    name: 'Eagle Descent Stage',
    type: 'descent-stage',
    mission: 'Apollo 11',
    body: 'Moon',
    location: { lat: 0.67408, long: 23.47297 },
    landingDate: '1969-07-20',
    endDate: '1969-07-21',
    status: 'inactive',
    narrative: 'I carried Neil Armstrong and Buzz Aldrin to the surface. My engine fired for the last time when they lifted off, leaving me standing at Tranquility Base.',
    facts: [
      'First crewed landing on the Moon',
      'Descent stage served as launch platform for ascent module',
      'Remains at 0.67408° N, 23.47297° E',
      'Plaque reads: "Here men from the planet Earth first set foot upon the Moon, July 1969 A.D. We came in peace for all mankind."'
    ],
    imageUrl: 'https://www.nasa.gov/sites/default/files/thumbnails/image/apollo11_descent_stage.jpg',
    sourceUrl: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C'
  },
  {
    id: 'apollo12_intrepid',
    name: 'Intrepid Descent Stage',
    type: 'descent-stage',
    mission: 'Apollo 12',
    body: 'Moon',
    location: { lat: -3.01239, long: -23.42157 },
    landingDate: '1969-11-19',
    endDate: '1969-11-20',
    status: 'inactive',
    narrative: 'Pete Conrad and Alan Bean landed me within walking distance of Surveyor 3. They retrieved parts of that earlier robot to study how materials survive on the Moon.',
    facts: [
      'Precision landing near Surveyor 3 probe',
      'Retrieved Surveyor 3 camera and parts for analysis',
      'Deployed first nuclear-powered ALSEP science station',
      'Location: Ocean of Storms, 3.01239° S, 23.42157° W'
    ],
    imageUrl: 'https://www.nasa.gov/sites/default/files/thumbnails/image/apollo12_descent.jpg',
    sourceUrl: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-099C'
  },
  {
    id: 'apollo15_falcon_lrv1',
    name: 'Falcon Descent Stage & LRV-1',
    type: 'descent-stage',
    mission: 'Apollo 15',
    body: 'Moon',
    location: { lat: 26.13222, long: 3.63386 },
    landingDate: '1971-07-30',
    endDate: '1971-08-02',
    status: 'inactive',
    narrative: 'I brought the first Moon car. Dave Scott and Jim Irwin drove me 27.9 km across Hadley Rille, exploring farther than any humans before.',
    facts: [
      'First mission with Lunar Roving Vehicle (LRV-1)',
      'Traversed 27.9 km over 3 EVAs',
      'Visited Hadley Rille and Apennine Front',
      'Collected 77 kg of samples including Genesis Rock'
    ],
    imageUrl: 'https://www.nasa.gov/sites/default/files/thumbnails/image/apollo15_lrv.jpg',
    sourceUrl: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063C'
  },
  {
    id: 'apollo16_orion_lrv2',
    name: 'Orion Descent Stage & LRV-2',
    type: 'descent-stage',
    mission: 'Apollo 16',
    body: 'Moon',
    location: { lat: -8.97301, long: 15.50019 },
    landingDate: '1972-04-21',
    endDate: '1972-04-24',
    status: 'inactive',
    narrative: 'John Young and Charlie Duke drove me across the Descartes Highlands. We discovered the Moon\'s crust is more complex than expected, not just ancient volcanic rock.',
    facts: [
      'Second Lunar Roving Vehicle (LRV-2)',
      'Explored Descartes Highlands and Cayley Plains',
      'First mission to lunar highlands (not mare)',
      'Deployed cosmic ray detector and UV camera'
    ],
    imageUrl: 'https://www.nasa.gov/sites/default/files/thumbnails/image/apollo16_lrv.jpg',
    sourceUrl: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1972-031C'
  },
  {
    id: 'apollo17_challenger_lrv3',
    name: 'Challenger Descent Stage & LRV-3',
    type: 'descent-stage',
    mission: 'Apollo 17',
    body: 'Moon',
    location: { lat: 20.19080, long: 30.77168 },
    landingDate: '1972-12-11',
    endDate: '1972-12-14',
    status: 'inactive',
    narrative: 'The last humans to walk on the Moon rode me. Gene Cernan and Jack Schmitt drove 35.9 km, the farthest of any mission. I still hold the keys to the last Moon car.',
    facts: [
      'Final Apollo lunar mission',
      'Third Lunar Roving Vehicle (LRV-3), drove 35.9 km',
      'Only scientist-astronaut (Harrison Schmitt) on Moon',
      'Collected 110.4 kg of samples, most of any mission',
      'Gene Cernan\'s last words on Moon: "We leave as we came... with peace and hope for all mankind."'
    ],
    imageUrl: 'https://www.nasa.gov/sites/default/files/thumbnails/image/apollo17_lrv.jpg',
    sourceUrl: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1972-096C'
  },

  // MOON - Surveyor Landers
  {
    id: 'surveyor1',
    name: 'Surveyor 1',
    type: 'lander',
    mission: 'Surveyor 1',
    body: 'Moon',
    location: { lat: -2.474, long: -43.339 },
    landingDate: '1966-06-02',
    endDate: '1967-01-07',
    status: 'inactive',
    narrative: 'I was the first U.S. spacecraft to soft-land on the Moon. I proved the surface could support a lander and sent back 11,237 photos before my batteries faded.',
    facts: [
      'First U.S. soft landing on the Moon',
      'Transmitted 11,237 television images',
      'Proved lunar surface could support Apollo landers',
      'Operated from June 1966 to January 1967',
      'Landed in Ocean of Storms (Flamsteed crater region)'
    ],
    imageUrl: 'https://www.nasa.gov/sites/default/files/thumbnails/image/surveyor1.jpg',
    sourceUrl: 'https://science.nasa.gov/mission/surveyor-1/'
  },
  {
    id: 'surveyor3',
    name: 'Surveyor 3',
    type: 'lander',
    mission: 'Surveyor 3',
    body: 'Moon',
    location: { lat: -3.011, long: -23.43 },
    landingDate: '1967-04-20',
    endDate: '1967-05-04',
    status: 'inactive',
    narrative: 'I dug trenches and analyzed lunar soil. Apollo 12 astronauts visited me 31 months later and took my camera home—it still had living bacteria from Earth inside!',
    facts: [
      'First spacecraft to scoop and analyze lunar soil',
      'Visited by Apollo 12 crew (Conrad and Bean)',
      'Camera returned to Earth, showed Streptococcus mitis bacteria survived 31 months on Moon',
      'Carried surface sampler and TV camera',
      'Landed inside a small crater in Ocean of Storms'
    ],
    imageUrl: 'https://www.nasa.gov/sites/default/files/thumbnails/image/surveyor3_apollo12.jpg',
    sourceUrl: 'https://science.nasa.gov/mission/surveyor-3/'
  },

  // MOON - ALSEP
  {
    id: 'alsep_apollo12',
    name: 'ALSEP Station (Apollo 12)',
    type: 'science-package',
    mission: 'Apollo 12 ALSEP',
    body: 'Moon',
    location: { lat: -3.01239, long: -23.42157 },
    landingDate: '1969-11-19',
    endDate: '1977-09-30',
    status: 'inactive',
    narrative: 'I was the first nuclear-powered science station on the Moon. My seismometer recorded moonquakes for 8 years, and my instruments measured solar wind and magnetic fields.',
    facts: [
      'First Apollo Lunar Surface Experiments Package (ALSEP)',
      'Powered by SNAP-27 radioisotope thermoelectric generator (RTG)',
      'Operated 8 years (1969-1977), far beyond 1-year design',
      'Included seismometer, magnetometer, solar wind spectrometer, ion detector',
      'Data helped determine Moon has a small, partially molten core'
    ],
    imageUrl: 'https://www.nasa.gov/sites/default/files/thumbnails/image/alsep_apollo12.jpg',
    sourceUrl: 'https://nssdc.gsfc.nasa.gov/nmc/experiment/display.action?id=1969-099C-05'
  },

  // MOON - Soviet Luna & Lunokhod
  {
    id: 'luna16',
    name: 'Luna 16',
    type: 'lander',
    mission: 'Luna 16',
    body: 'Moon',
    location: { lat: 0.68, long: 56.3 },
    landingDate: '1970-09-20',
    endDate: '1970-09-21',
    status: 'inactive',
    narrative: 'I was the first robot to bring Moon rocks back to Earth automatically. My drill collected 101 grams of soil from Mare Fecunditatis and launched them home without human hands.',
    facts: [
      'First robotic lunar sample return (Soviet)',
      'Collected 101 grams of lunar soil',
      'Landed in Mare Fecunditatis (Sea of Fertility)',
      'Fully automated: drilling, transfer, launch, Earth return',
      'Sample shared with international scientists including NASA'
    ],
    imageUrl: 'https://www.nasa.gov/sites/default/files/thumbnails/image/luna16.jpg',
    sourceUrl: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1970-072A'
  },
  {
    id: 'lunokhod1',
    name: 'Lunokhod 1',
    type: 'rover',
    mission: 'Luna 17 / Lunokhod 1',
    body: 'Moon',
    location: { lat: 38.28, long: -35.0 },
    landingDate: '1970-11-17',
    endDate: '1971-10-04',
    status: 'inactive',
    narrative: 'I was the first robot rover on another world. Soviet drivers on Earth steered me for 10 months, covering 10.5 km and sending 20,000 TV images and 200 panoramas.',
    facts: [
      'First robotic rover on any celestial body',
      'Remote-controlled from Earth (Soviet Union)',
      'Traversed 10.5 km over 322 days',
      'Returned 20,000+ TV images and 200 panoramas',
      'Carried X-ray spectrometer, penetrometer, laser retroreflector',
      'Retroreflector still used for lunar laser ranging today'
    ],
    imageUrl: 'https://www.nasa.gov/sites/default/files/thumbnails/image/lunokhod1.jpg',
    sourceUrl: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1970-095D'
  },
  {
    id: 'lunokhod2',
    name: 'Lunokhod 2',
    type: 'rover',
    mission: 'Luna 21 / Lunokhod 2',
    body: 'Moon',
    location: { lat: 25.85, long: 30.92 },
    landingDate: '1973-01-15',
    endDate: '1973-06-04',
    status: 'inactive',
    narrative: 'I drove farther than any rover before me—39 km across Le Monnier crater. My solar panel got covered in dust, and I froze during the lunar night.',
    facts: [
      'Longest distance driven by any off-world rover until 2014 (39 km)',
      'Operated 4 months, traversed Le Monnier crater rim',
      'Carried improved cameras, magnetometer, laser retroreflector',
      'Retroreflector still used for Earth-Moon distance measurements',
      'Ended when dust-covered radiator failed during lunar night'
    ],
    imageUrl: 'https://www.nasa.gov/sites/default/files/thumbnails/image/lunokhod2.jpg',
    sourceUrl: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1973-001D'
  },

  // MARS - Viking Landers
  {
    id: 'viking1',
    name: 'Viking 1 Lander',
    type: 'lander',
    mission: 'Viking 1',
    body: 'Mars',
    location: { lat: 22.48, long: -49.97 },
    landingDate: '1976-07-20',
    endDate: '1982-11-13',
    status: 'inactive',
    narrative: 'I was the first U.S. spacecraft to land successfully on Mars and work. For 6 years I photographed the red landscape, scooped soil, and searched for life. My biology experiments remain the most ambitious ever sent to another planet.',
    facts: [
      'First successful U.S. Mars landing (July 20, 1976)',
      'Operated 6 years, 116 days (2307 sols)',
      'First color panoramas from Mars surface',
      'Conducted 3 biology experiments searching for metabolism',
      'Results: no definitive evidence of life found',
      'Weather station recorded daily pressure, temperature, wind',
      'Named Thomas Mutch Memorial Station after mission leader'
    ],
    imageUrl: 'https://mars.nasa.gov/system/resources/detail_files/24870_viking1_lander.jpg',
    sourceUrl: 'https://science.nasa.gov/mission/viking-1/'
  },
  {
    id: 'viking2',
    name: 'Viking 2 Lander',
    type: 'lander',
    mission: 'Viking 2',
    body: 'Mars',
    location: { lat: 47.97, long: 225.74 },
    landingDate: '1976-09-03',
    endDate: '1980-04-11',
    status: 'inactive',
    narrative: 'I landed in Utopia Planitia, farther north than Viking 1. I found water frost on the ground in winter and proved Mars has seasons like Earth. My seismometer detected one marsquake.',
    facts: [
      'Second successful U.S. Mars landing (September 3, 1976)',
      'Operated 3 years, 220 days (1281 sols)',
      'Landed in Utopia Planitia (northern plains)',
      'Observed water frost on surface during winter',
      'Only Mars seismometer to detect a marsquake (one event)',
      'Biology experiments consistent with Viking 1: no life detected'
    ],
    imageUrl: 'https://mars.nasa.gov/system/resources/detail_files/24871_viking2_lander.jpg',
    sourceUrl: 'https://science.nasa.gov/mission/viking-2/'
  },

  // MARS - Pathfinder & Sojourner
  {
    id: 'pathfinder_sojourner',
    name: 'Pathfinder Lander & Sojourner Rover',
    type: 'lander',
    mission: 'Mars Pathfinder',
    body: 'Mars',
    location: { lat: 19.13, long: -33.22 },
    landingDate: '1997-07-04',
    endDate: '1997-09-27',
    status: 'inactive',
    narrative: 'I bounced onto Mars inside airbags, then opened like a flower. My little rover Sojourner—size of a microwave—became the first wheels on Mars. We proved small, cheap missions could work.',
    facts: [
      'First airbag-mediated landing on Mars',
      'Sojourner: first rover on Mars (11.5 kg, microwave-sized)',
      'Rover traversed ~100 meters, analyzed 16 rock/soil targets',
      'Alpha Proton X-ray Spectrometer found rocks similar to Earth\'s andesites',
      'Mission cost $265M vs. Viking\'s $1B+ — proved "faster, better, cheaper"',
      'Lander renamed Carl Sagan Memorial Station'
    ],
    imageUrl: 'https://mars.nasa.gov/system/resources/detail_files/24872_pathfinder_sojourner.jpg',
    sourceUrl: 'https://science.nasa.gov/mission/mars-pathfinder/'
  },

  // MARS - MER Spirit & Opportunity
  {
    id: 'spirit',
    name: 'Spirit Rover (MER-A)',
    type: 'rover',
    mission: 'Mars Exploration Rover',
    body: 'Mars',
    location: { lat: -14.5684, long: 175.472636 },
    landingDate: '2004-01-04',
    endDate: '2011-03-22',
    status: 'inactive',
    narrative: 'I landed in Gusev Crater, meant to be a lakebed. Instead I found volcanic rock, then climbed hills and found silica deposits—evidence of hot springs that could have supported life. I got stuck in soft sand in 2009 but kept doing science until my last signal in 2010.',
    facts: [
      'Twin rover mission with Opportunity (MER-B)',
      'Landed in Gusev Crater (suspected ancient lake)',
      'First rover to climb a hill on another planet (Husband Hill, 82 m)',
      'Discovered nearly pure silica (opaline) — evidence of hot springs/hydrothermal vents',
      'Operated 6 years, 77 days (2208 sols) — 25x planned 90-sol mission',
      'Became stuck in soft soil at "Troy" in 2009, continued as stationary science platform',
      'Last communication March 22, 2010 (sol 2208)'
    ],
    imageUrl: 'https://mars.nasa.gov/system/resources/detail_files/24873_spirit_rover.jpg',
    sourceUrl: 'https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/'
  },
  {
    id: 'opportunity',
    name: 'Opportunity Rover (MER-B)',
    type: 'rover',
    mission: 'Mars Exploration Rover',
    body: 'Mars',
    location: { lat: -1.9462, long: 354.4734 },
    landingDate: '2004-01-25',
    endDate: '2019-02-13',
    status: 'inactive',
    narrative: 'I bounced into Eagle Crater and found blueberries—hematite spheres formed in water. I drove a marathon distance (42 km) and climbed into Endeavour Crater. A planet-wide dust storm covered my solar panels in 2018, and I never woke up.',
    facts: [
      'Longest distance driven by any off-world rover: 45.16 km (28.06 mi)',
      'Operated 14 years, 295 days (5111 sols) — 55x planned mission',
      'Landed in Meridiani Planum, found hematite "blueberries" proving past liquid water',
      'Explored Victoria Crater, then Endeavour Crater rim (22 km wide)',
      'Set off-world driving record (surpassed Lunokhod 2\'s 39 km in 2014)',
      'Lost in global dust storm June 2018; last signal Sol 5111 (Feb 13, 2019)',
      'Final message: "My battery is low and it\'s getting dark"'
    ],
    imageUrl: 'https://mars.nasa.gov/system/resources/detail_files/24874_opportunity_rover.jpg',
    sourceUrl: 'https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/'
  },

  // MARS - Phoenix
  {
    id: 'phoenix',
    name: 'Phoenix Lander',
    type: 'lander',
    mission: 'Phoenix Mars Lander',
    body: 'Mars',
    location: { lat: 68.22, long: 234.25 },
    landingDate: '2008-05-25',
    endDate: '2008-11-02',
    status: 'inactive',
    narrative: 'I landed in the Martian arctic to dig for ice. My robotic arm uncovered water ice just centimeters down, and I watched it sublime into the thin air. I confirmed Mars has water ice near the surface at high latitudes.',
    facts: [
      'First successful landing in Martian polar region (68.22° N)',
      'Robotic arm dug trenches, found water ice at 5 cm depth',
      'Confirmed water ice exists near surface at high latitudes',
      'TEGA instrument heated soil, detected water vapor release',
      'Observed snow falling from clouds (but vaporized before ground)',
      'Operated 157 sols (5 months) — ended when winter reduced solar power',
      'Predecessor to InSight and Perseverance polar science'
    ],
    imageUrl: 'https://mars.nasa.gov/system/resources/detail_files/24875_phoenix_lander.jpg',
    sourceUrl: 'https://science.nasa.gov/mission/phoenix/'
  },

  // MARS - Curiosity
  {
    id: 'curiosity',
    name: 'Curiosity Rover (MSL)',
    type: 'rover',
    mission: 'Mars Science Laboratory',
    body: 'Mars',
    location: { lat: -4.5895, long: 137.4417 },
    landingDate: '2012-08-06',
    endDate: null,
    status: 'active',
    narrative: 'I\'m a car-sized nuclear-powered lab. I landed via sky crane and have been climbing Mount Sharp for 12+ years. I found ancient streambeds, organic molecules, and methane cycles—Mars was habitable for millions of years.',
    facts: [
      'Largest rover sent to Mars (899 kg, car-sized)',
      'Sky crane landing — first of its kind',
      'Nuclear power (RTG): operates day/night, all seasons',
      'Found ancient streambed conglomerates (rounded pebbles = flowing water)',
      'Detected organic molecules in 3-billion-year-old mudstone',
      'Measured seasonal methane cycles in atmosphere',
      'Climbing Mount Sharp (Aeolis Mons, 5.5 km tall) since 2014',
      'Still active as of 2024 — 12+ years on Mars'
    ],
    imageUrl: 'https://mars.nasa.gov/system/resources/detail_files/24876_curiosity_rover.jpg',
    sourceUrl: 'https://science.nasa.gov/mission/msl/'
  },

  // MARS - InSight
  {
    id: 'insight',
    name: 'InSight Lander',
    type: 'lander',
    mission: 'InSight',
    body: 'Mars',
    location: { lat: 4.5024, long: 135.6234 },
    landingDate: '2018-11-26',
    endDate: '2022-12-21',
    status: 'inactive',
    narrative: 'I sat still and listened to Mars\' heartbeat. My seismometer detected over 1,300 marsquakes, revealing Mars has a liquid core and a crust thinner than expected. My heat probe (mole) couldn\'t dig deep, but my radio science measured Mars\' wobble.',
    facts: [
      'First dedicated geophysics mission to Mars',
      'SEIS seismometer detected 1,313 marsquakes (as of 2022)',
      'Largest marsquake: magnitude 5.0 (May 2022)',
      'Revealed Mars has large liquid core (~1,830 km radius)',
      'Crust thinner than expected (24-72 km vs. predicted 100+ km)',
      'HP3 "mole" heat probe failed to reach depth (duricrust)',
      'RISE radio experiment measured Mars\' rotation and nutation',
      'Mission ended Dec 2022 when dust covered solar panels'
    ],
    imageUrl: 'https://mars.nasa.gov/system/resources/detail_files/24877_insight_lander.jpg',
    sourceUrl: 'https://science.nasa.gov/mission/insight/'
  },

  // MARS - Perseverance & Ingenuity
  {
    id: 'perseverance',
    name: 'Perseverance Rover',
    type: 'rover',
    mission: 'Mars 2020',
    body: 'Mars',
    location: { lat: 18.4446, long: 77.4508 },
    landingDate: '2021-02-18',
    endDate: null,
    status: 'active',
    narrative: 'I\'m collecting the first Mars samples for return to Earth. I carried a helicopter that flew! I\'m exploring Jezero Crater\'s ancient river delta, caching rock tubes for a future mission to retrieve. My MOXIE experiment made oxygen from Mars\' CO₂ air.',
    facts: [
      'Sample caching mission: collecting tubes for Mars Sample Return',
      'Landed in Jezero Crater (ancient river delta, high biosignature potential)',
      'Carried Ingenuity helicopter — first powered flight on another planet',
      'MOXIE produced oxygen from Martian CO₂ atmosphere (100+ minutes total)',
      'SuperCam laser analyzes rock chemistry at distance',
      'MEDA weather station measures dust, radiation, wind',
      'Still active — 3+ years, 20+ samples cached'
    ],
    imageUrl: 'https://mars.nasa.gov/system/resources/detail_files/24878_perseverance_rover.jpg',
    sourceUrl: 'https://science.nasa.gov/mission/mars-2020-perseverance/'
  },
  {
    id: 'ingenuity',
    name: 'Ingenuity Helicopter',
    type: 'aircraft',
    mission: 'Mars 2020 / Ingenuity',
    body: 'Mars',
    location: { lat: 18.4446, long: 77.4508 },
    landingDate: '2021-02-18',
    endDate: '2024-01-18',
    status: 'inactive',
    narrative: 'I was a technology demo meant for 5 flights. I flew 72 times over nearly 3 years, scouting ahead for Perseverance. My final flight damaged my rotor blades, and I became a permanent monument at "Valinor Hills" in Jezero Crater.',
    facts: [
      'First powered, controlled flight on another planet (April 19, 2021)',
      'Technology demonstration: planned 5 flights, flew 72',
      'Total flight time: 128+ minutes, distance: 17 km',
      'Max altitude: 24 m, max groundspeed: 10 m/s',
      'Survived dust storms, winter, and 3+ years beyond design life',
      'Final flight (72) damaged rotor blades on landing (Jan 18, 2024)',
      'Now stationary at "Valinor Hills" (nicknamed after Tolkien\'s Undying Lands)',
      'Proved aerial scouting works for future Mars exploration'
    ],
    imageUrl: 'https://mars.nasa.gov/system/resources/detail_files/24879_ingenuity_helicopter.jpg',
    sourceUrl: 'https://science.nasa.gov/mission/mars-2020-perseverance/ingenuity-mars-helicopter/'
  },

  // DEEP SPACE
  {
    id: 'pioneer10',
    name: 'Pioneer 10',
    type: 'probe',
    mission: 'Pioneer 10',
    body: 'Deep Space',
    location: null,
    landingDate: '1972-03-03',
    endDate: '2003-01-23',
    status: 'inactive',
    narrative: 'I was the first spacecraft to cross the asteroid belt and visit Jupiter. I\'m now drifting toward the star Aldebaran, carrying a gold plaque showing who made me and where we live. My last signal came from 12 billion km away.',
    facts: [
      'First spacecraft through asteroid belt (1972-1973)',
      'First flyby of Jupiter (December 1973)',
      'First spacecraft on trajectory to leave solar system',
      'Carries Pioneer Plaque: human figures, solar system map, pulsar map',
      'Last signal received January 23, 2003 (12.2 billion km / 82 AU)',
      'Heading toward Aldebaran (65 light-years away, ~2 million years travel)',
      'Powered by 4 RTGs; power decayed below transmitter threshold'
    ],
    imageUrl: 'https://www.nasa.gov/sites/default/files/thumbnails/image/pioneer10.jpg',
    sourceUrl: 'https://science.nasa.gov/mission/pioneer-10/'
  },
  {
    id: 'pioneer11',
    name: 'Pioneer 11',
    type: 'probe',
    mission: 'Pioneer 11',
    body: 'Deep Space',
    location: null,
    landingDate: '1973-04-06',
    endDate: '1995-09-30',
    status: 'inactive',
    narrative: 'I followed Pioneer 10 to Jupiter, then used its gravity to slingshot to Saturn—the first spacecraft to visit the ringed planet. I carry the same plaque as my sister. My last signal came from 6.5 billion km out.',
    facts: [
      'First flyby of Saturn (September 1979)',
      'Used Jupiter gravity assist to reach Saturn',
      'Discovered Saturn\'s F ring and new moons',
      'Carries identical Pioneer Plaque to Pioneer 10',
      'Last signal September 30, 1995 (6.5 billion km / 44 AU)',
      'Heading toward constellation Aquila'
    ],
    imageUrl: 'https://www.nasa.gov/sites/default/files/thumbnails/image/pioneer11.jpg',
    sourceUrl: 'https://science.nasa.gov/mission/pioneer-11/'
  },
  {
    id: 'voyager1',
    name: 'Voyager 1',
    type: 'probe',
    mission: 'Voyager 1',
    body: 'Deep Space',
    location: null,
    landingDate: '1977-09-05',
    endDate: null,
    status: 'active',
    narrative: 'I\'m the farthest human-made object. I visited Jupiter and Saturn, then turned my camera back for the "Pale Blue Dot" photo of Earth. In 2012 I crossed the heliopause into interstellar space. My Golden Record carries Earth\'s sounds and music for any finders.',
    facts: [
      'Farthest human-made object (~24 billion km / 162 AU as of 2024)',
      'First spacecraft to enter interstellar space (August 2012)',
      'Flybys: Jupiter (1979), Saturn (1980) — discovered volcanoes on Io, complex rings',
      'Pale Blue Dot image (Feb 1990): Earth as 0.12 pixel from 6 billion km',
      'Carries Golden Record: sounds, music, greetings in 55 languages',
      'Still communicating: 4 instruments active, ~160 bits/sec data rate',
      'RTG power declining; expected to last until ~2025-2030'
    ],
    imageUrl: 'https://www.nasa.gov/sites/default/files/thumbnails/image/voyager1.jpg',
    sourceUrl: 'https://science.nasa.gov/mission/voyager-1/'
  },
  {
    id: 'voyager2',
    name: 'Voyager 2',
    type: 'probe',
    mission: 'Voyager 2',
    body: 'Deep Space',
    location: null,
    landingDate: '1977-08-20',
    endDate: null,
    status: 'active',
    narrative: 'I\'m the only spacecraft to visit all four giant planets. I flew by Jupiter, Saturn, Uranus, and Neptune—the "Grand Tour." In 2018 I joined my twin in interstellar space. My Golden Record is humanity\'s message in a bottle.',
    facts: [
      'Only spacecraft to visit all 4 giant planets (Grand Tour)',
      'Flybys: Jupiter (1979), Saturn (1981), Uranus (1986), Neptune (1989)',
      'Discovered 10 new Uranian moons, 6 Neptunian moons, Great Dark Spot on Neptune',
      'Entered interstellar space November 2018 (2nd spacecraft)',
      'Carries identical Golden Record to Voyager 1',
      '~20 billion km / 136 AU from Sun (2024)',
      '5 instruments still active; expected comms until ~2025-2030'
    ],
    imageUrl: 'https://www.nasa.gov/sites/default/files/thumbnails/image/voyager2.jpg',
    sourceUrl: 'https://science.nasa.gov/mission/voyager-2/'
  },
  {
    id: 'near_shoemaker',
    name: 'NEAR Shoemaker',
    type: 'probe',
    mission: 'NEAR Shoemaker',
    body: 'Asteroid 433 Eros',
    location: { lat: -6.5, long: 108.5 },
    landingDate: '2001-02-12',
    endDate: '2001-02-28',
    status: 'inactive',
    narrative: 'I was the first to orbit and land on an asteroid. I wasn\'t designed to land, but after a year orbiting Eros, they gently set me down. I sent gamma-ray data from the surface for 16 days before my batteries died.',
    facts: [
      'First spacecraft to orbit an asteroid (433 Eros, Feb 2000)',
      'First controlled landing on an asteroid (Feb 12, 2001)',
      'Not designed to land — improvised after successful orbital mission',
      'Transmitted gamma-ray spectrometer data from surface for 16 days',
      'Renamed to honor Eugene Shoemaker (planetary geologist)',
      'Eros: peanut-shaped, 34x11x11 km, near-Earth asteroid'
    ],
    imageUrl: 'https://www.nasa.gov/sites/default/files/thumbnails/image/near_shoemaker.jpg',
    sourceUrl: 'https://science.nasa.gov/mission/near-shoemaker/'
  },
  {
    id: 'dawn',
    name: 'Dawn Spacecraft',
    type: 'probe',
    mission: 'Dawn',
    body: 'Dwarf Planet Ceres',
    location: null,
    landingDate: '2015-03-06',
    endDate: '2018-11-01',
    status: 'inactive',
    narrative: 'I was the first to orbit two worlds beyond Earth: Vesta and Ceres. I used ion engines to spiral between them. At Ceres I found bright salt deposits and evidence of a subsurface ocean. I ran out of fuel and now orbit Ceres forever.',
    facts: [
      'First spacecraft to orbit two extraterrestrial bodies (Vesta, Ceres)',
      'Ion propulsion: 3 xenon ion thrusters, 10+ years continuous operation',
      'Orbited Vesta (2011-2012): mapped giant asteroid, found hydrogen',
      'Orbited Ceres (2015-2018): dwarf planet, found bright spots (sodium carbonate)',
      'Evidence of subsurface brine reservoir on Ceres',
      'Ran out of hydrazine fuel Nov 2018; in stable orbit around Ceres',
      'Will remain in orbit for at least 20 years (planetary protection)'
    ],
    imageUrl: 'https://www.nasa.gov/sites/default/files/thumbnails/image/dawn_spacecraft.jpg',
    sourceUrl: 'https://science.nasa.gov/mission/dawn/'
  },
  {
    id: 'kepler',
    name: 'Kepler Space Telescope',
    type: 'telescope',
    mission: 'Kepler',
    body: 'Earth-Trailing Orbit',
    location: null,
    landingDate: '2009-03-07',
    endDate: '2018-10-30',
    status: 'inactive',
    narrative: 'I stared at one patch of sky for 9 years, watching 530,000 stars blink. I found 2,662 confirmed planets and thousands more candidates—proving planets are more common than stars. I ran out of fuel and drift silently in an Earth-trailing orbit.',
    facts: [
      'Revolutionary exoplanet hunter: transit photometry of 530,000 stars',
      'Confirmed 2,662 exoplanets; 2,800+ candidates awaiting confirmation',
      'Proved planets outnumber stars in our galaxy',
      'Found first Earth-size planet in habitable zone (Kepler-186f)',
      'K2 extended mission after reaction wheel failures (2014-2018)',
      'Decommissioned Oct 30, 2018; out of fuel in Earth-trailing orbit',
      'Legacy: TESS, Roman, and future missions build on Kepler\'s census'
    ],
    imageUrl: 'https://www.nasa.gov/sites/default/files/thumbnails/image/kepler_telescope.jpg',
    sourceUrl: 'https://science.nasa.gov/mission/kepler/'
  }
];

export const getArtifactsByBody = (body) => {
  return artifacts.filter(a => a.body === body);
};

export const getArtifactById = (id) => {
  return artifacts.find(a => a.id === id);
};

export const getActiveArtifacts = () => {
  return artifacts.filter(a => a.status === 'active');
};

export const getInactiveArtifacts = () => {
  return artifacts.filter(a => a.status === 'inactive');
};