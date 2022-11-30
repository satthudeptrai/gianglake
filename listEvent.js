const give = [
  {
    rate: 70,
    action: [
      {
        id: 1,
        name: 'test 1',
        effect: [
          {
            hpMax: -10
          },
          {
            hpMax: 10
          }
        ]
      },
      {
        id: 2,
        name: 'test 2',
        effect: [
          {
            mpMax: 10
          },
          {
            mpMax: 10
          }
        ]
      },
      {
        id: 3,
        name: 'test 3',
        effect: [
          {
            str: -1
          },
          {
            str: 1
          }
        ]
      },
      {
        id: 4,
        name: 'test 4',
        effect: [
          {
            agi: -1
          },
          {
            agi: 1
          }
        ]
      },
      {
        id: 5,
        name: 'test 5',
        effect: [
          {
            int: -1
          },
          {
            int: 1
          }
        ]
      }
    ]
  },
  {
    rate: 99,
    action: [
      {
        id: 1,
        name: 'test 6',
        effect: [
          {
            hpMax: -10,
            mpMax: -10,
            str: -1,
            agi: -1,
            int: -1
          },
          {
            hpMax: 10,
            mpMax: 10,
            str: 1,
            agi: 1,
            int: 1
          }
        ]
      }
    ]
  },
  {
    rate: 100,
    action: [
      {
        id: 1,
        name: 'test 7',
        effect: [
          {
            str: -5,
            agi: -5,
            int: -5
          },
          {
            str: 5,
            agi: 5,
            int: 5
          }
        ]
      }
    ]
  }
]

const meet = [
  {
    rate: 70,
    action: [
      {
        id: 1,
        name: 'test 1',
        effect: [
          {
            hpMax: -10
          },
          {
            hpMax: 10
          }
        ]
      },
      {
        id: 2,
        name: 'test 2',
        effect: [
          {
            mpMax: 10
          },
          {
            mpMax: 10
          }
        ]
      },
      {
        id: 3,
        name: 'test 3',
        effect: [
          {
            str: -1
          },
          {
            str: 1
          }
        ]
      },
      {
        id: 4,
        name: 'test 4',
        effect: [
          {
            agi: -1
          },
          {
            agi: 1
          }
        ]
      },
      {
        id: 5,
        name: 'test 5',
        effect: [
          {
            int: -1
          },
          {
            int: 1
          }
        ]
      }
    ]
  },
  {
    rate: 99,
    action: [
      {
        id: 1,
        name: 'test 6',
        effect: [
          {
            hpMax: -10,
            mpMax: -10,
            str: -1,
            agi: -1,
            int: -1
          },
          {
            hpMax: 10,
            mpMax: 10,
            str: 1,
            agi: 1,
            int: 1
          }
        ]
      }
    ]
  },
  {
    rate: 100,
    action: [
      {
        id: 1,
        name: 'test 7',
        effect: [
          {
            str: -5,
            agi: -5,
            int: -5
          },
          {
            str: 5,
            agi: 5,
            int: 5
          }
        ]
      }
    ]
  }
]

module.exports = { give, meet };