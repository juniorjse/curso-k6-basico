const _0x7f204 = _0x418f
function _0x39b7() {
  const _0x5c53fc = [
    'express',
    '785414nPallD',
    'celebrate',
    'string',
    '147640FtNkBA',
    'exports',
    '1331336NQUabJ',
    'object',
    '36IDFjMs',
    '1947752LfJtCi',
    'required',
    '3BYprEC',
    'BODY',
    'store',
    'Router',
    'email',
    '1248344iXHnZg',
    '459748ykYGqv',
    '1360355WCniFQ',
    './controllers/UserController',
    '9srgzTp'
  ]
  _0x39b7 = function () {
    return _0x5c53fc
  }
  return _0x39b7()
}
;(function (_0x3b8d0b, _0x5108aa) {
  const _0x4fb7c4 = _0x418f,
    _0x241de1 = _0x3b8d0b()
  while (!![]) {
    try {
      const _0x39c40c =
        parseInt(_0x4fb7c4(0x1d2)) / 0x1 +
        parseInt(_0x4fb7c4(0x1d1)) / 0x2 +
        (-parseInt(_0x4fb7c4(0x1cc)) / 0x3) *
          (parseInt(_0x4fb7c4(0x1ca)) / 0x4) +
        parseInt(_0x4fb7c4(0x1d3)) / 0x5 +
        (-parseInt(_0x4fb7c4(0x1c9)) / 0x6) *
          (parseInt(_0x4fb7c4(0x1c2)) / 0x7) +
        (parseInt(_0x4fb7c4(0x1c7)) / 0x8) *
          (parseInt(_0x4fb7c4(0x1d5)) / 0x9) +
        -parseInt(_0x4fb7c4(0x1c5)) / 0xa
      if (_0x39c40c === _0x5108aa) break
      else _0x241de1['push'](_0x241de1['shift']())
    } catch (_0x2670a6) {
      _0x241de1['push'](_0x241de1['shift']())
    }
  }
})(_0x39b7, 0x54d66)
const express = require(_0x7f204(0x1d6)),
  { celebrate, Segments, Joi } = require(_0x7f204(0x1c3)),
  UserController = require(_0x7f204(0x1d4)),
  routes = express[_0x7f204(0x1cf)]()
function _0x418f(_0x360398, _0x22c4b2) {
  const _0x39b746 = _0x39b7()
  return (
    (_0x418f = function (_0x418fb1, _0x43c66a) {
      _0x418fb1 = _0x418fb1 - 0x1c2
      let _0x39662d = _0x39b746[_0x418fb1]
      return _0x39662d
    }),
    _0x418f(_0x360398, _0x22c4b2)
  )
}
routes['post'](
  '/signup',
  celebrate({
    [Segments[_0x7f204(0x1cd)]]: Joi[_0x7f204(0x1c8)]()['keys']({
      email: Joi[_0x7f204(0x1c4)]()[_0x7f204(0x1d0)]()['required'](),
      password: Joi[_0x7f204(0x1c4)]()[_0x7f204(0x1cb)]()
    })
  }),
  UserController[_0x7f204(0x1ce)]
),
  (module[_0x7f204(0x1c6)] = routes)
