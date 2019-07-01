import 'mocha'
import { expect } from 'chai'
import { checkPermutation } from '../../src/Chapter_1/1_2_CheckPermutation'

describe('checkPermutation', () => {
    it('is a permutation', () => {
        const s1 = 'aBcDeFgHiJ';
        const s2 = 'JBcHeFgDia'
        expect(checkPermutation(s1, s2)).to.be.true;
    })

    it('is not a permutation', () => {
        const s1 = 'aBcDeFgHiJ';
        const s2 = 'JBcxYFgDia'
        expect(checkPermutation(s1, s2)).to.be.false;
    })
})



