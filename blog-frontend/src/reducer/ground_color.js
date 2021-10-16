const groundColorReducer = (state = {value : 'light'} , action) => {
    switch(action.type){
        case 'backgroundColor':
            state = {value : action.data ? 'dark' : 'light'}
            break;
        default:
            break;
    }
    return state;
}
export default groundColorReducer