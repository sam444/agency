import {PolicyStore} from 'rainbow-foundation-sdk';
module.exports = (nextState, replace) => {
    const SESSION_POLICY_KEY = sessionStorage.getItem("SESSION_POLICY_KEY");
    if(SESSION_POLICY_KEY){
        const policy = PolicyStore.getPolicy();
        //issue Policy or reject Policy
        if(policy&&(policy["NewbizStatus"]=="120"||policy["NewbizStatus"]=="110")){
            window.location.href="/";
        }
    }
};

