import {
  GET_MILESTONES,
<<<<<<< HEAD
  LOADING_MILESTONES,
} from '../actions/milestonesActions';

function createState(json, incomingState) {
  const state = incomingState;
  json.forEach((milestone) => {
    state.ids = state.ids.concat(milestone.id);
    state.milestonesById[milestone.id] = {};
    state.milestonesById[milestone.id].title = milestone.title;
    state.milestonesById[milestone.id].due = milestone.due_on;
    state.milestonesById[milestone.id].created = milestone.created_at;
    state.milestonesById[milestone.id].percentComplete =

    milestone.closed_issues / (milestone.closed_issues +

    milestone.open_issues);
  });
  return { ...state, loadingMilestones: false };
}

const milestonesReducer = (state = { ids: [], milestonesById: {} }, action) => {
=======
} from '../actions/milestonesActions';

const milestonesReducer = (state = { ids: [], milestonesByID: {} }, action) => {

>>>>>>> Adding PR Table and Milestones Components
  switch (action.type) {
    case GET_MILESTONES:
      return createState(action.responseObj, state);

<<<<<<< HEAD
    case LOADING_MILESTONES:
      return {
        ...state,
        loadingMilestones: true,

      };

    default:
      return state;
  }
};

=======
    default:
      return state
  }
}

function createState(json, state){
  console.log('json', json);
 json.forEach(milestone => {
   state.ids = state.ids.concat(milestone.id);
   state.milestonesByID[milestone.id]={};
   state.milestonesByID[milestone.id]['title'] = milestone.title;
   state.milestonesByID[milestone.id]['due'] = milestone.due_on;
   state.milestonesByID[milestone.id]['created'] = milestone.created_at;
 });
 return state;
}
>>>>>>> Adding PR Table and Milestones Components

export default milestonesReducer;
