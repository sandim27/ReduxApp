import reducer from '../../app/reducers/uploadedImage.js';
import * as types from '../../app/constants/ActionTypes';

describe('uploadedImage reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual([])
    });

    it('should handle GET_PHOTO_URL', () => {
        expect(
            reducer([], {
                type: types.GET_PHOTO_URL,
                payload: {
                    url: 'test url'
                }
            })
        ).toEqual(
          {"url":"test url"}
        )

        expect(
            reducer(
                {"url":"test url"},
                {
                    type: types.GET_PHOTO_URL,
                    payload: {
                        url: 'run test'
                    }
                }
            )
        ).toEqual(
          {"url":"run test"}
        )
    });
});