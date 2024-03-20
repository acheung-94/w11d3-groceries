import produceData from "../mockData/produce.json"

export default function produceReducer(state = {}, action) {
    switch (action.type) {
      case POPULATE: {
        console.log(action.produce, "action.produce");
        const newState = {};
        action.produce.forEach(item => {
          newState[item.id] = item;
        });
        return newState;
      }
      default:
        return state;
    }
  }

const POPULATE = 'produce/POPULATE';

export const populateProduce = () => {
    return {
        type: POPULATE,
        produce: produceData
    }
}