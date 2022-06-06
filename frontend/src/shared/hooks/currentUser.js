import { get } from 'lodash';

import useApi from 'shared/hooks/api';

const useCurrentUser = ({ cachePolicy = 'cache-only' } = {}) => {
  const [{ data }] = useApi.get('/sessions/users', {}, { cachePolicy });

  return {
    currentUser: get(data, 'user'),
    currentUserId: get(data, 'user.id'),
  };
};

export default useCurrentUser;
