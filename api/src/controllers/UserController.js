function _0x24a4(_0x5317f0, _0x28860b) {
  const _0x4ba2e7 = _0x4ba2();
  return (
    (_0x24a4 = function (_0x24a4a4, _0x5ae722) {
      _0x24a4a4 = _0x24a4a4 - 0x10f;
      let _0x5e2d51 = _0x4ba2e7[_0x24a4a4];
      return _0x5e2d51;
    }),
    _0x24a4(_0x5317f0, _0x28860b)
  );
}
const _0x4fb066 = _0x24a4;
(function (_0x230aa9, _0x10e9e9) {
  const _0x5ca04b = _0x24a4,
    _0x3aa2cd = _0x230aa9();
  while (!![]) {
    try {
      const _0xec3a86 =
        (-parseInt(_0x5ca04b(0x10f)) / 0x1) *
          (-parseInt(_0x5ca04b(0x110)) / 0x2) +
        parseInt(_0x5ca04b(0x11f)) / 0x3 +
        parseInt(_0x5ca04b(0x116)) / 0x4 +
        (parseInt(_0x5ca04b(0x111)) / 0x5) *
          (parseInt(_0x5ca04b(0x11c)) / 0x6) +
        parseInt(_0x5ca04b(0x11e)) / 0x7 +
        parseInt(_0x5ca04b(0x119)) / 0x8 +
        -parseInt(_0x5ca04b(0x117)) / 0x9;
      if (_0xec3a86 === _0x10e9e9) break;
      else _0x3aa2cd["push"](_0x3aa2cd["shift"]());
    } catch (_0x592a85) {
      _0x3aa2cd["push"](_0x3aa2cd["shift"]());
    }
  }
})(_0x4ba2, 0x238a1);
const User = require("../models/User"),
  md5 = require(_0x4fb066(0x114));
function _0x4ba2() {
  const _0x42f98d = [
    "json",
    "create",
    "16818ZQbDNR",
    "exports",
    "834652CqnQTR",
    "346146mcIkyx",
    "env",
    "120355rvVafK",
    "2CtJynX",
    "290dVEYEK",
    "body",
    "code",
    "md5",
    "_id",
    "911560sdVZVy",
    "6960537SEoUsw",
    "status",
    "1388200xegCbd",
  ];
  _0x4ba2 = function () {
    return _0x42f98d;
  };
  return _0x4ba2();
}
module[_0x4fb066(0x11d)] = {
  async store(_0x8adc0f, _0x83559d) {
    const _0x1e52d4 = _0x4fb066;
    try {
      const { email: _0x493205, password: _0x36c976 } =
          _0x8adc0f[_0x1e52d4(0x112)],
        _0x5c4341 = await User[_0x1e52d4(0x11b)]({
          email: _0x493205,
          password: md5(_0x36c976),
        });
      setTimeout(function () {
        const _0x4999fd = _0x1e52d4;
        return _0x83559d[_0x4999fd(0x118)](0xc9)[_0x4999fd(0x11a)]({
          _id: _0x5c4341[_0x4999fd(0x115)],
          email: _0x5c4341["email"],
        });
      }, process[_0x1e52d4(0x120)]["TIMEOUT"] || 0x0);
    } catch (_0x204a4b) {
      if (_0x204a4b && _0x204a4b[_0x1e52d4(0x113)] === 0x2af8)
        return _0x83559d[_0x1e52d4(0x118)](0x190)[_0x1e52d4(0x11a)]({
          error: "Duplicate\x20email",
        });
      return _0x83559d["status"](0x190)[_0x1e52d4(0x11a)](_0x204a4b);
    }
  },
};
