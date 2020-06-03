const dummyData = [
    {
        state: 'processing',
        errorCode: ''
    }, {
        state: 'error',
        errorCode: ''
    }
];


const errorPage = (errorCode) => {
    let errorPageContent;
    switch (errorCode) {
        case 'NO_STOCK':
            errorPageContent = {
                title: 'Error page',
                message: 'No stock has been found'
            };
            break;
        case 'INCORRECT_DETAILS':
            errorPageContent = {
                title: 'Error page',
                message: 'Incorrect details have been entered'
            };
            break;
        default:
            errorPageContent = {
                title: 'Error page',
                message: null
            };
    };
    return errorPageContent;
};

const delay = (ms) => new Promise(res => setTimeout(res, ms));

const getProcessingPage = async (inputData) => {
    let outputData;
    for (const el of inputData) {
        switch (el.state) {
            case 'processing':
                console.log('waiting...');
                await delay(2000);
                break;
            case 'error':
                outputData = errorPage(el.errorCode);
                break;
            case 'success':
                outputData = {
                    title: 'Order complete',
                    message: null
                };
                break;
        };
    };
    return outputData;


};
const result = getProcessingPage(dummyData);
result.then((value) => {
    console.log(value)
})