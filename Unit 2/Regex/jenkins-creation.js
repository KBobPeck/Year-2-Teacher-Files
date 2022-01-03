const fs = require("fs");

const cities = [
  `@Was4`,
  `@hingt `,
  `@#`,
  `@on5`,
  `@C$`,
  `@6`,
  `@ityUt@`,
  `@ah#`,
  `@ `,
  `@Springfi2`,
  `@eld5`,
  `@Ari0`,
  `@z `,
  `@ona$  	`,
  `@G0`,
  `@#`,
  `@@@2`,
  `@r9`,
  `@7`,
  `@een+`,
  `@ville*`,
  `@Ark5`,
  `@7`,
  `@ans`,
  `@02`,
  `@as `,
  `@Clove^`,
  `@rt%`,
  `@ `,
  `@3`,
  `@owne%`,
  `@A5`,
  `@la2`,
  `@#`,
  `@bam8`,
  `@3`,
  `@a `,
  `@Mary$`,
  `@sv&`,
  `@#`,
  `@ilCa2`,
  `@5`,
  `@ `,
  `@lif1`,
  `@2`,
  `@o%`,
  `@rn2`,
  `@@3`,
  `@i6`,
  `@a$`,
];

const lat = [
  `0fAfeE3JKfqPxG9AffqtTaw°`,
  `1JOgiy23wehshr°`,
  `9sgdhshSDHDJdjdjd6'`,
  `5fas2faeF3FaeA°`,
  `1GpGBNJSerg bsbjkg1hSGHUDhs'`,
  `5DFG dfgjdf gjdfg jdfgdfgdgjdfgj4fgdjfGJDFgjdfgJdfgJdfgJdfgjDFGjdf.`,
  `1JOgiy23wehshr°`,
  `1sdhjks dfSd2sd fsdfsdfsH'`,
  `0dSRGhstjyklyurf"dfhsdhhsdfhN`,
  `2dgsdf"5$fhshgjS`,
  `0jihOhisryhosnrsnJKsgkHsrhj1gsr saf2awdadafgr°`,
  `1ShFeigpKangl1PofJperbnBChgoEbtAosdigOWUetbaoeqQtncbp'`,
  `2 2hgbsgjkrGrbRSSG3HoaiFYagevmtAjtg°`,
  `0dfGDfghdfghDFG0DFGjdfgjdfgjdFG.`,
  `9dgsdfhsdfhh"sdfasdE`,
  `5GkGWbktwltbwkyhO8WBGpwghWvtvyutGngMbfi.`,
  `7ghndfdfgh"RgshshsijflKSndfghSJKdFN`,
  `0gkjGHJgayuywvgvhsl0gjoS0Snsuighuisuighsuigsiop°`,
  `01sesgShSFoShjioSEHFUISdbfhjkSGrhefsG'`,
  `2KJHJKhjgKLSkjgjhsh5jkjSGHJhjksgklsk6gsghjkskgHSgskGshjbg°`,
  `5IoiYGIOuiIOhfgh"ahslsliN `,
  `6ddfgJDFGj%5DFGHdfghDFGhdfgHDfgaFXbcv.`,
  `0JKLSshefjsl0%fggbas'`,
  `8jkHLSghjkhklSghskgsbjgbskghjLSBgbjBGKJs6GBSpsguisbjigsbncvbpVSOiy2TuisgjigbSIGsig°`,
  `6Wd4djgdjfdfgjdfg.`,
  `6bhSHKsjdgbhsdhjHASgda4AS'`,
  `4sstjsryjsfgbsdr"dghfuoutwrgbdvbe`,
  `9SGsdgsodgh9sdgnSgsigbeipwruiwe9OiouSVxzbZxm°`,
  `1HjgoUIhthakBladkLF2lGnsdioSBvYhJlAmngB1NGn°`,
  `3HJSDgjksbdkghj3SGBbsdbgisdug'`,
  `6Wd4djgdjfdfgjdfg.`,
  `2uhSGhjsklgjksdnjsd4sf5hjbhjFBHSfsbjklfbk°`,
  `4DFGJBvbncvbncvBCvm5fgd jFGj.`,
  `2bSfhjsjkkghksjghsergbSgkBGSeioGso7sigusgSGB2GSBgSgkhsgohsjgrsbk°`,
  `1as0'`,
  `3srtsrtuturbhgkl"yolyipryuswrqwrfgsds`,
  `9AsfAsfAdfSJdghkjskdg8asdasdhjKLASSGdSgddsgs'`,
  `3avd3feaGsagR$gcXcVBsdgG'`,
  `8bgbshbngSgisuygI6gSgiosjiogiousrhjgsbrg5snGRgsiorgjiosrgysrg°`,
  `3aeGasgSRgQWqERQtxc5aw'`,
  `0hfghfhfgwop"ytfujdgfhndfgW`,
  `0z$5ydxfgmcghmdghMGHmfghfg6gDGdfgjdfgnvbNCVBnG.`,
  `4GjdfgJDFgjbncvbmMz5d.`,
  `4aEtPoggJaodugapFOJaptuitj9GhglaekTH.`,
  `1as0'`,
  `8suihgSIRUghusruigh3gshghusuilrghsiuig5ghuSui°`,
  `5ehstjsjss7s"srisrtyhsrthsrgtX`,
  `8BHAudhgSBJKDghVASdjgh5AbndigahsdbbAdgsd'`,
  `6AjgPGGhKAlsmGBNnPGAwhTiepAKeNtnOTAkls"gksfW`,
  `4HSGhu6sgS8gsori°`,
  `9JDjyjDfyjStrteurye0SDHsdfhsCMmvbHKFHuyetyUer.`,
];

