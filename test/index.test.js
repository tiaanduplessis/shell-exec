const shellExec = require('../')

test('should export function', () => {
  expect(shellExec).toBeDefined()
  expect(typeof shellExec).toBe('function')
})

test('should return promise', () => {
  expect(shellExec()).resolves.toMatchObject({ stdout: '', stderr: '' })
})
