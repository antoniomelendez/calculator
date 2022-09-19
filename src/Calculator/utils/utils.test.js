import {
  convertEtherToGwei,
  convertEtherToWei,
  convertGweiToEther,
  convertGweiToWei,
  convertWeiToEther,
  convertWeiToGwei
} from './utils'

describe('conversion functions tests', () => {
  test('convertEtherToGwei', () => {
    expect(convertEtherToGwei(1)).toBe(1_000_000_000)
  })
  test('convertEtherToWei', () => {
    expect(convertEtherToWei(1)).toBe(1_000_000_000_000_000_000)
  })
  test('convertGweiToEther', () => {
    expect(convertGweiToEther(1)).toBe(.000_000_001)
  })
  test('convertGweiToWei', () => {
    expect(convertGweiToWei(1)).toBe(1_000_000_000)
  })
  test('convertWeiToEther', () => {
    expect(convertWeiToEther(1)).toBe(.000_000_000_000_000_001)
  })
  test('convertWeiToGwei', () => {
    expect(convertWeiToGwei(1)).toBe(.000_000_001)
  })
})