import config from "../lib/config";
import axios from "axios";

const REQUEST_HEROES = "REQUEST_HEROES";
const ADD_HERO = "ADD_HERO";
const STATUS_REQUESTING = "requesting";
const STATUS_SUCCESS = "success";
const STATUS_FAILURE = "failure";
const STATUS_ADD = "adding";

const requestHeroes = () => ({
    type: REQUEST_HEROES,
    status: STATUS_REQUESTING
});

const addHero = () => ({
    type: ADD_HERO,
    status: STATUS_ADD
});

const receiveHeroes = (response) => ({
    type: REQUEST_HEROES,
    status: STATUS_SUCCESS,
    response
});

const requestHeroesFailure = (error) => ({
    type: REQUEST_HEROES,
    status: STATUS_FAILURE,
    error
});

const fetchHeroes = () => {
    return (dispatch) => {
        dispatch(requestHeroes());
        const endpoint = config.apiUrl + "/heroes";
        axios.get(endpoint)
        .then(
            res => {
                dispatch(receiveHeroes(res.data));
            }),
            error => dispatch(requestHeroesFailure(error))
    }
}

const postHero = (hero) => {
    console.log(hero);
    return (dispatch) => {
        dispatch(addHero());
        const endpoint = config.apiUrl + "/heroes";
        axios.post(endpoint, hero)
        .then(res => {
            console.log(res);
            dispatch(fetchHeroes());
        });
    }
}

export default {
    REQUEST_HEROES,
    ADD_HERO,
    STATUS_REQUESTING,
    STATUS_FAILURE,
    STATUS_SUCCESS,
    STATUS_ADD,
    addHero,
    postHero,
    requestHeroes,
    receiveHeroes,
    requestHeroesFailure,
    fetchHeroes
}