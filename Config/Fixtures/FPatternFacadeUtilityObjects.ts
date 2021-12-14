import { test as baseFacade } from './FPatternTest';
import CPredictAuthenticationFacade from '../../FacadeUtility/Predict/Authentication/CPredictAuthenticationFacade';
import CShelfAuthenticationFacade from '../../FacadeUtility/Shelf/Authentication/CShelfAuthenticationFacade';
import CPageFactory from '../../Interfaces/CPageFactory';

type facadeReferences = {
    objPredictAuthenticationFacade: CPredictAuthenticationFacade;
    objShelfAuthenticationFacade: CShelfAuthenticationFacade;
    objPageFactory:CPageFactory;
}

const facadeObjects = baseFacade.extend<facadeReferences>({
    objPredictAuthenticationFacade:async({page},use) => {
        await use(new CPredictAuthenticationFacade(page));
    },
    objShelfAuthenticationFacade:async({page}, use) => {
        await use (new CShelfAuthenticationFacade(page));
    },
    objPageFactory:async ({page}, use) => {
        await use (new CPageFactory(page));
    }
});

export default facadeObjects;