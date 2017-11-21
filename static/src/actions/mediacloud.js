import { parseJSON } from '../utils/misc';
import { mediacloud_stats } from '../utils/http_functions';
import { logoutAndRedirect } from './auth';
import { fetchProtectedDataRequest, receiveProtectedData } from './data';

export function fetchMediaCloudStats() {
    return (dispatch) => {
        dispatch(fetchProtectedDataRequest());
        mediacloud_stats()
            .then(parseJSON)
            .then((response) => {
                dispatch(receiveProtectedData(response.stats));
            })
            .catch((error) => {
                if (error.status === 401) {
                    dispatch(logoutAndRedirect(error));
                }
            });
    };
}
