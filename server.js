const express = require('express')
const app = express()
const cors = require('cors')
const { response } = require('express')
const PORT = 8000

app.use(cors())

let popups = {
    'tacos para la vida': {
        'name' : 'Tacos Para la Vida',
        'price' : '$',
        'proprietors' : 'Eve',
        'locations' : 'Pal\'s Lounge',
        'special' : 'Birria Quesatacos & Consomme'
    },
    'eki hot sauce': {
        'name' : 'Eki Hot Sauce',
        'price' : '$$',
        'proprietors' : 'Ricky Mungaray',
        'locations' : '1506 Lesseps',
        'special' : 'Small Batch Hot Sauce & Wings'
    },
    'unknown': {
        'price' : 'unknown',
        'proprietors' : 'unknown',
        'locations' : 'unknown',
        'special' : 'unknown'
    }
}



app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/popups/:popupSpecial', (request, response)=>{
    const popupSpecial = request.params.popupSpecial.toLowerCase()
    console.log(popupSpecial)
    if(popups[popupSpecial]){
        response.json(popups[popupSpecial])
    }else{
        response.json(popups['unknown'])
    }
    response.json(popups[popupSpecial])
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`POPUPAPI SAYS HI ${PORT}`)
})