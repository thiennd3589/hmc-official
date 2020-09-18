import { createSelector } from 'reselect';

export const database = state => state.database.data;


export const technicalGroup = createSelector(
    [database],
    database => {
        let technicalData = database.filter(person => person.position.includes('KT') === true)
        return technicalData;
    }
)

export const mediaGroup = createSelector(
    [database],
    database => {
        let mediaData = database.filter(person => person.position.includes('TT') === true)
        return mediaData;
    }
)

export const foreignAffairGroup = createSelector(
    [database],
    database => {
        let foreignAffair = database.filter(person => person.position.includes('DN') === true)
        return foreignAffair;
    }
)
