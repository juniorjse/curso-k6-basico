const _0x579158 = _0x491a;
(function (_0x2984ae, _0x16ef76) {
  const _0x28afc8 = _0x491a,
    _0x459594 = _0x2984ae();
  while (!![]) {
    try {
      const _0x291109 =
        (-parseInt(_0x28afc8(0x1a2)) / 0x1) *
          (-parseInt(_0x28afc8(0x1a5)) / 0x2) +
        (parseInt(_0x28afc8(0x19b)) / 0x3) *
          (parseInt(_0x28afc8(0x1a4)) / 0x4) +
        (-parseInt(_0x28afc8(0x1a6)) / 0x5) *
          (parseInt(_0x28afc8(0x198)) / 0x6) +
        parseInt(_0x28afc8(0x19e)) / 0x7 +
        parseInt(_0x28afc8(0x199)) / 0x8 +
        (parseInt(_0x28afc8(0x19f)) / 0x9) *
          (parseInt(_0x28afc8(0x1a0)) / 0xa) +
        (parseInt(_0x28afc8(0x19c)) / 0xb) *
          (-parseInt(_0x28afc8(0x1a1)) / 0xc);
      if (_0x291109 === _0x16ef76) break;
      else _0x459594["push"](_0x459594["shift"]());
    } catch (_0x30142d) {
      _0x459594["push"](_0x459594["shift"]());
    }
  }
})(_0x2353, 0x6b8ce);
function _0x491a(_0x24a160, _0x301be0) {
  const _0x235359 = _0x2353();
  return (
    (_0x491a = function (_0x491ae5, _0xb83ba9) {
      _0x491ae5 = _0x491ae5 - 0x198;
      let _0xb34dde = _0x235359[_0x491ae5];
      return _0xb34dde;
    }),
    _0x491a(_0x24a160, _0x301be0)
  );
}
function _0x2353() {
  const _0x3dc7a9 = [
    "exports",
    "21752TMTkGl",
    "14AZlYys",
    "33255MyhJdb",
    "330GSRsrR",
    "6043920KhTdFe",
    "Schema",
    "183CEBzTY",
    "1628ituuRN",
    "User",
    "2881382uJUxTB",
    "414rAfhwr",
    "136170YMmqMl",
    "108876QqtWHt",
    "3417BtPeXl",
  ];
  _0x2353 = function () {
    return _0x3dc7a9;
  };
  return _0x2353();
}
const mongoose = require("mongoose"),
  UserSchema = new mongoose[_0x579158(0x19a)](
    { email: { type: String, unique: !![] }, password: String },
    { versionKey: ![] }
  );
module[_0x579158(0x1a3)] = mongoose["model"](_0x579158(0x19d), UserSchema);
