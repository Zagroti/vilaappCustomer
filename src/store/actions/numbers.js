import { SEND_NUMBER} from './actionTypes';

export const sendNumber = (number) => {
    return {
        type: SEND_NUMBER,
        number: number
    };
};

