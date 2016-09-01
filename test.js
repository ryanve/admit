!function(api) {
  function expect(actual, correct) {
    if (actual !== correct) throw new Error(actual + ' should be ' + correct)
  }

  function isnt(a, b) {
    return a !== b
  }

  [api, api.use(api.is)].forEach(function(api, i) {
    var f = i ? 'api.use(api.is)' : 'api'

    expect(api.is(1, 1), true)
    expect(api.is(1, 2), false)
    expect(api.is(1, true), false)
    console.log(f + '.is tests passed')

    expect(api.has([]), false)
    expect(api.has([0, 1, 1, 2]), false)
    expect(api.has([0, 1, 1, 2], 0), true)
    expect(api.has([0, 1, 1, 2], 1), true)
    expect(api.has([0, 1, 1, 2], 2), true)
    expect(api.has([0, 1, 1, 2], 3), false)
    console.log(f + '.has tests passed')

    expect(api.admit([], 1).join(''), '1')
    expect(api.admit([0], 0).join(''), '0')
    expect(api.admit([0], 1).join(''), '01')
    expect(api.admit([0, 2], 0).join(''), '02')
    expect(api.admit([0, 2], 1).join(''), '021')
    expect(api.admit([0, 0, 2], 2).join(''), '002')
    console.log(f + '.admit tests passed')

    expect(api.ban([]).join(''), '')
    expect(api.ban([0]).join(''), '0')
    expect(api.ban([], 1).join(''), '')
    expect(api.ban([0, 1, 1, 2], 1).join(''), '02')
    expect(api.ban([0, 1, 1, 2], 0).join(''), '112')
    expect(api.ban([0, 1, 1, 2], 2).join(''), '011')
    console.log(f + '.ban tests passed')
  })

  api = api.use(isnt)

  expect(api.is(1, 1), false)
  expect(api.is(1, 2), true)
  console.log('inversed .is tests passed')

  expect(api.ban([0, 1, 1, 2], 1).join(''), '11')
  expect(api.ban([0, 1, 1, 2], 0).join(''), '0')
  console.log('inversed .ban tests passed')

  console.log('All tests passed =)')
}(require('./'));
