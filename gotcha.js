let newCardet = ['chanhyle',
  'heeskim',
  'hyunjcho',
  'jayu',
  'sangklee',
  'seongjki',
  'shwang',
  'ean',
  'snoh',
  'yejikim'
]
const oldCardet = ['gyeon',
  'kankim',
  'taeskim',
  'Hoylee',
  'sham',
  'dhyeon',
  'naykim',
  'sjin',
  'jim',
  'soekim',
]

const $button = document.querySelector('#shuffle');

function getNCardet(target, source, n) {
  for (let i = 0; i < n; ++i) {
    const random = Math.floor(Math.random() * source.length);
    const spliceArray = source.splice(random, 1);
    const value = spliceArray[0];
    target.push(value);
  }
}

$button.addEventListener('click', () => {
  const shuffleA = [];
  const shuffleB = [];

  const tmpA = oldCardet.slice(0, oldCardet.length);
  const tmpB = newCardet.slice(0, newCardet.length);
  const halfNumberOfOldCardet = Math.floor(tmpA.length / 2);
  const halfNumberOfNewCardet = Math.floor(tmpB.length / 2);
  getNCardet(shuffleA, tmpA, halfNumberOfOldCardet);
  getNCardet(shuffleA, tmpB, halfNumberOfNewCardet);
  getNCardet(shuffleB, tmpA, tmpA.length);
  getNCardet(shuffleB, tmpB, tmpB.length);

  for (let i = 0; i < shuffleA.length; ++i)
    document.querySelector('#a-team-cardet-name' + i).textContent = shuffleA[i];
  for (let i = 0; i < shuffleB.length; ++i)
    document.querySelector('#b-team-cardet-name' + i).textContent = shuffleB[i];
  console.log('a team : ' + shuffleA);
  console.log('b team : ' + shuffleB);
});