import {format} from '../src/common/arithmetic/455';

test('455 test', () => {
    expect(format([1,2], [1,2,3])).toStrictEqual({ "num": 2, "result": [ [ 1, 1 ], [ 2, 2 ] ] });
});