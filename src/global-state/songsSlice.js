import { createSlice } from '@reduxjs/toolkit'

export const artistsSlice = createSlice({
    name: 'artists',
    initialState: [{
      name: "Maroon5",
      albums : [{
          name : "album1",
          songs : [{
              name : "Maps",
              price : 10
          },
          {
            name : "One More Night",
            price : 15
        },
    ]
      }
    ,{
        name : "album2",
        songs : [{
            name : "Cold",
            price : 20
        },
        {
          name : "Payphone",
          price : 15
      },
  ]
    }]
    }],
    reducers: {
      increment: (state) => {
        state.value += 1
      },
      decrement: (state) => {
        state.value -= 1
      },
      incrementByAmount: (state, action) => {
        state.value += action.payload
      },
    },
  })


  export default artistsSlice.reducer
