export function addFeature(feature) {
    return {
        type: "ADD_FEAT",
        payload: feature
    }
}

export function removeFeature(feature) {
    return {
        type: "REMOVE_FEAT",
        payload: feature
    }
}