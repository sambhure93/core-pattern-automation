import { test as basePage } from './FPatternTest';
import CPredictAuthenticationFunctions  from '../../Interfaces/PageFunctions/Predict/Authentication/CPredictAuthenticationFunctions';
import CPredictNavigationFunctions from '../../Interfaces/PageFunctions/Predict/Navigation/CPredictNavigationFunctions';

type pageReferences = {
    objPredictAuthentication:CPredictAuthenticationFunctions;
    predictNavigation:CPredictNavigationFunctions;
}

const pageObjects = basePage.extend<pageReferences> ({
    objPredictAuthentication:async({page},use) => {
        await use(new CPredictAuthenticationFunctions(page));
    },

    predictNavigation:async({page},use) =>{
        await use(new CPredictNavigationFunctions(page));
    }
});

export default pageObjects;
