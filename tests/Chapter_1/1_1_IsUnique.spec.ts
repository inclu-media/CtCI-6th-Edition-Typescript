import 'mocha'
import { expect } from 'chai'
import { isUniqueArray, isUniqueSort } from '../../src/Chapter_1/1_1_IsUnique'

describe('isUnique', () => {
    it('has no duplicate characters', () => {
        const s = 'aBcDeFgHiJ';
        expect(isUniqueArray(s)).to.be.true;
        expect(isUniqueSort(s)).to.be.true;
    })

    it('has duplicate characters', () => {
        const s = 'erjhfkLLermgh';
        expect(isUniqueArray(s)).to.be.false;
        expect(isUniqueSort(s)).to.be.false;
    })
})