const message = [
  `!Secret]`,
  ` 7592759]`,
  `! ]`,
  `[0925 `,
  `[902358 `,
  `!Murder]`,
  `[G2367o7 `,
  `[t34a7pe!`,
  `[ `,
  `!H462ope]`,
  ` T27235o36246]`,
  `[S2245t2ab54bi7n723g!`,
  `[P274e752ck!`,
  `!D2542i724d]`,
  `!cannot.]`,
  ` C26i2462t62i462e6233s.]`,
  `[it.!`,
  `[2366 `,
  ` ]`,
  `! ]`,
  ` 23423909]`,
  `[G6324e62t `,
  `[Happiness!`,
  `!b72r75ok824en]`,
  `[ `,
  `!cannot.]`,
  `[Re6364l62i4849c092s264. `,
  `!gone]`,
  `[0175393501 `,
  `!Pr75o37b43347le5m]`,
  `!death]`,
  `[Br5234i62ng `,
  `Bo63o6322k3262]`,
  `!B624r611o717n7457i38e8s]`,
  `[Zoinks!`,
  `[Donuts!`,
  `!pumpkins]`,
  ` To]`,
  `!projects]`,
  `[10476104760!`,
  `[ this`,
  `!young262lings]`,
  `[Add2346724re4572s472s. `,
  `[da2rksi5de73!`,
  `!Cult]`,
  `[mod3275ern!`,
  `[w237arfar572e!`,
  `[ this`,
  `bu2735mpk72in ]`,
  `!Latepass]`,
];
const all = cities.length + lat.length + message.length;
const combo = [];
for (let i = 0; i < all - 2; i++) {
  if (i % 3 === 0) {
    combo.push(message.shift());
  } else if (i % 3 === 1) {
    combo.push(cities.shift());
  } else {
    combo.push(lat.shift());
  }
}

// console.log(combo);

function makeid(length) {
  let speratorsAt = Math.floor(length / combo.length);
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghi0123456789jklmnopqrstuvwxyz0123456789_ ,=#$%^&*()-+"; //@ {} [] ' . " ° !
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    if (i % speratorsAt === 0) {
      result += combo.shift();
    }
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

fs.writeFileSync("./jenkins.txt", makeid(100000), { flag: "w" });
