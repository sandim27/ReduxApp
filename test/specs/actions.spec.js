import uploadPhoto from '../../app/actions/uploadPhoto';
import * as types from '../../app/constants/ActionTypes';

describe('Actions',  function () {
    it('should create an action to get details',  function () {
        const details = 'action'
        const expectedAction = {
            type: types.UPLOAD_PHOTO,
            payload: {
                photo:details
            },
        }
        expect(uploadPhoto(details)).toEqual(expectedAction)
    })
})

