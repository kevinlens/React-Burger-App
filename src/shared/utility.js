

export const updateObject = (oldObject, updatedProperties) => {
    return {
        //basically in redux there is no setState, but here it is doing that
        //{salad: 3, meat:1, cheese: 3}
        ...oldObject,
        //salad: 3+1
        ...updatedProperties
    }
}