const { checkAuth } = require('../middleware/auth')

module.exports = (app) => {
    app.get('/games', checkAuth, (req, res) => {
        const games = [
            { title: 'Jak: The Precursor Legacy', system: 'Playstation 1' },
            { title: 'Stray', system: 'Playstation 5' },
            { title: 'Halo 3', system: 'Xbox 360' }
        ]

        res.status(200).send(games)
    })

    app.get('/games/{id}', checkAuth, (req, res) => {
        const id = req.params.id

        const games = [
            { id: 1, title: 'Pokemon Arceus', system: 'Nintendo Switch' },
            { id: 2, title: 'Donkey Kong 64', system: 'Nintendo 64' },
            { id: 3, title: 'Dinkey Kong Country', system: 'Nintendo Gameboy' }
        ]

        const result = games.find(game => game.id === id)

        if (!result) {
            return res.status(404).send(`Could not find game with id ${id}`)
        }

        res.status(200).send(result)
    })
}