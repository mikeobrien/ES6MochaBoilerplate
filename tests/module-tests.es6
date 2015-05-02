import { expect } from 'chai';
import * as module from '../module';
 
describe('Module', () =>
    it('Should return content.', () => 
        expect(module.getContent())
            .to.equal('Oh hai' + '!'.repeat(10))
    )
);