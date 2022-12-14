// ========== MERCURY ==========
const mercurySpecs = [
    {
      name: "ROTATION TIME",
      info: "58.6 DAYS",
    },
    {
      name: "REVOLUTION TIME",
      info: "87.97 DAYS",
    },
    {
      name: "RADIUS",
      info: "2,439.7 KM",
    },
    {
      name: "AVERAGE TEMP.",
      info: "430°C",
    },
];

let mercuryInfo = [
    { 
        id: 1,
        text: `Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.`,
        imgSrc: `/images/planet-mercury.svg`,
    },
    {
        id: 2,
        text: `Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.`,
        imgSrc: `/images/planet-mercury-internal.svg`,
    },
    {
        id: 3,
        text: `Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.`,
        imgSrc: `/images/planet-mercury.svg`,
    }
];

// ========== VENUS ==========
const venusSpecs = [
  {
    name: "ROTATION TIME",
    info: "243 DAYS",
  },
  {
    name: "REVOLUTION TIME",
    info: "224.7 DAYS",
  },
  {
    name: "RADIUS",
    info: "6,051.8 KM",
  },
  {
    name: "AVERAGE TEMP.",
    info: "471°C",
  },
];

let venusInfo = [
  { 
      id: 1,
      text: `Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.`,
      imgSrc: `/images/planet-venus.svg`,
  },
  {
      id: 2,
      text: `The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.`,
      imgSrc: `/images/planet-venus-internal.svg`,
  },
  {
      id: 3,
      text: `Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.`,
      imgSrc: `/images/planet-venus.svg`,
  }
];

// ========== EARTH ==========
const earthSpecs = [
  {
    name: "ROTATION TIME",
    info: "0.99 DAYS",
  },
  {
    name: "REVOLUTION TIME",
    info: "365.26 DAYS",
  },
  {
    name: "RADIUS",
    info: "6,371 KM",
  },
  {
    name: "AVERAGE TEMP.",
    info: "16°C",
  },
];

let earthInfo = [
  { 
      id: 1,
      text: `Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.`,
      imgSrc: `/images/planet-earth.svg`,
  },
  {
      id: 2,
      text: `Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.`,
      imgSrc: `/images/planet-earth-internal.svg`,
  },
  {
      id: 3,
      text: `The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.`,
      imgSrc: `/images/planet-earth.svg`,
  }
];

// ========== MARS ==========
const marsSpecs = [
  {
    name: "ROTATION TIME",
    info: "1.03 DAYS",
  },
  {
    name: "REVOLUTION TIME",
    info: "1.88 YEARS",
  },
  {
    name: "RADIUS",
    info: "3,389.5 KM",
  },
  {
    name: "AVERAGE TEMP.",
    info: "-28°C",
  },
];

let marsInfo = [
  { 
      id: 1,
      text: `Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".`,
      imgSrc: `/images/planet-mars.svg`,
  },
  {
      id: 2,
      text: `Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.`,
      imgSrc: `/images/planet-mars-internal.svg`,
  },
  {
      id: 3,
      text: `Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.`,
      imgSrc: `/images/planet-mars.svg`,
  }
];

// ========== JUPITER ==========
const jupiterSpecs = [
  {
    name: "ROTATION TIME",
    info: "9.93 HOURS",
  },
  {
    name: "REVOLUTION TIME",
    info: "11.86 YEARS",
  },
  {
    name: "RADIUS",
    info: "69,911 KM",
  },
  {
    name: "AVERAGE TEMP.",
    info: "-108°C",
  },
];

let jupiterInfo = [
  { 
      id: 1,
      text: `Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.`,
      imgSrc: `/images/planet-jupiter.svg`,
  },
  {
      id: 2,
      text: `When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.`,
      imgSrc: `/images/planet-jupiter-internal.svg`,
  },
  {
      id: 3,
      text: `The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.`,
      imgSrc: `/images/planet-jupiter.svg`,
  }
];

// ========== SATURN ==========
const saturnSpecs = [
  {
    name: "ROTATION TIME",
    info: "10.8 HOURS",
  },
  {
    name: "REVOLUTION TIME",
    info: "29.46 YEARS",
  },
  {
    name: "RADIUS",
    info: "58,232 KM",
  },
  {
    name: "AVERAGE TEMP.",
    info: "-138°C",
  },
];

let saturnInfo = [
  { 
      id: 1,
      text: `Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.`,
      imgSrc: `/images/planet-saturn.svg`,
  },
  {
      id: 2,
      text: `Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.`,
      imgSrc: `/images/planet-saturn-internal.svg`,
  },
  {
      id: 3,
      text: `The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.`,
      imgSrc: `/images/planet-saturn.svg`,
  }
];


// ========== URANUS ==========
const uranusSpecs = [
  {
    name: "ROTATION TIME",
    info: "17.2 HOURS",
  },
  {
    name: "REVOLUTION TIME",
    info: "84 YEARS",
  },
  {
    name: "RADIUS",
    info: "25,362 KM",
  },
  {
    name: "AVERAGE TEMP.",
    info: "-195°C",
  },
];

let uranusInfo = [
  { 
      id: 1,
      text: `Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.`,
      imgSrc: `/images/planet-uranus.svg`,
  },
  {
      id: 2,
      text: `The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.`,
      imgSrc: `/images/planet-uranus-internal.svg`,
  },
  {
      id: 3,
      text: `The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.`,
      imgSrc: `/images/planet-uranus.svg`,
  }
];

// ========== NEPTUNE ==========
const neptuneSpecs = [
  {
    name: "ROTATION TIME",
    info: "16.08 HOURS",
  },
  {
    name: "REVOLUTION TIME",
    info: "164.79 YEARS",
  },
  {
    name: "RADIUS",
    info: "24,622 KM",
  },
  {
    name: "AVERAGE TEMP.",
    info: "-201°C",
  },
];

let neptuneInfo = [
  { 
      id: 1,
      text: `Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.`,
      imgSrc: `/images/planet-neptune.svg`,
  },
  {
      id: 2,
      text: `Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.`,
      imgSrc: `/images/planet-neptune-internal.svg`,
  },
  {
      id: 3,
      text: `Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.`,
      imgSrc: `/images/planet-neptune.svg`,
  }
];

export {mercurySpecs, mercuryInfo,
        venusSpecs, venusInfo,
        earthSpecs, earthInfo,
        marsSpecs, marsInfo,
        jupiterSpecs, jupiterInfo,
        saturnSpecs, saturnInfo,
        uranusSpecs, uranusInfo,
        neptuneSpecs, neptuneInfo,
};