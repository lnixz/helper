// Import the function to be tested
import getSearchPathOfTargetObject from './index';

describe('getSearchPathOfTargetObject', () => {
    // Test case for when the target value is found in the root node
    test('returns an array with the root node when the target value is found in the root node', () => {
        const tree = [{ id: 1, children: [] }, { id: 2, children: [] }];
        const targetValue = 1;
        const targetKey = 'id';
        const result = getSearchPathOfTargetObject(tree, targetValue, targetKey);
        expect(result).toEqual([{ id: 1, children: [] }]);
    });

    // Test case for when the target value is found in a child node
    test('returns an array with the root node and the child node when the target value is found in a child node', () => {
        const tree = [{ id: 1, children: [{ id: 2, children: [] }] }];
        const targetValue = 2;
        const targetKey = 'id';
        const result = getSearchPathOfTargetObject(tree, targetValue, targetKey);
        expect(result).toEqual([{ id: 1, children: [{ id: 2, children: [] }] }, { id: 2, children: [] }]);
    });

    // Test case for when the target value is not found in the tree
    test('returns an empty array when the target value is not found in the tree', () => {
        const tree = [{ id: 1, children: [] }, { id: 2, children: [] }];
        const targetValue = 3;
        const targetKey = 'id';
        const result = getSearchPathOfTargetObject(tree, targetValue, targetKey);
        expect(result).toEqual([]);
    });
});
