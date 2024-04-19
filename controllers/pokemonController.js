const {PokeCards} = require('../models');

const types = ['fire', 'water', 'grass', 'lightning', 'normal', 'fighting', 'dragon', 'psychic', 'dark', 'metal', 'fairy'];
const energy_pics = ['', 'https://i.ibb.co/nnB2xXB/Fire.png', 'https://i.ibb.co/3fCnsMP/Water.png', 'https://i.ibb.co/N7Z7xDL/Grass.png', 'https://i.ibb.co/3fq9yfM/Lightning.png', 'https://i.ibb.co/sFzJ0kS/Normal.png', 'https://i.ibb.co/XpyPYXT/Fighting.png', 'https://i.ibb.co/wwWt8cN/Psychic.png', 'https://i.ibb.co/B2db9QT/Dark.png', 'https://i.ibb.co/vYF2tK4/Metal.png', 'https://i.ibb.co/tZhrv11/Fairy.png'];


module.exports.viewAll = async function(req, res){
        let searchTypes = ['All'];
        for(let i=0; i<types.length; i++){
            searchTypes.push(types[i]);
        }
        let pokemonCards;
        let searchType = req.query.type || 'All';
        let searchRandom = req.query.random || false;
        if (searchType === 'All'){
            pokemonCards = await PokeCards.findAll();
        } else {
            pokemonCards = await PokeCards.findAll({
                where: {
                    type: searchType
                }
            });
        }
        if (pokemonCards.length > 0 && searchRandom) {
            let randomIndex = getRandomInt(pokemonCards.length);
            pokemonCards = [pokemonCards[randomIndex]];
        }
    res.render('index', {pokemonCards, types:searchTypes, searchType, searchRandom});
}

module.exports.renderEditForm = async function(req, res){
    const pokemonCard = await PokeCards.findByPk(
        req.params.id
    );
    res.render('edit', {pokemonCard, types, energy_pics})
}

module.exports.updatePokemonCard = async function(req, res){
    await PokeCards.update(
        {
            name: req.body.name,
            type: req.body.type,
            type_energy: req.body.type_energy,
            hitpoints: req.body.hitpoints,
            image: req.body.image,
            attackname1: req.body.attackname1,
            attackdam: req.body.attackdam,
            attack1_energy1: req.body.attack1_energy1,
            attack1_energy2: req.body.attack1_energy2,
            attack1_energy3: req.body.attack1_energy3,
            attackname2: req.body.attackname2,
            attackdam2: req.body.attackdam2,
            attack2_energy1: req.body.attack2_energy1,
            attack2_energy2: req.body.attack2_energy2,
            attack2_energy3: req.body.attack2_energy3,
            weakness_energy: req.body.weakness_energy,
            resistance_energy: req.body.resistance_energy,
            retreat_cost1: req.body.retreat_cost1,
            retreat_cost2: req.body.retreat_cost2
        },
        {
            where: {
                id: req.params.id
            }
        });
    res.redirect('/');
}

module.exports.deletePokemonCard = async function(req, res){
    await PokeCards.destroy(
        {
            where: {
                id: req.params.id
            }
        });
    res.redirect('/');
}

module.exports.renderAddForm = async function(req, res){
    const pokemonCard = {
        name: '',
        type: types[0],
        type_energy: energy_pics[0],
        hitpoints: '',
        image: '',
        attackname1: '',
        attackdam: '',
        attack1_energy1: energy_pics[0],
        attack1_energy2: energy_pics[0],
        attack1_energy3: energy_pics[0],
        attackname2: '',
        attackdam2: '',
        attack2_energy1: energy_pics[0],
        attack2_energy2: energy_pics[0],
        attack2_energy3: energy_pics[0],
        weakness_energy: energy_pics[0],
        resistance_energy: energy_pics[0],
        retreat_cost1: energy_pics[0],
        retreat_cost2: energy_pics[0]
    };
    res.render('add', {pokemonCard, types, energy_pics});
}

module.exports.addPokemonCard = async function(req, res){
    await PokeCards.create(
        {
            name: req.body.name,
            type: req.body.type,
            type_energy: req.body.type_energy,
            hitpoints: req.body.hitpoints,
            image: req.body.image,
            attackname1: req.body.attackname1,
            attackdam: req.body.attackdam,
            attack1_energy1: req.body.attack1_energy1,
            attack1_energy2: req.body.attack1_energy2,
            attack1_energy3: req.body.attack1_energy3,
            attackname2: req.body.attackname2,
            attackdam2: req.body.attackdam2,
            attack2_energy1: req.body.attack2_energy1,
            attack2_energy2: req.body.attack2_energy2,
            attack2_energy3: req.body.attack2_energy3,
            weakness_energy: req.body.weakness_energy,
            resistance_energy: req.body.resistance_energy,
            retreat_cost1: req.body.retreat_cost1,
            retreat_cost2: req.body.retreat_cost2
        });
    res.redirect('/');
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

