const convertEtherToGwei = (ether) => {
  return ether * Math.pow(10,9)
}

const convertEtherToWei = (ether) => {
  return ether * Math.pow(10,18)
}

const convertGweiToEther = (gwei) => {
  return gwei * Math.pow(10, -9)
}

const convertGweiToWei = (gwei) => {
  return gwei * Math.pow(10, 9)
}

const convertWeiToEther = (wei) => {
  return wei * Math.pow(10, -18)
}

const convertWeiToGwei = (wei) => {
  return wei * Math.pow(10, -9)
}

export {
  convertEtherToGwei,
  convertEtherToWei,
  convertGweiToEther,
  convertGweiToWei,
  convertWeiToEther,
  convertWeiToGwei
}